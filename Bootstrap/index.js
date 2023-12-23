document.getElementById('toggleAside').addEventListener('click', function () {
    var asideSection = document.getElementById('asideSection');
    asideSection.classList.toggle('d-none');
});

const readMoreButtons = document.querySelectorAll(".read-more");

readMoreButtons.forEach(function (button) {
button.addEventListener("click", function () {
const projectDescription = button.previousElementSibling;
projectDescription.classList.toggle("d-none");

if (projectDescription.classList.contains("d-none")) {
    button.textContent = "Read More";
} else {
    button.textContent = "Read Less";
}
    });
});

const navbarToggle = document.querySelector(".navbar-toggler");
        const navLinks = document.querySelector("#nav-links");
        navbarToggle.addEventListener("click", function () {
        navLinks.classList.toggle("");
        });

        const navLinksList = document.querySelectorAll("#nav-links a");
        navLinksList.forEach(function (link) {
        link.addEventListener("click", function () {
                navLinks.classList.remove("show");
            });
        });

function sendMail(){
    var params =  {
        name : "Yonatan",
        email : "Yonatanalebachew7@gmail.com",
        message : document.getElementById('message').value
    }

const serviceID = "service_gcfy714";
const templateID = "template_w4c2jrn";

emailjs.send(serviceID , templateID , params) 
.then(
    res => {
        document.getElementById('message') = ""
        console.log(res);
        alert("your message sent successfully");
    })
    .catch((err) => console.log(err));
    document.getElementById('message') = ""
}