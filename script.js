const img = document.querySelector("img")

const cursor = document.querySelector("#cursor")

const lerp = (x, y, a) => x * (1 - a) + y * a;



img.addEventListener("mousemove", (e) =>{
    let dimensions = img.getBoundingClientRect()


    var xstart = dimensions.x;
         var xend = dimensions.x + dimensions.width;

    var ystart = dimensions.y;
         var yend = dimensions.y + dimensions.height;
     
      
     
    let zeroone =  gsap.utils.mapRange(xstart,xend,0,1 , e.pageX)

    let zerooney =  gsap.utils.mapRange(ystart,yend,0,1 , e.pageY)

    const rotX = (zeroone-0.5)*40;
    const rotY = (zerooney-0.5)*40;
    
    console.log(rotX , rotY)
    img.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`
})

img.addEventListener("mouseleave",()=>{
  setTimeout(()=>{
    img.style.transform = `rotateX(0deg) rotateY(0deg)`
  },100)

 
})

window.addEventListener("mousemove",(e)=>{


        cursor.style.left = `${e.x}px`
        cursor.style.top = `${e.y}px`
})