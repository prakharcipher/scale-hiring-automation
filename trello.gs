function myFunction2() {

  function addTrello() {


var url = "https://api.trello.com/1/organizations/mangoblogger/members?key=ac5266a5c42554d629020d83c84f7c76&token=f585cabaa1fdae98d7b32cb1328dc10e40cb5f1f55ebf640f949f8818af65493";
  var data = {
    "email" : 'ledzee@icliud.com',
    "fullName" : 'Pk icloud',
    "type" : 'normal'
              };
  var options = {
   'method' : 'post',
   'contentType': 'application/json',
   'payload' : JSON.stringify(data)
 };

  var response = UrlFetchApp.fetch(url, options);
  var resp = JSON.parse(response);
  Logger.log(resp);
}

  function copyBoard() {

var url = "https://api.trello.com/1/boards/?key=ac5266a5c42554d629020d83c84f7c76&token=f585cabaa1fdae98d7b32cb1328dc10e40cb5f1f55ebf640f949f8818af65493";
  var data = {"name": "Changed name",
               'defaultLabels' : true,
      'defaultLists' : true,
      'idOrganization' : 'mangoblogger',
      'idBoardSource' : '5a243e6d96c62f8461d6033d',
      'keepFromSource' : 'all',
      'prefs_permissionLevel' : 'private',
      'prefs_selfJoin' : true
              };
  var options = {
   'method' : 'post',
   'contentType': 'application/json',
   'payload' : JSON.stringify(data)
 };

  var response = UrlFetchApp.fetch(url, options);
  var resp = JSON.parse(response);
  Logger.log(resp.url);
  MailApp.sendEmail("ledzee@icloud.com", "your trello board",(resp.url));

  }




}

function removeTrello() {

//  var uri = "https://api.trello.com/1/organizations/mangoblogger/members/?key=ac5266a5c42554d629020d83c84f7c76&token=f585cabaa1fdae98d7b32cb1328dc10e40cb5f1f55ebf640f949f8818af65493&filter=normal";
//  var r = UrlFetchApp.fetch(uri);
//  var re = JSON.parse(r);
//  Logger.log(re);

var url = "https://api.trello.com/1/organizations/mangoblogger/members/?key=64a47661fad273c0b5eddc2d63e10ad2&token=ea90d8a9e0f72e5b188fbac34bfb0295463f120be40000e2b10a243cf71dc637";
  var data = {
    'idMember' : '5a424d8581bd004293399969'
              };

  var options = {
   'method' : 'delete',
   'contentType': 'application/json',
    'payload' : JSON.stringify(data)
 };

  var response = UrlFetchApp.fetch(url, options);
  var resp = JSON.parse(response);
  Logger.log(resp);
}

function userToBoard() {
  var url = "https://api.trello.com/1/boards/FULLCOMPLETEIDOFTHEBOARD/members?key=ac5266a5c42554d629020d83c84f7c76&token=f585cabaa1fdae98d7b32cb1328dc10e40cb5f1f55ebf640f949f8818af65493";
  var data = {
    "email" : 'E-MAIL ADDRESS OF THE USER TO BE ADDED ON THE BOARD'
              };
  var options = {
   'method' : 'put',
   'contentType': 'application/json',
    'payload' : JSON.stringify(data)
 };
  var response = UrlFetchApp.fetch(url, options);
  var resp = JSON.parse(response);
  Logger.log(resp);
}
