function startTime()
{
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    // add a zero in front of numbers<10
    m=checkTime(m);
    s=checkTime(s);
    document.getElementById('time').innerHTML=h+":"+m+":"+s;
    t=setTimeout(function(){startTime()},500);
}

function checkTime(i)
{
    if (i<10)
    {
        i="0" + i;
    }
    return i;
}
        

 $.backstretch([
  "../../../assets/images/timelines/img3.jpg"
, "../../../assets/images/timelines/img4.jpg"
, "../../../assets/images/timelines/img5.jpg"
], {duration: 3000, fade: 750});