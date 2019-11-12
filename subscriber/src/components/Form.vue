<template>
        <v-card class="mx-auto card" max-width="500">
            <v-container>
                <center>
                    <v-img :src="require('@/assets/logos.png')" id="image"></v-img>
                </center>
                <form id="form" @submit.prevent="subscribe" v-show="!isSubscribe" >
                    <v-container>
                        <v-text-field v-model="user.username" :rules="[rules.required]" label="Username"></v-text-field>
                        <v-text-field v-model="user.email" :rules="[rules.required, rules.email]" label="E-mail"></v-text-field>
                        <v-text-field v-model="user.address" :rules="[rules.required]" label="Address"></v-text-field>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" :disabled="!formIsValid"  text @click="checkform">Join</v-btn>
                        </v-card-actions>
                    </v-container>
                </form><br />
                <v-card v-show="isSubscribe"  class="mx-auto" max-width="344">
                        <v-card-text>
                            Thank you For Subscribing
                        </v-card-text>
                </v-card>
            </v-container>
        </v-card>
</template>
<script>
import axios from "axios";

export default {
    data() {
        return {
            isSubscribe: false,
            user: {
                username: '',
                email: '',
                address: ''
            },
            rules: {
                required: value => !!value || 'Required.',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Invalid e-mail.'
                },
            }
        }
    },
    methods: {
        checkform: function (e) {
            if (this.email !== null && this.password !== null) {
                this.isSubscribe = true;
            }
            e.preventDefault();
        },
        subscribe: function(){
             const formData = new FormData();
             let checkForm = this.checkform();
             if(checkForm){
                 formData.append("username", this.user.username)
                 formData.append("email", this.user.email)
                 formData.append("address", this.user.address)

                 axios.post("/subscribe", formData).then(res=>{
                     localStorage.setItem("user", JSON.stringify(res.data.user));
                 })
             }
        }
    },
     computed: {
        formIsValid() {
            return (
                this.user.username &&
                this.user.address &&
                this.user.email 
            )
        },
    },
}
</script>

<style>
#image {
    width: 40%;
    height: 40%;
}
</style>