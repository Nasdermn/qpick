import styles from './Main.module.scss';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Product from '../../components/Product/Product';
import { headphones } from '../../mocks';
import { useTranslation } from 'react-i18next';

function Main() {
  const { t } = useTranslation();
  return (
    <div className='body'>
      <Header />
      <main className='main'>
        <section className={styles.headphones}>
          <h2 className={styles.headphones__title}>{t('headphones')}</h2>
          <ul className={styles.headphones__list}>
            {headphones
              .filter((product) => product.type === 'wired')
              .map((product) => (
                <Product
                  key={product.name}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  oldPrice={product.oldPrice}
                  rating={product.rating}
                />
              ))}
          </ul>
        </section>
        <section className={styles.headphones}>
          <h2 className={styles.headphones__title}>{t('wirelessHeadphones')}</h2>
          <ul className={styles.headphones__list}>
            {headphones
              .filter((product) => product.type === 'wireless')
              .map((product) => (
                <Product
                  key={product.name}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  oldPrice={product.oldPrice}
                  rating={product.rating}
                />
              ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Main;
