import { GraduationCap, MapPin } from 'lucide-preact';
import {
	siDiscord,
	siDotnet,
	siGithub,
	siGmail,
	siGnubash,
	siJavascript,
	siNodedotjs,
	siOpenjdk,
	siPreact,
	siRust,
	siSvelte,
	siTailwindcss,
	siTauri,
	siTypescript,
	siUnity,
} from 'simple-icons';

export default function Home() {
	const socials = [
		{
			icon: siDiscord,
			link: 'https://discordapp.com/users/539958184597520405',
		},
		{
			icon: siGithub,
			link: 'https://github.com/Shob3r',
		},
		{
			icon: siGmail,
			link: 'mailto:andrewpinter23@gmail.com',
		},
	] as const;

	const languages = [
		{
			icon: siOpenjdk,
			link: 'https://openjdk.org',
		},
		{
			icon: siTypescript,
			link: 'https://typescriptlang.org',
		},
		{
			icon: siJavascript,
			link: 'https://developer.mozilla.org/docs/Web/JavaScript',
		},
		{
			icon: siGnubash,
			link: 'https://www.gnu.org/software/bash/',
		},
		{
			icon: siRust,
			link: 'https://rust-lang.org',
		},
	];

	const frameworks = [
		{
			icon: siDotnet,
			link: 'https://dot.net',
		},
		{
			icon: siNodedotjs,
			link: 'https://nodejs.org',
		},
		{
			icon: siTauri,
			link: 'https://tauri.app',
		},
		{
			icon: siSvelte,
			link: 'https://svelte.dev',
		},
		{
			icon: siPreact,
			link: 'https://preactjs.com',
		},
		{
			icon: siTailwindcss,
			link: 'https://tailwindcss.com',
		},
		{
			icon: siUnity,
			link: 'https://unity.com',
		},
	];

	return (
		<div class="flex flex-col h-full w-full justify-center items-center">
			<h1 class="text-6xl">Shob3r</h1>
			<div class="flex flex-col w-full justify-center items-center">
				<div class="flex flex-row gap-x-1.5">
					<MapPin /> <p>Vancouver, Canada (UTC-8)</p>
				</div>
				<div class="flex flex-row gap-x-1.5">
					<GraduationCap /> <p>Langara College</p>
				</div>
			</div>

			<div class="flex flex-col gap-y-1.5 mt-5 text-center text-3xl">
				<h3>Languages</h3>
				<div class="flex flex-row justify-center gap-x-3">
					<img
						class="cursor-pointer"
						onClick={() =>
							window.open(
								'https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/overview',
								'_blank',
							)
						}
						src="https://upload.wikimedia.org/wikipedia/commons/b/bd/Logo_C_sharp.svg"
						height={24}
						width={24}
					/>
					{languages.map((lang) => {
						return (
							<svg
								class="cursor-pointer"
								onClick={() => window.open(lang.link, '_blank')}
								viewBox="0 0 24 24"
								width={24}
								height={24}
								fill="white"
								aria-hidden
							>
								<path d={lang.icon.path} />
							</svg>
						);
					})}
				</div>

				<h3>Frameworks</h3>
				<div class="flex flex-row justify-center gap-x-3">
					{frameworks.map((framework) => {
						return (
							<svg
								class="cursor-pointer"
								onClick={() => window.open(framework.link, '_blank')}
								viewBox="0 0 24 24"
								width={24}
								height={24}
								fill="white"
								aria-hidden
							>
								<path d={framework.icon.path} />
							</svg>
						);
					})}
					<img
						class="cursor-pointer"
						onClick={() =>
							window.open('https://github.com/microsoft/WindowsAppSDK')
						}
						src="https://upload.wikimedia.org/wikipedia/commons/8/8e/WinUI.svg"
						width={24}
						height={24}
					/>
				</div>
			</div>

			<h3 class="text-4xl mt-5">Socials</h3>
			<div class="flex flex-row gap-x-3">
				{socials.map((social) => {
					return (
						<svg
							class="cursor-pointer"
							onClick={() => window.open(social.link, '_blank')}
							viewBox="0 0 24 24"
							width={24}
							height={24}
							fill="white"
							aria-hidden
						>
							<path d={social.icon.path} />
						</svg>
					);
				})}
			</div>

		</div>
	);
}
