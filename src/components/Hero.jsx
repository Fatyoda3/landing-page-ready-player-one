import  Video2 from '../assets/video2.mp4';
import  Video1 from '../assets/video1.mp4';
export default function Hero() {
	return (
		<>
			<div className="flex flex-col items-center mt-6 lg:mt-20 mr-2 text-center">
				<h1 className="text-4xl sm:text-2xl lg:text-6xl tracking-wide mr-2 pr-2 ">
					VirtualR build tools
					<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-800">
						{' '}
						for developers
					</span>
				</h1>

				<p className="text-left px-8 pt-2 mt-10 text-neutral-400 max-w-4xl">
					Empower your creativity and bring your VR apps to ideas to
					life with our intuitive developers tools. Get today and turn
					your imagination into immersive reality!
				</p>

				<div className="flex justify-center my-10">
					<a
						href="#"
						className="bg-gradient-to-r from-orange-300 to-orange-800 py-4 px-3 mx-3 rounded-lg">
						{' '}
						Start for free
					</a>
					<a href="#" className="py-3 mx-3 px-2 rounded-md border">
						Documentation
					</a>
				</div>

				<div>
					<div className="flex mt-10 justify-center flex-wrap">
						<video
							autoPlay
							muted
							loop
							className="rounded-lg w-1/3 border border-orange-700 p-4 m-2">
							<source src={Video2} type="video/mp4" />
                            your browser not supported
						</video>
						<video
							autoPlay
							muted
							loop
							className="rounded-lg w-1/3 border border-orange-700 p-4 m-2">
							<source src={Video1} type="video/mp4" />
                            your browser not supported

						</video>
					</div>
				</div>
			</div>
		</>
	);
}
