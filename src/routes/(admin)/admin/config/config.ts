import page from './collections/page';

const config = {
	backend: {
		name: 'github',
		repo: 'tostu/tostu.dev',
		branch: 'master',
		api_root: 'https://api.github.com',
		base_url: 'https://tostu.dev',
		site_domain: 'tostu.dev',
		auth_endpoint: 'api/auth'
	},
	i18n: {
		structure: 'single_file',
		locales: ['en', 'de'],
		defaultLocale: 'en'
	},
	// local_backend: true,
	media_folder: 'static/images',
	public_folder: 'images',
	collections: [page]
};

export default config;
