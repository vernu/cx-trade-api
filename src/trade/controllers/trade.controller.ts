import { Request, Response } from 'express'
import { TradeService } from '../services/trade.service'

const tradeService = new TradeService()

export class TradeController {
  async createTransaction(req: Request, res: Response) {
    const transaction = await tradeService.createTransaction(req.body)
    return res.json(transaction)
  }

  async getTransactions(req: Request, res: Response) {
    const transactions = await tradeService.getTransactions()
    return res.json(transactions)
  }

  async getSymbolStatistics(req: Request, res: Response) {
    const { symbol } = req.params
    const stats = await tradeService.getSymbolStatistics(symbol)
    return res.json(stats)
  }
}
