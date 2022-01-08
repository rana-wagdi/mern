let getUsers = async function (user) {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let responsee = await fetch("https://jsonplaceholder.typicode.com/posts");

  let users = await response.json();

  let posts = await responsee.json();
  console.log(users);
  console.log(posts);

  appendData(users, posts)
  // getPosts(posts)
}
getUsers()

function appendData(data, post) {
  var mainContainer = document.getElementById("myData");
  var i;
  for (i = 0; i < data.length; i++) {
    let arr = []
    var tr = document.createElement("tr");

    for (var j = 0; j < post.length; j++) {
      console.log(post[j].userId)

      if (data[i].id == post[j].userId) {
        arr.push(post[j].title)




        let text = arr.join('<li>')

        tr.innerHTML = `<th>${data[i].id}</th><td> ${data[i].username}</td><td>${data[i].email}</td><td>${data[i].company.name}</td><td>Lat: ${data[i].address.geo.lat}</td><td>Lng: ${data[i].address.geo.lng}</td><td><ul><li>${text}</li></ul></td>`
        if (data[i].id % 2 == 0) {
          tr.style.backgroundColor = '#e0e0e0'
        }
        mainContainer.appendChild(tr);

      }


    }


  }
}

