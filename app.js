
function sendEmail() {
    window.location.href = "mailto:hmjk99@gmail.com";
}

$(()=>{
    // --------menu toggle-------//
    const $navMenu = $('.nav-menu')
    const $toggleIcon = $('.nav-icon')
    const $closeIcon = $('.close-icon')

    //---show---//
    $toggleIcon.on('click', ()=>{
        $navMenu.addClass('show')
    })
    //---hide---//
    $closeIcon.on('click', ()=>{
        $navMenu.removeClass('show')
    })
    //---hide menu when click on nav links ---//
    $('.nav-item').on('click', ()=>{
        $navMenu.removeClass('show')
    })
// =========== tried out displaying pages separately, it worked but decided just on single page with scroll looks better========== //
    // ---------------displaying page-----------------//
    // $('#nav-about').on('click', ()=>{
    //     $('#Home').css('display', 'none')
    //     $('#About').css('display', 'block')
    //     $('#Skills').css('display', 'none')
    //     $('#Projects').css('display', 'none')
    //     $('#Contact').css('display', 'none')
    // })
    // $('#nav-skills').on('click', ()=>{
    //     $('#Home').css('display', 'none')
    //     $('#About').css('display', 'none')
    //     $('#Skills').css('display', 'block')
    //     $('#Projects').css('display', 'none')
    //     $('#Contact').css('display', 'none')
    // })
    // $('#nav-project').on('click', ()=>{
    //     $('#Home').css('display', 'none')
    //     $('#About').css('display', 'none')
    //     $('#Skills').css('display', 'none')
    //     $('#Projects').css('display', 'block')
    //     $('#Contact').css('display', 'none')
    // })
    // $('#nav-contact').on('click', ()=>{
    //     $('#Home').css('display', 'none')
    //     $('#About').css('display', 'none')
    //     $('#Skills').css('display', 'none')
    //     $('#Projects').css('display', 'none')
    //     $('#Contact').css('display', 'flex')
    // })
    // $('#nav-home').on('click', ()=>{
    //     $('#Home').css('display', 'flex')
    //     $('#About').css('display', 'none')
    //     $('#Skills').css('display', 'none')
    //     $('#Projects').css('display', 'none')
    //     $('#Contact').css('display', 'none')
    // })

    // --------------------skills toggle--------------------//
    const $skillsFrontHeader = $('.front')
    const $skillsBackHeader = $('.back')
    const $skillsBack = $('#skills-back')
    const $skillsFront = $('#skills-front')
    $skillsFrontHeader.on('click', ()=>{
        $skillsFront.slideToggle(1000)
    })
    $skillsBackHeader.on('click', ()=>{
        $skillsBack.slideToggle(1000)
    })

    // -------- dark mode -------//
    $('.dark-button').on('click', ()=>{
        $('body').toggleClass('darkmode')
        $('#main-img').toggleClass('dark-border')
    })

    
})
