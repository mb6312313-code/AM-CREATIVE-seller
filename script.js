const particles=document.getElementById("particles");

for(let i=0;i<50;i++){

let p=document.createElement("div");
p.className="particle";

p.style.left=Math.random()*100+"%";
p.style.animationDelay=Math.random()*5+"s";
p.style.animationDuration=5+Math.random()*8+"s";

particles.appendChild(p);

}


let reviews=document.querySelectorAll(".review");
let i=0;

setInterval(()=>{

reviews.forEach(r=>r.classList.remove("active"));

reviews[i].classList.add("active");

i++;

if(i>=reviews.length){
i=0;
}

},4000);
