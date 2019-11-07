<template>

  <v-container>
    <v-row>
      <v-col cols="4" v-for="(data,idx) in datas" :key="idx">
        <Cat :data="data" @delete="deletedata" @edit="editdata" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn @click="addData">Add data</v-btn>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import Cat from '@/components/Cat';

export default {
  components: {
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
    addData() {
      this.$router.push({ name: 'edit' });
    },
    async deletedata(data) {
      console.log('delete', data.id);
      await this.$store.dispatch('deleteData', data);
      this.$store.dispatch('getDatas');
    },
    editdata(data) {
      console.log('edit', data.id);
      this.$router.push({ name: 'edit', params: {data: data} });
    }
  }
};
</script>
