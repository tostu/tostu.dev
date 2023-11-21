<script>
    import Icon from '@iconify/svelte';

    const personalDataList = [
        {icon:"user", topic:"Name", value:"Torge Stubbe"},
        {icon:"cake", topic:"Geburtstag", value:"23.07.2000"},
        {icon:"pin", topic:"Standort", value:"Altes Land, Germany"},
        {icon:"briefcase", topic:"Arbeit", value:"Fricke Holding GmbH"}
    ]

</script>

<div class="card w-80 bg-[#202127] shadow-xl">
    <div class="card-body">
        {#each personalDataList as entry}
            <div class="flex flex-row items-center text-start">
                <div class="mr-5">
                    <Icon icon="pixelarticons:{entry.icon}" height="auto" />
                </div>
                <div class="flex flex-col">
                    <span>{entry.topic}</span>
                    <span>{entry.value}</span>
                </div>
            </div>
        {/each}
    </div>
</div>
