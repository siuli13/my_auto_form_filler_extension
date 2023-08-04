function fillFormWithData() {
}

function getGpt3Answer(question) {
}

function main() {
    const formElements = document.getElementsByTagName('form');
    if (formElements.length > 0) {
        fillFormWithData();
    }

    const question = "What is the purpose of this form?";
    const answer = getGpt3Answer(question);
    console.log(answer);
}

window.addEventListener('load', main);  