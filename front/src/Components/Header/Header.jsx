import {NavLink} from "react-router-dom";
import {photos} from '../../photos.js'

export default function Header() {
    return (
        <header>
            <nav>
                <NavLink to='/front/public'><img className='logo' src={photos.logo} alt=""/> kas</NavLink>
            </nav>
        </header>
    )
}