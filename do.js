document.addEventListener('DOMContentLoaded',function(){

    document.querySelector('#pehla').onclick = function(){

        alert('You are so Dumb, now use todo instead of thinking so much which you lack in it !')

        document.querySelector('#second').style.display = "block";

        document.querySelector('#pehla').style.display = "none";
    }





    document.querySelector('#dusra').onsubmit = function(){

       const name = document.querySelector('#item').value;

       const task = document.createElement('li');

       task.innerHTML = name;

       document.querySelector('#listitems').append(task);

       document.querySelector('#item').value = '';

       return false;
    }

    


})