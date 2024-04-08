let a=document.getElementById("himber")
let b=document.getElementById("nav")


a.addEventListener("click",()=>{
    if(b.style.display==="none"){
        b.style.display="block"
    }
    else{
        b.style.display="none"
    }
    
    
})
window.addEventListener("resize",()=>{
    if(window.innerWidth>800){
        b.style.display="none"

    }

})

let c=document.getElementById("btn1")

let d=document.getElementById("cardall")
c.addEventListener("click",()=>{
    d.style.display="block"
    d.style.display="flex"
    e.style.display="block"
    e.style.display="flex"
    f.style.display="none"
    h.style.display="none"
    j.style.display="none"
    l.style.display="none"

    

    

})
let e=document.getElementById("cardalla")
let f=document.getElementById("vegicard")
let g=document.getElementById("btn2")
g.addEventListener("click",()=>{
    f.style.display="block"
    f.style.display="flex"
    d.style.display="none"
    e.style.display="none"
    h.style.display="none"
    j.style.display="none"
    l.style.display="none"

   
   
    
})
let h=document.getElementById("vegicard1")
let i=document.getElementById("btn3")
i.addEventListener("click",()=>{
    h.style.display="block"
    h.style.display="flex"
    
    d.style.display="none"
    e.style.display="none"
    f.style.display="none"
    j.style.display="none"
    l.style.display="none"
    
   
})
let j=document.getElementById("vegicard2")
let k=document.getElementById("btn4")
k.addEventListener("click",()=>{
    j.style.display="block"
    j.style.display="flex"
    h.style.display="none"
    
    d.style.display="none"
    e.style.display="none"
    f.style.display="none"
    l.style.display="none"

   
   
    
})
let l=document.getElementById("vegicard3")
let m=document.getElementById("btn5")
m.addEventListener("click",()=>{
    l.style.display="block"
    l.style.display="flex"
   

    h.style.display="none"
    
    d.style.display="none"
    e.style.display="none"
    f.style.display="none"
    j.style.display="none"

   

    
})
let big=document.getElementById("header")
let con=document.getElementById("big4")
let big2=document.getElementById("big2")
let big3=document.getElementById("big3")
let home=document.getElementById("home")
home.addEventListener("click",()=>{
    let tem=document.getElementById("big")
    tem.scrollIntoView({
        behavior:"smooth"
        
    })
})
let shop=document.getElementById("shop")
shop.addEventListener("click",()=>{
    let tem=document.getElementById("big2")

    tem.scrollIntoView({
        behavior:"smooth"
        
    })
})
let shop1=document.getElementById("shop1")

shop1.addEventListener("click",()=>{
    let tem=document.getElementById("big3")
    tem.scrollIntoView({
        behavior:"smooth"
        
    })
})
    



let sh=document.getElementById("con1")


sh.addEventListener("click",()=>{
    let tem=document.getElementById("big4")
    tem.scrollIntoView({
        behavior:"smooth"
        
    })

    console.log("ddd")
})
let img1=document.getElementById("divimg")
let btnas=document.getElementById("btnas")
btnas.addEventListener("click",()=>{
    img1.scrollBy(400,0)
    
})
let btnbs=document.getElementById("btnbk")
btnbs.addEventListener("click",()=>{
    img1.scrollBy(-400,0)
    
      
})
let hom=document.getElementById("homl")
hom.addEventListener("click",()=>{
    let tem=document.getElementById("big")
    tem.scrollIntoView({
        behavior:"smooth"
        
    })

    
})
let shok=document.getElementById("shop1a")

    shok.addEventListener("click",()=>{
        console.log("dddddk")
        let tem=document.getElementById("big2")
        tem.scrollIntoView({
            behavior:"smooth"
            
        })
    
    })

let sho1=document.getElementById("shop1b")
sho1.addEventListener("click",()=>{
    let tem=document.getElementById("big3")
    tem.scrollIntoView({
        behavior:"smooth"
        
    })
    

    
})

let con1a=document.getElementById("con1c")
con1a.addEventListener("click",()=>{
    let tem=document.getElementById("big4")
    tem.scrollIntoView({
        behavior:"smooth"
        
    })


    
})






