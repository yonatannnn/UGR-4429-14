const burgerIcon = document.querySelector('#burger')
const navBarMenu = document.querySelector("#nav-links")
const asideToggle = document.querySelector('#aside-toggle');
const aside = document.querySelector('#aside');

burgerIcon.addEventListener('click',() =>{
    navBarMenu.classList.toggle("is-active")
    burgerIcon.classList.toggle("is-active")
})

asideToggle.addEventListener('click', () => {
    aside.classList.remove('is-hidden-mobile');
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
