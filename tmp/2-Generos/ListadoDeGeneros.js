window.onload = function(){

// che, hay algo en sesion????
if (sessionStorage.getItem("Usuario") != null) {
  // si hay data, mostrala
  document.querySelector("a#login").style.display = "none"
  welcomeUser()
}
// no hay data, no hago nada


   document.querySelector("form.logincompleto").onsubmit = function (yey){
     welcomeUser()
     yey.preventDefault()
     document.querySelector(".uk-modal-close").click()
     var nombre = document.querySelector("input.name").value
     sessionStorage.setItem("Usuario", nombre)

   }

  if (sessionStorage.getItem("Usuario") != null) {
    document.querySelector("a#login").style.display = "none"
  }
}

  // var nombre= prompt ("Ingrese su nombre")
  // var reemplazo = document.querySelector("p.saludo")
   //reemplazo.innerText= "Bienvenid@" + " " + nombre
   fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=d72b8119ca0d802447ebd91bded10750&language=en-US")
     .then(function(respuesta) {
       return respuesta.json()
     })
     .then(function(informacion) {
       var generos = informacion.genres
       console.log(generos);
       for (var i = 0; i < generos.length; i++) {
         var nombre =  generos[i].name
         var id = generos[i].id


         var div = "";
         div += '<li>'
         div += '<div class="uk-position-center uk-panel"><h1>' + nombre + '</h1></div>'
         div += '</li>'


         document.querySelector("#generos").innerHTML += div
       }
     })
     .catch(function(error) {
       console.log("Error: " + error);
     })
 }
