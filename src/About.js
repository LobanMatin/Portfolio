const About = () => {
    return (
        <div className="about">
                <div className="photo">
                    <img className="headshot" src="https://t4.ftcdn.net/jpg/02/44/43/69/360_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg" alt="Profile"/>
                    <h3>Loban Matin</h3>
                    <h4>ENGINEERING PORTFOLIO</h4>
                    <div className="accent-bar"></div>
                </div>
                <div className="description">
                    <h2 style={{fontSize: "5em", fontWeight: 900, color: "#161A30"}}>Hello</h2>
                    <h4 style={{fontSize: "1.5em", color: "#161A30"}}>About Me</h4>
                    <div className="btn-holder">
                        <button className="about-btn" style={{color: "#161A30"}}>RESUME</button>
                        <button className="about-btn" style={{color: "#161A30"}}>PROJECTS</button>
                    </div>
                    <p style={{color: "#161A30"}}>As a mechatronics engineering student, my passion lies in integrating software, 
                        and machinery. I am particularly fascinated by robotics. I also enjoy finding 
                        solutions to problems through the creative use of programming. Overall, I strive 
                        to problem solve through efficient and practical approaches.<br></br>
                        In the future I aim to be involved in the robotics and prosthetics industry and 
                        push the limitations of machinery by innovating.
                    </p>
                </div>
        </div>
        
    );
}
 
export default About;