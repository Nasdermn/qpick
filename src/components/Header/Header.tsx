import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import cartIcon from '../../assets/images/cartIcon.svg';
import favouritesIcon from '../../assets/images/favouritesIcon.svg';
import { selectCartItems } from '../../store/cartSlice';
import { useSelector } from 'react-redux';

function Header() {
  const cartItems = useSelector(selectCartItems);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
    <header className={styles.header}>
      <Link to='/' className={styles.header__link}>
        <h1 className={`${styles.header__title} clickable`}>QPICK</h1>
      </Link>
      <ul className={styles.header__menu}>
        <li className={`${styles.header__button} clickable`}>
          <Link to='/favourites' className={styles.header__link}>
            <span className={styles.header__counter}>2</span>
            <img className={styles.header__icon} src={favouritesIcon} alt='Избранное' />
          </Link>
        </li>
        <li className={`${styles.header__button} clickable`}>
          <Link to='/cart' className={styles.header__link}>
            <span className={styles.header__counter}>{totalQuantity}</span>
            <img className={styles.header__icon} src={cartIcon} alt='Корзина' />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
