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

// Function to open modal
function openModal(event, purpose) {
    event.preventDefault();
    document.getElementById('formPurpose').value = purpose;
    document.getElementById('enquireModal').style.display = 'block';
}

// Function to close modal
function closeModal() {
    document.getElementById('enquireModal').style.display = 'none';
}

function submitForm(event) {
    event.preventDefault();

    // Get form values
    const name = getElementById("name").value;
    const phone = getElementById("phone").value;
    const email = getElementById("email").value;
    const purpose = getElementById('formPurpose').value;

    // Save data to Firebase
    saveMessages(name, phone, email, purpose);

    // Show success message (optional)
    alert("Form submitted successfully!");

    // Reset the form
    document.getElementById("enquireForm").reset();

    // Close the modal
    closeModal();

    // Directly open PDF download link in a new tab if purpose is 'download'
    if (purpose === 'download', 'homeDownload') {
        // Replace with your actual PDF URL
        var fileUrl = '/media/AQUAROCK.pdf';  // Ensure this path is correct
        window.open(fileUrl, '_blank');
    }
}

// Function to save messages to Firebase (keep this as is)
function saveMessages(name, phone, email, purpose) {
    const newContactForm = contactFormDB.push();
    newContactForm.set({
        name: name,
        phone: phone,
        email: email,
        purpose: purpose
    });
}

// Utility function to get element by ID (keep this as is)
function getElementById(id) {
    return document.getElementById(id);
}

// Function to close the modal when clicking outside of it (keep this as is)
window.onclick = function(event) {
    if (event.target == document.getElementById("enquireModal")) {
        closeModal();
    }
}
