function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
 
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector(".main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();


function toggleMenu() {
    var menu = document.querySelector('.nav-items');
    menu.classList.toggle('active');
}

// Close the dropdown when clicking outside of it
window.onclick = function(event) {
    if (!event.target.matches('.menu-icon')) {
        var menu = document.querySelector('.nav-items');
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    }

};

