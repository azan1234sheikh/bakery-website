
  
// let words =["love","cake","Tart","Bite"];

// gsap.registerPlugin(ScrollTrigger);
// gsap.from("#box",{
//  scale : 0,
//  delay : 0.5,
//  duration : 1,
//  rotate : 360,
//  scrollTrigger:{
//     trigger: "#box",
//     scroller: "body",
//     start: "top 90% ",
//     end: "top 10%",
//    //  markers:true,
//     scrub:2,
//  }
// });
// // console.log(document.getElementById('page2'));
// // console.log(document.getElementById('box'));
// // Function to get responsive 'x' value
// function getResponsiveValue(desktopValue, mobileValue, smallMobileValue) {
//    if (window.innerWidth <= 320) {
//      return smallMobileValue;
//    } else if (window.innerWidth <= 768) {
//      return mobileValue;
//    } else {
//      return desktopValue;
//    }
//  }
 
//  function getResponsiveScrollTrigger(trigger) {
//    const startValue = getResponsiveValue("top 50%", "top 60%", "top 50%");
//    const endValue = getResponsiveValue("top 10%", "top 20%", "top 10%");
 
//    return {
//      trigger: trigger,
//      scroller: "body",
//      start: startValue,
//      end: endValue,
//      scrub: 3,
    
//      // Only show markers on desktop
//    };
//  }
 
//  function updateAnimations() {
//    // Kill existing animations
//    gsap.killTweensOf("#sub-section");
//    gsap.killTweensOf("#sub-sec-2");
 
//    // Recreate animations with updated values
//    gsap.to("#sub-section", {
//      x: () => {
//        const value = getResponsiveValue(-350, -150, -50);
//        console.log("x value for #sub-section:", value);
//        return value;
//      },
//      duration: () => {
//        const value = getResponsiveValue(3, 2, 1);
//        console.log("duration for #sub-section:", value);
//        return value;
//      },
//      scrollTrigger: getResponsiveScrollTrigger("#sub-section")
//    });
 
//    gsap.to("#sub-sec-2", {
//      x: () => {
//        const value = getResponsiveValue(-150, -100, -30);
//        console.log("x value for #sub-sec-2:", value);
//        return value;
//      },
//      duration: () => {
//        const value = getResponsiveValue(5, 3, 2);
//        console.log("duration for #sub-sec-2:", value);
//        return value;
//      },
//      scrollTrigger: getResponsiveScrollTrigger("#sub-section")
//    });

//    let cursor =gsap.to('.cursor',{
//      opacity:0,
//      ease: "power4.inout",
//      y:"5vw",
//      repeat:-1

//    })
//    let boxTl = gsap.timeline();
//      boxTl.from('.hi ',{
//         duration:2,
//         y:"1.5vw",
//         ease:"power3.out",
//        onComplete :()=>MasterTl.play()
//      })
     
//  let MasterTl=gsap.timeline({repeat:-1}).pause()  
//  words.forEach(word =>{
//       let TL = gsap.timeline({
//          repeat:1,
//          yoyo: true,
//          repeatDelay:1,
//       })
//     TL.to('.text',{
//       duration:1,
//       text: word
//     })
//     MasterTl.add(TL)

//  })
//    // Refresh ScrollTrigger to apply new values
//    ScrollTrigger.refresh();
//  }
 
//  // Initialize animations on page load
//  updateAnimations();
 
//  // Update animations on window resize
//  window.addEventListener('resize', () => {
//    updateAnimations();
//  });
 
//  //loading page Animation //


//   gsap.fromTo(
//       ".loading-page",
//       { opacity: 1 },
//       {
//           opacity: 0,
//           duration: 1.5,
//           delay: 3.5, // Delay before starting the fade out animation
//       },
      
//   );



