
// Global Client Side JS Code Here...

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

jQuery(document).ready(function($) {
  var x=4;
  $( '.pacContainer' ).click(function() {
    $( '.pacMouth' ).each(function( i ) {
      var snackTemp = '.'+x;
        if ( this.style.display !== "none" ) {
          this.style.display = "none";
         $('.1').attr('style', 'z-index:-1');

         $('.line').attr('style', 'display:block');
         if (x>0){
          $(snackTemp).attr('style', 'display:none');
          x--;
          }
          else{
          $('.pacSnack').attr('style', 'display:block');  
          $( '.pacMouth' ).attr('style','display:block');
          $('.line').attr('style', 'display:none');
          x=4;
         }
        } else {
          this.style.display = "block";
          $('.1').attr('style', 'display:block');
          $('.line').attr('style', 'display:none');
        }
      });
  });
});

// DB Code Below
var config = {
    apiKey: "AIzaSyC-F4yrHrSmag_yB9X8qtEKgq53HQP90T0",
    authDomain: "appone-81518.firebaseapp.com",
    databaseURL: "https://appone-81518.firebaseio.com",
    storageBucket: "appone-81518.appspot.com",
    messagingSenderId: "719732206018"
};

firebase.initializeApp(config);

var db = firebase.database();

function handleSignInButton() {
    var email = document.querySelector('.input-email').value;
    var password = document.querySelector('.input-password').value;

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
        } else {
            alert(errorMessage);
        }

        console.log(error);
    });
}

firebase.auth().onAuthStateChanged(function(user) {

    if (user) {
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        document.querySelector('.welcome-message').innerHTML = 'Welcome!'
    }
});

function addSnack(name, imageUrl, price, sourceUrl) {
    var newSnackKey = firebase.database().ref().child('snacks').push().key

    firebase.database().ref('snacks/' + newSnackKey).set({
        name: name,
        sourceUrl: sourceUrl,
        price: price,
        imageUrl: imageUrl,
        thumbsUp: 0,
        thumbsDown: 0,
        inCart: true,
        timesOrdered: 0
    })
}

function getSnacks() {
    return db.ref('snacks/').once('value').then(function(snapshot) {
        return snapshot.val()
    })
}

function addReview(snackId, userId, body) {
    var newReviewKey = firebase.database().ref().child('reviews').push().key

    firebase.database().ref('reviews/' + snackId).set({
        userId: userId,
        body: body
    })
}

function getReviews(snackId) {
    return db.ref('reviews/' + snackId).once('value').then(function(snapshot) {
        return snapshot.val()
    })
}
