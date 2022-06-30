import express from 'express';
import { getLogger } from '@/utils/loggers';
const router = express.Router();
const logger = getLogger('INDEX_ROUTE');


router.get('/', function (_req, res, _next) {
  logger.info('hello unifia');
  res.render('index', { title: 'Unifia ThirdParty App' });
});
/* INPUT ENDPOINTS */
router.post('/remote-endpoint-1', function (_req, res, _next) {

    const model = {

    }

    res.json(model)

});
router.post('/remote-endpoint-2', function (_req, res, _next) {

    const model = {

    }

    res.json(model)

});
/* INVOICE ENDPOINTS */
router.post('/invoice-endpoint', function (_req, res, _next) {

  const model = {
    amount: 1000
  }

  res.json(model)

});
/* DELIVERY ENDPOINTS */
router.post('/delivery-endpoint', function (_req, res, _next) {

  const model = {
    message: "Thanks for your purchase"
  }

  res.json(model)

});

export default router;
