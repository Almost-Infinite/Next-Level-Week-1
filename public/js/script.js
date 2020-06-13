window.onload = function() {
    effectHome()

 
} 

function effectHome() {
    let site = document.querySelector("body");
    site.style.opacity = '1';
    site.style.transform = 'scale(1,1)';

    setTimeout(function(){ window.scrollTo(0, 0); }, 100);

}


