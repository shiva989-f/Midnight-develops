

const About = () => {
    return (
        <section className="container" id='about'>
            <div
                className='display-center'><h1 className='text-gradient heading'>ABOUT US</h1></div>

            <div className="content display-evenly about-content">
                <div
                    className='about-text'>
                    At <strong>MIDNIGHT DEVELOPS</strong> we blend creativity, strategy, and innovation to help businesses thrive in the digital world. Our team specializes in delivering high-quality solutions tailored to your needs, whether it’s branding, web development, or digital marketing. With a focus on excellence, collaboration, and integrity, we craft impact full experiences that drive success. Let’s bring your vision to life!
                </div>
                <div className="display-center gap-2">
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