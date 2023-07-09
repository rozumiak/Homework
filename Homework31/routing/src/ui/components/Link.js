import {NavLink} from "react-router-dom";

export default function Link(props){
    const {to, children, type} = props;
    return type === "a"
        ? <a target="_blank" href={to}>{children}</a>
        : <NavLink to={to}>{children}</NavLink>

}
Link.defaultProps = {
    type: "a"
}