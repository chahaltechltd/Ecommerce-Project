
     document.addEventListener('DOMContentLoaded', function() {
    const bar = document.getElementById('bar');
    const close = document.getElementById('close');
    const nav = document.getElementById('navbar');

    function toggleNav() {
        nav.classList.toggle('active');
    }

    if (bar && close) {
        bar.addEventListener('click', toggleNav);
        close.addEventListener('click', toggleNav);
    }

   
    function checkWidth() {
        if (window.innerWidth <= 768) { 
            bar.style.display = 'block'; 
            close.style.display = 'block'; 
            nav.classList.remove('active'); 
        } else {
            bar.style.display = 'none'; 
            close.style.display = 'none';
            nav.classList.add('active'); 
        }
    }

  
    checkWidth();
    window.addEventListener('resize', checkWidth);
});

              var MainImg = document.getElementById("MainImg");
         var smallimg = document.getElementsByClassName("small-img");
         
         for (var i = 0; i < smallimg.length; i++) {
             smallimg[i].onclick = function() {
                 MainImg.src = this.src;
             };
         }