function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


// Add event listener to the container. It allows to clear and close the form when clicked outside the form-container
document.getElementById("background").addEventListener("click", function (event) {
    if (event.target === this) {
        closeForm();
        var form = document.getElementById("myForm").querySelector("form");
        form.reset(); // Clear the form data
        document.getElementById("myForm").style.display = "none";
    }
});

document.getElementById("background2").addEventListener("click", function (event) {
    if (event.target === this) {
        closeForm();
        var form = document.getElementById("myForm").querySelector("form");
        form.reset(); // Clear the form data
        document.getElementById("myForm").style.display = "none";
    }
});

// Function to open the pop-up form
function openPopupForm() {
    document.getElementById("popup-form-thanks").style.display = "block";
    document.getElementById("myForm").style.display = "none";
    document.addEventListener("mousedown", closeOnClickOutside);
  }


function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        location: document.getElementById("location").value,
        role: document.getElementById("role").value,
        songs: document.getElementById("songs").value,
        genre: document.getElementById("genre").value,
        budget: document.getElementById("budget").value,
        time: document.getElementById("time").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_egsyqdh";
    const templateID = "template_515ywtl";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("location").value = "";
            document.getElementById("role").value = "";
            document.getElementById("songs").value = "";
            document.getElementById("genre").value = "";
            document.getElementById("budget").value = "";
            document.getElementById("time").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            openPopupForm();
            // alert("Your message sent successfully!!")
            // document.getElementById("myForm").style.display = "none";
        })
        .catch(err => console.log(err));

}

  // Function to close the pop-up form
  function closePopupForm() {
    document.getElementById("popup-form-thanks").style.display = "none";
    document.removeEventListener("mousedown", closeOnClickOutside);
  }

  // Function to close form when clicking outside
  function closeOnClickOutside(event) {
    if (!event.target.closest("#popup-form-thanks")) {
      closePopupForm();
    }
  }
}

