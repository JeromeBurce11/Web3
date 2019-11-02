<template>

  <v-card>
    <v-card-title>
      {{ data.name }}
    </v-card-title>
    <div>{{data.items}}
    </div>
    <v-card-text>
      <p>
    {{ data.address }}
      </p>
      <v-img :src="data.file"></v-img>
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
    data:Object,
    src:Object
  }, 
  data: () => ({

  }),
  created() {
    console.log('data created');
  },
  methods: {
  }
};
</script>
