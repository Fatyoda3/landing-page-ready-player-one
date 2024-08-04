import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Feature from './components/Feature';
import Workflow from './components/Workflow';
import Price from './components/Price';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
// import './App.css'
function App() {
	return (
		<>
			<Navbar />
			<div className="max-w-7xl mx-auto pt-20 px-6"></div>
			<Hero />
			<Feature />
			{/* <App />  this was the bug to much rerender fuck  */}
			<Workflow />
			<Price />
			<Testimonials />
			<Footer />
		</>
	);
}

export default App;
