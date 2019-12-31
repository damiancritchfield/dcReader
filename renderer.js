// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const {ipcRenderer} = require('electron')

var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();
	
ipcRenderer.send('load-default-md-file')
ipcRenderer.on('loaded-default-md-file', (event, mdContent) => {
  //document.getElementById('selected-file').innerHTML = `You selected: ${path}`
	var result = md.render(mdContent);
	document.getElementById('content').innerHTML = result;
})