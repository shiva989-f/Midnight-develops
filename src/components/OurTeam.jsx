import React from 'react'

const OurTeam = () => {
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