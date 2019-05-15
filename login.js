function login()
{
    var useremail = document.getElementById("text_email").value;
    var userpassword= document.getElementById("text_password").value;

    firebase.auth().signInWithEmailAndPassword(useremail, userpassword).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    window.alert("successfully loged in");
    window.location="homepage.html";
  });
}
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    window.location.href="homepage.html";
  } else {
    // No user is signed in.
    window.alert("err");
  }
});
