const email = document.getElementById("email");
const nameInput = document.getElementById("name");
const contactType = document.getElementById("contact-type");
const message = document.getElementById("message");
const errorElement = document.getElementById("error");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let messages = [];
  if (message.value === "" || message.value == null) {
    messages.push("Message is required");
  }
  if (messages.length > 0) {
    errorElement.innerText = messages.join(",");
  } else {
    errorElement.innerText = "We will contact you soon";
  }

  console.log(email.value, nameInput.value, contactType.value, message);
});
