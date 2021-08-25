var firebaseConfig = {
    apiKey: "AIzaSyBI9-UOIrxWcufkfN0f0EuB8FZpagpN1oc",
    authDomain: "beta-tester-3be4a.firebaseapp.com",
    projectId: "beta-tester-3be4a",
    storageBucket: "beta-tester-3be4a.appspot.com",
    messagingSenderId: "728201533578",
    appId: "1:728201533578:web:c950bd6ef3289f76f87573",
    measurementId: "G-EBYGHY31B7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

// Reference contactInfo
let contactInfo = firebase.database().ref("contactform");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();
    
    //Get Database
    let name=document.querySelector(".name").value;
    let email=document.querySelector(".email").value;
    let subject=document.querySelector(".subject").value;
    let message=document.querySelector(".message").value;

    saveContactInfo(name,email,subject,message);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
}

// Saving Data
function saveContactInfo(name,email,subject,message) {
    let newContactInfo=contactInfo.push();

    newContactInfo.set({
        name: name,
        email: email,
        subject: subject,
        message: message,
    });
}

