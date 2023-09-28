// loading screen
$(document).ready(function(){
  var loading = $(".wrapper");
  loading.fadeOut();

  document.querySelector('body').classList.remove("overf-y");
});

// toggle tooltip in navbar
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Activate OwlCarousel Config

$('.main-carousel').owlCarousel({
  items:1,
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true
})

$('.partner-slider').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})

$('.category-slider').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  responsive:{
    0:{
        items:1
    },
    576:{
        items:2
    },
    992:{
        items:3
    }
  }
})

$('.product-slider').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      576:{
          items:2
      },
      768:{
          items:3
      },
      992:{
          items:3
      },
      1200:{
          items:4
      }
  }
})

$('.thumbnail-slider').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  items:1,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
})

$('.e-1-slider').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
})

$('.e-m-slider-27').owlCarousel({
  items: 2,
  center: true,
  loop: true,
  margin: 46,
  nav: false,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 2
    }
  }
})

$('.e-m-slider-25-1').owlCarousel({
  items: 3,
  center: true,
  loop: true,
  margin: 10,
  nav: false,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
})

$('.e-m-slider-25-3').owlCarousel({
  items: 3,
  center: true,
  loop: true,
  margin: 10,
  dots:false,
  nav: false,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
});

$('.prod-carousel').owlCarousel({
  items: 4,
  dots:false,
  loop: true,
  nav: false,
  autoplay: true,
  autoplayTimeout: 10000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 4
    },
    768: {
      items: 3
    },
    992: {
      items: 4
    }
  }
});

// Running Select2 on input select

($(document).ready(function() {
  $('.js-example-basic-single').select2({
    width: '100%',
  });

  // Adjusting Select2 ico
  let selIco = document.querySelectorAll('.select2-selection__arrow');
  selIco.forEach(element => {
    element.innerHTML = "<i class='fas fa-angle-down'></i>";
  });
}));

($(document).ready(function() {
  $('.home-category').select2({
    width: '100%',
    dropdownParent: $('.cate-dropdown')
  });

  // Adjusting Select2 ico
  let selIco = document.querySelectorAll('.select2-selection__arrow');
  selIco.forEach(element => {
    element.innerHTML = "<i class='fas fa-angle-down'></i>";
  });
}));

// Adjusting Owl nav elements
let owlPrev = document.querySelectorAll('.owl-prev');
owlPrev.forEach(element => {
  element.innerHTML = "<i class='fas fa-chevron-left'></i>";
});

let owlNext = document.querySelectorAll('.owl-next');
owlNext.forEach(element => {
  element.innerHTML = "<i class='fas fa-chevron-right'></i>";
});



// Timer Implementation on Home page

let countDown = new Date("Jun 10, 2022 14:00:00").getTime();
let CountingDown = setInterval(() => {
    let now = new Date().getTime(),
        timeRemaining = countDown - now;

    let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
        hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)),
        seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    $("#days").text(days);
    $("#hours").text(hours);
    $("#mins").text(minutes);
    $("#secs").text(seconds);

    if(timeRemaining <= 1000)
      clearInterval(CountingDown);
}, 1000);

// cart item count 

    // Increment Product
document.querySelectorAll(".prod-plus").forEach(element => {
  let price = element.parentElement.nextElementSibling.firstElementChild.innerHTML;
  element.addEventListener("click", ()=>{
    let item = element.previousElementSibling.firstElementChild.getAttribute("value");

    if(item >= 1){
      item++;
      element.previousElementSibling.firstElementChild.setAttribute("value", item);
      element.previousElementSibling.previousElementSibling.innerHTML= item;

      element.parentElement.nextElementSibling.firstElementChild.innerHTML =  price * item;
    } 
  })
});

    // Decrement Product
document.querySelectorAll(".prod-minus").forEach(element => {
  let price = element.parentElement.nextElementSibling.firstElementChild.innerHTML;
  element.addEventListener("click", ()=>{
    let item = element.nextElementSibling.nextElementSibling.firstElementChild.getAttribute("value");

    if(item > 1){
      item--;
      element.nextElementSibling.nextElementSibling.firstElementChild.setAttribute("value", item);
      element.nextElementSibling.innerHTML= item;

      element.parentElement.nextElementSibling.firstElementChild.innerHTML =  price * item;
    } 
  })
});

    // Bad Section toggle select
let badButtons = document.querySelectorAll(".bad-section .toggle");
badButtons.forEach(element =>{
  element.addEventListener("click", (e)=>{
    badButtons.forEach(ele =>{
      ele.classList.remove("bg-orange");
    })
    e.target.classList.add("bg-orange");
  })
});

    // input file

(function(document, window, index)
{
	let inputs = document.querySelectorAll('.inputfile');
	Array.prototype.forEach.call(inputs, function(input){
		let label	 = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener('change', function(e){
			let fileName = '';
			if(this.files && this.files.length > 1)
				fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
			else
				fileName = e.target.value.split('\\').pop();

			if(fileName)
				label.querySelector('span').innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});

		// Firefox bug fix
		input.addEventListener('focus', function(){input.classList.add('has-focus'); });
		input.addEventListener('blur', function(){input.classList.remove('has-focus'); });
	});
}(document, window, 0));

// partners section

let row = document.querySelector(".part .row");
let floatImg = document.querySelector(".part .flot-img");
let trigger = document.querySelector(".part .more");

if(row){

if(row.clientHeight < 630){
  row.classList.remove("edged");
  floatImg.classList.add("d-none");
  trigger.classList.add("d-none");
}else if (row.clientHeight >= 630){
  row.classList.add("edged");
  var show = 1;
}

trigger.addEventListener("click", ()=>{
  row.classList.toggle("edged");
  floatImg.classList.toggle("d-none");
  if(show){
    trigger.innerText = "show less";
    show = 0;
  }else if(!show){
    trigger.innerText = "show more";
    show = 1
  }
});
  
};

// request page
let request = document.querySelector(".request .req");
if(request){
let req1 = document.querySelector("#request1");
let req2 = document.querySelector("#request2");
let req3 = document.querySelector("#request3");

let s2 = document.querySelector("#step2");
let s2C = document.querySelector("#step2-check");
let s3 = document.querySelector("#step3");

document.querySelector("#request1 a").addEventListener("click", ()=>{
  req1.classList.toggle("d-none");
  req2.classList.toggle("d-none");

  s2.classList.toggle("done");
  s2C.classList.toggle("check-done");

  request.scrollIntoView({behavior: "smooth"});
});

document.querySelector("#request2 #pervious").addEventListener("click", ()=>{
  req2.classList.toggle("d-none");
  req1.classList.toggle("d-none");

  s2.classList.toggle("done");
  s2C.classList.toggle("check-done");

  request.scrollIntoView({behavior: "smooth"});
});

document.querySelector("#request2 #next").addEventListener("click", ()=>{
  req2.classList.toggle("d-none");
  req3.classList.toggle("d-none");

  s3.classList.toggle("done");

  request.scrollIntoView({behavior: "smooth"});
});

document.querySelector("#request3 a").addEventListener("click", ()=>{
  req3.classList.toggle("d-none");
  req2.classList.toggle("d-none");

  s3.classList.toggle("done");

  request.scrollIntoView({behavior: "smooth"});
});
}

// fix text area on small devices
let textAreas = document.querySelectorAll(".txt-areas");
if(textAreas){
  textAreas.forEach(ele => {
    let labelHeight = ele.nextElementSibling.clientHeight;
    ele.style.paddingTop = labelHeight-28 + "px";
  })

  textAreas.forEach(ele => ele.addEventListener("focus", ()=>{
    let labelHeight = ele.nextElementSibling.clientHeight;
    ele.style.paddingTop = labelHeight-28 + "px";
  }))
}

/// Product PAGE

// display product

let prods = document.querySelectorAll(".prod-images .item");
let currProd = document.querySelector(".prod-img img");

if(prods){
  prods.forEach(p => {
    p.addEventListener("click", ()=>{
      let img = p.firstElementChild.getAttribute("src");
      currProd.setAttribute("src", img);
    })
  })
}

// size adjust

let sizes = document.querySelectorAll(".size-form .item");

if(sizes.length){
  let perv = sizes[0];
  perv.previousElementSibling.checked = true;
  perv.firstElementChild.classList.add("bg-orange");
  perv.firstElementChild.nextElementSibling.classList.remove("d-none")

  sizes.forEach(s => {
    s.addEventListener("click", ()=>{
      perv.previousElementSibling.checked = false;
      perv.firstElementChild.classList.remove("bg-orange");
      perv.firstElementChild.nextElementSibling.classList.add("d-none")
      perv = s
      s.previousElementSibling.checked = true;
      s.firstElementChild.classList.add("bg-orange");
      s.firstElementChild.nextElementSibling.classList.remove("d-none")
    })
  })
}

// payment cash

let cash = document.getElementById("gridRadios3");
let checkboxes = document.querySelectorAll(".form-check-input");
if(cash){
  let inputs = document.querySelectorAll(".online");
  checkboxes.forEach(ch =>{
    ch.addEventListener("input", ()=>{
      if(cash.checked)
        inputs.forEach(i => i.classList.add("d-none"));
      else
        inputs.forEach(i => i.classList.remove("d-none"));
    })
  })
}


// header responsive

const navbarMenu = document.getElementById('navbar');

// Toggle Menu Function

function toggleMenu() {
	navbarMenu.classList.toggle('active');
}

// Collapse SubMenu Function
navbarMenu.addEventListener('click', (e) => {
	if (e.target.hasAttribute('data-toggle') && window.innerWidth <= 992) {
		e.preventDefault();
		const menuItemHasChildren = e.target.parentElement;

		// If menu-item-child is Expanded, then Collapse It
		if (menuItemHasChildren.classList.contains('active')) {
      if(menuItemHasChildren.firstElementChild.getAttribute('data-toggle') == "sub-menu"){
        collapseSubMenu(menuItemHasChildren);
      }else if(menuItemHasChildren.firstElementChild.getAttribute('data-toggle') == "subsub-menu"){
        collapseSubSubMenu(menuItemHasChildren);
      }
        
		} else {
			// Expanded the New menu-item-child

			menuItemHasChildren.classList.add('active');
      if(menuItemHasChildren.firstElementChild.getAttribute('data-toggle') == "sub-menu"){
        const subMenu = menuItemHasChildren.querySelector('.sub-menu');
			  subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
      }if(menuItemHasChildren.firstElementChild.getAttribute('data-toggle') == "subsub-menu"){
        console.log("Adding scroll height for subsub menu");
        const subMenu = menuItemHasChildren.parentElement;
        const subsubMenu = menuItemHasChildren.querySelector('.subsub-menu');
        subsubMenu.style.maxHeight = subsubMenu.scrollHeight + 'px';
			  subMenu.style.maxHeight = subMenu.scrollHeight + subsubMenu.scrollHeight + 'px';
      }
		}
	}
});

function collapseSubMenu(item) {
  item.firstElementChild.nextElementSibling.removeAttribute('style');
	item.classList.remove('active');
}

function collapseSubSubMenu(item) {
  item.firstElementChild.nextElementSibling.removeAttribute('style');
	item.classList.remove('active');
}

// Fixed Resize Screen Function
window.addEventListener('resize', () => {
	if (this.innerWidth > 992) {
		// If navbarMenu is Open, then Close It
		if (navbarMenu.classList.contains('active')) {
			toggleMenu();
		}

		// If menu-item-child is Expanded, then Collapse It
		if (navbarMenu.querySelector('.menu-item-child.active')) {
			collapseSubMenu();
		}
	}
});

// Sticky header

window.onscroll = function() {Stickyhead()};

var header = document.querySelector('header');
let firstNav = document.querySelector('#FirstNav');
let secNav = document.querySelector('#secondNav');
let dropdownclose = document.querySelector('#navbarDropdown');
var sticky = header.offsetTop;

var prevScrollpos = window.pageYOffset;

function Stickyhead() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky-top");
  } else {
    header.classList.remove("sticky-top");
  }
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    firstNav.classList.remove("shadow-lg");
    secNav.style.top = "0";
  } else {
    secNav.style.top = `-${secNav.clientHeight}px`;
    firstNav.classList.add("shadow-lg");
    $('.dropdown-toggle-m').each(function() {
      $( this ).dropdown('hide');
    });
  }
  prevScrollpos = currentScrollPos;
}

// Scroll to top button

var btn = $('#scrollToTop');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

