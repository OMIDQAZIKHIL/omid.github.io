function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

/* arrow onclick scroll down */
document.addEventListener("DOMContentLoaded", function () {
  const arrow = document.querySelector(".arrow");

  arrow.addEventListener("click", () => {
    const scrollDistance = window.innerHeight;
    window.scrollBy(0, scrollDistance);
  });
});

// bottom to top button script

$(document).ready(function () {
  var btn = $("#button");

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });

  btn.on("click", function (e) {
    e.preventDefault();
    window.scrollTo(0, 0);
  });
});

// Enable tap flip on cards for touch devices
// Toggle the rotate class so tapping once flips, tapping again flips back.
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    let isFlipped = false;
    
    const flipCard = (e) => {
      e.preventDefault();
      e.stopPropagation();
      const content = card.querySelector(".__content");
      if (content) {
        isFlipped = !isFlipped;
        if (isFlipped) {
          content.classList.add("flipped");
        } else {
          content.classList.remove("flipped");
        }
      }
    };

    card.addEventListener("touchend", flipCard, false);
    card.addEventListener("click", flipCard, false);
  });
});

// links for directing to specific content to tag
document.addEventListener("DOMContentLoaded", function() {
  const navItems = document.querySelectorAll(".__container [data-section]");

  navItems.forEach(function(item) {
      item.addEventListener("click", function() {
          const targetId = this.getAttribute("data-section");
          const targetSection = document.getElementById(targetId);
          
          if (targetSection) {
              window.scrollTo({
                  top: targetSection.offsetTop,
                  behavior: "smooth"
              });
          }
      });
  });
});

// Image Modal Lightbox for Certifications
setTimeout(function() {
  const modal = document.getElementById("imageModal");
  const modalImage = document.querySelector(".modal-image");
  const modalClose = document.querySelector(".modal-close");
  const certImages = document.querySelectorAll(".cert-card img");

  console.log("Setup lightbox:", certImages.length, "images found");

  // Handle click and touch on images
  certImages.forEach((img, index) => {
    img.style.cursor = "pointer";
    
    // Pointer events work for both mouse and touch
    img.addEventListener("pointerdown", function(e) {
      console.log("Image tapped/clicked", index);
      e.preventDefault();
      e.stopPropagation();
      modalImage.src = this.src;
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
    }, false);
  });

  // Close button
  modalClose.addEventListener("click", function(e) {
    e.stopPropagation();
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  });

  // Click outside to close
  modal.addEventListener("click", function(e) {
    if (e.target === this) {
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });

  // Escape key to close
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      modal.classList.remove("active");
      document.body.style.overflow = "auto";
    }
  });
}, 500);
