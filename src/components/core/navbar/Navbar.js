/* eslint-disable jsx-a11y/anchor-is-valid */
import NavLinks from './NavLinks'
import NavActions from './NavActions'
import logo from '../../../assets/images/STEMscopesLogo.svg';

const PrimaryNavbar = () => {
    return (
        <header className='navbar flex-grid'>
            <div className='brand'>
              <img src={logo} className="logo" alt="logo" />
            </div>
            <NavLinks />
            <NavActions />       
        </header>
    )
}

export default PrimaryNavbar