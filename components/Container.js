import Head from 'next/head';

import styles from '../styles/index.scss';
import Nav from './nav/Nav';
import Footer from './footer/Footer';

const style = `
#__next {
  position: absolute;
  height: 100%;
  width: 100%;
}
`;

const Container = ({ children, className }) => (
  <>
    <Head>
      <title>Website</title>
      <style>{style}</style>
    </Head>
    <Nav />
    <div className={`${styles.container} ${className}`}>{children}</div>
    <Footer />
  </>
);

export default Container;
