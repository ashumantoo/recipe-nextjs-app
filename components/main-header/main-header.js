import Link from "next/link";
import logoImg from '@/assets/logo.png';
import styles from './main-header.module.css';
import Image from "next/image";
import NavLink from "../nav-link/nav-link";

export const MainHeader = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        <Image src={logoImg} alt="a plate with full on food on it" priority />
        <span>Ultimate Food</span>
      </Link>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink href={'/meals'}>Meals</NavLink>
          </li>
          <li>
            <NavLink href={"/community"}>Foodie Community</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}