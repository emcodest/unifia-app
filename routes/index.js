var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Unifia ThirdParty App' });
});

/**
 *  INPUT ENDPOINTS
 */

//: Example:Collect user phone number and email address to send airtime to phone
//: step one
router.post('/remote-input-1', function (req, res, next) {
  const model = [
    {
     "phone": ""
    },
    {
     "email": ""
    }

]
  res.json(model)
});
//: step two
//: confirm the phone number and email the user selected
router.post('/remote-input-2', function (req, res, next) {
  const model = [
    {
     "phone": "xxx"
    },
    {
     "email": "xxx"
    }

]
  res.json(model)
});
/**
 *  INVOICE ENDPOINT
 */

router.post('/invoice', function (req, res, next) {
  const {} = req.body
  const model = {
    "amount": "100",
    "message": "Please pay"
  }
  res.json(model)
});
/**
 *  DELIVERY ENDPOINT
 */

router.post('/delivery', function (req, res, next) {
  const model = {
    message: "Thanks for your payment"
  }
  res.json(model)
});

module.exports = router;
