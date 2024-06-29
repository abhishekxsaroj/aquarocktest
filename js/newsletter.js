(function() {
    // Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyBuVmY9dFJJmNvfty_0oyPccxcXAJ9dJPI",
        authDomain: "aquarock-9f55a.firebaseapp.com",
        databaseURL: "https://aquarock-9f55a-default-rtdb.firebaseio.com",
        projectId: "aquarock-9f55a",
        storageBucket: "aquarock-9f55a.appspot.com",
        messagingSenderId: "678346156501",
        appId: "1:678346156501:web:d275c9b4e2892115edf55c",
        measurementId: "G-WXBKDRJLZM"
      };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    console.log("Firebase initialized");

    // Reference to your Firebase database
    const contactFormDB = firebase.database().ref("newsletter");

    // Function to handle form submission
    document.getElementById("newsletterForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission
        console.log("Form submitted");

        // Get email value from input field
        var email = document.getElementById("newsletterEmail").value;
        console.log("Email: ", email);

        // Check if email is empty
        if (!email) {
            alert("Please enter your email."); // Notify user to enter email
            return;
        }

        // Save email to Firebase
        saveEmail(email);

        // Display alert message
        alert("Thank you for subscribing to our newsletter!");

        // Reset the form after submission
        document.getElementById("newsletterForm").reset();
    });

    // Function to save email to Firebase database
    function saveEmail(email) {
        var newContactForm = contactFormDB.push();
        newContactForm.set({
            email: email
        }, function(error) {
            if (error) {
                console.log("Error saving data: ", error);
            } else {
                console.log("Data saved successfully");
            }
        });
    }
})();
