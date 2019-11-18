<template>
  <v-card>
      <v-card-title>{{event.name}}</v-card-title>
      <v-image></v-image>
      <v-card-subtitle>{{event.address}}</v-card-subtitle>
      <v-card-text>{{event.description}}</v-card-text>
  </v-card>
</template>

<script>
export default {
    data(){
      return{
        subscriber:[]
      }
    },
    method: {
      retrieve: function(){
            axios.get(`${BASE_URL}/retrieve`).then(res=>{
                this.username = res.data.username
                this.email = res.data.email
                this.address = res.data.address
            })
        }
    }
}
</script>

<style>

</style>