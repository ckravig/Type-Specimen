document.addEventListener("scroll", function () {
    
    const navbar = document.querySelector(".navbar");
    
    const box = document.querySelector(".box");

    const logoText = document.querySelector(".logoText");

    const navbarHeight = 120;
    
    const distanceFromTop = Math.abs(
      document.body.getBoundingClientRect().top
    );
    
    if (distanceFromTop >= navbarHeight) navbar.classList.add("fixed-top");
    else navbar.classList.remove("fixed-top");

    if (distanceFromTop >= navbarHeight) box.classList.add("fixed-top");
    else box.classList.remove("fixed-top");

    if (distanceFromTop >= navbarHeight) logoText.classList.add("fixed-top");
    else logoText.classList.remove("fixed-top");
  

});