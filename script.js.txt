```javascript
// Loader

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

loader.style.opacity = "0";

setTimeout(() => {
loader.style.display = "none";
},600);

});


// Particles

const particles = document.getElementById("particles");

for(let i=0;i<60;i++){

let p = document.createElement("div");

p.className = "particle";

p.style.left = Math.random()*100 + "%";

p.style.animationDelay = Math.random()*5 + "s";

p.style.animationDuration = 5 + Math.random()*8 + "s";

particles.appendChild(p);

}


// Review Slider

let reviews = document.querySelectorAll(".review");

let current = 0;

setInterval(()=>{

reviews.forEach(r=>r.classList.remove("active"));

reviews[current].classList.add("active");

current++;

if(current >= reviews.length){
current = 0;
}

},4000);


// Counter Animation

const counters = document.querySelectorAll(".counter");

counters.forEach(counter=>{

const updateCounter = ()=>{

const target = +counter.getAttribute("data-target");

const count = +counter.innerText;

const increment = target / 100;

if(count < target){

counter.innerText = `${Math.ceil(count + increment)}`;

setTimeout(updateCounter,20);

}else{

counter.innerText = target + "+";

}

};

updateCounter();

});


// Scroll To Top Button

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY > 400){

topBtn.style.display = "block";

}else{

topBtn.style.display = "none";

}

});

topBtn.onclick = ()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


// Smooth Reveal Animation

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});


document.querySelectorAll(".card,.stat,.faq-item,.review").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition=".8s";

observer.observe(el);

});


// Mouse Glow Effect

document.addEventListener("mousemove",(e)=>{

let glow = document.querySelector(".mouse-glow");

if(!glow){

glow = document.createElement("div");

glow.className = "mouse-glow";

document.body.appendChild(glow);

glow.style.position = "fixed";

glow.style.width = "300px";

glow.style.height = "300px";

glow.style.borderRadius = "50%";

glow.style.pointerEvents = "none";

glow.style.background =
"radial-gradient(circle,rgba(255,215,0,.15),transparent 70%)";

glow.style.zIndex = "-1";

}

glow.style.left = e.clientX - 150 + "px";

glow.style.top = e.clientY - 150 + "px";

});


// FAQ Hover Effect

document.querySelectorAll(".faq-item").forEach(item=>{

item.addEventListener("mouseenter",()=>{

item.style.transform = "translateY(-5px)";

});

item.addEventListener("mouseleave",()=>{

item.style.transform = "translateY(0)";

});

});


// Console Message

console.log(
"%cAM CREATIVE Ultra Pro Website Loaded 🚀",
"color:gold;font-size:18px;font-weight:bold;"
);
```
