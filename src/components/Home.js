import "./Homepage.css";
import { Linkedin, Instagram, Github } from "react-bootstrap-icons";
function Home() {
    return (
        <div id="maindiv">
            <center>
                <h1> I'm <span class="text-warning">Sampangi Vijayaraju</span></h1>
                <h1 class="text-primary"> Web Designer and Developer</h1>
                <br></br>
                <p>Aspiring and motivated fresher seeking an internship opportunity to gain valuable industry experience
                    and contribute my enthusiasm and knowledge to an organization. Eager to apply my skills and passion
                    to make a positive impact while fostering personal and professional growth.</p>
                <br></br>
                <a href="https://www.linkedin.com/in/sampangi-vijayaraju-37a57b227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={34}  color = "black" className="rounded mx-4" />
                </a>
                <a href="https://www.instagram.com/vijayrajusampangi?igsh=MTVwaDd6cWliZjhiZg==" target="_blank" rel="noopener noreferrer">
                    <Instagram size={34} color="black" className="rounded mx-4" />
                </a>
                <a href="https://github.com/sampangivijayaraju" target="_blank" rel="noopener noreferrer">
                    <Github size={34} color = "black" className="rounded mx-4" />
                </a>
                
            </center>
        </div>
    )
}
export default Home;