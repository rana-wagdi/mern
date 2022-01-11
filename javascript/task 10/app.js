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
      // tableTag.textContent=this.response;//text
      // parser = new DOMParser();
      // xmlData = parser.parseFromString(this.response, "text/xml");
      // let studentsTags = xmlData.querySelectorAll("cd");
        
      // for (let i = 0; i < studentsTags.length; i++) {
      //   tableTag.textContent=studentsTags[i]
  
  let    parser=new DOMParser();
   let   xml= parser.parseFromString(this.response,"text/xml");
      // tableTag.textContent=this.response;//text
buildData(xml)
console.log(xml)
      // let studentsTags=xmlData.querySelectorAll("cd");
      // for(let i=0;i<studentsTags.length;i++)
      // {
      //       // console.log(   studentsTags[i].getAttribute("id"));
      //       tableTag.textContent=  studentsTags[i].querySelector("title")
      //       tableTag.textContent =  studentsTags[i].querySelector("artist");
      // }
      //   functionData(this)
      //   console.log(studentsTags[i].getAttribute("id"));
      //   console.log(studentsTags[i].querySelectorAll("title").textContent)
      //   console.log(studentsTags[i].querySelectorAll("artist").textContent)
      // }

      // var xmlDoc = this.response;
      // console.log(xmlDoc)
      // //  tableTag.textContent=xmlDoc;//text
      // var x = xmlDoc.querySelectorAll("CD");
      // tableTag.textContent = x;
    }
  }
  };
  function buildData(x){
    // let tableTag = document.getElementById('demo')
    let names = x.getElementsByTagName('CD')

    for(let i =0; i< names.length;i++){
      let namess= names[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue
      let tr = document.createElement('tr');
    //  let namess= names[i].firstChild.nodeValue;
      td.textContent = namess;
      tableTag.append(td)
    }
  }


  // function functionData(xml) {
  //   var i;
  //     // tableTag.textContent=this.response;//text

  //   var xmlDoc = xml.response;
  //   tableTag.textContent=xmlDoc;

    // var x = xmlDoc.getElementsByTagName("cd")[0]


    // for (i = 0; i <x.length; i++) { 
    //   table += "<tr><td>" +
    //   x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
    //   "</td><td>" +
    //   x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    //   "</td></tr>";
    // }
    // document.getElementById("demo").innerHTML = table;
  

//   function myFunction(xml) {
//     var i;
//     var xmlDoc = xml.responseXML;
//     var table="<tr><th>Artist</th><th>Title</th></tr>";
//     var x = xmlDoc.querySelector("cd");
//     for (i = 0; i <x.length; i++) {
//       table += "<tr><td>" +
//       x[i].getElementsByTagName("")[0].childNodes[0].nodeValue +
//       "</td><td>" +
//       x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
//       "</td></tr>";
//     }
//     document.getElementById("demo").innerHTML = table;
//   }