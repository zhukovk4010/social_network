import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Profile from './Components/Profile/Profile';

const App = () => {
	return (
		<div className='app-wrapper'>
			<Header />
			<div className='content-wrapper'>
				<Menu />
				<Profile />
			</div>
		</div >
	)
}



export default App;
