import styles from './Heading.module.scss';
import TopHeader from './TopHeader/TopHeader';
import BottomHeader from './BottomHeader';

function Heading() {
    return (
        <div className={styles.heading}>
            <TopHeader />
            <BottomHeader />
        </div>
    );
}

export default Heading;
