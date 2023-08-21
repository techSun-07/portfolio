$(document).ready(function(){
    $('.carousel').carousel();
    $(".button-collapse").sideNav();
    $('.scrollspy').scrollSpy();
    $('.parallax').parallax();
    });

$.extend($.lazyLoadXT, {
  edgeY:  150,
  srcAttr: 'data-src'
});


document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector("form[name='contact_form']");
  const messageTextArea = document.getElementById("message");

  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const formData = new FormData(contactForm);
    const formSpreeURL = "https://formspree.io/f/mbjvolro";

    try {
      const response = await fetch(formSpreeURL, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.ok) {
        contactForm.reset();
        messageTextArea.placeholder = "Enter your message here ...";
        alert("Form submitted successfully!");
      } else {
        console.error(data);
        alert("An error occurred. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again later.");
    }
  });

  messageTextArea.addEventListener("focus", function () {
    if (messageTextArea.value === "") {
      messageTextArea.placeholder = "Enter your message here ...";
    }
  });

  messageTextArea.addEventListener("blur", function () {
    if (messageTextArea.value === "") {
      messageTextArea.placeholder = "Enter your message here ...";
    } else {
      messageTextArea.placeholder = "";
    }
  });
});
