
function setView() {

  //Logger.log(Analytics.Management.ProfileUserLinks.insert(
   // {
    //  'accountId': '82398821',
     // 'webPropertyId': 'UA-82398821-1',
     // 'profileId': '131233376',
     // 'resource': {
     //   'userRef': {
      //    'email': 'prakhardante@gmail.com'
      //  }
     // }
   // }));

  //creating the request-object

    var object = {};
    object.resource = {};


//adding permissions

    object.resource.permissions = {};
    object.resource.permissions.local = [];
    object.resource.permissions.effective = [];



    object.resource.permissions.local.push('EDIT');
   // object.resource.permissions.local.push('COLLABORATE');
    object.resource.permissions.local.push('MANAGE_USERS');
   // object.resource.permissions.local.push('READ_AND_ANALYZE');

//adding userRef

       object.resource.userRef = {};
    object.resource.userRef.email = "prakhardante@gmail.com";
    object.resource.userRef.kind = "analytics#userRef";

//finaly make the API - Call
  Analytics.Management.ProfileUserLinks.insert('23698964', 'UA-23698964-16', '164713774', object.resource);


}





//function insertProfileUserLink() {
 // var request = gapi.client.analytics.management.profileUserLinks.insert(
  //  {
  //    'accountId': '82398821',
   //   'webPropertyId': 'UA-82398821-1',
    //  'profileId': '131233376',
    //  'resource': {
    //    'permissions': {
     //     'local': [
      //      'EDIT',
      //      'MANAGE_USERS'
       //   ]
       // },
       // 'userRef': {
       //   'email': 'liz@gmail.com'
       // }
     // }
   // });
 // request.execute(function (response) { // Handle the response. });
// }
