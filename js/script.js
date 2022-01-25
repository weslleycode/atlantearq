$(document).ready(function () {
    $(".hamburguer").click(function() {
      $(this).toggleClass("active");
      $(".menu").toggleClass("active");
    })
    });

    $(document).ready(function () {
        $(".menu-btn").click(function() {
          $(this).toggleClass("active");
          $(".menu").toggleClass("active");
        })
        });
