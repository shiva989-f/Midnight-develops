import { useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md';
import { RiMenu3Line } from 'react-icons/ri';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'; 

const Navbar = () => {
    const [isNavVisible, setIsNavVisible] = useState(false);
    const [active, setActive] = useState("home");
    const navbarLi = ["Home", "About", "Features", "Services"]
    // Toggle the nav link display on menu button click
    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    // This will set the active to the hash url if reloaded not to default home but according to the url
    useEffect(() => {
        const hash = window.location.hash.replace("#", "").toLowerCase();
        setActive(hash)
    }, [])

    // GSAP animations
    // useGSAP kill every properties applied in gsap for animation after finishing animation
    useGSAP(() => {
        const btn = document.querySelector(".btn");
        if (btn) btn.style.transition = "none"; // Disable transition if .btn exists, because affecting animation

        gsap.from("nav .logo, nav li", {
            y: -30,
            opacity: 0,
            duration: 1,
            delay: .5,
            stagger: .15
        })
    });


    return (
        <header>
            <nav>
                <div className="logo">
                    <img src="/logo.svg" alt="Logo" />
                    <span className="logo-text">MIDNIGHT DEVELOPS</span>
                </div>

                <ul className={isNavVisible ? "nav-links show" : "nav-links"}>
                    {
                        navbarLi.map((item) => {
                            const itemLower = item.toLowerCase();
                            return (
                                <li key={item}>
                                    <a
                                        href={`#${itemLower}`}
                                        className={active === itemLower ? "active" : ""}
                                        onClick={() => {
                                            setActive(itemLower);
                                            setIsNavVisible(false); // Close the menu on click
                                        }}
                                    >
                                        {item}
                                    </a>
                                </li>
                            );
                        })
                    }

                    <li className={isNavVisible ? "" : "btn"}><a href="#contact" className={(active === "contact" && isNavVisible) ? "active" : ""} onClick={() => {
                        setActive("contact")
                        setIsNavVisible(false); // Close the menu on click
                    }}>Contact Us</a></li>
                </ul>

                <span className='menu' onClick={toggleNav} >
                    {isNavVisible ? <MdClose /> : <RiMenu3Line />}
                </span>
            </nav>
        </header>
    )
}

export default Navbar