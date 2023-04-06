const btn = document.getElementById('details_btn');
const info = document.getElementById('info');
const close_btn = document.getElementById('close');



btn.onclick = function() {
    info.style.display = 'block';
}

close_btn.addEventListener('click', function(){

    info.style.display = 'none';


})
