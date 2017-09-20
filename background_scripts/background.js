
chrome.contextMenus.create({
  title: "Download",
  contexts:["selection"],  // ContextType
  onclick: function(){
    console.log("Nothing");
  } // A callback function
});