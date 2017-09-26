
(function(window) {

  function Analyzer(theWindow) {
    var self = this;

    chrome.extension.onMessage.addListener(function(msg, win, sendResponse) {
      console.log('Analyzer : chrome.extension.onMessage.addListener', arguments);
      switch (msg.topic) {
        case "get-video":
          var videos = self.getVideosOfPage();
          sendResponse({data: videos}) ; // chrome.runtime.sendMessage(Object.assign(msg, {data: videos}), function(){ console.log("Analyzer : chrome.extension.onMessage.addListener : get-video ", arguments);});
          break;
      }

    });
    console.log('Initializing Analyzer()');

  }
  Analyzer.prototype.getVideosOfPage = function() {
    var self = this;
    var doc = document.getElementsByTagName("body")[0].innerHTML;
    return self.getVideosInText(doc);
  };

  Analyzer.prototype.getVideosInText = function(bodyText) {
    var urls = [];
    while(bodyText.indexOf(".mp4") !== -1){
      var first = bodyText.substring(0, bodyText.indexOf(".mp4"));
      var second= bodyText.substring(bodyText.indexOf(".mp4"), bodyText.length);
      urls.push(bodyText.substring(first.lastIndexOf('"')+1, first.length+second.indexOf('"')));
      bodyText = first.substring(0,first.lastIndexOf('"')+1) + second.substring(second.indexOf('"'), second.length);
    }
    return urls;
  };




  var downloader = new Analyzer(window);
  window.downloader = downloader;
})(this);
