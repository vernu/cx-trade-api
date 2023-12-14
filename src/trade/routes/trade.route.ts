import express from 'express'
import { TradeController } from '../controllers/trade.controller'
import { validateTradeInput } from '../middlewares/validateTradeInput.middleware'
const router = express.Router()

const tradeController = new TradeController()

router.route('/').get(tradeController.getTransactions)
router.route('/').post(validateTradeInput, tradeController.createTransaction)
router.route('/symbol-statistics/:symbol').get(tradeController.getSymbolStatistics)

export { router as tradeRouter }
