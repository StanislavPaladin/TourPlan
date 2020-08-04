$(document).ready(function () {
  var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
  });
  var reviewsSlider = new Swiper('.reviews-slider', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.reviews-slider__button--next',
      prevEl: '.reviews-slider__button--prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
  });

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function() {
  console.log("клик по кнопке меню");
  document
  .querySelector(".navbar-bottom")
  .classList.toggle("navbar-bottom--visible");
});

var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__close")
modalButton.on('click', openModal);
closeModalButton.on('click', closeModal);


function openModal() {
  var targetModal = $(this).attr("data-href");
  $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
  $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
}
function closeModal(event) {
  event.preventDefault();
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass('modal__overlay--visible');
  modalDialog.removeClass('modal__dialog--visible');
}

//обработка форм
$(".form").each(function () {
  $(this).validate({
    errorClass: "invalid",
    messages: {
      name: {
        required: "Please specify your name",
        minlength: "The name must be at least 2 characters long",
      },
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com",
      },
      phone: {
        required: "Phone is required",
      }
    }
  });
})
});