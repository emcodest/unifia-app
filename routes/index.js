var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Unifia Sample Template ThirdParty App' });
});

/**
 *  INPUT ENDPOINTS
 */

//: Example:Collect user phone number and email address to send airtime to phone
//: step one
router.post('/remote-input-1', function (req, res, next) {
  const model = {
    step: 1,
    type: 'input',
    status: 'success or error',
    message: 'Completed',
    response_body: [
      {

        "data_key": "phone", "data_name": "phone", "data_type": "TEXT_INPUT", "data_value": ""

      },
      {

        "data_key": "email_address", "data_name": "Enter your email address", "data_type": "TEXT_INPUT"


      },

    ]
  }
  res.json(model)
});
//: step two
//: confirm the phone number and email the user selected
router.post('/remote-input-2', function (req, res, next) {
  const model = {
    step: 2,
    type: 'input',
    status: 'success or error',
    message: 'Completed',
    response_body: [
      {

        "data_key": "amount", "data_name": "Amount to pay", "data_type": "TEXT_BOX", "data_value": "0.00"

      },
      {

        "data_key": "phone", "data_name": "phone", "data_type": "TEXT_BOX", "data_value": "080-----2222"

      },
      {

        "data_key": "email_address", "data_name": "Enter your email address", "data_type": "TEXT_BOX", "data_value": "xxxx@gmail.com"


      },

    ]
  }

  res.json(model)
});

/**
 *  INVOICE ENDPOINT
 */

router.post('/remote-invoice', function (req, res, next) {

  //: YOUR BUSINESS LOGIC  
  let amount_to_charge = 100

  //: END YOUR BUSINESS LOGIC

  let app_status = "success" // success or error

  //: CONFIRM invoice to make sure its from Unifia and its not manipulated

  // Verify Invoice Endpoint - Invoice Confirmation GET request
  //https://unifia.herokuapp.com/invoice-confirm?no=1234
  //Note: the invoice is valid at only one call

  //: END CONFIRM INVOICE


  //: RESPONSE TO UNIFIA


  //: END RESPONSE TO UNIFIA


  //: amount to charge customers
  const response = {

    status: app_status,

    message: 'Any message you wish to be display to users',

    amount: amount_to_charge
  }

  res.json(response)

});

/**
 *  DELIVERY ENDPOINT
 */

router.post('/remote-delivery', function (req, res, next) {

  //: TODO:
  //: BUSINESS LOGIC
  //: TODO: CONFIRM PURCHASE BEFORE GIVING VALUE
  // Service Purchase Confirmation GET request
//https://unifia.herokuapp.com/confirm-purchase?invoice_no=1234

  const model = {
    step: 4,
    type: 'delivery',
    status: 'success or error',
    message: 'Delivered successfully'
  }
  res.json(model)
});

module.exports = router;
