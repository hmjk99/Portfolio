
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

    // ---------skills toggle--------//
    const $skillsFrontHeader = $('.front')
    const $skillsBackHeader = $('.back')
    const $skillsBack = $('#skills-back')
    const $skillsFront = $('#skills-front')
    $skillsFrontHeader.on('click', ()=>{
        $skillsFront.slideToggle(1000)
    })
    $skillsBackHeader.on('click', ()=>{
        $skillsBack.slideToggle(1500)
    })
})
