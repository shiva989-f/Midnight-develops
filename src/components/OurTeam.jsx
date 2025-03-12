import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const OurTeam = () => {
    useGSAP(() => {
        gsap.fromTo(
            "#our-team h1",
            { y: -30, opacity: 0 },
            {
                y: 0, opacity: 1, duration: .8,
                scrollTrigger: {
                    trigger: "#our-team h1",
                    scroller: "body",
                    start: "top 50%",
                    toggleActions: "restart none none reverse",
                }
            }
        );

        gsap.fromTo(
            "#our-team .team-member",
            { y: 100, opacity: 0 },
            {
                y: 0, opacity: 1, duration: .8, stagger: .3,
                scrollTrigger: {
                    trigger: "#our-team .team-member",
                    scroller: "body",
                    start: "top 50%",
                    toggleActions: "restart none none reverse",
                }
            }
        );
    })
    return (
        <section className="container" id='our-team'>
            <div className='display-center'><h1 className='text-gradient heading'>OUR TEAM</h1></div>
            <div className="content">

                <div className="vishal team-member">
                    <img className='person glow' src="/my_image.jpg" alt="" />
                    <div className="name">
                        <h3>Co-Founder</h3>
                        <h4>Vishal</h4>
                        <img className='arc' src="/arc.png" alt="" />
                    </div>
                </div>

                <div className="shiva team-member">
                    <img className='person glow' src="/my_image.jpg" alt="" />
                    <div className="name">
                        <h3>Founder</h3>
                        <h4>Shiva</h4>
                        <img className='arc' src="/arc.png" alt="" />
                    </div>
                </div>

                <div className="pankaj team-member">
                    <img className='person glow' src="/my_image.jpg" alt="" />
                    <div className="name">
                        <h3>CEO</h3>
                        <h4>Pankaj</h4>
                        <img className='arc' src="/arc.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurTeam  