document.addEventListener('DOMContentLoaded', function(){
    DocumentTimeline.querySelector('form').addEventListener('submit', function(e){
        alert('hello, ' + document.querySelector('#name').value);
    });
});