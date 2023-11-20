<script>
    const navLinks = [
        {label:"HOME", link:"/"},
        {label:"SKILLS", link:"/skills"}
    ]
</script>

<div class="navbar justify-center">
    {#each navLinks as entry}
        <a class="btn btn-sm btn-ghost text-xl" href={entry.link}>{entry.label}</a>
    {/each}
</div>