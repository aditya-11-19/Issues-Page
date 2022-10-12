import { FaBars, FaTimes } from "react-icons/fa";
import CodeIcon from '@mui/icons-material/Code';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SecurityIcon from '@mui/icons-material/Security';
import './Navbar.css';
import img from '../icon.png';
function Navbar() {
    return (
        <div style={{ display: "flex" }}>
            <nav  style={{width:2650}} className="navbar navbar-expand-lg navbar-light bg-light" >
                <div  >
                    <div >
                        <a className="navbar-brand" href="#"><img  width="17px" src={img} alt="logo"></img>facebook/react</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <div>
                                <li className="nav-item active">
                                    <a className="nav-link" href="#"><CodeIcon />Code <span className="sr-only">(current)</span></a>
                                </li>
                            </div>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><PlayCircleOutlineIcon />Issues</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><PlayCircleOutlineIcon />Pull Requests</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><PlayCircleOutlineIcon />Actions</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Wiki</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><SecurityIcon />Security</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Insights</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    );
}
export default Navbar;