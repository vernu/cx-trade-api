import TransactionEntity, { Transaction } from '../entities/transaction.entity'

export class TradeService {
  async createTransaction(transactionInput: Transaction) {
    const transaction = new TransactionEntity(transactionInput)
    transaction.save()
    return transaction
  }

  async getTransactions() {
    const transactions = await TransactionEntity.find({})
      .sort({ createdAt: -1 })
      .limit(100)
    return transactions
  }

  async getSymbolStatistics(symbol: string) {
    const stats = await TransactionEntity.aggregate([
      {
        $match: {
          symbol,
        },
      },
      {
        $group: {
          _id: '$symbol',
          transactions: {
            $sum: 1,
          },
          volume: {
            $sum: {
              $multiply: ['$price', '$quantity'],
            },
          },
          averagePrice: {
            $avg: '$price',
          },
        },
      },
      {
        $project: {
          _id: 0,
          symbol: '$_id',
          transactions: 1,
          volume: 1,
          averagePrice: 1,
        },
      },
    ])

    if (stats.length === 0) {
      return {
        symbol,
        transactions: 0,
        volume: 0,
        averagePrice: 0,
      }
    }
    return stats[0]
  }
}
