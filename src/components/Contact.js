import Linkedin from '../assets/linkedin.png';
import Github from '../assets/github.png';
import Instagram from '../assets/instagram.png';
import Mail from '../assets/email.png';


function Contact(){
    return (
        <section id="contact" className="container text-center my-5">
            <h2 className="mb-4">Contact</h2>
            <hr/>
            <p>Feel free to connect with me and explore my platforms!</p>
            <div className="flex-row contact-icons">
                <a href="mailto:sogirala@umich.edu" target="_blank"><img src={Mail} alt="Email"/></a>
                <a href="https://www.linkedin.com/in/saketh-ogirala-7b6080222/" target="_blank"><img src={Linkedin} alt="LinkedIn"/></a>
                <a href="https://github.com/sakethogirala" target="_blank"><img src={Github} alt="GitHub"/></a>
                <a href="https://www.instagram.com/saketh_ogirala/" target="_blank"><img src={Instagram} alt="Instagram"/></a>
            </div>
        </section>
    );
}

export default Contact;