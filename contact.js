document.addEventListener("DOMContentLoaded", function () {
   const form = document.querySelector("form");
 
   form.addEventListener("submit", async function (e) {
     e.preventDefault();
 
     const formData = new FormData(this);
     const url = "https://formspree.io/f/mbjvvola"; // Replace with your formspree endpoint
 
     try {
       const response = await fetch(url, {
         method: "POST",
         headers: {
           Accept: "application/json",
         },
         body: formData,
       });
 
       if (response.ok) {
         window.location.href = "thank-you.html"; // Redirect to thank you page after successful form submission
       } else {
         // Handle form submission failure
         alert("Form submission failed. Please try again later.");
       }
     } catch (error) {
       console.error("Error:", error);
     }
   });
 });