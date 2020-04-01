ipc = require('electron').ipcRenderer;

var button = document.getElementById("foobar");
button.addEventListener("click",function(e){
    ipc.send('update-notify-value', 200);
},false);