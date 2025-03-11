import { FaWhatsapp } from 'react-icons/fa'
import Navbar from './Navbar';

const Home = () => {

  return (
    <section className="container" id='home'>
      <Navbar />
      <div className="content display-center flex-column">
        <h1><div>The Best <span>Web</span></div> <div>Development <img className='h1-logo' src='/logo.svg' alt='Logo' /> Agency.</div></h1>

        <div className='intro'><div>Our team of designers & developers helps brands</div> <div>grow through impactful design, seamless development, and</div> digital strategies.</div>

        <button className="btn mt-2"><a href="https://wa.me/+917710775821?text=Hello%20Midnight%20Develops!%20I'm%20interested%20in%20working%20with%20you%20on%20a%20project.%20Can%20we%20discuss%20the%20details?
" target='_blank'>Whatsapp <FaWhatsapp /></a></button>
      </div>
    </section>
  )
}

export default Home