// Paste the code from Firebase 
var config = {
    apiKey: "AIzaSyBYtCHSjOT_ZVzsS-fsa-Ti2QVImCeKvqg",
    authDomain: "ncut007.firebaseapp.com",
    databaseURL: "https://ncut007.firebaseio.com",
    projectId: "ncut007",
    storageBucket: "ncut007.appspot.com",
    messagingSenderId: "1065854794304"
    
   
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('skwu7777');

$('#contactForm2').submit(function (e) {
  e.preventDefault();

  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: $('.name').val(),
	address: $('.add99').val(),
    sex: $('.sex99').val(),
    email: $('.email').val(),
    product1: $('.product1').val(),
    product2: $('.product2').val(),
    product3: $('.product3').val(),
    select: $('.select99').val(),
	

  });

  $('.success-message').show();

  $('#contactForm2')[0].reset();
});