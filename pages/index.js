import styles from '../styles/index.scss';
import Container from '../components/Container';
import images from '../utils/images';

const Index = () => (
  <Container className={styles.index} showNavSearch={false}>
    <h1>Hello, World</h1>
    <img src={images.searchIcon} alt="search icon" />
  </Container>
);

export default Index;
