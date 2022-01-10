let getUsers = async function (user) {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let responsee = await fetch("https://jsonplaceholder.typicode.com/posts");
  let resCommit = await fetch("https://jsonplaceholder.typicode.com/comments");

  let users = await response.json();

  let posts = await responsee.json();
  let comments = await resCommit.json();
  console.log(users);
  console.log(posts);
console.log(comments)
  appendData(users, posts, comments)
  // getPosts(posts)
}
getUsers()

function appendData(data, post, comment) {
  var mainContainer = document.getElementById("myData");
  var i;
  for (i = 0; i < data.length; i++) {
    let arr = [];
    
    var tr = document.createElement("tr");

    for (var j = 0; j < post.length; j++) {
      console.log(post[j].userId)

      if (data[i].id == post[j].userId){
        arr.push(post[j].title)




        let text = arr.join('<li>')
        // commentsOnPost.length
  

        
    //     if (data[i].id ==  comment[t].postId) {
    //       r.push(comment[i].postId)
    //  let  s=  r.join('<li>')
    //  let d =s.length

    // comments.filter(
    //   (comment) => comment.postId === post.id
    for(var t = 0 ; t < comment.length;t++){

    
    if (comment[t].postId == post[j].userId){
      
   const commentsOnPost = comment.filter(
          (commentt) => commentt.postId === post[j].id
        );
        // li.innerText = `${post.title} || ${commentsOnPost.length}`;
        // ul.append(li);
  

  console.log(arr)
        
  tr.innerHTML = `<th>${data[i].id}</th><td> ${data[i].username}</td>
  <td>${data[i].email}</td><td>${data[i].company.name}</td><td>Lat: ${data[i].address.geo.lat}</td>
  <td>Lng: ${data[i].address.geo.lng}</td><td><ul><li>${text}</li></ul></td><td><ul><li>${commentsOnPost.length}</li></ul></td>`
  if (data[i].id % 2 == 0) {
    tr.style.backgroundColor = '#e0e0e0'
  }
  mainContainer.appendChild(tr);
        


}
    
}


    }
    }


  }
}

