import Link from "./Link";
export default function Footer(){
    return(
        <ul>
            <li>Phone: <Link to="tel:100000222">+100000222</Link></li>
            <li>Email: <Link to="mailto: https://www.google.com/intl/uk/gmail/about/">www.google.com</Link></li>
            <li>GitHub: <Link to="https://github.com/">github.com</Link></li>
        </ul>
    )
}