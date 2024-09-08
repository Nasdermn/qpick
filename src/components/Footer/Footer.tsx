import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import globeIcon from '../../assets/images/globeIcon.svg';
import vkIcon from '../../assets/images/socials/vk.svg';
import telegramIcon from '../../assets/images/socials/telegram.svg';
import whatsAppIcon from '../../assets/images/socials/whatsApp.svg';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    sessionStorage.setItem('language', language);
  };
  const currentLanguage = i18n.language;
  return (
    <footer className={styles.footer}>
      <Link to='/' className={styles.footer__link}>
        <h2 className={`${styles.footer__logo} clickable`}>QPICK</h2>
      </Link>
      <nav className={styles.footer__navigation}>
        <ul className={styles.footer__list}>
          <li className={`${styles.footer__item} clickable`}>
            <Link to='/favourites' className={styles.footer__link}>
              {t('favourites')}
            </Link>
          </li>
          <li className={`${styles.footer__item} clickable`}>
            <Link to='/cart' className={styles.footer__link}>
              {t('cart')}
            </Link>
          </li>
          <li className={`${styles.footer__item} clickable`}>
            <Link to='/contacts' className={styles.footer__link}>
              {t('contacts')}
            </Link>
          </li>
        </ul>
        <div className={styles.footer__settings}>
          <Link to='/terms' className={`${styles.footer__link} clickable`}>
            {t('termsOfService')}
          </Link>
          <div className={styles.footer__languages}>
            <img src={globeIcon} alt='Иконка глобуса' className={styles.footer__globe} />
            <button
              type='button'
              onClick={() => changeLanguage('kaz')}
              className={`${styles.footer__language} ${
                currentLanguage === 'kaz' ? styles.footer__language_current : ''
              } clickable`}>
              Каз
            </button>
            <button
              type='button'
              onClick={() => changeLanguage('ru')}
              className={`${styles.footer__language} ${
                currentLanguage === 'ru' ? styles.footer__language_current : ''
              } clickable`}>
              Рус
            </button>
            <button
              type='button'
              onClick={() => changeLanguage('eng')}
              className={`${styles.footer__language} ${
                currentLanguage === 'eng' ? styles.footer__language_current : ''
              } clickable`}>
              Eng
            </button>
          </div>
        </div>
      </nav>
      <div className={styles.footer__socials}>
        <a
          href='https://github.com/Nasdermn/qpick'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.footer__social}>
          <img src={vkIcon} alt='Vk' className={`${styles.footer__icon} clickable`} />
        </a>
        <a
          href='https://github.com/Nasdermn/qpick'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.footer__social}>
          <img src={telegramIcon} alt='Telegram' className={`${styles.footer__icon} clickable`} />
        </a>
        <a
          href='https://github.com/Nasdermn/qpick'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.footer__social}>
          <img src={whatsAppIcon} alt='WhatsApp' className={`${styles.footer__icon} clickable`} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
