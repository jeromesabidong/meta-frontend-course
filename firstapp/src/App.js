import logo from './logo.svg';
import './App.css';
import {Heading, ShortHeading} from './components/Heading';
import Nav from './components/Nav';
import NavItem from './components/NavItem';
function App(props) {
    return (
        <>
            <Heading title={props.title} />
            <ShortHeading title="Normal short" />
            <Nav>
                <NavItem item="test1" />
                <NavItem item="test2" />
            </Nav>
        </>
    )
}

export default App;
