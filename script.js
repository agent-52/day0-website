const tl = gsap.timeline()

tl.from(".logo, header>div>div>div, .hright", {

  y:-100,
  opacity: 0,
  duration: 1,
  delay: 0.2,
  stagger:0.2
})

tl.from(".linesp1", {
  opacity:0,
  x:-100,
  stagger: 0.2
})
tl.from(".imageSlide", {
  opacity:0,
  y:100,
  stagger: 0.2
})
tl.from(".maintr", {
  scale: 0,
  opacity: 0,

})
tl.from(".bar", {
  x:100,
  opacity: 0
})
tl.from(".maintld", {
  opacity: 0,
  x: -100,
})
tl.from(".main2>div", {
  stagger: 0.25,
  opacity: 0,
  y: 100

})