// NavBar

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function close(){
    mainMenu.style.top = '-100%';
}


// Product Preview

let previewContainer = document.querySelector('.products-preview');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.product-container .product').forEach(product =>{
    product.onclick = () =>{
        previewContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
          previewBox.forEach(preview =>{
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close =>{
    close.querySelector('.fa-times').onclick = ()=>{
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    }
})


// Scroll top btn

 //Get the button
 var mybutton = document.getElementById("myBtn");

 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function () { scrollFunction() };

 function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }

 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }


