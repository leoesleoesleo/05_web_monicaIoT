 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBwu20Qnu80IFr-7t_MU8de7Ve7AXYRWMQ",
    authDomain: "claseiushjueves-85b22.firebaseapp.com",
    databaseURL: "https://claseiushjueves-85b22.firebaseio.com",
    projectId: "claseiushjueves-85b22",
    storageBucket: "claseiushjueves-85b22.appspot.com",
    messagingSenderId: "878657191974",
    appId: "1:878657191974:web:f5c8f8673aed1f6efc66e7",
	measurementId: "G-14P4N6TSS7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var ref = firebase.database().ref('/');

  ref.on("value", function(snapshot){
  	var data = snapshot.val();
  	document.getElementById("temperatura").innerHTML = data.temperatura;
  	document.getElementById("humedad").innerHTML = data.humedad;
  	document.getElementById("luz").innerHTML = data.luz;
  	document.getElementById("gas").innerHTML = data.gas;
  	document.getElementById("led").innerHTML = data.EstadoLED;
  });
  
  function encender() {
  	firebase.database().ref('/').child('EstadoLED').set("1");
	}

   function apagar() {
  	firebase.database().ref('/').child('EstadoLED').set("0");
   }