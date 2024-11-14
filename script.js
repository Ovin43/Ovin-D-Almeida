document.addEventListener("DOMContentLoaded", function() {
    const target = document.querySelector("#loading-bar");
    const milestones = document.querySelectorAll(".milestone");
    const animationDuration = 4000;
    const milestoneTimings = {
        25: animationDuration * 0.05,
        50: animationDuration * 0.3,
        75: animationDuration * 0.6,
        100: animationDuration,
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          milestones.forEach(milestone => {
            const progress = parseInt(milestone.getAttribute("data-progress"));
            setTimeout(() => {
                milestone.classList.add("glow");
            }, milestoneTimings[progress]);
        });
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.1 
    });
  
    observer.observe(target);
  });
  



const mand=document.querySelector(".mande");
const ddd=document.getElementById("dkd");
const skill=document.getElementById("sks");
skill.addEventListener('mouseenter',()=>{
    skill.style.width="400px";
    skill.style.height="400px";
    ddd.style.display="block";
    mand.style.color="white";
})
skill.addEventListener('mouseleave',()=>{
    skill.style.width="auto"
    skill.style.height="auto"
    ddd.style.display="none";
    mand.style.color="#ff7b00";
})



const pto1=document.getElementById("pro1");
const pto2=document.getElementById("pro2");
const pto3=document.getElementById("pro3");
const pto4=document.getElementById("pro4");
const pto5=document.getElementById("pro5");
const pto6=document.getElementById("pro6");

document.addEventListener("DOMContentLoaded",()=>{
    const progg= document.getElementById("projevt");
    const obse=new IntersectionObserver((eent)=>{
        eent.forEach((enetr)=>{
            if(enetr.isIntersecting){
                setTimeout(()=>{
                    pto1.style.transform="translate(0%,0%)";
                    pto2.style.transform="translate(0%,0%)";
                    pto3.style.transform="translate(0%,0%)";
                    pto4.style.transform="translate(0%,0%)";
                    pto5.style.transform="translate(0%,0%)";
                    pto6.style.transform="translate(0%,0%)";
                },1000)     
                obse.unobserve(enetr.progg) 
            };
        });
    },{
        threshold: 0.1 
      });
      obse.observe(progg);
});
const po1=document.getElementById("po1");
const po2=document.getElementById("po2");
const po3=document.getElementById("po3");
const po4=document.getElementById("po4");
const po5=document.getElementById("po5");
const po6=document.getElementById("po6");


function shum(okk){
    switch(okk){
        case "pro1":
            pto1.style.gridArea="1/1/1/3";
            pto2.style.gridArea="1/3/1/4";
            pto3.style.gridArea="1/4/1/5";
            po1.style.display="flex";
            po2.style.display="none";
            po3.style.display="none";
            pto1.style.backgroundImage="url('img/skin.jpg')";
            pto1.style.backgroundSize="cover";
            pto2.style.backgroundImage="";
            pto3.style.backgroundImage="";
            break;
        case "pro2":
            pto1.style.gridArea="1/1/1/2";
            pto2.style.gridArea="1/2/1/4";
            pto3.style.gridArea="1/4/1/5";
            po2.style.display="flex";
            po1.style.display="none";
            po3.style.display="none";
            pto2.style.backgroundImage="url('img/edubable.png')";
            pto2.style.backgroundSize="cover";
            pto1.style.backgroundImage="";
            pto3.style.backgroundImage="";
            break;
        case "pro3":
            pto1.style.gridArea="1/1/1/2";
            pto2.style.gridArea="1/2/1/3";
            pto3.style.gridArea="1/3/1/5";
            po3.style.display="flex";
            po1.style.display="none";
            po2.style.display="none";
            pto3.style.backgroundImage="url('img/movie.jpg')";
            pto3.style.backgroundSize="cover";
            pto2.style.backgroundImage="";
            pto1.style.backgroundImage="";
            break;
        case "pro4":
            pto4.style.gridArea="2/1/2/3";
            pto5.style.gridArea="2/3/2/4";
            pto6.style.gridArea="2/4/2/5";
            po4.style.display="flex";
            po5.style.display="none";
            po6.style.display="none";
            pto4.style.backgroundImage="url('img/credit.jpg')";
            pto4.style.backgroundSize="cover";
            pto5.style.backgroundImage="";
            pto6.style.backgroundImage="";
            break;
        case "pro5":
            pto4.style.gridArea="2/1/2/2";
            pto5.style.gridArea="2/2/2/4";
            pto6.style.gridArea="2/4/2/5";
            po5.style.display="flex";
            po4.style.display="none";
            po6.style.display="none";
            pto5.style.backgroundImage="url('img/code.jpg')";
            pto5.style.backgroundSize="cover";
            pto4.style.backgroundImage="";
            pto6.style.backgroundImage="";
            break;
        case "pro6":
            pto4.style.gridArea="2/1/2/2";
            pto5.style.gridArea="2/2/2/3";
            pto6.style.gridArea="2/3/2/5";
            po6.style.display="flex";
            po4.style.display="none";
            po5.style.display="none";
            pto6.style.backgroundImage="url('img/hotel.jpg')";
            pto6.style.backgroundSize="cover";
            pto5.style.backgroundImage="";
            pto4.style.backgroundImage="";
            break;
    }
}

const gridItems=document.querySelectorAll(".projpp");
gridItems.forEach(items=>{
    items.addEventListener("mouseover",()=>{
        const value=items.getAttribute("data-value");
        shum(value);
    });
});
