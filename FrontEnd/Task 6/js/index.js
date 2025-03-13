
function visitLink(linkName) {
    let count = localStorage.getItem(linkName) ? parseInt(localStorage.getItem(linkName)) : 0;

    count++;

    localStorage.setItem(linkName, count);
}

function viewResults() {
    let resultsDiv = document.getElementById('results');

    if (!resultsDiv) {
        resultsDiv = document.createElement('div');
        resultsDiv.id = 'results';
        document.getElementById('content').appendChild(resultsDiv);
    }

    let result = '';

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);

        result += `${key} visited ${value} time(s)<br>`;
    }

    resultsDiv.innerHTML = result;
}
