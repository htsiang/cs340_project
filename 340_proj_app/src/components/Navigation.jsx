import { Link } from 'react-router-dom';
import '../App.css';

function Navigation(){
    return (
        <nav className='App-nav'>
            <Link to='/' className='link'>Trainers</Link>
            <Link to='/pokemon' className='link'>Pokemon</Link>
            <Link to='/treatments' className='link'>Treatments</Link>
            <Link to='/sessions' className='link'>Sessions</Link>
        </nav>
    )
}

export default Navigation;