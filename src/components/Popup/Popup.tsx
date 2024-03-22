import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './Popup.module.scss';
import { IPopupProps } from '../../interfaces';

function Popup({ isOpen, onClose }: IPopupProps) {
  const { t } = useTranslation();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <div className={`${styles.popup} ${isOpen ? styles.popup_opened : ''}`}>
      <div className={styles.popup__container}>
        <button className={`${styles.popup__cross} clickable`} type='button' onClick={onClose} />
        <h3 className={styles.popup__title}>{t('itemAdded')}</h3>
        <div className={styles.popup__buttons}>
          <button className={`${styles.popup__button} clickable`} onClick={onClose}>
            {t('continueShopping')}
          </button>
          <Link to='/cart' className={`${styles.popup__button} clickable`}>
            {t('goToCart')}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Popup;
