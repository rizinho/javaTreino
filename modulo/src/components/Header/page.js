import styles from '@/components/Header/page.module.css'

import Link from 'next/link';

export default function Header() {
    return(
        <div className={styles.header}>
            <h1 className={styles.title}>Bloco de Notas</h1>

         <div className={styles.navContent}>

            <div className={styles.navBar}>
                <Link href='/'>Sobre</Link>
            </div>
            <div className={styles.navBar}>
                <Link href='/'>FAQ</Link>
            </div>
            <div className={styles.navBar}>
                <Link href='/'>Configurações</Link>
            </div>

         </div>

        </div>
    );
}