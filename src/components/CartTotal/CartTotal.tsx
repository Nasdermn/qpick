import styles from './CartTotal.module.scss';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cartSlice';

function CartTotal() {
  const cartItems = useSelector(selectCartItems);
  const { t } = useTranslation();
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  return (
    <div className={styles['cart-total']}>
      {totalPrice !== 0 ? (
        <>
          <div className={styles['cart-total__info']}>
            <span className={styles['cart-total__text']}>{t('total')}</span>
            <span className={styles['cart-total__text']}>₽ {totalPrice}</span>
          </div>
          <Link to='/buy' className={`${styles['cart-total__link']} clickable`}>
            {t('proceedToCheckout')}
          </Link>
        </>
      ) : (
        <div className={styles['cart-total__wrapper']}>
          <span className={styles['cart-total__text']}>{t('emptyCart')}</span>
        </div>
      )}
    </div>
  );
}

export default CartTotal;
