import {
	ErrorBoundary,
	hydrate,
	LocationProvider,
	Route,
	Router,
	prerender as ssr,
} from 'preact-iso';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import Projects from './routes/Projects';
import './app.css';
import Navbar from './components/Navbar';

export function App() {
	return (
		<LocationProvider>
			<ErrorBoundary>
				<div class="bg-crust text-text flex h-screen w-screen justify-center px-4 py-6">
					<div class="border-surface lg:w-55/100 flex h-auto flex-col rounded-md border bg-transparent sm:w-4/5 md:w-3/4">
						<Navbar />
						<div class="h-full overflow-y-scroll px-3 py-2">
							<Router>
								<Route path="/" component={Home} />
								<Route path="/projects" component={Projects} />
								<Route default component={NotFound} />
							</Router>
						</div>
					</div>
				</div>
			</ErrorBoundary>
		</LocationProvider>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app') as HTMLElement);
}

export async function prerender(data: any) {
	return await ssr(<App {...data} />);
}
