import houseChimneyIcon from '$lib/assets/house-chimney.svg';
import siteBrowserIcon from '$lib/assets/site-browser.svg';

export const appRoutes = [
	{
		title: 'Home',
		path: '/',
		iconSrc: houseChimneyIcon,
	},
	{
		title: 'Api Caller',
		path: '/api-caller',
		iconSrc: siteBrowserIcon,
	},
	{
		title: 'Pomodoro Timer',
		path: '/pomodoro',
		iconSrc: '',
	},
	// {
	// 	title: 'Products',
	// 	path: '/products',
	// 	iconSrc: '',
	// 	children: [
	// 		{ title: 'List', path: '/list' },
	// 		{ title: 'Add product', path: '/new' },
	// 	],
	// },
	// {
	// 	title: 'Settings',
	// 	path: '/settings',
	// 	iconSrc: 'settings',
	// },
];
