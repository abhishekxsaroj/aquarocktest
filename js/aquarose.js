// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBuVmY9dFJJmNvfty_0oyPccxcXAJ9dJPI",
    authDomain: "aquarock-9f55a.firebaseapp.com",
    databaseURL: "https://aquarock-9f55a-default-rtdb.firebaseio.com",
    projectId: "aquarock-9f55a",
    storageBucket: "aquarock-9f55a.appspot.com",
    messagingSenderId: "678346156501",
    appId: "1:678346156501:web:3b54701c6305d476edf55c",
    measurementId: "G-D7XYB4PRPL"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the Firebase database
const contactFormDB = firebase.database().ref("aquarose");

// Function to handle form submission
document.getElementById("enquireForm").addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    // Get form values
    const name = getElementById("name").value;
    const phone = getElementById("phone").value;
    const email = getElementById("email").value;

    // Save data to Firebase
    saveMessages(name, phone, email);

    // Show success message (optional)
    alert("Form submitted successfully!");

    // Reset the form
    document.getElementById("enquireForm").reset();

    // Close the modal
    closeModal();
}

// Function to save messages to Firebase
function saveMessages(name, phone, email) {
    const newContactForm = contactFormDB.push();
    newContactForm.set({
        name: name,
        phone: phone,
        email: email
    });
}

// Utility function to get element by ID
function getElementById(id) {
    return document.getElementById(id);
}

// Function to open the modal
function openModal(event) {
    event.preventDefault();  // Prevent the default anchor tag behavior
    document.getElementById("enquireModal").style.display = "block";
}

// Function to close the modal
function closeModal() {
    document.getElementById("enquireModal").style.display = "none";
}

// Close the modal when the user clicks outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById("enquireModal")) {
        closeModal();
    }
}
