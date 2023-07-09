
function Button(props) {
    const {onClick, text, className} = props
    return (
        <button className={className} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;
