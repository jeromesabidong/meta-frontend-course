function Nav(props) {
    return (
        <nav className="main-nav">
            {/* usage of props.children */}
            {props.children}
        </nav>
    )
}
export default Nav;