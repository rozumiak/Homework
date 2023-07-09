import "./header.css";
import Link from "./Link";

export default function Header() {
    return (
        <ul className="header-nav">
            <li><Link to="/" type="nav"> Main </Link></li>
            <li><Link to="/contact" type="nav"> Contact </Link></li>
            <li><Link to="/about" type="nav"> About </Link></li>
        </ul>
    )
}
