document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('signin-form').addEventListener('submit', function (event) {
        event.preventDefault();
        window.location.href = '../index.html';
    });
});