$('h3.latest').click(function(){
    $(this)
        .closest('.teaser-container-inner')
        .find('.hoverlist')
        .toggle()
    return false;
});