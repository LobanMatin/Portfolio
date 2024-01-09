const Navbar = () => {
    return (
        <div className="nav-section">
            <nav className="navbar">
                <div className="accent"></div>
                <div className="title">
                    <h1 style={{fontWeight: "900"}}>Loban Matin</h1>
                    <h4 style={{fontWeight: "100"}}>MECHATRONICS ENGINEERING STUDENT</h4>
                </div>
                <div className="links">
                    <a href="/">ABOUT</a>
                    <a href="/projects">PROJECTS</a>
                    <a href="/gallery">GALLERY</a>
                    <a href="/contact">CONTACT</a>
                </div>
            </nav>
        </div>
    );
}
 
export default Navbar;