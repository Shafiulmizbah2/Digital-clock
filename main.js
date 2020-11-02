function clock() {
    
      var  hour = document.getElementById('hour');
      var  min = document.getElementById('min');
      var  sec = document.getElementById('sec');
      var ses= document.getElementById('session');

      var h= new Date().getHours();
      var m= new Date().getMinutes();
      var s= new Date().getSeconds();
      
      if(h>12){
          h = h-12;
          ses.innerHTML = "PM";
      }else{
          ses.innerHTML = "AM";
      }
    
      hour.innerHTML=h;
      min.innerHTML=m;
      sec.innerHTML=s;

}
 setInterval(clock,1000);

