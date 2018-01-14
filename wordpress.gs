function myFunctionWp() {

  var url = "https://www.mangoblogger.com/ledzee1729/get_nonce/?controller=user&method=register";
  var response = UrlFetchApp.fetch(url);
  var resp = JSON.parse(response);
  //Logger.log(resp.nonce);

  var uri = "https://www.mangoblogger.com/ledzee1729/user/register/?username=PKLive&email=ledzee@icloud.com&nonce=" + resp.nonce + "&display_name=PKlive";
  var respo = UrlFetchApp.fetch(uri);
  var re = JSON.parse(response);
  Logger.log(re);
}
