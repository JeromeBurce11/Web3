<template>
  <div class="home">
    <FirstNavBar/>
    <LoginForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm.vue'
import FirstNavBar from '@/components/FirstNavBar.vue'

export default {
  name: 'login',
  components: {
    LoginForm,
    FirstNavBar
  }
}
</script>
