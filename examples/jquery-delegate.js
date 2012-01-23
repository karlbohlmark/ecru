$('body').on('click', 'a', function(){
    console.log('clicked an anchor')
})

document.getElementsByTagName('body')[0].addEventListener('click', function(e){
    if(e.target.mozMatchesSelector('a')){
        console.log('clicked an anchor');
        e.preventDefault();
    }
});