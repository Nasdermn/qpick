import styles from './CartProduct.module.scss';
import trashIcon from '../../images/trashIcon.svg';
import { ICartProduct } from '../../interfaces';
import { removeItem, increaseQuantity, decreaseQuantity } from '../../store/cartSlice';
import { useDispatch } from 'react-redux';

function CartProduct({ name, image, price, quantity }: ICartProduct) {
  const handleRemoveCard = () => {
    dispatch(removeItem(name));
  };
  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(name));
  };
  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(name));
  };
  const dispatch = useDispatch();
  const totalPrice = price * quantity;
  return (
    <li className={styles['cart-product']}>
      <div className={styles['cart-product__infoblock']}>
        <img src={image} alt='Изображение товара' className={styles['cart-product__image']} />
        <div className={styles['cart-product__info']}>
          <h3 className={`${styles['cart-product__name']} single-line`}>{name}</h3>
          <span className={`${styles['cart-product__price']} single-line`}>{price} ₽</span>
        </div>
      </div>
      <img
        src={trashIcon}
        alt='Иконка корзины'
        className={`${styles['cart-product__remove']} clickable`}
        onClick={handleRemoveCard}
      />
      <div className={styles['cart-product__countblock']}>
        <button
          type='button'
          onClick={handleDecreaseQuantity}
          className={`${styles['cart-product__button']} ${styles['cart-product__button-decrease']} clickable`}
        />
        <span className={styles['cart-product__counter']}>{quantity}</span>
        <button
          type='button'
          onClick={handleIncreaseQuantity}
          className={`${styles['cart-product__button']} ${styles['cart-product__button-increase']} clickable`}
        />
      </div>
      <span className={`${styles['cart-product__total-price']} single-line`}>{totalPrice} ₽</span>
    </li>
  );
}

export default CartProduct;
