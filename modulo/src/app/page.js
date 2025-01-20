import styles from '@/app/page.module.css'


export default function Home() {
  return (
    <div className={styles.main}>


      <div className={styles.mainContent}>

       <p className={styles.p1}>Suas Notas:</p>

        <div className={styles.noteContent}>
            
          <ul className={styles.notes}>
            <li>
              <div className={styles.note}>
              </div>
            </li>
            <li>
              <div className={styles.note}>
              </div>
            </li>
            <li>
              <div className={styles.note}>
              </div>
            </li>
          </ul>

        </div>

      </div>

      <button className={styles.butNew}>+</button>

    </div>
  );
}
