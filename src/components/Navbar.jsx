import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logo.png';
import { navItems } from '../constants';
export default function Navbar() {
	const [mobileDrawer, setMobileDrawer] = useState(false);

	const toggleNavbar = () => {
		setMobileDrawer(!mobileDrawer);
	};

	return (
		<>
			<nav className=" sticky top-0 z-50 py-3 border-b-2 border-b-gray-900 backdrop:blur-lg opacity-80 bg-gray-800 ">
				<div className="container px-4  m-auto relative text-sm backdrop:blur-xl">
					<div className="flex flex-row justify-between items-center">
						<div className="flex items-center flex-shrink-0">
							<img
								className="mr-2 h-10 w-10"
								src={logo}
								alt="logo"
							/>
							<span className="text-xl tracking-tight ">
								Ready Player One
							</span>
						</div>

						<ul className="hidden lg:flex ml-8 space-x-8">
							{navItems.map((item, index) => (
								<li key={index}>
									<a href={item.href}>{item.label}</a>
								</li>
							))}
						</ul>

						<div className="hidden lg:flex justify-content space-x-8 items-center">
							<a href="#" className="py-2 px-3 border rounded-md">
								Sign In
							</a>
							<a
								href="#"
								className="py-2 px-3 border rounded-md bg-gradient-to-r from-orange-400 to-orange-800">
								Create account
							</a>
						</div>

						<div className="lg:hidden md:flex flex-col justify-end">
							<button onClick={toggleNavbar}>
								{mobileDrawer ? <X /> : <Menu />}
							</button>
						</div>
					</div>
					{/** if mobileDrawer and the div is true then it will render it quite a clever design  */}
					{mobileDrawer && (
						<div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
							<ul>
								{navItems.map((item, index) => (
									<li key={index} className="py-1  ">
										<a href={item.href}>{item.label}</a>
									</li>
								))}
							</ul>

                            
						<div className=" mt-4 flex space-x-8 items-center">
							<a href="#" className="py-2 px-3 border rounded-md">
								Sign In
							</a>
							<a
								href="#"
								className="py-2 px-3 border rounded-md bg-gradient-to-r from-orange-400 to-orange-800">
								Create account
							</a>
						</div>
						</div>
					)}
				</div>
			</nav>
		</>
	);
}
