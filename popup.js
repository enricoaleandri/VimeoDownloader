chrome.runtime.getBackgroundPage(function(win) {

  var downloadButton = document.getElementById('download_video');

  downloadButton.addEventListener("click", function(e) {
    e.preventDefault();
    win.downloader.downloadCurrentVideo(function(){
      alert("OTTENUTO VIDEO", arguments);
    });
    window.close();
  });

});
