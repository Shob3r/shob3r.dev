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
			<div class="bg-crust flex h-screen w-screen justify-center px-4 py-6 text-text">
				<div class="border-surface w-55/100 flex h-auto flex-col rounded-md border bg-transparent">
					<div class="border-b-surface flex flex-row items-center justify-around gap-x-2 border-b p-2">
						{links.map((link) => {
							return (
								<div
									class={`min-w-40 rounded-xs cursor-pointer px-3 ${location === link.path ? 'underline' : ''}`}
									onClick={() => {
										navigate(link.path);
									}}
								>
									<p class="text-center">{link.name}</p>
								</div>
							);
						})}
					</div>
					<div class="overflow-y-scroll px-3 py-2 h-full">
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
