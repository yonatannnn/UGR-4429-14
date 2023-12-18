document.getElementById('ham-menu').addEventListener('click', function() {
    var nav = document.querySelector('.main-nav__list');
    nav.classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', function () {
    const readMoreButtons = document.querySelectorAll('.read-more');

readMoreButtons.forEach(button => {
 button.addEventListener('click', function () {
     const hiddenParagraph = this.previousElementSibling.querySelector('.hidden');
     const isHidden = hiddenParagraph.style.display === 'none';
     hiddenParagraph.style.display = isHidden ? 'block' : 'none';
     this.textContent = isHidden ? 'Read Less' : 'Read More';
 });
});
});

document.getElementById('side-menu').addEventListener('click', function() {
    var projectsAside = document.getElementById('projects-aside');
    projectsAside.classList.toggle('show');
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

}

const sideMenuButton = document.getElementById('side-menu');
const projectsAside = document.getElementById('projects-aside');
const side_nav = document.getElementsByClassName('projects-aside__nav');

sideMenuButton.addEventListener('click', () => {
projectsAside.style.display = (projectsAside.style.display === 'none' || projectsAside.style.display === '') ? 'block' : 'none';
side_nav.style.display = (side_nav.style.display === 'none' || side_nav.style.display === '') ? 'block' : 'none';
});


