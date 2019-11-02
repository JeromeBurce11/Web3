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
    </v-card-actions>
</v-card>
</template>

<script>
export default {
    props: {
        data: Object,

    },
    data: () => ({

    }),
    created() {
        console.log('data created');
    },
    methods: {},

    computed: {
        dataUrl() {
            return 'data:image/jpeg;base64,' + btoa(
                new Uint8Array(this.data)
                .reduce((data, byte) => (data.push(String.fromCharCode(byte)),data),[]).join(''))
          
            
            
        }
    }

};
</script>
