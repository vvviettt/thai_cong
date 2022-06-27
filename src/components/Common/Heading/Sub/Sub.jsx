import { Link } from 'react-router-dom';
import styles from './Sub.module.scss';

function Sub(props) {
    const { item, items, col } = props;
    return (
        <div className={styles.sub}>
            <div className={styles.sub_wrapper}>
                <div className={styles.content}>
                    {item && (
                        <div className={styles.items}>
                            {items.map((item, index) => {
                                return (
                                    <Link to={item.link} key={index} className={styles.item}>
                                        <div
                                            className={styles.image}
                                            style={{ backgroundImage: `url(${item.thumbnail})` }}
                                        ></div>
                                        <p>{item.title}</p>
                                    </Link>
                                );
                            })}
                        </div>
                    )}

                    {col && (
                        <div className={styles.row}>
                            {items.map((item, index) => {
                                return (
                                    <div key={index} className={styles.col}>
                                        <Link
                                            className={styles.col_title}
                                            to={`/category?c=${item.name.replace(/ /, '_')}`}
                                        >
                                            {item.name}
                                        </Link>
                                        <ul className={styles.col_category}>
                                            {item.list.map((i, index) => {
                                                return (
                                                    <li key={index} className={styles.category_item}>
                                                        <Link to={`category?c=${i.replace(/ /, '_')}`}>{i}</Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Sub;
