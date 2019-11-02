<template>
<div>
    <DashBoard /><br />
    <center>
        <b-jumbotron id="projects">
            <h1>Projects</h1>
            <Buttons/>
        </b-jumbotron>
    </center>
</div>
</template>

<script>
// @ is an alias to /src
import DashBoard from '../components/DashBoard.vue'
import Buttons from '@/components/Buttons.vue'

export default {
    name: 'projects',
    components: {
        DashBoard,
         Buttons
    },
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>

<style scoped>
#projects {
    background-color: rgba(0, 0, 0, .10);
    box-shadow: 1px 1px 2px black, 0 0 25px lightblue, 0 0 5px black;
    width: 90%;
}
</style>
