/* Scroll-to-Top  */
$(window).scroll(function () {
      if ($(this).scrollTop() > 600) {
        $('.scrollup').fadeIn();
      } else {
        $('.scrollup').fadeOut();
      }
    });
    
    $('.scrollup').click(function () {
      $("html, body").animate({
        scrollTop: 0
      }, 800);
      return false;
    });
    

    // smooth scroll
    $('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#carouselExampleIndicators"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, "") ==
      this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: target.offset().top
          },
          1000,
          function () {}
        );
      }
    }
  });
    // Loader
  window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
  });
     

    // Contact Form
    $("#sendForm").click(function (e) {
      e.preventDefault();
      const name = $("#name").val();
      const email = $("#email").val();
      const message = $("#message").val();
      if (name == '') {
        $("#name").addClass('error');
      } else {
        $("#name").removeClass('error');
      }
      if (message == '') {
        $("#message").addClass('error');
      } else {
        $("#message").removeClass('error');
      }
      if (email == '') {
        $("#email").addClass('error');
      } else {
        $("#email").removeClass('error');
      }
    
      if (email != '' && name != '' && message != '') {
        $.ajax({
            method: "POST",
            url: "php/contact-form.php",
            data: {
              email: email,
              name: name,
              message: message
            }
          })
          .done(function (msg) {
            console.log("Forma poslata!");
            $("#success").show();
          });
      }
    });
    