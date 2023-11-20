(function (){
    'use strict';

    var ul = document.querySelector('ul');
    var txtTask = document.querySelector('#txtTask');
    var btn = document.querySelector('#btn');

    btn.addEventListener('click',function(){
        var task = '<li>'+ txtTask.value + '</li>';
        ul.innerHTML+= task;
        txtTask.value = '';
        txtTask.focus();
    })

})()