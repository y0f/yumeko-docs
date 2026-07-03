// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://y0f.github.io',
	base: '/yumeko-docs',
	integrations: [
		starlight({
			title: 'Yumeko',
			description: 'Player guide for the Yumeko Discord bot.',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/y0f/yumeko-docs' }],
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
