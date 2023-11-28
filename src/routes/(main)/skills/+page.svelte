<script>
    import Icon from '@iconify/svelte';

    import skills from '$lib/content/skills.json'

    const skillPerYearList = skills.year

</script>

<svelte:head>
    <title>skills</title>
</svelte:head>

<div class="container mx-auto flex justify-center">
    <div class="max-w-screen-md my-10 ml-2 mr-5">
        <ul class="timeline timeline-snap-icon timeline-compact timeline-vertical">
            {#each skillPerYearList as entry}
                <li>
                    <div class="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" /></svg>
                    </div>
                    <div class="timeline-start mb-10">
                        <time class="font-mono italic">{entry.year}</time>
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {#each entry.skill as skill}
                                <div class="group card w-full bg-[#202127] shadow-xl">
                                    <figure class="group-hover:scale-110 px-5 pt-5">
                                        <img src={skill.icon} width="100%" alt="">
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
</div>

