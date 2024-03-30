import logo from './logo.svg';
import './App.css';
import {Heading, ShortHeading} from './components/Heading';
import Nav from './components/Nav';
import NavItem from './components/NavItem';
import {Routes, Route, Link} from 'react-router-dom';
import Homepage from './Homepage';
import About from './About';

function App(props) {
    return (
        <>
            <Heading title={props.title} />
            <ShortHeading title="Normal short" />
            <Nav>
                <Link to={"/"} className='nav-item'>Homepage</Link>
                <Link to={"/about"} className='nav-item'>About</Link>
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </Nav>
        </>
    )
}

export default App;
