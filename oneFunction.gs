function oneFunction() {
  addTrello();
  copyBoard();
  //userToBoard();
}


function addTrello() {


var url = "https://api.trello.com/1/organizations/mangoblogger/members?key=ac5266a5c42554d629020d83c84f7c76&token=f585cabaa1fdae98d7b32cb1328dc10e40cb5f1f55ebf640f949f8818af65493";
  var data = {
    "email" : 'abc@gmail.com',
    "fullName" : 'ABC',
    "type" : 'normal'
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


function copyBoard() {

var url = "https://api.trello.com/1/boards/?key=ac5266a5c42554d629020d83c84f7c76&token=f585cabaa1fdae98d7b32cb1328dc10e40cb5f1f55ebf640f949f8818af65493";
  var data = {"name": "Changed name333",
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
  userToBoard(resp.id);
}


function userToBoard(id) {
  var url = 'https://api.trello.com/1/boards/`${id}`/members?key=ac5266a5c42554d629020d83c84f7c76&token=f585cabaa1fdae98d7b32cb1328dc10e40cb5f1f55ebf640f949f8818af65493';
  Logger.log(url);
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
