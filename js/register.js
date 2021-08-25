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
function solution(){
    getValue(); 
    sendEmail();
}

// Register form

// Reference contactInfo
let registerInfo = firebase.database().ref("registerform");

// Listen for a submit
document.querySelector(".register-form").addEventListener("submit", submitregForm);
var ele = [];
function getValue() {
    var c1 = document.getElementById("c1")
    if (c1.checked) {
        ele.push(c1.value);
    }
    var c2 = document.getElementById("c2")
    if (c2.checked) {
        ele.push(c2.value);
    }
    var c3 = document.getElementById("c3")
    if (c3.checked) {
        ele.push(c3.value);
    }
    var c4 = document.getElementById("c4")
    if (c4.checked) {
        ele.push(c4.value);
    }
    var c5 = document.getElementById("c5")
    if (c5.checked) {
        ele.push(c5.value);
    }
    var c6 = document.getElementById("c6")
    if (c6.checked) {
        ele.push(c6.value);
    }
    var c7 = document.getElementById("c7")
    if (c7.checked) {
        ele.push(c7.value);
    }
    var c8 = document.getElementById("c8")
    if (c8.checked) {
        ele.push(c8.value);
    }
    var c9 = document.getElementById("c9")
    if (c9.checked) {
        ele.push(c9.value);
    }
    var c10 = document.getElementById("c10")
    if (c10.checked) {
        ele.push(c10.value);
    }
    var c11 = document.getElementById("c11")
    if (c11.checked) {
        ele.push(c11.value);
    }
    var c12 = document.getElementById("c12")
    if (c12.checked) {
        ele.push(c12.value);
    }
    var c13 = document.getElementById("c13")
    if (c13.checked) {
        ele.push(c13.value);
    }
    if (ele.length > 0) {
        document.getElementById("p1").innerHTML = ele;
    } else {
        document.getElementById("p1").innerHTML = "You Dont have any thing";
    }
}


function submitregForm(i){
    i.preventDefault();
    
    //Get Database
    let name01=document.querySelector(".name01").value;
    let num01=document.querySelector(".num01").value;
    let email01=document.querySelector(".email01").value;
    let clg01=document.querySelector(".clg01").value;
    let ct01=document.querySelector(".ct01").value;
    let cnt01=document.querySelector(".cnt01").value;
    // let dob=document.querySelector(".dob").value;

    
    saveRegisterInfo(name01,num01,email01,clg01,ct01,cnt01,ele);
    sendEmail(email01);

    // show alert
    document.querySelector('.alert').style.display='block';
    // vanish in 2 sec
    setTimeout(function() {
        document.querySelector('.alert').style.display='none';
    },2000);

    // document.getElementById("name01").value = "";
    // document.getElementById("num01").value = "";
    // // document.getElementById("email01").value = "";
    // document.getElementById("clg01").value = "";
    // document.getElementById("ct01").value = "";
    // document.getElementById("cnt01").value = "";
    
    // document.getElementById('register-form').reset();

    
}

// Saving Data
function saveRegisterInfo(name01,num01,email01,clg01,ct01,cnt01, ele) {
    let newRegisterInfo=registerInfo.push();

    newRegisterInfo.set({
        name: name01,
        number: num01,
        email: email01,
        college: clg01,
        city: ct01,
        country: cnt01,
        intern:ele,
        // dob:dob
    });
}


function sendEmail(email01) {
    Email.send({
            Host: "smtp.gmail.com",
            Username: "techbetatester2021@gmail.com",
            Password: "techbetatester",
            To: email01,
            From: "contact@betatesters.tech",
            Subject: "Greetings from Team Beta Tester!",
            Body: "<h1>Thank you for registering. </h1><br> Your registration has been confirmed. <br><br> To get more latest information about our internships and courses, do join the telegram link attached below and also follow us on LinkedIn. <br><br> Telegram link- https://t.me/transformationplus <br> LinkedIn link-https://www.linkedin.com/company/beta-testers <br><br> For more such exciting details <br> Do subscribe to our YouTube channel <br> YouTube link-https://www.youtube.com/channel/UCyopdatpBjJJxszp6H-HPlw <br><br> Follow us on <br> Instagram link- https://www.instagram.com/b8a_testers/ <br> Facebook link- https://www.facebook.com/%CE%92eta-testers-106215631656859",
        });
}


$("form").on("submit",function (e) {
    e.preventDefault(); //To not refresh the page
    $("form").remove(); //Remove the form
});
