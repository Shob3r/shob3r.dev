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
			class="w-200 h-50 flex cursor-pointer flex-row gap-x-5 rounded-sm border border-gray-600 bg-transparent p-2"
			onClick={() => window.open(projectLink, '_blank')}
		>
			<img class="rounded-2xl" src={imgLink} width={250} height={200}></img>
			<div class="flex flex-col gap-y-2">
				<div class="flex flex-col gap-y-0.5">
					<h1 class="ubuntu-mono-bold underline text-lg">{name}</h1>

					<div class="flex flex-row gap-x-2">
						{tags.map((name) => {
							return (
								<div class="border-surface-1 bg-accent border px-1 py-0.5 rounded-sm min-w-20 text-center flex flex-row items-center justify-center gap-x-2">
									<span class="h-5 w-5">{TagIcon({ tag: name })}</span>
									<p class="invert-100 mt-0.5">{name}</p>
								</div>
							);
						})}
					</div>
				</div>
				<div class="overflow-scroll">
					<p class="ubuntu-mono-regular text-[15.5px]">{description}</p>
				</div>
			</div>
		</div>
	);
}
