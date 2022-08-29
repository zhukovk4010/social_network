import './App.css';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Profile from './Components/Profile/Profile';
import Dialogs from './Components/Dialogs/Dialogs';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (props) => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header />
				<div className='content-wrapper'>
					<Menu menuState={props.state.menu} />
					<div className='app-wrapper-content'>
						<Routes>
							<Route path='/profile'
								element={<Profile profileState={props.state.profilePage} addPost={props.addPost} />} />
							<Route path='/dialogs'
								element={<Dialogs dialogsState={props.state.dialogsPage} />} />
							<Route path='/news' element={<News />} />
							<Route path='/music' element={<Music />} />
							<Route path='/settings' element={<Settings />} />
						</Routes>
					</div>
				</div>
			</div >
		</BrowserRouter>
	)
}



export default App;
