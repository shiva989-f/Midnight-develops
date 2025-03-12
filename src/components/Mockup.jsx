import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Mockup = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#mockup h1",
      { y: -30, opacity: 0 },
      {
        y: 0, opacity: 1, duration: .8,
        scrollTrigger: {
          trigger: "#mockup h1",
          scroller: "body",
          start: "top 50%",
          toggleActions: "restart none none reverse",
        }
      }
    );

    gsap.fromTo(
      "#mockup .mockupImg",
      { scale: .5, opacity: 0 },
      {
        scale: 1, opacity: 1, duration: .8, stagger: .15,
        scrollTrigger: {
          trigger: "#mockup .mockupImg",
          scroller: "body",
          start: "top 50%",
          toggleActions: "restart none none reverse",
        }
      }
    );

    // Hover animation using GSAP
    document.querySelectorAll(".gradient-border-box").forEach((box) => {
      box.addEventListener("mouseenter", () => {
        gsap.to(box, { scale: 1.1, duration: 0.3 });
      });

      box.addEventListener("mouseleave", () => {
        gsap.to(box, { scale: 1, duration: 0.3 });
      });
    });

  });
  return (
    <section className="container" id="mockup">
          <div className='display-center'><h1 className='text-gradient heading'>Responsive & Retina website</h1></div>
          <div className="content display-center">
            <img className="mockupImg" src='/mockup_img.png' alt='mockup image'/>
          </div>
    </section>
  )
}

export default Mockup