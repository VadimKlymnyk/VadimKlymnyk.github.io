
for(let i =0; i<6; i++){
    if(localStorage.getItem(`check_${i}`) == 1){
        document.getElementById(`check_${i}_container`).classList.add("gray");
        document.getElementById(`check_${i}`).checked = true;
    }
}



function funCheck() {
  
    localStorage[event.target.id] = document.getElementById(event.target.id).checked ? 1 : 0
    console.log(localStorage.getItem(event.target.id));
    document.getElementById(`${event.target.id}_container`).classList.toggle("gray");
    
    
}
