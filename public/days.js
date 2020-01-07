function showTime(){
    let nowtime = new Date();
    let starttime = new Date("2019/07/01,00:00:00");
    //将当前时间以及结束时间转换为秒，之后再用结束时间减去当前时间
    let differtime = parseInt((nowtime.getTime()-starttime.getTime())/1000);
    //计算天数
    let d = parseInt(differtime/(24*60*60));
    //计算出小时数，取模运算，获得具体的小时数
    let h = parseInt(differtime/(60*60)%24);
    //计算出分钟数
    let m = parseInt(differtime/60%60);
    //计算出秒数
    let s = parseInt(differtime%60);
    let url = window.location.pathname;
    console.log(url);
    if(url === "/about"){
        document.getElementById('days').innerHTML=d;
        document.getElementById('hours').innerHTML=h;
        document.getElementById('mins').innerHTML=m;
        document.getElementById('secs').innerHTML=s;
        //定时器，每500毫秒执行一次
        setTimeout(showTime,500);
    } 
};