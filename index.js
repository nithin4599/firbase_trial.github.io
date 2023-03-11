// Your web app's Firebase configuration

var firebaseConfig = {
    apiKey: "AIzaSyA1Eu8xyx7OAQ8y4ng-Fu6phrCWJWHiYlc",
    authDomain: "trial-b04e6.firebaseapp.com",
    databaseURL: "https://trial-b04e6-default-rtdb.firebaseio.com",
    projectId: "trial-b04e6",
    storageBucket: "trial-b04e6.appspot.com",
    messagingSenderId: "870551973559",
    appId: "1:870551973559:web:151d8cb3f567a01109e732",
    measurementId: "G-HM63X09XYF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Set database variable
  var database = firebase.database()
  
  function save() {
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    var username = document.getElementById('username').value
    var say_something = document.getElementById('say_something').value
    var favourite_food = document.getElementById('favourite_food').value
   
  
    database.ref('users/' + username).set({
      email : email,
      password : password,
      username : username,
      say_something : say_something,
      favourite_food : favourite_food
    })
  
    alert('Saved')
  }
  
  function get() {
    var username = document.getElementById('username').value
    
    var user_ref = database.ref('users/' + username)
    user_ref.on('value', function(snapshot) {
      var data = snapshot.val()
      
      alert(data.email)
      console.log(Number(data.email)  * Number( data.say_something) * Number(data.password));
      console.log(data.favourite_food);
  
    })
    alert(data.email)
    
  }
  
  function update() {
    var username = document.getElementById('username').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
  
    var updates = {
      email : email,
      password : password
    }
  
    database.ref('users/' + username).update(updates)
  
    alert('updated')
  }
  
  function remove() {
    var username = document.getElementById('username').value
  
    database.ref('users/' + username).remove()
  
    alert('deleted')
  }

