/**
   * Animation on scroll
   */
 function aos_init() {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false
  });
}
window.addEventListener('load', () => {
  aos_init();
});


/*
    Carousel
*/
let items = document.querySelectorAll('.carousel .cus')
items.forEach((el) => {
  const minPerSlide = 3
  let next = el.nextElementSibling
  for (var i = 1; i < minPerSlide; i++) {
      if (!next) {
          // wrap carousel by using first child
          next = items[0]
      }
      let cloneChild = next.cloneNode(true)
      el.appendChild(cloneChild.children[0])
      next = next.nextElementSibling
  }
})

// delete tag 
function removeTag1() {
  let tag1 = document.getElementById("tag1");
  tag1.remove();
}

function removeTag2() {
  let tag2 = document.getElementById("tag2");
  tag2.remove();
}
