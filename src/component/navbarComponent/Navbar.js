import { Link, Outlet } from 'react-router-dom';
import style from './navbar.module.css'

const Navbar = () => {

    return (
        <>        <div className={style.navbarBox}>

            <div className={style.leftSection}>

                <Link><h2>Medmate</h2></Link>

            </div>

            <div className={style.rightSection}>
                <Link to="/">Home</Link>
                <Link to='/habit/list'>Task List</Link>
                <Link to="/habit/form" className={style.redBtn}>Add New</Link>


            </div>

        </div>
            <Outlet />
        </>

    )
}

export default Navbar;