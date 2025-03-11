"use strict";
var passwordIcons = document.querySelectorAll('.password-icon');
passwordIcons.forEach(function (icon) {
    icon.addEventListener('click', function () {
        var input = this.parentElement.querySelector('.form-control');
        input.type = input.type === 'password' ? 'text' : 'password';
        this.classList.toggle('fa-eye');
    });
});
