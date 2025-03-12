import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
gsap.registerPlugin(ScrollTrigger)

const About = () => {
    useGSAP(() => {
        gsap.fromTo(
            "#about h1",
            { y: -30, opacity: 0 },
            {
                y: 0, opacity: 1, duration: .8,
                scrollTrigger: {
                    trigger: "#about h1",
                    scroller: window, // window instead of "body" for better compatibility
                    // Start from the top of #about h1 and 50% of body
                    start: "top 70%",
                    toggleActions: "restart none none reverse",
                }
            }
        );

        gsap.fromTo("#about .about-text", 
            { x: -200, opacity: 0 },
            {
                x: 0, opacity: 1,  duration: .8,
                scrollTrigger: {
                    trigger: "#about .about-text",
                    scroller: window,
                    start: "top 70%",
                    // toggleActions: "restart pause resume reverse", // This is creating issue - pausing in between not finishing animation
                    toggleActions: "restart none none reverse", 
                }
            }
        )

        gsap.fromTo("#about .content .images",
            { x: 200, opacity: 0 },
            {
                x: 0, opacity: 1, duration: .8,
                scrollTrigger: {
                    trigger: "#about .images",
                    scroller: window,
                    start: "top 70%",
                    toggleActions: "restart none none reverse",
                }
            }
        )
    });

return (
    <section className="container" id='about'>
        <div className='display-center'>
            <h1 className='text-gradient heading'>ABOUT US</h1></div>

        <div className="content display-evenly about-content">
            <div className='about-text'>
                At <strong>MIDNIGHT DEVELOPS</strong> we blend creativity, strategy, and innovation to help businesses thrive in the digital world. Our team specializes in delivering high-quality solutions tailored to your needs, whether it’s branding, web development, or digital marketing. With a focus on excellence, collaboration, and integrity, we craft impact full experiences that drive success. Let’s bring your vision to life!
            </div>
            <div className="display-center gap-2 images">
                <div className="image"></div>
                <div className='display-center flex-column gap-2'>
                    <div className="image"></div>
                    <div className="image"></div>
                </div>
            </div>
        </div>
    </section>
)
}

export default About