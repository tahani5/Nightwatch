/* jshint expr: true */
module.exports = {
  tags: ['google'],
  'Demo test Google' : function (client) {
    client
      .url('http://bing.com')
      .pause(1000);
      
client.setValue('input[name=q]', 'cloudsystems.sa');  

client.click('input[type=submit]');      

client.click("strong") ;
      
client.click('a.call-to-action-button');


  }
};


