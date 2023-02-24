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
})
