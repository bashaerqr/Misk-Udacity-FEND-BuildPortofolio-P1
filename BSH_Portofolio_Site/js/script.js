const navslid= () =>{

    const menulist =document.querySelector('.menulist');
    const nav =document.querySelector('.nav_links');

    menulist.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');

    });
}

navslid();