import { Schema, model, Document } from 'mongoose'

export interface Transaction extends Document {
  symbol: string
  price: number
  quantity: number
  createdAt?: Date
  updatedAt?: Date
}

const transactionSchema: Schema<Transaction> = new Schema(
  {
    symbol: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

transactionSchema.index({ symbol: 1 });
transactionSchema.index({ symbol: 1, price: 1, quantity: 1 });

export default model<Transaction>('Transaction', transactionSchema)
