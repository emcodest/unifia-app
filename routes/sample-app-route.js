// SAMPLE TEST APP (AIRTIME) FOR UNIFIA
router.post('/test-app/remote-input-1', async function (req, res) {


  await hl.genInsert({step: "One", log: JSON.stringify(req.body)}, 'sample_app_log')
  

  const response = {
    step: 1,
    type: 'input',
    status: 'success',
    message: 'Completed. Please confirm',
    response_body: [
      {

        "data_key": "phone", "data_name": "phone", "data_type": "TEXT_INPUT", "data_value": ""

      },
      {

        "data_key": "amount_to_buy", "data_name": "Enter amount of airtime to buy", "data_type": "TEXT_INPUT"


      },

    ]
  }
  res.json(response)


})
router.post('/test-app/remote-input-2', async function (req, res) {
  

  await hl.genInsert({step: "Two", log: JSON.stringify(req.body)}, 'sample_app_log')
  const response = {
    step: 2,
    type: 'input',
    status: 'success',
    message: 'Completed',
    response_body: [
      {

        "data_key": "amount_to_buy", "data_name": "Amount to pay", "data_type": "TEXT_BOX", "data_value": "100"

      },
      {

        "data_key": "phone", "data_name": "phone", "data_type": "TEXT_BOX", "data_value": "080-----2222"

      }

    ]
  }

  res.json(response)

})
router.post('/test-app/remote-invoice', async function (req, res) {

  //Sample req.body Unifia will post when invoice is generated
  //{"phone":"xxxxxx","amount_to_buy":"xxxxx"}   this is what you set earlier in Unifia as invoice_pricing_input. phone and amount_to_buy are dynamic variables. It can be anything you set

  await hl.genInsert({step: "Three (Invoice)", log: JSON.stringify(req.body)}, 'sample_app_log')
 
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


})
router.post('/test-app/deliver-service', async function (req, res) {

  //: sample reuest from Unifia
  // {"delivery":"true","UNIFIA_INVOICE_CONFIRM_GET_URL":"https://unifia.herokuapp.com/invoice-confirm?no=99","invoice_no":"99","invoice_data":"{\"request_body\":{\"keys\":[\"phone\",\"amount_to_buy\"],\"test_values\":[\"080747474\",\"100\"]},\"invoice_response_body\":{\"amount\":\"\",\"message\":\"\",\"meta_data\":{}},\"app_conf_step_to_invoice\":2,\"remote_invoice_endpoint\":\"https://unifia.herokuapp.com/test-app/remote-invoice\",\"app_deploy_id\":\"116\"}","payment_reference":"P9494180","amount":"150","buyer_balance":"4100"}

  //: use this Unifia API endpoint to get more details about the transaction
  //Endpoint   --->  POST {invoice_no: 97} to   https://unifia.herokuapp.com/api/v1/no-auth/Delivery/InvoiceDetails to get more details

  await hl.genInsert({step: "Four (Delivery)", log: JSON.stringify(req.body)}, 'sample_app_log')

  //: TODO:
  //: BUSINESS LOGIC
  //: TODO: CONFIRM PURCHASE BEFORE GIVING VALUE
  // Service Purchase Confirmation GET request
  //https://unifia.herokuapp.com/confirm-purchase?invoice_no=1234
  const response = {
    step: 4,
    type: 'delivery',
    status: 'success', // success or error
    message: 'Delivered successfully'
  }
  res.json(response)

})
