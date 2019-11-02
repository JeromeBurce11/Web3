<template>
  <div class="body">
      <Navigation/>
      <LoginForm/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import LoginForm from '@/views/LoginForm.vue'

export default {
    components:{
        Navigation,
        LoginForm
    }
}
</script>


<style>
.body{
    background-image: url('../assets/background.jpg');
    background-size: cover;
}
</style>