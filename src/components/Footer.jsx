import { resourcesLinks, platformLinks, communityLinks } from '../constants';
export default function Footer() {
	return (
		<>
			<footer className="p-6 mt-20 border-t py-10 border-neutral-700 ">
				<div className="grid grid-cols-2 lg:grid-cols-3 gap-4 px-4  py-2 border-spacing-6 border rounded-lg  border-orange-500 backdrop-blur-lg ">
					<div >
						<h3>Resources
							<ul className="space-y-2">
								{resourcesLinks.map((resourceLink, index) => (
									<li key={index}>
										<a
											className="text-neutral-300 hover:text-white"
											href={resourceLink.href}>
											{resourceLink.text}
										</a>
									</li>
								))}
							</ul>
						</h3>
					</div>

                    <div>
						<h3>Community
							<ul className="space-y-2">
								{communityLinks.map((communityLink, index) => (
									<li key={index}>
										<a
											className="text-neutral-300 hover:text-white"
											href={communityLink.href}>
											{communityLink.text}
										</a>
									</li>
								))}
							</ul>
						</h3>
					</div>


                    <div>
						<h3>Platform
							<ul className="space-y-2">
								{platformLinks.map((platformLink, index) => (
									<li key={index}>
										<a
											className="text-neutral-300 hover:text-white"
											href={platformLink.href}>
											{platformLink.text}
										</a>
                                        
									</li>
								))}
							</ul>
						</h3>
					</div>
				</div>
			</footer>
		</>
	);
}
