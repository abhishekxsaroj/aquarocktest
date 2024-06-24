  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBuVmY9dFJJmNvfty_0oyPccxcXAJ9dJPI",
    authDomain: "aquarock-9f55a.firebaseapp.com",
    databaseURL: "https://aquarock-9f55a-default-rtdb.firebaseio.com",
    projectId: "aquarock-9f55a",
    storageBucket: "aquarock-9f55a.appspot.com",
    messagingSenderId: "678346156501",
    appId: "1:678346156501:web:15ed67445d158cdeedf55c",
    measurementId: "G-91F65J2DRT"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the Firebase database
const database = firebase.database();
const contactFormDB = database.ref("aquaroseprop"); // Adjust the ref name as needed

// Ensure the DOM is loaded before adding event listeners
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("enquireForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Get form values
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;

        // Save form data to Firebase
        saveFormData(name, phone, email);

        // Optionally show a success message or reset the form
        form.reset();
        alert("Form submitted successfully!");
    });

    // Function to save form data to Firebase
    function saveFormData(name, phone, email) {
        // Generate a new key for each form submission
        const newContactForm = contactFormDB.push();

        // Set the form data
        newContactForm.set({
            name: name,
            phone: phone,
            email: email
        });
    }
});
