function show_Block(id, id_active){
    if ($(id).attr("class") == id_active) {
        document.body.style.overflow = 'auto';
    } else {
        document.body.style.overflow = 'hidden';
    }
    $(id).toggleClass(id_active);
}

function Navigate() {
    if ($('#burger').attr("class") == 'burger_active') {
        document.body.style.overflow = 'auto';
        $('#burger').toggleClass('burger_active');
    }
    const element = '#' + $(this).attr("name");
    $('html, body').animate({
        scrollTop: $(element).offset().top
    }, 500);
}

$(document).ready(function(){
    $('.clients__slider').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        slidesToShow: 3,
        cssEase: 'linear',
        speed: 3000,
        autoplaySpeed: 0,
        variableWidth: true,
        draggable: false,
        pauseOnFocus: false,
        pauseOnHover: false
    });

    // Event lisners
    $('#contact').on("click", () => {show_Block('#contact_me', 'contact_me_active')});
    $('.contact_me__cross').on("click", () => {show_Block('#contact_me', 'contact_me_active')});
    $('#contact_off').on("click", () => {show_Block('#contact_me', 'contact_me_active')});
    $('.header__burger').on("click", () => {show_Block('#burger', 'burger_active')});
    $('.burger__cross').on("click", () => {show_Block('#burger', 'burger_active')});
    $('#burger_off').on("click", () => {show_Block('#burger', 'burger_active')});
    $('.navigation__item').on("click", Navigate);
    $('#view_portfolio').on("click", Navigate);

    $(function ($) {
        $('form[name="form"]').submit(function (e) {
            e.preventDefault()
            $.ajax({
                type: this.method,
                url: this.action,
                data: $(this).serialize(),
                dataType: 'json',
                success: function (response) {
                    if (response.status == true){
                        console.log("OK");
                    }
                },
                error: function (response) {
                    console.log(response.responseJSON.errors);
                }
            })
            show_Block('#contact_me', 'contact_me_active');
            $("#contact").prop('disabled', true);
            $("#contact").html('Sent');
        })
    })
});
