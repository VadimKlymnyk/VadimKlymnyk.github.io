/*
function go() {

    showCircle(150, 150, 100, div => {
        div.classList.add('message-ball');
        div.append("Hello, world!");

        showCircle(500, 500, 200, div)
    });

}

function showCircle(cx, cy, radius, callback) {
    let div = document.createElement('div');
    div.style.width = 0;
    div.style.height = 0;
    div.style.left = cx + 'px';
    div.style.top = cy + 'px';
    div.className = 'circle';
    document.body.append(div);

    setTimeout(() => {
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';

        div.addEventListener('transitionend', function handler() {
            div.removeEventListener('transitionend', handler);
            callback(div);
        });
    });
}
*/

fetch('https://raw.githubusercontent.com/bedryck/mockDotaCharts/master/recentMatches.json')
.then(data => {
    //console.log(data);
    return data.json();

})
.then(data =>{
    const listGame = data.map(game => ({match_id: game.match_id, kills: game.kills, assists: game.assists, deaths:game.deaths}))
    console.log(listGame)

    
    if(listGame.length>0){
        let tab = "";
        let num = 1;
        listGame.forEach((element) => {
            tab += "<tr>";
            tab += "<td>" + num +"</td>";
            tab += "<td>" + element.match_id +"</td>";
            tab += "<td>" + element.kills +"</td>";
            tab += "<td>" + element.assists +"</td>";
            tab += "<td>" + element.deaths +"</td></tr>";
            num ++;
        });
        document.getElementById("data").innerHTML = tab;
        //console.log(tab)
        

    }
    
})




/*
function delay(ms){
    return new Promise(function(resolve){
        setTimeout(()=>{
            resolve()
        },ms)
    });
}
 
delay(2000).then(() => console.log('2 sec'))

delay(4000).then(() => console.log('4 sec'))
*/
/*
function sum(a){
    return function(b){
        return a+b;
    }
}
console.log(sum(3)(4))
*/