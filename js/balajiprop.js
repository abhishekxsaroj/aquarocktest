 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
    apiKey: "AIzaSyBuVmY9dFJJmNvfty_0oyPccxcXAJ9dJPI",
    authDomain: "aquarock-9f55a.firebaseapp.com",
    databaseURL: "https://aquarock-9f55a-default-rtdb.firebaseio.com",
    projectId: "aquarock-9f55a",
    storageBucket: "aquarock-9f55a.appspot.com",
    messagingSenderId: "678346156501",
    appId: "1:678346156501:web:dd3f7496dc463dacedf55c",
    measurementId: "G-F05EEHZ3C8"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the Firebase database
const database = firebase.database();

// Function to save form data to Firebase
function saveFormData(name, phone, email, databaseRef) {
    // Generate a new key for each form submission
    const newContactForm = databaseRef.push();

    // Set the form data
    newContactForm.set({
        name: name,
        phone: phone,
        email: email
    });
}

// Ensure the DOM is loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function() {
    // Enquire Modal 1 (AquaRose)
    const form1 = document.getElementById("enquireForm");
    const contactFormDB1 = database.ref("aquaroseprop");

    form1.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;

        // Save form data to Firebase
        saveFormData(name, phone, email, contactFormDB1);

        // Optionally show a success message or reset the form
        form1.reset();
        alert("Form submitted successfully!");
    });

    // Enquire Modal 2 (Balaji Residency)
    const form2 = document.getElementById("enquireForm2");
    const contactFormDB2 = database.ref("balajiprop");

    form2.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        const name = document.getElementById("name2").value;
        const phone = document.getElementById("phone2").value;
        const email = document.getElementById("email2").value;

        // Save form data to Firebase
        saveFormData(name, phone, email, contactFormDB2);

        // Optionally show a success message or reset the form
        form2.reset();
        alert("Form submitted successfully!");
    });

     // Enquire Modal 3 (Misty Hills)
     const form3 = document.getElementById("enquireForm3");
     const contactFormDB3 = database.ref("mistyhillsprop");
 
     form3.addEventListener("submit", function(event) {
         event.preventDefault(); // Prevent form submission
 
         // Get form values
         const name = document.getElementById("name3").value;
         const phone = document.getElementById("phone3").value;
         const email = document.getElementById("email3").value;
 
         // Save form data to Firebase
         saveFormData(name, phone, email, contactFormDB3);
 
         // Optionally show a success message or reset the form
         form3.reset();
         alert("Form submitted successfully!");
     });

     // Enquire Modal 4 (Wai Greens)
     const form4 = document.getElementById("enquireForm4");
     const contactFormDB4 = database.ref("waigreens");
 
     form4.addEventListener("submit", function(event) {
         event.preventDefault(); // Prevent form submission
 
         // Get form values
         const name = document.getElementById("name4").value;
         const phone = document.getElementById("phone4").value;
         const email = document.getElementById("email4").value;
 
         // Save form data to Firebase
         saveFormData(name, phone, email, contactFormDB4);
 
         // Optionally show a success message or reset the form
         form4.reset();
         alert("Form submitted successfully!");
     });

      // Enquire Modal 5 (Jodhawat Construction)
      const form5 = document.getElementById("enquireForm5");
      const contactFormDB5 = database.ref("jodhawat");
  
      form5.addEventListener("submit", function(event) {
          event.preventDefault(); // Prevent form submission
  
          // Get form values
          const name = document.getElementById("name5").value;
          const phone = document.getElementById("phone5").value;
          const email = document.getElementById("email5").value;
  
          // Save form data to Firebase
          saveFormData(name, phone, email, contactFormDB5);
  
          // Optionally show a success message or reset the form
          form5.reset();
          alert("Form submitted successfully!");
      });
});