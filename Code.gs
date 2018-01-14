//function myFunction() {

  function wpUser() {
    var url = "http://www.mangoblogger.com/wp-json/wp/v2/users";
  var data = {
      name: 'Swapnil',
      email: 'kswapnil03061995@gmail.com',
      roles: ['Author']
              };
  var options = {
   'method' : 'put',
   'contentType': 'application/json',
   'payload' : JSON.stringify(data)
 };

  var response = UrlFetchApp.fetch(url, options);
  var resp = JSON.parse(response);
  Logger.log(resp.url);
  }


  function addGsuite() {
  var user = {
  primaryEmail: 'test@mangoblogger.com',
  name: {
    givenName: 'testing',
    familyName: 'Singh'
  },
  // Generate a random password string.
  password: 'hello123'
};
user = AdminDirectory.Users.insert(user);
Logger.log('User %s created with ID %s.', user.primaryEmail, user.id);
  }

  function addView() {

  }



function addSlack() {
  var url = 'https://slack.com/api/users.admin.invite?token=291111693779-e231a88903488ac29230e24ca1f45513';
  var data = {
    'email' : 'prasannakulkarni@live.com',
    //'channels' : ['CHANNEL ID 1', 'CHANNEL ID 2']
  };

  var options = {
    'method' : 'PUT',
 'json' : true,
 'contentType': 'application/json',
 'payload' : JSON.stringify(data)
  }
}


  function removeSlack() {
  var url = "https://slack.com/api/scim/user.deactivate";
var data = {
  "id" : 'ID OF THE MEMBER TO BE REMOVED FROM SLACK'
            };
var options = {
 'method' : 'POST',
 'json' : true,
 'contentType': 'application/json',
 'payload' : JSON.stringify(data)
};

var response = UrlFetchApp.fetch(url, options);
var resp = JSON.parse(response);
Logger.log(resp);
  }

  function addTrello() {


var url = "https://api.trello.com/1/organizations/mangoblogger/members?key=ac5266a5c42554d629020d83c84f7c76&token=f585cabaa1fdae98d7b32cb1328dc10e40cb5f1f55ebf640f949f8818af65493";
  var data = {
    "email" : 'prakhardante@gmail.com',
    "fullName" : 'Prakhar Gupta',
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
}

//}
