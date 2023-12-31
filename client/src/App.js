import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import Techstack from './pages/Techstack/Techstack';
import Projects from './pages/Projects/Projects';
import Education from './pages/Education/Education';
import WorkExp from './pages/workExp/WorkExp';
import Contacts from './pages/Contacts/Contacts';
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from './context/ThemeContext';
import ParticlesBackground from './components/tsparticles/ParticlesBackground';
import Fade from 'react-reveal/Fade'

function App() {
	const [theme] = useTheme();
	return (
		<>

			<ParticlesBackground />
			<div id={theme}>
				<Layout />
				<div className="container about-container">
					<About />
					<Education />
					<Techstack />
					<Projects />
					{/* <WorkExp /> */}
					<Contacts />
				</div>
				<Fade>
					<div className="footer pb-3 ms-3">
						<h4 className='text-center'>
							Made By Aayush Bhandari &copy;
						</h4>
					</div>
				</Fade>
			</div>
			<ScrollToTop
				smooth
				color='white'
				style={{ backgroundColor: "#3baff3", borderRadius: "80px" }}
			/>

		</>
	);
}


export default App;
