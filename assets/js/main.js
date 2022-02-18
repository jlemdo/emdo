const navMenu =  document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close"); 
const form = document.querySelector("#form")


form.addEventListener("submit", formulario);
/*=============== MOSTRAR MENU ===============*/
/* Validamo si la constante existe */
if(navToggle)
{
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")

    });
}


/*=============== ESCONDER MENU ===============*/
if(navClose)
{
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");

    });
}


/*=============== REMOVE MENU MOBILE ===============*/

const navLinks = document.querySelectorAll(".nav-link");

function linkAction(){
    const navMenu = document.getElementById("nav-menu");
    // Cuando demos click en nav link removeremos la clase menu
    navMenu.classList.remove("show-menu");
};
navLinks.forEach(n => n.addEventListener('click', linkAction));


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById("header")
    // Cuando el scroll es mas grande que 80, agrega la clase scroll header al header
    if(this.scrollY >= 80) {
    header.classList.add("scroll-header");
    }else{
        header.classList.remove("scroll-header");
    }
}
window.addEventListener("scroll", scrollHeader);

/*=============== TESTIMONIAL SWIPER ===============*/
var swiper = new Swiper(".testimonial-wrapper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


// get all sections that have an id defined
const sections = document.querySelectorAll("section[id]");

// add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter()
{
  // get current scroll position
  let scrollY = window.pageYOffset;
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute("id");
    /* - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector */
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
    {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add("active-link")
    }
    else
    {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove("active-link")
    }
  })
}


/*=============== PORTFOLIO ITEM FILTER ===============*/
const filterContainer = document.querySelector(".portfolio-filter-inner"),
      filterBtns = filterContainer.children, 
      totalFilterBtn =filterBtns.length,
      portfolioItems = document.querySelectorAll(".portfolio-item"),
      totalPortfolioItem = portfolioItems.length;
      

      for(let i = 0; i < totalFilterBtn; i++) {
          filterBtns[i].addEventListener("click", function(){
              filterContainer.querySelector(".active").classList.remove("active");
              this.classList.add("active");

              const filterValue = this.getAttribute("data-filter");
              for(let k=0; k < totalPortfolioItem; k++) {
                if(filterValue === portfolioItems[k].getAttribute("data-category")){
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                }else{
                    portfolioItems[k].classList.add("hide");
                    portfolioItems[k].classList.remove("show");
                }if(filterValue === "all"){
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                }

              }
          });
      };

/*=============== THEME/DISPLAY CUSTOMIZATION ===============*/
const theme =  document.querySelector("#theme-button");
const themeModal =  document.querySelector(".customize-theme");
const fontSizes =  document.querySelectorAll(".choose-size span");
const colorPalette = document.querySelectorAll(".choose-color span");
var root = document.querySelector(":root");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");


//Abrir Modal 

const openTheModal = () => {
    themeModal.style.display = 'grid';
}
//Cerrar Modal
const closeTheModal = (e) => {
    if(e.target.classList.contains('customize-theme'))
    {
        themeModal.style.display = 'none';
    }
}
theme.addEventListener("click", openTheModal);
themeModal.addEventListener("click", closeTheModal);



/*===== FONTS =====*/

//Eliminamos la clase activa de spans o font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove("active");
    });
}
fontSizes.forEach(size => {
    size.addEventListener('click', () => {

        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1'))
        {
            fontSize = '12px';
        }else if(size.classList.contains('font-size-2'))
        {
            fontSize = '14px';
        }else if(size.classList.contains('font-size-3'))
        {
            fontSize = '16px';
        }else if(size.classList.contains('font-size-4'))
        {
            fontSize = '18px';
        }
        //CAMBIA EL TAMANO DE LA FUENTE DESDE EL ROOT HTML
        document.querySelector('html').style.fontSize = fontSize;
    })
})

    
/*===== PRIMARY COLORS =====*/

//quitaremos la clase activa de colores

const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;
        changeActiveColorClass();

        if(color.classList.contains('color-1'))
        {
            primaryHue = 252;
        } 
        else if(color.classList.contains('color-2'))
        {
            primaryHue = 522;
        }
        else if(color.classList.contains('color-3'))
        {
            primaryHue = 352;
        }
        else if(color.classList.contains('color-4'))
        {
            primaryHue = 152;
        }
        else if(color.classList.contains('color-5'))
        {
            primaryHue = 202;
        }
        color.classList.add("active");
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})


/*===== THEME BACKGROUNDS =====*/

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// Cambiamos el background color

const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

Bg1.addEventListener('click', () => {
    //Agregamos la clase activa
    Bg1.classList.add('active');
    //Quitamos la calse activa de las otras clases
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    //Quitamos los cambios aplicados en el local Storage
    window.location.reload();
    
})

Bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';
    //Agregamos la clase activa
    Bg2.classList.add('active');
    //Quitamos la calse activa de las otras clases
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});
Bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';
    //Agregamos la clase activa
    Bg3.classList.add('active');
    //Quitamos la calse activa de las otras clases
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();
});








/*===== FORM =====*/

function formulario(e) {
    e.preventDefault();
    const formulario = new FormData(this)
    console.log(form.get('contacto'))

}