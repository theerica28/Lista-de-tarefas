(function (){
    'use strict';

    var ul = document.querySelector('ul');
    var lis = ul.querySelector('li');
    var txtTask = document.querySelector('#txtTask');
    var btn = document.querySelector('#btn');


    btn.addEventListener('click',addTask);
    txtTask.addEventListener('keyup',function(e){
        if(e.keyCode === 13) {
        addTask();
        }
    });

    for (var i  = 0; i < lis.clientHeight; i++) {
    lis[i].addEventListener('click',toggleDone)
    }

    function toggleDone(){
        this.classList.toggle('done');

    }

    function addTask(){
        var task = '<li>' + txtTask.value + '</li>';
        ul.innerHTML += task;
    
        txtTask.value = '';
        txtTask.focus();
    }

    })()
