import {useState} from 'react'
import {Link, Outlet} from 'react-router-dom'
import './header.css'
import { FiMenu, FiX } from 'react-icons/fi';
const Header = () => {

  const [open, setOpen] = useState(false)
    return (
        <div className="header">
            <div className="header__logo">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1.bp.blogspot.com%2F-yIt05NVyOF0%2FWdYdw6FRM7I%2FAAAAAAAAA2c%2FY8szr6n7DNwk_og9uPp8Fw1Wvz2PwAMZQCLcBGAs%2Fs1600%2FLetter%252BB%252BLogo%252BDesign%252BDesign%252BTransparent%252Bfree.png&f=1&nofb=1" alt="" />       
            </div>
            <div onClick={() => setOpen(!open)} className="header__hamburger">
              {open ? <FiX /> : <FiMenu />}
            </div>
            <div className="header__nav__container">
                <ul className="header__nav__lists">
                  <li className="header__nav__list">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="header__nav__list">
                    <Link to="/dramas">Dramas</Link>
                  </li>
                  <li className="header__nav__list">
                    <Link to="/kids">Kids</Link>
                  </li>
                  <li className="header__nav__list">
                  <Link to="/theatre">Theatre</Link>
                  </li>
                  <li className="header__nav__list">
                  <Link to="/rrated">R-Rated</Link>
                  </li>
                </ul>
            </div>

            {open && <div className="header__nav__container__mobile">
            <ul className="header__nav__lists__mobile">
                  <li className="header__nav__list__mobile">
                    Popular
                  </li>
                  <li className="header__nav__list__mobile">
                    Dramas
                  </li>
                  <li className="header__nav__list__mobile">
                    Kids
                  </li>
                  <li className="header__nav__list__mobile">
                    Theatre
                  </li>
                  <li className="header__nav__list__mobile">
                    R-rated
                  </li>
                </ul>
            </div>}

            <Outlet />
        </div>
    )
}

export default Header
