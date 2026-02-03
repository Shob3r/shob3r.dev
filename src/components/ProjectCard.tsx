export default function ProjectCard({
	name,
	tags,
	description,
	imgLink,
	projectLink,
}: {
	name: string;
	tags: string[];
	description: string;
	imgLink: string;
	projectLink: string;
}) {
	return (
		<div
			class="w-200 flex cursor-pointer flex-row gap-x-5 rounded-sm border border-gray-600 bg-transparent p-2"
			onClick={() => window.open(projectLink, "_blank")}
		>
			<img class="rounded-2xl" src={imgLink} width={250} height={200}></img>
			<div class="flex flex-col gap-y-2">
				<div class="flex flex-col gap-y-0.5">
					<h1 class="ubuntu-mono-bold">{name}</h1>
					<div class="flex flex-row gap-x-2">
						{tags.map((name) => {
							<div class="border-surface-1 border">
								<p>{name}</p>
							</div>;
						})}
					</div>
				</div>
				<p class="ubuntu-mono-regular">{description}</p>
			</div>
		</div>
	);
}
