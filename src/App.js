import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import Profile from './Components/Profile';

const App = () => {
	return (
		<div className='app-wrapper'>
			<Header />
			<Menu />
			<Profile />
		</div >
	)
}



export default App;
