document.getElementById('increment').addEventListener('click', function() {
    var countElement = document.getElementById('count');
    var count = parseInt(countElement.innerText);
    countElement.innerText = count + 1;
});
