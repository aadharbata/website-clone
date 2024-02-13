
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function movecircle(){
    var xscale=1;
    var yscale=1;
    var xprev=0;
    var yprev=0;
    window.addEventListener("mousemove", function(dets){
        xscale=gsap.utils.clamp(.8,1.2,dets.clientX-xprev);
        yscale=gsap.utils.clamp(.8,1.2,dets.clientY-yprev);
        xprev=dets.clientX;
        yprev=dets.clientY;
        circle(xscale,yscale);
    })
}
function circle(xscale,yscale) {
    window.addEventListener("mousemove", function(dets) {
    document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
}
movecircle();
circle();
function firstanim(){
    var t1=gsap.timeline();
    t1.from("#nav",{
        y:'-10',
        opacity: 0,
        duration: 1.2,
        ease: Expo.easeInOut

    })
    .to(".boundingelem",{
        y: 0,
        delay: -1,
        duration: 2,
        stagger: .2,
        ease: Expo.easeInOut
        
    })
    .from("#headerfooter",{
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay:-1,
        ease: Expo.easeInOut
        
    })


}
firstanim();
// document.querySelectorAll(".elem").forEach(function (elem) {
//     console.log("elem:", elem);
//     elem.addEventListener("mousemove", function (dets) {
//         console.log("mouse move event:", dets);
//         gsap.to(elem.querySelector("img"), {
//             opacity: 1,
//             ease: Power1,
//         });
//     });
// });

       
 document.querySelectorAll(".elem").forEach(function (elem) {
 var rotate = 0;
  var diffrotate = 0;
    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffrotate = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3, // Corrected to a string
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrotate)
        });
        
    });
    elem.addEventListener("mouseleave", function (dets) {
          
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3, // Corrected to a string
            duration:0.9,
            

        
        
    });
});
});






// function circle() {
//     window.addEventListener("mousemove", function(dets) {
//         document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
//     });
// }
