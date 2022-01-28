burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
homeli=document.getElementById("homeli");
hobbyli=document.getElementById("hobbyli");
skillsli=document.getElementById("skillsli");
home=document.getElementById("Home");
hobbies=document.getElementById("MyHobbies");
skills=document.getElementById("Skills");

burger.addEventListener('click',()=>{
    navbar.classList.toggle('hnav-resp');
    navList.classList.toggle('vclass-resp');
})

window.addEventListener('scroll',()=>{
    if(window.scrollY==0 || window.scrollY<(home.offsetTop+home.offsetHeight)){
        homeli.classList.add('borderbottom');
        hobbyli.classList.remove('borderbottom');
        skillsli.classList.remove('borderbottom');
    }
})
window.addEventListener('scroll',()=>{
    if(window.scrollY<(hobbies.offsetTop+hobbies.offsetHeight)&&window.scrollY>=(home.offsetTop+home.offsetHeight)){
        homeli.classList.remove('borderbottom');
        hobbyli.classList.add('borderbottom');
        skillsli.classList.remove('borderbottom');
    }
})
window.addEventListener('scroll',()=>{
    if(window.scrollY<(skills.offsetTop+skills.offsetHeight)&&window.scrollY>=(hobbies.offsetTop+hobbies.offsetHeight)) {
        homeli.classList.remove('borderbottom');
        hobbyli.classList.remove('borderbottom');
        skillsli.classList.add('borderbottom');
    }
})