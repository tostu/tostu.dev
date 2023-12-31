export default {
	name: 'skills',
	label: 'Skills Page',
	file: 'src/lib/content/skills.json',
	fields: [
		{
			name: 'year',
			label: 'Year',
			widget: 'list',
			fields: [
				{
					name: 'year',
					label: 'Year',
					widget: 'number',
					value_type: 'int',
					min: 2000,
					max: 3000,
					step: 1
				},
				{
					name: 'skill',
					label: 'Skill',
					widget: 'list',
					fields: [
						{ name: 'name', label: 'Name', widget: 'string' },
						{
							name: 'description',
							label: 'Description',
							widget: 'text',
							required: false
						},
						{
							name: 'icon',
							label: 'Skill icon',
							widget: 'image',
							choose_url: true
						}
					]
				}
			]
		}
	]
};
