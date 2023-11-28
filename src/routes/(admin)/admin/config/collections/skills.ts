const skills = {
    name: "config",
    label: "Config",
    delete: false,
    editor: { preview: false },
    files: [
        {
            name: "general",
            label: "Site Config",
            file: "content/config.json",
            description: "General site settings",
            fields: [
                {
                    label: "URL",
                    name: "base_url",
                    widget: "string",
                    hint: "Do not enter the trailing slash of the URL",
                },
                { label: "Site title", name: "site_title", widget: "string" },
                {
                    label: "Site description",
                    name: "site_description",
                    widget: "string",
                },
                {
                    label: "Site keywords",
                    name: "site_keywords",
                    widget: "list",
                    summary: "{{fields.keyword.keyword}}",
                    fields: [{ label: "Keyword", name: "keyword", widget: "string" }],
                },
                {
                    label: "Twitter account",
                    name: "twitter_account",
                    widget: "string",
                },
                {
                    label: "GitHub account",
                    name: "github_account",
                    widget: "string",
                },
            ],
        },
    ],
}

export default skills;
