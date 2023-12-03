export default {
	name: 'home',
	label: 'Home Page',
	file: 'src/lib/content/home.json',
	i18n: true,
	fields: [
		{ label: 'Title', name: 'title', widget: 'string', i18n: true },
		{
			name: 'personal',
			label: 'Personal',
			widget: 'list',
			i18n: true,
			fields: [
				{
					name: 'icon',
					label: 'Skill icon',
					widget: 'image',
					i18n: 'duplicate'
				},
				{ name: 'topic', label: 'Topic', widget: 'string', i18n: true },
				{
					name: 'text',
					label: 'Text',
					widget: 'text',
					i18n: true
				}
			]
		}
	]
};
