

const Features = () => {
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