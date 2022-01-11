let tableTag = document.getElementById('demo')

function loadDoc() {
  var xhttp = new XMLHttpRequest();

  xhttp.open("get", "https://node-monge-iti-project.herokuapp.com/cataloges");
  xhttp.send();
  xhttp.onerror = function (error) {
    console.log(error);
  }
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {

  
  let    parser=new DOMParser();
   let   xml= parser.parseFromString(this.response,"text/xml");
      // tableTag.textContent=this.response;//text
buildData(xml)
console.log(xml)

    }
  }
  };
  loadDoc()
  function buildData(x){
    // let tableTag = document.getElementById('demo')
    let names = x.getElementsByTagName('CD')

    for(let i =0; i< names.length;i++){
      let title= names[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
      let artist= names[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue;
      let country= names[i].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue;
      let company= names[i].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue;
      let price= names[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue;

      let year= names[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
    //   if(price>10){
    // price.style.color="red"
    //     }
      let tr = document.createElement('tr');
    //  let namess= names[i].firstChild.nodeValue;
      tr.innerHTML =`<td>${title}</td><td>${artist}</td><td>${country}</td><td>${company}</td><td class="info">${price}</td><td>${year}</td>`;
      tableTag.append(tr)
    }
    var valuee = document.getElementsByClassName("info");

    console.log(valuee)

      for (var o = 0; o < valuee.length; o++) {
        let item = valuee[o].innerText;
       if(item>10){
          valuee[o].style.backgroundColor="grey"
       }

   
      }

  }

