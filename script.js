// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar Shadow

window.addEventListener("scroll", function(){

const header=document.querySelector("header");

if(window.scrollY>50){

header.style.background="#0d0d0d";
header.style.boxShadow="0 10px 30px rgba(0,0,0,.4)";

}else{

header.style.background="#111";
header.style.boxShadow="none";

}

});

// Fade Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});
