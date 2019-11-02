<template>
<div>
    <b-form-group @submit.prevent="handleSubmit">
        <label for="name">Name of Report:</label>
        <b-input class="form-group" placeholder="name of Report" id="name" :class="{'has-error':submitting && invalidname}" v-model="report.name" @focus="clearStatus" @keypress="clearStatus"></b-input>
        <label for="address">Address:</label>
        <b-input class="form-group" placeholder="Address" id="address" :class="{'has-error':submitting && invalidaddress}" v-model="report.address" @focus="clearStatus" @keypress="clearStatus"></b-input>
        <label for="description">Description:</label>
        <b-textarea class="form-group" placeholder="Description" id="description" :class="{'has-error':submitting && invaliddescription}" v-model="report.description" @focus="clearStatus" @keypress="clearStatus"></b-textarea>
        <b-form-file v-model="file" :state="Boolean(file)" placeholder="Choose a file or drop it here..." drop-placeholder="Drop file here..." accept=".jpg, .png, .gif"></b-form-file>
        <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
        <b-button variant="danger" @click="file = null">Reset</b-button>
        <p v-if="error && submitting" class="error-message">
            ❗Please fill out all required fields
        </p>
        <p v-if="success" class="success-message">
            ✅ Employee successfully added
        </p>
        <b-button class="mt-3" variant="success" block>Report</b-button>
    </b-form-group>
</div>
</template>

<script>
export default {
    data() {
        return {
            submitting: false,
            error: false,
            success: false,
            report: {
                file: null,
                name: null,
                address: null,
                description: null,
            }
        }
    },
    methods: {
        handleSubmit() {
            this.submitting = true,
                this.clearStatus()

            if (this.invalidname || this.invalidaddress || this.invaliddescription) {
                this.error = true
                return
            }
            this.$emit('add:report', this.report)
            this.report = {
                name: '',
                address: '',
                description: ''
            }
            this.error = false,
                this.success = true,
                this.submitting = false
        },
        clearStatus() {
            this.success = false;
            this.error = false
        }
    },
    computed: {
        invalidname() {
            return this.report.name === ''
        },
        invalidaddress() {
            return this.report.address === ''
        },
        invaliddescription() {
            return this.report.invaliddescription === ''
        }
    }
}
</script>

<style>
.error-message {
    color: #d33c40;
}

.success-message {
    color: #32a95d;
}
</style>
