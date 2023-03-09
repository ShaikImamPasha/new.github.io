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
    var id=e.target.dataset.key; 
    var re=this.re.map((d)=> d.id===id ? {...d,isComplete: !isComplete} : d);
    console.log(this.re);
})
function rend(re){
    ren.innerHTML=re.map(({id,data,isComplete})=> `<div><input id="${id}" data-key=${id} type="checkbox"><labal data-key=${id} for="${id}">${data}</labal>
    <button>delete</button></div>`)
}