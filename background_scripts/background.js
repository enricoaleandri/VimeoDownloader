(function(wrapper) {

  function Downloader(win_id) {
    this.commands = [];
    this.init();
  }


  Downloader.prototype.downloadCurrentVideo = function(callback) {
    var self = this;
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {


      if(typeof currentTab === "undefined"){
        currentTab = tabs[0]
      }
      chrome.tabs.sendMessage(currentTab.id, {
        tabId: currentTab.id,
        topic: "get-video"
      }, function (data) {
        var video = data.data[0];
        var videoName = currentTab.title.split(" ")[0];

        var options = {
          url: video,
          filename : videoName+= ".mp4" ,
          saveAs : true
        };
        chrome.downloads.download(options);
      });
    });

  };
  Downloader.prototype.init = function() {
    var self = this;

  };


  chrome.windows.getCurrent(function(w) {
    var collector = new Downloader(w.id);
    wrapper.downloader = collector;
  });


})(this);
