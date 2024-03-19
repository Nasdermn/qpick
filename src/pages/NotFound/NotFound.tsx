import { useTranslation } from 'react-i18next';
import styles from './NotFound.module.scss';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className='body'>
      <main className={styles.error}>
        <h2 className={styles.error__title}>404</h2>
        <h3 className={styles.error__subtitle}>{t('notFound')}</h3>
        <button
          className={`${styles.error__link} clickable`}
          onClick={() => {
            navigate('/');
          }}
          type='button'>
          {`-> ${t('goBack')} <-`}
        </button>
      </main>
    </div>
  );
}

export default NotFound;
