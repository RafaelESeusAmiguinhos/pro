const firebaseConfig = {
    apiKey: "AIzaSyAa3CjiWZAENC5X7I548QABTl6AOb3z228",
    authDomain: "chat-rafa.firebaseapp.com",
    databaseURL: "https://chat-rafa-default-rtdb.firebaseio.com",
    projectId: "chat-rafa",
    storageBucket: "chat-rafa.appspot.com",
    messagingSenderId: "1081453496477",
    appId: "1:1081453496477:web:19b3f24b3b46dfe904ec74"
  };

  firebase.initializeApp(firebaseConfig);

  inicializar()

  function inicializar(){
    const nomeUsuario = localStorage.getItem("nomeUsuario")
    console.log(nomeUsuario);
    document.getElementById("nomeUsuario").textContent = "Olá , " + nomeUsuario + "!"

    getData()
  }

  function addSala(){
   const nomeSala = document.getElementById("nomeSala").value;
   console.log(nomeSala)

   if(nomeSala){
    firebase.database().ref('/').child(nomeSala).set({
      purpose: "sala criada"
    })
   }
  }

  function getData(){
    firebase.database().ref('/').on("value" , snapshot =>{
      let salas = [];
      snapshot.forEach(childsnapshot => {
        const childKey = childsnapshot.key;
        const html = '<div class="nomeSala" id="'
        + childKey
        + ' "onclick="carregaSala(this.id)">'
        + childKey
        + '</div>'
        salas.push(html);
      }) 
document.getElementById("output").innerHTML = salas.join("");
    })
  }

  function carregaSala(sala){
    localStorage.setItem("nomeSala", sala);
    location = "chat.html"
  }