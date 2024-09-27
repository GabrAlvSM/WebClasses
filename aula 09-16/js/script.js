// const btn = document.querySelector(".active");

// btn.addEventListener("click", ())

$(document).ready(function(){
    $('.mobile-btn').on('click', function() {
        $('.mobile-menu').toggleClass('active');
        $('.mobile-btn').find('i').toggleClass('fa-x')
    })
})