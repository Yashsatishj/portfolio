// CONTACT

const formInputs = document.querySelectorAll(
    ".floating-contact-form .form-container .form-input"
  );
  
  const contactIcon = document.querySelector(
    ".floating-contact-form .contact-icon"
  );
  
  const formContainer = document.querySelector(
    ".floating-contact-form .form-container"
  );
  
  contactIcon.addEventListener("click", () => {
    formContainer.classList.toggle("active");
  });
  
  formInputs.forEach((i) => {
    i.addEventListener("focus", () => {
      i.previousElementSibling.classList.add("active");
    });
  });
  
  formInputs.forEach((i) => {
    i.addEventListener("blur", () => {
      if (i.value === "") {
        i.previousElementSibling.classList.remove("active");
      }
    });
  });
  
//   END OF CONTACT

// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// END OF SMOOTH SCROLL

// NAVBAR UP DOWN

var prevScrollpos = window.pageYOffset;
            window.onscroll = function () {
                var currentScrollPos = window.pageYOffset;
                if (prevScrollpos > currentScrollPos) {
                    document.getElementById("navbar").style.top = "0";
                } else {
                    document.getElementById("navbar").style.top = "-80px";
                }
                prevScrollpos = currentScrollPos;
            }

// END OF NAVBAR UP DOWN


// PRINTING FONT

var typingEffect = new Typed(".multiText", {
    strings: ["Web Developer", "Data Analyst"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
})


var typingEffect = new Typed(".multiText2", {
    strings: ["My Skills..."],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
})

var typingEffect = new Typed(".multiText3", {
    strings: ["My Work..."],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
})

var typingEffect = new Typed(".multiText4", {
    strings: ["My Experience..."],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1500
})

// END OF PRINTING FONT