import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>

            
        <nav className={styles.nav}>
          <a>Home</a>
          <a>Stands</a>
          <a>Sobre</a>
        </nav>
    </header>
  );
}
