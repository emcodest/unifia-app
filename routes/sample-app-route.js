
// SAMPLE TEST APP (AIRTIME) FOR UNIFIA
router.post('/test-app/remote-input-1', async function (req, res) {

  //: SAMPLE REQUEST Payload FROM UNIFIA  (req.body)
  //{"app_config_step":"eyJzdGVwIjoiMSIsImRlbGl2ZXJ5IjpmYWxzZSwiaW52b2ljZSI6ZmFsc2UsIm5hbWUiOiJHZXQgUGhvbmUgYW5kIEVtYWlsIiwiYWN0aW9uX2J1dHRvbiI6IkJ1eSBBaXJ0aW1lIiwicmVtb3RlX2VuZHBvaW50IjoiaHR0cHM6Ly91bmlmaWEuaGVyb2t1YXBwLmNvbS90ZXN0LWFwcC9yZW1vdGUtaW5wdXQtMSIsInJlc3BvbnNlX2JvZHkiOlt7ImRhdGFfa2V5IjoicGhvbmUiLCJkYXRhX25hbWUiOiJwaG9uZSIsImRhdGFfdHlwZSI6IlRFWFRfSU5QVVQiLCJkYXRhX3ZhbHVlIjoiIn0seyJkYXRhX2tleSI6ImFtb3VudF90b19idXkiLCJkYXRhX25hbWUiOiJFbnRlciBBaXJ0aW1lIGFtb3VudCB5b3Ugd2FudCB0byBidXkiLCJkYXRhX3R5cGUiOiJURVhUX0lOUFVUIn1dfQ==","invoice_no":"88"}

  //: use this Unifia API endpoint to get more details about the transaction
  //Endpoint   --->  POST {invoice_no: 88} to   https://unifia.herokuapp.com/api/v1/no-auth/Delivery/InvoiceDetails to get more details

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
  // {"app_config_step":"eyJzdGVwIjoiMiIsImRlbGl2ZXJ5IjpmYWxzZSwiaW52b2ljZSI6ZmFsc2UsIm5hbWUiOiJDb25maXJtIHZhbGlkIFBob25lIiwiYWN0aW9uX2J1dHRvbiI6IkNvbmZpcm0iLCJyZW1vdGVfZW5kcG9pbnQiOiJodHRwczovL3VuaWZpYS5oZXJva3VhcHAuY29tL3Rlc3QtYXBwL3JlbW90ZS1pbnB1dC0yIiwicmVzcG9uc2VfYm9keSI6W3siZGF0YV9rZXkiOiJwaG9uZSIsImRhdGFfbmFtZSI6InBob25lIiwiZGF0YV90eXBlIjoiVEVYVF9CT1giLCJkYXRhX3ZhbHVlIjoiMDgwLS0tLS0yMjIyIn0seyJkYXRhX2tleSI6ImVtYWlsX2FkZHJlc3MiLCJkYXRhX25hbWUiOiJFbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MiLCJkYXRhX3R5cGUiOiJURVhUX0JPWCIsImRhdGFfdmFsdWUiOiJ4eHh4QGdtYWlsLmNvbSJ9XX0=","invoice_no":"97"}

  //: use this Unifia API endpoint to get more details about the transaction
  //Endpoint   --->  POST {invoice_no: 97} to   https://unifia.herokuapp.com/api/v1/no-auth/Delivery/InvoiceDetails to get more details

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

  //Sample req.body Unifia will post
  //{"invoice_input":{"invoice_pricing_input":{"phone":"","amount_to_buy":""}},"invoice_no":"97"}

  //: use this Unifia API endpoint to get more details about the transaction
  //Endpoint   --->  POST {invoice_no: 97} to   https://unifia.herokuapp.com/api/v1/no-auth/Delivery/InvoiceDetails to get more details
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
  // {"app_config_step":"eyJzdGVwIjoiNCIsImRlbGl2ZXJ5Ijp0cnVlLCJpbnZvaWNlIjpmYWxzZSwibmFtZSI6IkRlbGl2ZXIgU2VydmljZSIsImFjdGlvbl9idXR0b24iOiJQYXkgTm93IiwicmVtb3RlX2VuZHBvaW50IjoiaHR0cHM6Ly91bmlmaWEuaGVyb2t1YXBwLmNvbS90ZXN0LWFwcC9kZWxpdmVyLXNlcnZpY2UiLCJyZXNwb25zZV9ib2R5IjpmYWxzZX0=","invoice_no":"97"}

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
