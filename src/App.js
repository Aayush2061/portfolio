import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import About from './pages/About/About';

function App() {
	return (
		<>
			<Layout />
			<div className="container about-container">
				<About />
			</div>

		</>
	);
}

export default App;
