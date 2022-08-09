import { Link } from 'react-router-dom'
import Container from './Container'

import styles from './Navbar.module.css'

import logo from '../../img/Frexco_Transp.png'
import { FaShoppingCart } from 'react-icons/fa'



function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="frexco" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li  className={styles.item} >
                        <Link to="/Company" >Sobre</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Contact">Contato</Link>
                    </li>
                    <li className={styles.item}>


                        <Link to="/Cart"> <FaShoppingCart></FaShoppingCart>  </Link>
                    </li>
                  



                </ul>

            </Container>
        </nav>
    )


}

export default Navbar