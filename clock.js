


const hours1=document.querySelector('.hours')
const minutes1=document.querySelector('.minutes')
const second1=document.querySelector('.second')




setInterval(()=>{
    const date=new Date;
    const secDeg=date.getSeconds()/60*360-90;
    const minDeg=date.getMinutes()/60*360-90;
    const hoursDeg=date.getHours()/12*360-90;
    second1.style.transform=`rotate(${secDeg}deg)`
    minutes1.style.transform=`rotate(${minDeg}deg)`
    hours1.style.transform=`rotate(${hoursDeg}deg)`

},1000)

