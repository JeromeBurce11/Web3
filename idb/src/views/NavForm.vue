<template>
  <div>
      <Navigation/>
      <SignInForm/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import SignInForm from '@/views/SignInForm.vue'

export default {
    components:{
        Navigation,
        SignInForm
    }
}
</script>

<style>

</style>