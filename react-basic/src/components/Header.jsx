import styles from './Header.module.css';

export function Header({ siteTitle }) {

    // Add an alert message when the site title is clicked
    const handleClick = () => {
        alert('This is a React learning platform that provides practical learning materials for programming learners. You can learn React basics and advanced topics by practicing with our content.');
    }

    return (
    <header className={styles.header}>
      <nav>
        <h1>{siteTitle}</h1>
        <ul className={styles.navList}>
          <li className={styles.navItem}><a href="#">HOME</a></li>
          <li className={styles.navItem}><a href="#" onClick={handleClick}>ABOUT</a></li>
        </ul>
      </nav>
    </header>
  );
}