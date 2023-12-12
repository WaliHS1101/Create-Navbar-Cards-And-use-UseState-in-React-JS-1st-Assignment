import PropsTypes from "prop-types"

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <span className="navbar-brand">{props.NBrand}</span>
                <button className="navbar-toggler" data-bs-toggle="collapse" type="button" data-bs-target="#Nav-Bar" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="Nav-Bar" className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        {
                            props.NLinks.map((element) => {
                                return (
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">
                                            {element}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;

Navbar.defaultProps = {
    NBrand: "Web Brand"
}

Navbar.propTypes = {
    NBrand: PropsTypes.number
}