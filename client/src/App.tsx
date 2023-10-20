import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import Signin from './pages/Signin/Signin';
import Home from './pages/Home/Home';
import { Toaster } from 'react-hot-toast';
import About from './pages/About/About';

const App = () => {
    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />
            <Routes>
                {/* Public routes  */}
                <Route path="/sign-up" element={<Signup />} />
                <Route path="/sign-in" element={<Signin />} />
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />

                {/* Private routes  */}
            </Routes>
        </>
    );
};

export default App;
