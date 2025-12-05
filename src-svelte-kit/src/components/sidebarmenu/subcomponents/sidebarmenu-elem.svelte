<script lang="ts">
	interface SidebarMenuElemProps {
		title: string;
		path: string;
		iconSrc: string;
		onclick: () => void;
	}

	const { title, path: href, iconSrc, onclick }: SidebarMenuElemProps = $props();
</script>

<li>
	<a
		{href}
		{onclick}
		class="w-full inline-flex gap-2 items-center hover:underline hover:cursor-pointer hover:bg-grey-normal p-1 rounded active:bg-grey-dark">
		<img src={iconSrc} alt="{title} icon" class="size-4.5 inline-block" />
		<p>
			{title}
		</p>
	</a>
</li>
