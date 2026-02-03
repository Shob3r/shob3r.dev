export default function Projects() {
	const projects = [
		{
			name: 'Audio Replacer',
			tags: ['Svelte', 'Tauri', 'Multiplatform'],
		},
		{
			name: 'Yoohoo!',
			tags: ['Preact', 'Tauri', 'Linux', 'Game'],
			description:
				'Yoohoo! is a universal Hoyoverse game launcher for Linux-based platforms, aiming to both unify and replace the launchers created by an-anime-team',
		},
	];

	return (
		<div class="mt-10 flex flex-col items-center justify-center gap-y-2">
			<h1 class="ubuntu-mono-bold text-center text-4xl">Projects</h1>
			<p>Here is a list of all projects I've worked on!</p>
		</div>
	);
}
