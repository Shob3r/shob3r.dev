import ProjectCard from '../components/ProjectCard';

export default function Projects() {
	const projects = [
		{
			name: 'Audio Replacer',
			tags: ['Svelte', 'Tauri'],
			description:
				'Audio Replacer is an application aimed to streamline audio dubbing projects for video games (i.e. Dub mods), with features that are extremely useful for this task. This was developed for use in a future project of mine',
			imgLink:
				'https://raw.githubusercontent.com/lemons-studios/audio-replacer/refs/heads/main/app-icon.png',
			projectLink: 'https://github.com/lemons-studios/audio-replacer',
		},
		{
			name: 'Yoohoo!',
			tags: ['Preact', 'Tauri', 'Linux', 'WIP'],
			description:
				"Yoohoo! is a universal Hoyoverse game launcher for Linux-based platforms, aiming to both unify and replace the launchers created by an-anime-team. Currently WIP. I will be distributing Yoohoo on Flathub when it's ready",
			imgLink:
				'https://raw.githubusercontent.com/Shob3r/yoohoo/refs/heads/main/app-icon.png',
			projectLink: 'https://github.com/Shob3r/yoohoo',
		},
		{
			name: 'Soaring Avians',
			tags: ['HTML', 'CSS', 'JS'],
			description:
				'Project for a computer science class. A (rather crude) remake of Flappy bird with vanilla HTML/CSS/JavaScript',
			imgLink:
				'https://raw.githubusercontent.com/Shob3r/soaring-avians/refs/heads/master/img/repoScreenshot.png',
			projectLink: 'https://github.com/Shob3r/soaring-avians',
		},
		{
			name: 'Adrift In Teyvat',
			tags: ['React', 'Game', 'WIP'],
			description:
				'Adrift in Teyvat is a (very) WIP game adapting the Geoguessr formula to open-world game "Genshin Impact"',
			imgLink: 'https://placehold.co/150x150',
			projectLink: 'https://github.com/adrift-in-teyvat/',
		},
		{
			name: 'shob3r.dev',
			tags: ['Preact', 'Web'],
			description:
				'The website you are on right now! I took the time to develop this as a side project whilst developing yoohoo, since the package name that I want for it on Flathub requires me to control this domain',
			imgLink:
				'https://raw.githubusercontent.com/Shob3r/shob3r.dev/refs/heads/main/public/favicon.jpg',
			projectLink: 'https://github.com/Shob3r/shob3r.dev',
		},
	];

	return (
		<div class="mt-10 flex w-full flex-col items-center justify-center gap-y-2">
			<h1 class="ubuntu-mono-bold text-center text-4xl mb-3">Projects</h1>

			<div class="flex flex-col items-center justify-center gap-y-5">
				{projects.map((project) => {
					return (
						<ProjectCard
							name={project.name}
							tags={project.tags}
							description={project.description}
							imgLink={project.imgLink}
							projectLink={project.projectLink}
						/>
					);
				})}
			</div>
		</div>
	);
}
