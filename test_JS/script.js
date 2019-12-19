
function funCheck() {
    let checkBox0 = document.getElementById("check_0");
    let checkBox1 = document.getElementById("check_1");
    let checkBox2 = document.getElementById("check_2");
    let checkBox3 = document.getElementById("check_3");
    let checkBox4 = document.getElementById("check_4");
    let checkBox5 = document.getElementById("check_5");
    let par = document.getElementsByClassName('container_item');
    if(event.target.id=="check_0"){
        if ( checkBox0.checked ) {
            par[0].classList.add("gray");

            console.log(event.target.id);
        } else {
            par[0].classList.remove("gray");
            console.log(event.target);

        }
    }   
    if(event.target.id=="check_1"){
        if ( checkBox1.checked ) {
            par[1].classList.add("gray");

            console.log(event.target.id);
        } else {
            par[1].classList.remove("gray");
            console.log(event.target);

        }
    } 
    if(event.target.id=="check_2"){
        if ( checkBox2.checked ) {
            par[2].classList.add("gray");

            console.log(event.target.id);
        } else {
            par[2].classList.remove("gray");
            console.log(event.target);

        }
    }   
    if(event.target.id=="check_3"){
        if ( checkBox3.checked ) {
            par[3].classList.add("gray");

            console.log(event.target.id);
        } else {
            par[3].classList.remove("gray");
            console.log(event.target);

        }
    }
    if(event.target.id=="check_4"){
        if ( checkBox4.checked ) {
            par[4].classList.add("gray");

            console.log(event.target.id);
        } else {
            par[4].classList.remove("gray");
            console.log(event.target);

        }
    }   
    if(event.target.id=="check_5"){
        if ( checkBox5.checked ) {
            par[5].classList.add("gray");

            console.log(event.target.id);
        } else {
            par[5].classList.remove("gray");
            console.log(event.target);

        }
    }

    

}
