<script>
    import Icon from '@iconify/svelte';

    const skillPerYearList = [
        {year:"2023", skillList: [
                {icon:"devicon:svelte", name:"Svelte"},
                {icon:"devicon:tailwindcss", name:"TailwindCSS"},
                {icon:"devicon:cloudflareworkers", name:"Cloudflare Workers"},
                {icon:"devicon:spring", name:"Spring Boot"},
            ]
        },
        {year:"2022", skillList: [
                {icon:"devicon:mysql-wordmark", name:"MySQL"},
                {icon:"devicon:coffeescript", name:"coffeescript"},
                {icon:"vscode-icons:file-type-pug", name:"pug"},
                {icon:"devicon:docker", name:"Docker"},
            ]
        },
        {year:"2021", skillList: [
                {icon:"devicon:vuejs", name:"VueJS"},
                {icon:"devicon:vuetify", name:"Vuetify"},
                {icon:"devicon:mongodb", name:"mongodb"},
                {icon:"devicon:mongoose", name:"mongoose"},
            ]
        },
        {year:"2020", skillList: [
                {icon:"devicon:nodejs", name:"NodeJS"},
                {icon:"skill-icons:expressjs-dark", name:"ExpressJS"},
                {icon:"devicon:bootstrap", name:"Bootstrap"}
            ]
        },
        {year:"2019", skillList: [
                {icon:"skill-icons:javascript", name:"JavaScript"}
            ]
        },
        {year:"2018", skillList: [
                {icon:"skill-icons:java-light", name:"JAVA"}
            ]
        },
        {year:"2017", skillList: [
                {icon:"skill-icons:html", name:"HTML"},
                {icon:"skill-icons:css", name:"CSS"}
            ]
        },
    ]

</script>

<svelte:head>
    <title>skills</title>
    <html lang="en" />
</svelte:head>

<div class="max-w-screen-md mx-auto my-10 ml-2 mr-5">
    <ul class="timeline timeline-snap-icon timeline-compact timeline-vertical">
        {#each skillPerYearList as entry}
            <li>
                <div class="timeline-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
                </div>
                <div class="timeline-start mb-10">
                    <time class="font-mono italic">{entry.year}</time>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
                        {#each entry.skillList as skill}
                            <div class="card w-full bg-[#202127] shadow-xl">
                                <figure class="px-5 pt-5">
                                    <Icon icon="{skill.icon}" width="100%" />
                                </figure>
                                <div class="card-body items-center text-center">
                                    <h2 class="card-title">{skill.name}</h2>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
                <hr/>
            </li>
        {/each}
    </ul>
</div>

