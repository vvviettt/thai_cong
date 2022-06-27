import { Link } from 'react-router-dom';
import styles from './TopHeader.module.scss'

function TopHeader() {
    return ( <div className={styles.top}>
        <div className={styles.line}></div>
        <div className={styles.left}>
            <Link className={styles.active} to="">
                THÁI CÔNG INTERIOR DESIGN
            </Link>
            <span>|</span>
            <a className={styles.store} href="https://onlinestore.thaicong.com/">
                Online Store
            </a>
        </div>
        <div className={styles.right}>
            <a className={styles.hotline} href="tel:84914938844">
                Hotline: +84914938844
            </a>
            <div className={styles.languages}>
                <button className={`${styles.languages_btn}  ${styles.active}`}>
                    <span className={styles.ic_en} />
                    ENG
                </button>
                <button className={styles.languages_btn}>
                    <span className={styles.ic_vn} />
                    VIE
                </button>
            </div>
        </div>
    </div> );
}

export default TopHeader;