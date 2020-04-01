const $webview = document.querySelector('webview');
const $loader = document.querySelector('.loader');
let isInitialLoad = true;

$webview.addEventListener('did-start-loading', () => {
    if (isInitialLoad) {
        $webview.classList.add('hide');
        $loader.classList.remove('loader-hide');
        isInitialLoad = false;
    }
});

$webview.addEventListener('dom-ready', () => {

    /*
    $webview.executeJavaScript(
        console.log(document)
    ).then((value) => {console.log(value);  }) // The entire window object of the webview.
    .catch((error) => console.log(error));;
*/
console.log($webview.getWebContents()[0]);

    $webview.classList.remove('hide');
    setTimeout(() => {
        $loader.classList.add('loader-hide');
    }, 100);
});

window.openWebviewDevTools = () => {
    $webview.getWebContents().openDevTools();
};