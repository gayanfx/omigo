/*********************************************
 * by Gabriel 'Hezag' Nunes
 * website: http://multiverso.me
 * email: gabriel (at) multiverso (dot) me
 * github: https://github.com/gnuns
 **********************************************/

(function(){
  window.onresize = onresize;
  window.onbeforeunload = () => 'Are you sure you want to leave?';

  // scroll down on resize
  function onresize(event) {
    var body = document.getElementById('body');
    body.scrollTop = body.scrollHeight;
    var conversationBox = document.getElementById('conversation-box');
    conversationBox.scrollTop = conversationBox.scrollHeight;
  }
  // getOnlineCount();
  // setInterval(getOnlineCount, 5000);

  function getOnlineCount(){
    $.getJSON('http://192.168.0.16:3000/', function(info) {
      $('.online-count>strong').text(info.usersOnline);
    });
  }

})();
