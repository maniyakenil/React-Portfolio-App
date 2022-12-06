import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/personalinfo">Personal Information</Link>
                </li>
                <li>
                    <Link to="/projectlist">Project List</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;