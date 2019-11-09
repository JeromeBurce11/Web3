<template>
<div>
  <div class="content">
      <NavBar/><br/>
      <div>
        <agile draggable  :nav-buttons="false" :autoplay-speed="5000" :speed="2500" fade="fade" pause-on-hover="pause-on-hover" pause-on-dots-hover="pause-on-dots-hover" autoplay="autoplay">
            <v-img class="slide" :src="require('@/assets/treeplanting.jpg')"><h1>Eco-Green</h1></v-img>
            <v-img class="slide" :src="require('@/assets/recycle.jpg')" ></v-img>
            <v-img class="slide" :src="require('@/assets/cleanocean.jpeg')" ></v-img>
            <v-img class="slide" :src="require('@/assets/nature1.png')" ></v-img>
            <v-img class="slide" :src="require('@/assets/cave.jpeg')" ></v-img>
        </agile>
    </div>          
  </div><br/><br/>
  <center>
  <v-container>
  <v-row>
      <v-col>
            <Advocation/>
      </v-col>
      <v-col>
          <Form/>
      </v-col>
  </v-row>
  </v-container>
  </center>
</div>
</template>

<script>
import Advocation from '@/components/Advocation.vue'
import NavBar from '@/components/Navigation.vue'
import Form from '@/components/Form.vue'
export default {
    components:{
        Advocation,
        NavBar,
        Form
    }
    
}
</script>

<style lang="sass">
.content
    border: inset
// VueAgile styles
.agile
    &__nav-button
        background: transparent
        border: none
        color: #fff
        cursor: pointer
        font-size: 24px
        height: 100%
        position: absolute
        top: 0
        transition-duration: .3s
        width: 80px

    &__dots
        bottom: 10px
        flex-direction: column
        right: 30px
        position: absolute
	
    &__dot
        margin: 5px 0

        button 
            background-color: transparent
            border: 1px solid #fff
            cursor: pointer
            // display: block
            height: 10px
            font-size: 0
            line-height: 0
            margin: 0
            padding: 0
            transition-duration: .3s
            width: 10px

        &--current,
        &:hover
            button
                background-color: #fff

// Slides styles
.slide
    // display: block
    height: 600px
    object-fit: cover
    width: 100%
    z-index: -5

</style>

