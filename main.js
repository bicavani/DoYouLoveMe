function answerIsYes() {
    alert('<3');
}
function answerIsNo() {
    let x = Math.round(Math.random()) * window.innerWidth;
    let y = Math.round(Math.random()) * window.innerHeight;
    document.getElementById('answerIsNo').style.left = x + 'px';
    document.getElementById('answerIsNo').style.top = y +'px';
}