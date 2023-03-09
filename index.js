var but=document.querySelector(".b");
var val=document.querySelector(".v");  
var ren=document.querySelector(".ren");
var re=[];
var res1;
but.addEventListener("click",(e)=>{
    e.preventDefault(); //stop tha reloading page(default button load tha page) 
    res1=val.value;
    if(res1.length>0){ 
        var number=Math.random()*1000;
        re.push({id: number,data: res1,isComplete:false})
    } 
    rend(re);
}) 
ren.addEventListener("click",(e)=>{
    var id1=e.target.dataset.key;   
    var bu=e.target.dataset.b; 
    var re=this.re.map((d)=> d.id==id1?{...d,isComplete: !d.isComplete}:d); 
    var re=this.re.filter((d)=> d.id!=bu); 
    rend(re);
}) 

function rend(re){
    ren.innerHTML=re.map(({id,data,isComplete})=> `<div><input class="d" id="${id}" data-key=${id} type="checkbox"><labal data-key=${id} for="${id}" class=${isComplete?"del":""}>${data}</labal>
    <button class="bu" data-b=${id}>delete</button></div>`)
}