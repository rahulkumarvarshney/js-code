const clock=document.querySelector('#clock')
setInterval( (s)=>{
    const d=new Date();
    clock.innerHTML=d.toLocaleTimeString()
},1000)