function homePageAnimation(){
    gsap.set(".sliderthing", {scale: 5})

var tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom bottom",
        // markers: true,
        scrub: 2
    }
},)

tl
.to(".vid-div", {
    '--clip': "0%",
    ease: Power2,
}, 'a')

tl.to(".sliderthing", {
    'scale': 1,
    ease: Power2
}, 'a')

tl
.to('.lft', {
    xPercent: -30,
    ease: Power4, 
    stagger: .03
}, 'b')

tl
.to('.rght', {
    xPercent: -20,
    ease: Power4, 
    stagger: .04
}, 'b')

}

function realPageAnimation(){
    gsap.to(".slide",{
        scrollTrigger: {
            trigger:".real",
            start : "top top",
            end : "bottom bottom+1000",
            scrub: 1,
    
        },
        xPercent: -225,
        ease: Power4,
        
    })
}

function teamPageAnimation(){
    document.querySelectorAll('.listelem')
.forEach((elem)=>{
    
    elem.addEventListener('mousemove', function(dets){
        
        gsap.to(this.querySelector(".picture"), {opacity: 1, x:  gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),  ease: Power4, duration: 0.5, })
        gsap.to(this.querySelector(".bluelayer"), {height: "100%", ease: Power2, })
        // alert()
    })

    elem.addEventListener('mouseleave', function(dets){
        gsap.to(this.querySelector(".picture"), {opacity: 0, ease: Power4, duration: 0.5})
        gsap.to(this.querySelector(".bluelayer"), {height: 0, ease: Power2, })
    })
})
}


function capsuleAnimation(){
    gsap.to('.capsule:nth-child(2)',{
        scrollTrigger : {
            trigger: ".capsules",
            start: 'top 40%',
            bottom: 'bottom bottom',
            scrub: 2,
        },
        y : 0,
        ease : Power4,
    })
}

ColorChange = () =>{
    document.querySelectorAll(".section")
.forEach(function(e){
    ScrollTrigger.create({
        trigger : e,
        start : "top 50%",
        end: "bottom 50%",
        onEnter: function(){
            document.body.setAttribute("theme", e.dataset.color)
        },
        onEnterBack: function(){
            document.body.setAttribute("theme", e.dataset.color)
        }
    })
})
}


homePageAnimation()

realPageAnimation()

teamPageAnimation()

capsuleAnimation()
ColorChange()




