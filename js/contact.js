// Ensure no duplicate FirebaseConfig declarations
if (!firebase.apps.length) {
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

  firebase.initializeApp(firebaseConfig);

  var contactFormDB = firebase.database().ref("contactForm");

  document
      .getElementById("contactForm")
      .addEventListener("submit", submitForm);

  function submitForm(e) {
      e.preventDefault();

      var message = document.getElementById("message").value;
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var phone = document.getElementById("phone").value;

      saveMessages(message, name, email, phone);

      // Show success message
      alert("Form submitted successfully!");

      // Reset the form
      document.getElementById("contactForm").reset();
  }

  const saveMessages = (message, name, email, phone) => {
      var newcontactForm = contactFormDB.push();

      newcontactForm.set({
          message: message,
          name: name,
          email: email,
          phone: phone
      });
  };

  const getElementById = (id) => {
      return document.getElementById(id).value;
  };
}
