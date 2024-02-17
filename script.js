const btn = document.querySelector("#throttle");
 
        const throttleFunction = (func, delay) => {
 
            
            let prev = 0;
            return (...args) => {
                
                let now = new Date().getTime();
 
                console.log(now - prev, delay);
 
               
                if (now - prev > delay) {
                    prev = now;
 
                    
                    return func(...args);
                }
            }
        }
        

        const imageUrls = [
            "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1LzM4OS1tai0xMDQwLWt1dC1leWUuanBn.jpg",
            "https://images.unsplash.com/photo-1609171712489-45b6ba7051a4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3Vuc2V0JTIwYWVzdGhldGljfGVufDB8fDB8fHww",
            "https://cdn.pixabay.com/photo/2020/11/02/15/08/autumn-5706984_640.jpg",
            "https://w0.peakpx.com/wallpaper/246/777/HD-wallpaper-blue-aesthetic-flowers-thumbnail.jpg",
            "https://i.pinimg.com/236x/4b/d5/dd/4bd5dd57c1c8ca3325ab40b0ec0a2339.jpg"
            
        ];
        
        const getRandomImageUrl = () => {
            const randomIndex = Math.floor(Math.random() * imageUrls.length);
            return imageUrls[randomIndex];
        };
 document.querySelector("#center")
addEventListener("mousemove",throttleFunction((dets) => {
    var div = document.createElement("div");
    
    div.classList.add('imagediv');
    div.style.left = dets.clientX + 'px';
    div.style.top = dets.clientY + 'px';

    const img= document.createElement("img");
    img.setAttribute("src", getRandomImageUrl()); // Get a random image URL
    div.appendChild(img);
    document.body.appendChild(div);

    gsap.to(img,{
        y:"0",
        ease: Power1,
        duration:.6,

    });
    gsap.to(img,{
        y:"100%",
        ease: Power2,
        delay:.6,
        

    });

    setTimeout(function(){
        div.remove();
    },2000)
}, 400));