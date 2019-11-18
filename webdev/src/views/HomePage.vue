<template>
<div>
        <DashBoard /><br/>
        <div class="homepage">
            <center>
                <b-jumbotron id="homepage">
                    <h1>Home</h1>
                    <Buttons v-b-modal.modal-1></Buttons>
                </b-jumbotron>
            </center>
        </div>

</div>
</template>

<script>
// @ is an alias to /src
import DashBoard from '../components/DashBoard.vue'
import Buttons from '@/components/Buttons.vue'


export default {
    name: 'homepage',
    components: {
        DashBoard,
        Buttons
    }
}
</script>

<style scoped>
#homepage {
    background-color: rgba(0, 0, 0, .10);
    box-shadow: 1px 1px 2px black, 0 0 25px lightblue, 0 0 5px black;
    width: 90%;
}
</style>
