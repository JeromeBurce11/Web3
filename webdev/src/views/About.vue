<template>
  <div class="register">
    <FirstNavBar/>
  <RegisterForm/>
  </div>
</template>
<script>
import RegisterForm from '@/components/RegisterForm.vue'
import FirstNavBar from '@/components/FirstNavBar.vue'

export default {
  name: 'register',
  components: {
    RegisterForm,
    FirstNavBar
  }
}
</script>
<style>
template{
    background-color:black;
}
</style>
