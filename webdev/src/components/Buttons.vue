<template>
<div>
    <b-button-group>
        <b-button block variant="success" id="show-btn" @click="$bvModal.show('bv-modal-example')">Post Events</b-button>
    </b-button-group>
    <b-modal id="bv-modal-example" hide-footer>
        <template v-slot:modal-title>
            <img src="../assets/icon.png" id="img"/>&nbsp;&nbsp;EVENT FORM
        </template>
        <div class="d-block text-center">
           <modalForm/>
        </div>
        
    </b-modal>
</div>
</template>

<script>
import modalForm from '@/components/Form.vue'
export default {
    name: "buttons",
    components:{
        modalForm,
    }
}
</script>
