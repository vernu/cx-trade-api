import { Request, Response, NextFunction } from 'express'
export const validateTradeInput = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { symbol, price, quantity } = req.body

  const errors = []
  if (!symbol || !price || !quantity) {
    errors.push('symbol, price and quantity are required fields')
  }

  if (symbol && typeof symbol !== 'string') {
    errors.push('symbol must be a string')
  }

  if (price && typeof price !== 'number') {
    errors.push('price must be a number')
  }

  if (price === 0) {
    errors.push('price cannot be 0')
  }

  if (quantity && typeof quantity !== 'number') {
    errors.push('quantity must be a number')
  }

  if (quantity === 0) {
    errors.push('quantity cannot be 0')
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors })
  }

  next()
}
