import emailjs from "@emailjs/browser"
import { useState } from "react"
import { BiPhone } from "react-icons/bi"
import { BsInstagram } from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa"
import { GoLocation, GoMail } from "react-icons/go"
import { ToastContainer } from "react-toastify"
import { errorMessage, infoMessage, successMessage } from "../Utils"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const Contact = () => {

    const [isSubmitDisable, setIsSubmitDisable] = useState(false);
    const [formData, setFormData] = useState({
        interestedIn: "",
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsSubmitDisable(true)
        infoMessage("Sending your message, Please wait!")
        const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
        const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
        const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY

        // Create a new object which contains the data of emailjs
        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            to_name: 'Midnight Develops Team',
            message: `Interested in: ${formData.interestedIn}\n${formData.message}`,
        }

        // Send the mail using emailjs
        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then((res) => {
                successMessage("Message Sent Successfully!")
                setIsSubmitDisable(false)
                // Clearing all feeds
                setFormData({ interestedIn: '', name: '', email: '', message: '' })
            })
            .catch((err) => {
                setIsSubmitDisable(false)
                errorMessage("Error while sending message")
            })
    }

    useGSAP(() => {
        gsap.fromTo(
            "#contact h1",
            { y: -30, opacity: 0 },
            {
                y: 0, opacity: 1, duration: .8,
                scrollTrigger: {
                    trigger: "#contact h1",
                    scroller: "body",
                    start: "top 50%",
                    toggleActions: "restart none none reverse",
                }
            }
        );

        gsap.fromTo("#contact .left",
            { x: -200, opacity: 0 },
            {
                x: 0, opacity: 1, duration: .8,
                scrollTrigger: {
                    trigger: "#contact .left",
                    scroller: "body",
                    start: "top 50%",
                    toggleActions: "restart none none reverse",
                }
            }
        )

        gsap.fromTo("#contact .right",
            { x: 200, opacity: 0 },
            {
                x: 0, opacity: 1, duration: .8,
                scrollTrigger: {
                    trigger: "#contact .right",
                    scroller: "body",
                    start: "top 80%",
                    toggleActions: "restart none none reverse",
                }
            }
        )
    });

    return (
        <section className="container" id="contact">
            <div className='display-center'><h1 className='text-gradient heading'>Contact us</h1></div>
            <div className="content display-between gap-2 mt-3">
                <div className="left">
                    <h1>Let's talk on something <span>build</span> together</h1>
                    <div className="contact-details-container">
                        <div className="contact-details">
                            <GoMail className="icon" /> <a href="mailto:midnightdevelops@gmail.com">midnightdevelops@gmail.com</a>
                        </div>

                        <div className="contact-details">
                            <BiPhone className="icon" /> <span>+91 7508262832</span>
                        </div>

                        <div className="contact-details">
                            <GoLocation className="icon" /> <span>Jalandhar, Punjab</span>
                        </div>
                    </div>

                    <div className="social-icons-box">
                        <a href=""><BsInstagram className="social-icons" /></a>
                        <a href=""><FaLinkedinIn className="social-icons" /></a>
                    </div>
                </div>
                <div className="right">
                    <form onSubmit={handleSubmit}>
                        <h4 className="form-heading">I'm interested in:</h4>
                        <div className="options">

                            <div className="capsule-checkbox">
                                <input type="radio" name="interestedIn" value="UI/UX Design" id="ui-ux-design" onChange={handleChange} required />
                                <label htmlFor="ui-ux-design">UI/UX Design</label>
                            </div>

                            <div className="capsule-checkbox">
                                <input type="radio" name="interestedIn" value="Web Development" id="web-development" onChange={handleChange} required />
                                <label htmlFor="web-development">Web Development</label>
                            </div>

                            <div className="capsule-checkbox">
                                <input type="radio" name="interestedIn" value="Graphic Design" id="graphic-design" onChange={handleChange} required />
                                <label htmlFor="graphic-design">Graphic design</label>
                            </div>
                        </div>

                        <div className="input-box">
                            <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required />
                            <label htmlFor="name">Your name</label>
                        </div>

                        <div className="input-box">
                            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required />
                            <label htmlFor="email">Your Email</label>
                        </div>

                        <div className="textarea-box">
                            <textarea type="text" name="message" id="message" value={formData.message} onChange={handleChange} required />
                            <label htmlFor="name">Your Message</label>
                        </div>

                        <button type="submit" id="submit-btn" disabled={isSubmitDisable}>Submit</button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </section>
    )
}

export default Contact