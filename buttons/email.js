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
            alert("Your message sent successfully!!")

        })
        .catch(err => console.log(err));

}