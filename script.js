const togglButton=document.getElementById("theme-toggle");
const body=document.body;

body.classList.add('light-mode');

togglButton.addEventListener('click',()=>{
    if(body.classList.contains('light-mode')){
        body.classList.replace('light-mode','dark-mode');
        togglButton.textContent='Switch to Light Mode'
    }else{
        body.classList.replace('dark-mode','light-mode');
        togglButton.textContent='Switch to Dark Mode'
    }
});
toggleButton.addEventListener('keydown',(e)=>{
    if(e.key==='Enter'){
        toggleButton.click();
    }
})