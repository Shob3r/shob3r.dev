import {
	siCss,
	siDotnet,
	siHtml5,
	siJavascript,
	siLinux,
	siNodedotjs,
	siPreact,
	siReact,
	siSvelte,
	siTauri,
	siTypescript,
	siUnity,
	type SimpleIcon,
} from 'simple-icons';

import {
	Construction,
	Gamepad2,
	Globe,
	Globe2,
	type LucideIcon,
} from 'lucide-preact';

export default function ProjectCard({
	name,
	tags,
	description,
	imgLink,
	projectLink,
}: {
	name: string;
	tags: string[];
	description: any;
	imgLink: string;
	projectLink: string;
}) {
	const iconMap: Record<string, LucideIcon | SimpleIcon> = {
		react: siReact,
		preact: siPreact,
		svelte: siSvelte,
		tauri: siTauri,
		nodejs: siNodedotjs,
		linux: siLinux,
		html: siHtml5,
		css: siCss,
		js: siJavascript,
		ts: siTypescript,
		dotnet: siDotnet,
		unity: siUnity,
		wip: Construction,
		game: Gamepad2,
		web: Globe,
	};

	const TagIcon = ({ tag }: { tag: string }) => {
		const icon = iconMap[tag.toLowerCase().trim()];
		if (!icon) return null;

		// Lucide icons are functions, since they are components
		if (typeof icon === 'function') {
			const Icon = icon;
			return <Icon size={20} stroke="black" />;
		}
		return (
			<svg viewBox="0 0 24 24" width={20} height={20} fill="black" aria-hidden>
				<path d={(icon as SimpleIcon).path} />
			</svg>
		);
	};

	return (
		<div
			class="h-9/10 md:w-9/10 md:h-50 flex w-auto shrink-0 cursor-pointer flex-col items-center justify-center gap-x-5 rounded-sm border border-gray-600 bg-transparent p-2 md:flex-row md:gap-y-5"
			onClick={() => window.open(projectLink, '_blank')}
		>
			<img class="rounded-2xl" src={imgLink} width={250} height={200}></img>
			<div class="flex flex-col gap-y-2">
				<div class="flex flex-col gap-y-0.5">
					<h1 class="ubuntu-mono-bold text-lg underline">{name}</h1>

					<div class="flex flex-row gap-x-2">
						{tags.map((name) => {
							return (
								<div class="border-surface-1 bg-accent min-w-20 flex flex-row items-center justify-center gap-x-2 rounded-sm border px-1 py-0.5 text-center">
									<span class="h-5 w-5">{TagIcon({ tag: name })}</span>
									<p class="invert-100 mt-0.5">{name}</p>
								</div>
							);
						})}
					</div>
				</div>
				<div class="overflow-y-scroll">
					<p class="ubuntu-mono-regular text-[15.5px]">{description}</p>
				</div>
			</div>
		</div>
	);
}
