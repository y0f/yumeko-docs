// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://yumeko.67.al',
	base: '/docs',
	integrations: [
		starlight({
			title: 'Yumeko',
			description: 'Player guide for the Yumeko Discord bot.',
			social: [
				{ icon: 'discord', label: 'Join the server', href: 'https://discord.gg/wQqDqkTUM8' },
				{ icon: 'external', label: 'Yumeko site', href: 'https://yumeko.67.al/' },
			],
			sidebar: [
				{
					label: 'Start Here',
					items: [
						{ label: 'Welcome', slug: 'start/welcome' },
						{ label: 'Your First Coins', slug: 'start/first-coins' },
					],
				},
				{
					label: 'Economy',
					items: [{ autogenerate: { directory: 'economy' } }],
				},
				{
					label: 'Games',
					items: [{ autogenerate: { directory: 'games' } }],
				},
				{
					label: 'Fishing',
					items: [{ autogenerate: { directory: 'fishing' } }],
				},
				{
					label: 'More',
					items: [{ autogenerate: { directory: 'more' } }],
				},
			],
		}),
	],
});
