import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Features = () => {
    useGSAP(() => {
        gsap.fromTo(
            "#features h1",
            { y: -30, opacity: 0 },
            {
                y: 0, opacity: 1, duration: .8,
                scrollTrigger: {
                    trigger: "#features h1",
                    scroller: window,
                    start: "top 50%",
                    toggleActions: "restart none none reverse",
                }
            }
        );

        gsap.fromTo(
            "#features .grid .gradient-border-box",
            { x: -100, opacity: 0 },
            {
                x: 0, opacity: 1, duration: .8, stagger: .3,
                scrollTrigger: {
                    trigger: "#features .grid .gradient-border-box",
                    scroller: window,
                    start: "top 50%",
                    toggleActions: "restart none none reverse",
                }
            }
        );

        // Hover animation using GSAP because css transition interfering with gsap 
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
        <section className="container" id='features'>
            <div className='display-center'><h1 className='text-gradient heading'>INCREDIBLE UNIQUE FEATURES</h1></div>

            <div className="content display-center">
                <div className="grid">
                    <div className="gradient-border-box">
                        <div className="box">
                            <img src="/mobile.png" alt="Mobile" />
                            <h3>Mobile Responsive Design</h3>
                            <p>Crafting fast, responsive, and visually stunning  websites tailored to your brand’s identity.</p>
                        </div>
                    </div>

                    <div className="gradient-border-box">
                        <div className="box">
                            <img src="/security.png" alt="Security" />
                            <h3>Website Security & Maintenance</h3>
                            <p>Providing regular updates, security enhancements, and ongoing support to keep your website safe and up-to-date</p>
                        </div>
                    </div>

                    <div className="gradient-border-box">
                        <div className="box">
                            <img src="/window.png" alt="Window" />
                            <h3>SEO & Digital Marketing</h3>
                            <p>Implementing advanced SEO strategies to improve search rankings and drive organic traffic.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Features