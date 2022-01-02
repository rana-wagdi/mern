// alert("rana");
// setInterval(function () {element.innerHTML += "Hello"}, 1000);
window.setInterval(function () {document.title +todayTime()}, 1000);

function todayTime(){
    let day = new Date;
    console.log(day)
    
    console.log(day)

    day.toLocaleString();
    document.title =day;
    day.toLocaleString();
      
    return day;

}


