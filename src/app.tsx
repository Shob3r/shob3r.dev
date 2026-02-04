import './app.css';
import { Route, Switch, useLocation } from 'wouter-preact';
import Home from './routes/Home';
import Projects from './routes/Projects';
import Experience from './routes/Experience';
import NotFound from './routes/NotFound';
export function App() {
	const [location, navigate] = useLocation();

	const links = [
		{
			name: 'Home',
			path: '/',
		},
		{
			name: 'Experience',
			path: '/experience',
		},
		{
			name: 'Projects',
			path: '/projects',
		},
	];

	return (
		<>
			<div class="bg-crust text-text flex h-screen w-screen justify-center px-4 py-6">
				<div class="border-surface lg:w-55/100 flex h-auto flex-col rounded-md border bg-transparent sm:w-4/5 md:w-3/4">
					<div class="border-b-surface flex flex-row items-center justify-around gap-x-2 border-b p-2">
						{links.map((link) => {
							return (
								<div
									class={`rounded-xs cursor-pointer px-3 ${location === link.path ? 'underline' : ''}`}
									onClick={() => {
										navigate(link.path);
									}}
								>
									<p class="text-center">{link.name}</p>
								</div>
							);
						})}
					</div>
					<div class="h-full overflow-y-scroll px-3 py-2">
						<Switch>
							<Route path="/">
								<Home />
							</Route>
							<Route path="/projects">
								<Projects />
							</Route>
							<Route path="/experience">
								<Experience />
							</Route>
							<Route>
								<NotFound />
							</Route>
						</Switch>
					</div>
				</div>
			</div>
		</>
	);
}
