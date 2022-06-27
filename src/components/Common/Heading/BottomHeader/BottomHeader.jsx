import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import Sub from '../Sub/Sub';
import styles from './BottomHeader.module.scss';
import about_QTC from '~/static/about_QTC.jpg';
import about_company from '~/static/about_company.jpg';
import about_press from '~/static/about_press.jpg';
import services_decoration from '~/static/services_decoration.jpg';
import services_interiorDesign from '~/static/services_interiorDesign.jpg';

function BottomHeader() {
    const aboutItems = [
        {
            title: 'Quach thai cong',
            thumbnail: about_QTC,
            link: '/about/quach-thai-cong',
        },
        {
            title: 'Company',
            thumbnail: about_company,
            link: '/about/company',
        },
        {
            title: 'Press',
            thumbnail: about_press,
            link: '/about/press',
        },
    ];
    const services = [
        {
            title: 'Interior design',
            thumbnail: services_interiorDesign,
            link: '/services/interior-design',
        },
        {
            title: 'decoration & furnishing',
            thumbnail: services_decoration,
            link: '/services/interior-design',
        },
    ];
    const furniture = [
        {
            name: 'living room',
            list: ['sofa', 'armchair', 'coffee table', 'side table', 'sideboard', 'console'],
        },
        {
            name: 'dining room',
            list: ['dining table', 'dining chair', 'bar'],
        },
        {
            name: 'bedroom',
            list: ['beds', 'nightstand', 'bench', 'chest', 'makeup table'],
        },
        {
            name: 'working room',
            list: ['desk', 'book case'],
        },
        {
            name: 'lighting',
            list: ['chandelier', 'table lamp', 'wall LAMP', 'floor lamp'],
        },
        {
            name: 'decoration',
            list: [
                'mirror',
                'accessories',
                'Bathroom accessories',
                'fragrance',
                'flowers',
                'prints',
                'rugs',
                'wallpaper',
            ],
        },
        {
            name: 'tableware',
            list: ['Baccarat', 'Christofle', `Sieger Ca'd'Oro`, `Sieger Wunderkammer`, `Sieger Treasure`],
        },
    ];

    return (
        <div className={styles.bottom}>
            <div className={styles.bottom_wrapper}>
                <div className={styles.logo}></div>
                <ul className={styles.nav}>
                    <li className={styles.nav_item}>
                        <NavLink className={styles.nav_link} to="/">
                            About
                        </NavLink>
                        <div className={styles.sub_wrapper}>
                            <Sub item items={aboutItems} />
                        </div>
                    </li>
                    <li className={styles.nav_item}>
                        <NavLink className={styles.nav_link} to="/services">
                            Services
                        </NavLink>
                        <div className={styles.sub_wrapper}>
                            <Sub item items={services} />
                        </div>
                    </li>
                    <li className={styles.nav_item}>
                        <NavLink className={styles.nav_link} to="/projects">
                            Projects
                        </NavLink>
                    </li>
                    <li className={styles.nav_item}>
                        <NavLink className={styles.nav_link} to="/furniture">
                            Furniture
                        </NavLink>
                        <div className={styles.sub_wrapper}>
                            <Sub col items={furniture} />
                        </div>
                    </li>
                    <li className={styles.nav_item}>
                        <NavLink className={styles.nav_link} to="/store">
                            Store
                        </NavLink>
                    </li>
                    <li className={styles.nav_item}>
                        <NavLink className={styles.nav_link} to="/contact">
                            contact
                        </NavLink>
                    </li>
                    <li className={styles.nav_item}>
                        <NavLink className={styles.nav_link} to="/">
                            <FontAwesomeIcon className={styles.icon} icon={faSearch} />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default BottomHeader;
