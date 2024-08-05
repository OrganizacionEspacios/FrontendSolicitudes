import logoUnalNegro from "../assets/logoUnalNegro.png";
import styles from "../styles/Homepage.module.css";

const HomepageNavbar = () => {
  return (
    <div className={`${styles.homepageNavbar} d-flex`}>
      <img
        src={logoUnalNegro}
        alt="logo Unal Negro"
        className={`${styles.homepageNavbarLogo}`}
      />
      <div className={`${styles.homepageNavbarTitle}`}>
        <p>Vicedecanatura Académica</p>
        <p>coorfigob@unal.edu.co</p>
      </div>
    </div>
  );
};

export default HomepageNavbar;
