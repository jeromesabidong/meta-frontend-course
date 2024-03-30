function Nav(props) {
    return (
        <nav className="nav">
            {/* usage of props.children */}
            {props.children}
        </nav>
    )
}
export default Nav;