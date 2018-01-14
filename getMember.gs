


//or use full names aasfsdfsd or Lakshmi or Sudnyana Kadagadkai

function getUser(name) {
  var url = "https://api.trello.com/1/organizations/mangoblogger/members?key=64a47661fad273c0b5eddc2d63e10ad2&token=ea90d8a9e0f72e5b188fbac34bfb0295463f120be40000e2b10a243cf71dc637";
  var data = {
    "filter" : 'normal'
              };

  var response = UrlFetchApp.fetch(url);
  var resp = JSON.parse(response);

  Logger.log(resp);
  //Logger.log('the length is ' + resp.length);

  //Logger.log('the name of resp 2' + resp[2].fullName)



  for(var i = 0; i < resp.length; i ++) {
    if(resp[i].fullName === name) {

      //Logger.log('the id of the user is' + resp[i].id);

      return resp[i].id;

    }

  }
}

function removeTrello() {

  //var ui = DocumentApp.getUi();
 //var out = ui.prompt('Please enter the name of a user you want to remove.');
  //Logger.log(out.getResponseText());
  var nm = 'MangoBlogger Startup Google Analytics Dashboards';

var url = "https://api.trello.com/1/organizations/mangoblogger/members/" + getUser(nm) + "?key=64a47661fad273c0b5eddc2d63e10ad2&token=ea90d8a9e0f72e5b188fbac34bfb0295463f120be40000e2b10a243cf71dc637";

  var options = {
   'method' : 'DELETE',
   'contentType': 'application/json'
 };

  var response = UrlFetchApp.fetch(url, options);
  var resp = JSON.parse(response);
  Logger.log(resp);
}
