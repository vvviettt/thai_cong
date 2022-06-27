import styles from './FooterUI.module.scss';
import { Link } from 'react-router-dom';
function FooterUi() {
    return (
        <div>
            <div className={styles.top}>
                <div className={`${styles.wrapper} flex`}>
                    <div className={`col-2 ${styles.link}`}>
                        <ul>
                            <li>
                                <Link to="">Services</Link>
                            </li>
                            <li>
                                <Link to="">Products</Link>
                            </li>
                            <li>
                                <Link to="">RECRUITMENT</Link>
                            </li>
                            <li>
                                <Link to="">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={`col-3 ${styles.store}}`}>
                        <Link to="/store?c=sai-gon">THÁI CÔNG – THAO DIEN, SAIGON</Link>
                        <p>
                            028.38.989.818 <br />
                            215 A1 Nguyen Van Huong,
                            <br />
                            Thao Dien, Thu Duc, Ho Chi Minh City
                        </p>
                    </div>
                    <div className="col-3">
                        <Link to="/store?c=sai-gon">HAMBURG – GERMANY</Link>
                        <p>
                            +49.1739.55.88.22
                            <br />
                            Eppendorfer Weg 165, 20253,
                            <br />
                            HamBurg, Đức
                        </p>
                    </div>
                    <div className="col-4">
                        <p>SIGN UP NEWSLETTERS</p>
                        <input type="text" />
                        <span>Please enter the valid email</span>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}></div>
        </div>
    );
}

export default FooterUi;
