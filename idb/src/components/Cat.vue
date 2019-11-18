<template>
<v-card>
    <v-card-title>
        {{ data.name }}
    </v-card-title>

    <v-card-text>
        {{data.items}}
        <p>
            {{ data.address }}
        </p>
        <img :src="dataUrl" alt="image" />
    </v-card-text>
    <v-card-actions>
        <v-btn color="red" @click="$emit('delete',data)">Delete</v-btn>
        <v-btn @click="$emit('edit',data)">Edit</v-btn>
            <v-dialog v-model="dialog" persistent max-width="290">
                <template v-slot:activator="{ on }">
                    <v-btn color="primary" dark v-on="on" icon><v-icon>mdi-share</v-icon></v-btn>
                </template>
                <v-card>
                    <v-card-title class="headline">Share With</v-card-title>
                    <center><facebook :url="url" scale="2"></facebook> or  
                    <google :url="url" scale="2"></google></center>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="red darken-1" text @click="dialog = false">Cancel</v-btn>
                        <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        
    </v-card-actions>
</v-card>
</template>

<script>
import {
    Facebook, Google
} from 'vue-socialmedia-share';

export default {
    props: {
        data: Object,

    },
    components: {
        Facebook,
        Google
    },
    data: () => ({
        dialog: false
    }),
    created() {
        console.log('data created');
    },
    methods: {},

    computed: {
        dataUrl() {
            return 'data:image/blob;base64,' + btoa(
                new Uint8Array(this.data)
                .reduce((data, byte) => (data.push(String.fromCharCode(byte)), data), []).join(''))

        }
    }

};
</script>
