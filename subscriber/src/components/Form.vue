<template>
<div>
<v-dialog v-model="dialog" width="9000">
    <template v-slot:activator="{on}">
        <v-btn v-on="on" color="primary" v-show ="!isSubscribe" >Join</v-btn>
    </template>
    <v-card class="mx-auto card" max-width="500">
        <v-container>
            <center>
                <v-img :src="require('@/assets/logo.png')" id="image"></v-img>
            </center>
            <form id="form" @submit.prevent="subscribe" v-show="!isSubscribe">
                <v-container>
                    <v-text-field v-model="user.username" :rules="[rules.required]" label="Username"></v-text-field>
                    <v-text-field v-model="user.email" :rules="[rules.required, rules.email]" label="E-mail"></v-text-field>
                    <v-text-field v-model="user.address" :rules="[rules.required]" label="Address"></v-text-field>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" :disabled="!formIsValid" text @click="subscribe">Join</v-btn>
                    </v-card-actions>
                </v-container>
            </form><br />
        </v-container>
    </v-card>
</v-dialog>
</div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            dialog: false,
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
        subscribe: function () {
            this.isSubscribe = true;
            const formData = new FormData();
            alert('subscribing')
            formData.append("username", this.user.username)
            formData.append("email", this.user.email)
            formData.append("address", this.user.address)
            axios.post("/subscribe", formData).then(res => {
                alert("subscribe")
                localStorage.setItem("user", JSON.stringify(res.data.user));
            })
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

<style scoped>
#image {
    width: 40%;
    height: 40%;
}
</style>
