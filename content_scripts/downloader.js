
(function(window) {

  function Downloader(theWindow) {
    console.log('Initializing Downloader()');

  }
  Downloader.prototype.downloadCurrentVideo = function(theWindow) {

    var doc = document.getElementsByTagName("body")[0].innerHTML;

    alert(JSON.stringify(this.getVideosInText(doc)));
  };

  Downloader.prototype.getVideosInText = function(bodyText) {
    var urls = [];
    while(bodyText.indexOf(".mp4") !== -1){
      var first = bodyText.substring(0, bodyText.indexOf(".mp4"));
      var second= bodyText.substring(bodyText.indexOf(".mp4"), bodyText.length);
      urls.push(bodyText.substring(first.lastIndexOf('"')+1, first.length+second.indexOf('"')));
      bodyText = first.substring(0,first.lastIndexOf('"')+1) + second.substring(second.indexOf('"'), second.length);
    }
    return urls;
  };




  var downloader = new Downloader(window);
  window.downloader = downloader;
})(window);
