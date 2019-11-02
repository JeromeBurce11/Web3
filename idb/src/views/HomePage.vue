<template>
<div id="home">
    <NavBar/>
    <v-container class="mx-auto" id="container">
        <center>
            <h1>Home</h1>
        </center><br />
        <Button />
    </v-container>
    <v-container>
            <v-col v-for="(data,idx) in datas" :key="idx">
                <Cat :data="data" @delete="deletedata" @edit="editdata" />
            </v-col>
    </v-container>
</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Button from '@/components/Button.vue'
import Cat from '@/components/Cat.vue'

export default {
    components: {
        NavBar,
        Button,
        Cat
    },

    computed: {
        datas() {
            return this.$store.state.datas;
        }
    },
    created() {
        this.$store.dispatch('getDatas');
    },
    methods: {
        async deletedata(data) {
            console.log('delete', data.id);
            await this.$store.dispatch('deleteData', data);
            this.$store.dispatch('getDatas');
        },
        editdata(data) {
            console.log('edit', data.id);
            this.$router.push({
                name: '/',
                params: {
                    data: data
                }
            });
        }
    }
}
</script>

<style>
#container {
    padding: 5%;
    background-color: rgba(0, 0, 0, .10);
    box-shadow: 1px 1px 2px black, 0 0 25px lightblue, 0 0 5px black;
}
</style>
