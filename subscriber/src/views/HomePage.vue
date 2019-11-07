<template>
<div id="home">
    <Navigation />
    <Body />
</div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Body from '@/components/Common/Body.vue'

export default {
    components: {
        Body,
        Navigation

    },
}
</script>

<style>
#container {
    padding: 5%;
    background-color: rgba(0, 0, 0, .10);
    box-shadow: 1px 1px 2px black, 0 0 25px lightblue, 0 0 5px black;
}

</style>
