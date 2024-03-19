import styles from './Cart.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CartProduct from '../../components/CartProduct/CartProduct';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cartSlice';
import CartTotal from '../../components/CartTotal/CartTotal';

function Cart() {
  const cartItems = useSelector(selectCartItems);
  const { t } = useTranslation();
  return (
    <div className='body'>
      <Header />
      <main className='main'>
        <section className={styles.cart}>
          <h2 className={styles.cart__title}>{t('cart')}</h2>
          <div className={styles.cart__body}>
            <ul className={styles.cart__products}>
              {cartItems.map((item) => (
                <CartProduct
                  key={item.name}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))}
            </ul>
            <CartTotal />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Cart;
