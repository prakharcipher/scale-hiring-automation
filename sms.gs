function callSms() {

var toNumber = '+919897035810';
var fromNumber = '(224) 204-0684';
var smsText = 'hello World!';

  sendSMS(toNumber, fromNumber, smsText);

}


function sendSMS(toNumber, fromNumber, smsText) {

  if (smsText.length > 160) {
    Logger.log("The text should be limited to 160 characters");
    return;
  }

  var accountSID = "AC0e7db4cbaf06580febf49b86af7c9c0a";
  var authToken = "c4e337bc33cde8dace3645445521a908";

  var url = "https://api.twilio.com/2010-04-01/Accounts/" + accountSID + "/Messages.json";

  var options = {
    method: "POST",
    headers: {
      Authorization: "Basic " + Utilities.base64Encode(accountSID + ":" + authToken)
    },
    payload: {
      "From" : fromNumber,
      "To"   : toNumber,
      "Body" : smsText
    },
    muteHttpExceptions: true
  };

  var response = JSON.parse(UrlFetchApp.fetch(url, options).getContentText());
  Logger.log(response);

  if (response.hasOwnProperty("sid")) {
    Logger.log("Message sent successfully.");
  }

 // Utilities.sleep(1000);

}
