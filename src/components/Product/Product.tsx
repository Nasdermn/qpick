import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import styles from './Product.module.scss';
import { addItem } from '../../store/cartSlice';
import { IProduct } from '../../interfaces';
import Popup from '../Popup/Popup';

function Product({ name, image, price, oldPrice, rating }: IProduct) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleAddToCart = () => {
    dispatch(addItem({ name, image, price, quantity: 1 }));
    setIsPopupOpen(true);
  };

  return (
    <li className={styles.product}>
      <img src={image} alt={name} className={styles.product__image} />
      <div className={styles.product__info}>
        <h3 className={`${styles.product__name} single-line`}>{name}</h3>
        <div className={styles['product__price-wrapper']}>
          <div className={styles['product__price-block']}>
            <span className={`${styles.product__price} single-line`}>{price} ₽</span>
            <span className={`${styles['product__old-price']} single-line`}>
              {oldPrice ? oldPrice + ' ₽' : ''}
            </span>
          </div>
        </div>
        <span className={styles.product__rating}>{rating.toFixed(1)}</span>
        <button
          type='button'
          onClick={handleAddToCart}
          className={`${styles.product__button} clickable`}>
          {t('buy')}
        </button>
      </div>
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </li>
  );
}

export default Product;
