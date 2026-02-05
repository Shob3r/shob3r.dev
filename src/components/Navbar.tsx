import { useLocation } from 'preact-iso';

export default function Navbar() {
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

	const { url } = useLocation();

	return (
		<div class="border-b-surface flex flex-row items-center justify-around gap-x-2 border-b p-2">
			{links.map((link) => {
				return (
					<a
						href={link.path}
						class={`text-center px-3 cursor-pointer rounded-xs ${url === link.path ? 'underline' : ''}`}
					>
						<p>{link.name}</p>
					</a>
				);
			})}
		</div>
	);
}
