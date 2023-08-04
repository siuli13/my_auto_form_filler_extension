document.addEventListener('DOMContentLoaded', function () {
    const fillButton = document.getElementById('fill_button');
    fillButton.addEventListener('click', fillForms);
});

function fillForms() {
    const user_data = {
        first_name: document.getElementById('first_name').value,
        last_name: document.getElementById('last_name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
    };

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { user_data });
    });
}
