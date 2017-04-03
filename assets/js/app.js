var posts = document.getElementById("posts");
document.getElementById("btn").addEventListener("click", function(){
  var autor = document.getElementById("autor").value;
  var post = document.getElementById("post").value;
  var ok=0;

  if(/^\s+|\s+$/.test(autor) || autor ==""){
    document.getElementById("autorValidate").innerHTML ="Debe ingresar autor";
  }
  else{
    document.getElementById("autorValidate").innerHTML  = "";
    ok++;
  }

  if(post=="" || /^\s+|\s+$/.test(post)){
    document.getElementById("postValidate").innerHTML = "Debe ingresar post";
  }
  else{
    document.getElementById("postValidate").innerHTML ="";
    ok++;
  }

  if(ok==2){
    addPost(autor, post);
  }
})

function addPost(autor, post){
  var pAutor = document.createElement("p");
  var pPost =  document.createElement("p");
  var tAutor = document.createTextNode("Autor: "+ autor);
  var tPost = document.createTextNode("Post: " + post);
  var divPost = document.createElement("div");
  divPost.setAttribute("class","post")
  pAutor.appendChild(tAutor);
  pPost.appendChild(tPost);
  divPost.appendChild(pAutor);
  divPost.appendChild(pPost);
  posts.appendChild(divPost);
  var firstChild = posts.firstChild;
  posts.insertBefore(divPost,firstChild);
}
