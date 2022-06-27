import { Outlet } from 'react-router-dom';
import Heading from './components/Common/Heading/Heading';
import Footer from './components/Common/Footer/Footer';
function App() {
    return (
        <div>
            <Heading />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
