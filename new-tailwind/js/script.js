document.getElementById('mobileMenuButton').addEventListener('click', function() {
    document.getElementById('mobileMenu').classList.toggle('hidden');
  });

  document.getElementById('asideMenu').addEventListener('click', function() {
    document.getElementById('SideMenu').classList.toggle('hidden');
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

function toggleContent(button, hiddenContent) {
  const buttonText = button.innerText.trim().toLowerCase();

  if (buttonText === 'read more') {
      hiddenContent.classList.remove('hidden');
      button.innerText = 'Read Less';
  } else {
      hiddenContent.classList.add('hidden');
      button.innerText = 'Read More';
  }
}

const readMoreButtons = document.querySelectorAll('.read-more');

readMoreButtons.forEach(button => {
button.addEventListener('click', function () {
    const hiddenContent = this.previousElementSibling.lastElementChild;
    toggleContent(this, hiddenContent);
  });
});
