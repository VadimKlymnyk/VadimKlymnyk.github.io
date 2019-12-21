window.addEventListener('load',function(){
for(let i =0; i<(document.querySelectorAll('input').length); i++){
    if( JSON.parse(localStorage.getItem(`check_${i}`))){
        document.getElementById(`check_${i}_container`).classList.add("gray");
        document.getElementById(`check_${i}`).checked = true;
    }
}
});


function funCheck() {
    
    localStorage[event.target.id] = document.getElementById(event.target.id).checked ? true : false
    console.log(localStorage.getItem(event.target.id));
    document.getElementById(`${event.target.id}_container`).classList.toggle("gray");
    
    
}
