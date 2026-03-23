'use client'

import { useState } from 'react'
import Link from 'next/link'
import styles from './MobileMenu.module.sass'
import LogoutButton from 'app/components/logout/logout'

interface MobileMenuProps {
  isLoggedIn: boolean
  firstName: string | null | undefined
}

export default function MobileMenu({ isLoggedIn, firstName }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className={styles.MobileMenu}>
      <button
        className={styles.MobileMenu__hamburger}
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span className={styles.MobileMenu__line}></span>
        <span className={styles.MobileMenu__line}></span>
        <span className={styles.MobileMenu__line}></span>
      </button>

      <div className={`${styles.MobileMenu__dropdown} ${isOpen ? styles.MobileMenu__dropdown_open : ''}`}>
        <ul className={styles.MobileMenu__list}>
          <li>
            <Link href="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/store" onClick={closeMenu}>
              Store
            </Link>
          </li>
          {!isLoggedIn && (
            <li>
              <Link href="/signup" onClick={closeMenu}>
                Signup
              </Link>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <Link href="/login" onClick={closeMenu}>
                Login
              </Link>
            </li>
          )}
        </ul>

        {isLoggedIn && (
          <div className={styles.MobileMenu__user}>
            <div className={styles.MobileMenu__userLogged}>
              <Link href="/my-account" onClick={closeMenu}>
                <p>Hola {firstName}</p>
              </Link>
              <LogoutButton />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
