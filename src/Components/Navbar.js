function Navbar(){
return(
    <>
    <nav className="navbar navbar-expand-lg text-bg-success">
        <div className="container-fluid">
            <a className="navbar-brand" style={{color:"white"}} href="/">Questify | Home</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" style={{color:"white"}} aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" style={{color:"white"}} href="/">About</a>
                    </li>
                    {/* dropdown */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="" role="button" data-bs-toggle="dropdown" aria-expanded="false"style={{color:"white"}}>
                                Categories
                            </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="">Computers</a></li>
                                    <li><a className="dropdown-item" href="">Mathmetics</a></li>
                                    <li><a className="dropdown-item" href="">History</a></li>
                                    <li><a className="dropdown-item" href="">Animals</a></li>
                                    <li><a className="dropdown-item" href="">Gadgets</a></li>
                                    <li><a className="dropdown-item" href="">Politics</a></li>
                                    <li><a className="dropdown-item" href="">Vehicels</a></li>
                                    <li><a className="dropdown-item" href="">General Knowledge</a></li>
                                    <li><a className="dropdown-item" href="">Art</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="/">In working...</a></li>
                                </ul>
                        </li>
                </ul>
            </div>
        </div>
    </nav>
    </>
);
}
export default Navbar