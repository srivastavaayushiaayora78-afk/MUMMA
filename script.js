/* ======================================================
   PART 3A
   LOADER + NAVBAR + TYPEWRITER
====================================================== */


/* ==========================
        LOADER
========================== */


window.addEventListener("load", () => {


    const loader = document.getElementById("loader");


    setTimeout(() => {


        loader.classList.add("hide");


    }, 2500);


});








/* ==========================
        MOBILE NAVBAR
========================== */


const mobileMenuBtn = document.getElementById("mobileMenuBtn");

const navLinks = document.querySelector(".nav-links");



if(mobileMenuBtn){


    mobileMenuBtn.addEventListener("click",()=>{


        navLinks.classList.toggle("active");


    });


}







/* Close menu after clicking link */


document.querySelectorAll(".nav-links a")
.forEach(link=>{


    link.addEventListener("click",()=>{


        navLinks.classList.remove("active");


    });


});









/* ==========================
        TYPEWRITER
========================== */


const typewriter = document.getElementById("typewriter");



const typeText = "Happy Birthday My Beautiful Mumma ❤️";



let typeIndex = 0;





function typeWriter(){



    if(typeIndex < typeText.length){


        typewriter.textContent += typeText.charAt(typeIndex);


        typeIndex++;


        setTimeout(typeWriter,120);


    }


}







window.addEventListener("load",()=>{


    setTimeout(()=>{


        typeWriter();


    },2800);



});
/* ======================================================
   PART 3B
   GIFT OPENING + CAKE WISH ANIMATION
====================================================== */



/* ==========================
        GIFT OPENING
========================== */


const giftOpenBtn = document.getElementById("giftOpenBtn");

const giftBox = document.getElementById("giftBox");



if(giftOpenBtn && giftBox){



    giftOpenBtn.addEventListener("click",()=>{


        giftBox.classList.toggle("open");



        giftOpenBtn.innerHTML = `

        <i class="fa-solid fa-heart"></i>

        Love Unlocked

        `;



    });


}









/* ==========================
        CAKE WISH BUTTON
========================== */


const wishBtn = document.getElementById("wishBtn");

const birthdayCake = document.getElementById("birthdayCake");

const flames = document.querySelectorAll(".flame");





if(wishBtn && birthdayCake){



    wishBtn.addEventListener("click",()=>{



        birthdayCake.classList.add("wish-active");



        flames.forEach(flame=>{


            flame.style.animation = "none";


            flame.style.opacity = "0";



        });





        wishBtn.innerHTML = `


        <i class="fa-solid fa-sparkles"></i>


        Wish Made ❤️



        `;




        setTimeout(()=>{


            flames.forEach(flame=>{


                flame.style.opacity="1";


                flame.style.animation="flameMove .8s infinite alternate";


            });



        },3000);





    });



}
/* ======================================================
   PART 3C
   MUSIC + BACK TO TOP + SCROLL EFFECTS
====================================================== */



/* ==========================
        MUSIC CONTROL
========================== */


const musicBtn = document.getElementById("musicBtn");

const bgMusic = document.getElementById("bgMusic");



let musicPlaying = false;





if(musicBtn && bgMusic){



    musicBtn.addEventListener("click",()=>{



        if(musicPlaying){



            bgMusic.pause();



            musicBtn.innerHTML = `

            <i class="fa-solid fa-music"></i>

            `;



            musicPlaying = false;



        }

        else{



            bgMusic.play()
            .catch(()=>{});



            musicBtn.innerHTML = `

            <i class="fa-solid fa-pause"></i>

            `;



            musicPlaying = true;



        }



    });



}









/* ==========================
        BACK TO TOP
========================== */


const topBtn = document.getElementById("topBtn");





window.addEventListener("scroll",()=>{



    if(window.scrollY > 600){


        topBtn.classList.add("show");


    }

    else{


        topBtn.classList.remove("show");


    }



});







if(topBtn){



    topBtn.addEventListener("click",()=>{



        window.scrollTo({



            top:0,


            behavior:"smooth"



        });



    });



}









/* ==========================
        NAVBAR SCROLL EFFECT
========================== */


const navbar = document.querySelector(".navbar");





window.addEventListener("scroll",()=>{



    if(window.scrollY > 50){



        navbar.classList.add("scrolled");



    }

    else{



        navbar.classList.remove("scrolled");



    }



});
/* ======================================================
   PART 3D
   FLOATING HEARTS + PETALS + SPARKLES + BALLOONS
====================================================== */



/* ==========================
        HELPER FUNCTION
========================== */


function randomPosition(element){



    element.style.left = Math.random() * 100 + "%";



    element.style.animationDelay =

    Math.random() * 8 + "s";



    element.style.animationDuration =

    (8 + Math.random() * 8) + "s";



}









/* ==========================
        HEART GENERATOR
========================== */


const heartsContainer = document.getElementById("hearts-container");



function createHeart(){



    if(!heartsContainer) return;




    const heart = document.createElement("div");



    heart.className = "floating-heart";



    heart.innerHTML = "❤️";



    randomPosition(heart);



    heart.style.fontSize =

    (15 + Math.random()*25) + "px";



    heartsContainer.appendChild(heart);





    setTimeout(()=>{


        heart.remove();


    },16000);



}





setInterval(createHeart,700);









/* ==========================
        PETAL GENERATOR
========================== */


const petalsContainer = document.getElementById("petals-container");



function createPetal(){



    if(!petalsContainer) return;



    const petal = document.createElement("div");



    petal.className = "rose-petal";



    randomPosition(petal);



    petalsContainer.appendChild(petal);





    setTimeout(()=>{


        petal.remove();


    },16000);



}





setInterval(createPetal,900);









/* ==========================
        SPARKLE GENERATOR
========================== */


const sparklesContainer = document.getElementById("sparkles-container");



function createSparkle(){



    if(!sparklesContainer) return;




    const sparkle = document.createElement("div");



    sparkle.className = "sparkle";



    sparkle.style.left = Math.random()*100 + "%";



    sparkle.style.top = Math.random()*100 + "%";



    sparkle.style.animationDelay =

    Math.random()*3 + "s";



    sparklesContainer.appendChild(sparkle);





    setTimeout(()=>{


        sparkle.remove();


    },5000);



}





setInterval(createSparkle,300);









/* ==========================
        BALLOON GENERATOR
========================== */


const balloonsContainer = document.getElementById("balloons-container");



function createBalloon(){



    if(!balloonsContainer) return;




    const balloon = document.createElement("div");



    balloon.className = "balloon";



    randomPosition(balloon);



    balloon.style.bottom="-120px";



    balloon.style.background = `

    radial-gradient(

        circle at 30% 30%,

        #ffffff55,

        #ff4f81

    )

    `;



    balloonsContainer.appendChild(balloon);





    setTimeout(()=>{


        balloon.remove();


    },15000);



}





setInterval(createBalloon,4000);
/* ======================================================
   PART 3E
   CONFETTI + FIREWORKS SYSTEM
====================================================== */



/* ==========================
        CONFETTI SETUP
========================== */


const confettiCanvas = document.getElementById("confetti");

const confettiCtx = confettiCanvas?.getContext("2d");



let confettiPieces = [];





function resizeCanvas(){



    if(confettiCanvas){



        confettiCanvas.width = window.innerWidth;


        confettiCanvas.height = window.innerHeight;



    }



}



resizeCanvas();



window.addEventListener(
"resize",
resizeCanvas
);







function createConfetti(){



    if(!confettiCanvas) return;



    confettiPieces=[];




    for(let i=0;i<180;i++){



        confettiPieces.push({



            x:window.innerWidth/2,


            y:window.innerHeight/2,


            size:Math.random()*8+4,


            speedX:(Math.random()-0.5)*12,


            speedY:(Math.random()-0.5)*12,


            rotation:Math.random()*360


        });



    }




    animateConfetti();



}







function animateConfetti(){



    if(!confettiCtx) return;



    confettiCtx.clearRect(

        0,

        0,

        confettiCanvas.width,

        confettiCanvas.height

    );




    confettiPieces.forEach((piece)=>{



        confettiCtx.save();



        confettiCtx.translate(
            piece.x,
            piece.y
        );



        confettiCtx.rotate(
            piece.rotation
        );



        confettiCtx.fillRect(

            0,

            0,

            piece.size,

            piece.size

        );



        confettiCtx.restore();



        piece.x += piece.speedX;



        piece.y += piece.speedY;



        piece.speedY +=0.15;



        piece.rotation +=5;



    });





    confettiPieces = confettiPieces.filter(
        piece=>piece.y < window.innerHeight+50
    );





    if(confettiPieces.length){



        requestAnimationFrame(
            animateConfetti
        );



    }


}









/* ==========================
        FIREWORKS SETUP
========================== */


const fireworksCanvas =
document.getElementById("fireworks");


const fireworksCtx =
fireworksCanvas?.getContext("2d");



let fireworks=[];





function resizeFireworks(){



    if(fireworksCanvas){



        fireworksCanvas.width =
        window.innerWidth;



        fireworksCanvas.height =
        window.innerHeight;



    }



}



resizeFireworks();



window.addEventListener(
"resize",
resizeFireworks
);









function launchFirework(){



    if(!fireworksCanvas) return;




    const x =
    Math.random()*window.innerWidth;



    const y =
    Math.random()*window.innerHeight/2;



    for(let i=0;i<40;i++){



        fireworks.push({



            x:x,


            y:y,


            radius:2,


            angle:
            Math.random()*Math.PI*2,


            speed:
            Math.random()*5+2,


            life:60


        });



    }




    animateFireworks();



}









function animateFireworks(){



    if(!fireworksCtx) return;



    fireworksCtx.clearRect(

        0,

        0,

        fireworksCanvas.width,

        fireworksCanvas.height

    );





    fireworks.forEach((spark)=>{



        fireworksCtx.beginPath();



        fireworksCtx.arc(

            spark.x,

            spark.y,

            spark.radius,

            0,

            Math.PI*2

        );



        fireworksCtx.fill();



        spark.x +=
        Math.cos(spark.angle)
        * spark.speed;



        spark.y +=
        Math.sin(spark.angle)
        * spark.speed;



        spark.life--;



    });





    fireworks =
    fireworks.filter(
        spark=>spark.life>0
    );





    if(fireworks.length){



        requestAnimationFrame(
            animateFireworks
        );



    }



}









/* ==========================
        WISH CELEBRATION
========================== */


const celebrationButton =
document.getElementById("wishBtn");



if(celebrationButton){



    celebrationButton.addEventListener(
        "click",
        ()=>{


            createConfetti();



            for(let i=0;i<5;i++){



                setTimeout(
                    launchFirework,
                    i*700
                );


            }



        }
    );



}
/* ======================================================
   PART 3F
   FINAL OPTIMIZATION + REVEAL ANIMATIONS
====================================================== */



/* ==========================
     SCROLL REVEAL SYSTEM
========================== */


const revealElements = document.querySelectorAll(

    "section, .gallery-card, .hero-content, .gift-box, .letter-card"

);






const revealObserver = new IntersectionObserver(

(entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){



            entry.target.classList.add(
                "reveal-active"
            );



            revealObserver.unobserve(
                entry.target
            );



        }



    });



},

{

    threshold:0.15

}

);








revealElements.forEach(element=>{


    element.classList.add(
        "reveal-element"
    );



    revealObserver.observe(
        element
    );


});









/* ==========================
     CLOSE MOBILE MENU
     OUTSIDE CLICK
========================== */


document.addEventListener(
"click",
(event)=>{



    const nav =
    document.querySelector(".nav-links");



    const button =
    document.getElementById(
        "mobileMenuBtn"
    );



    if(
        nav &&
        button &&
        !nav.contains(event.target) &&
        !button.contains(event.target)

    ){



        nav.classList.remove(
            "active"
        );



    }



});









/* ==========================
     PERFORMANCE CLEANUP
========================== */


window.addEventListener(
"visibilitychange",
()=>{



    if(document.hidden){



        document
        .querySelectorAll(
            "audio"
        )
        .forEach(audio=>{


            audio.pause();


        });



    }



});









/* ==========================
       CONSOLE CHECK
========================== */


console.log(

"❤️ Premium Birthday Website Loaded Successfully"

);
