<template>
<div>
    <b-form>
        <b-form-group>
            <label for="name">Name of Post:</label>
            <b-input class="form-group" placeholder="name of Post" id="name" required></b-input>
            <label for="address">Address:</label>
            <b-input class="form-group" placeholder="Address" id="address" required></b-input>
            <label for="address">Category:</label>
            <b-form-group id="input-group-3" label-for="input-3">
                <b-form-select id="category" v-model="form.category" :options="category" required></b-form-select>
            </b-form-group>
            <label for="description">Description:</label>
            <b-textarea class="form-group" placeholder="Description" id="description" required></b-textarea>
            <b-form-file v-model="file" :state="Boolean(file)" placeholder="Choose a file or drop it here..." drop-placeholder="Drop file here..." accept=".jpg, .png, .gif"></b-form-file>
            <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
            <b-button variant="danger" @click="file = null">Reset</b-button>
            <b-form-checkbox id="checkbox-1" v-model="status" name="checkbox-1" value="accepted" unchecked-value="not_accepted" required>
                I accept the terms and Conditions
            </b-form-checkbox>
            <b-button type="submit" class="mt-3" variant="success" block>Post</b-button>
        </b-form-group>
    </b-form>
</div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: null,
                address: null,
                description: null,
                file: null,
                status: 'not_accepted'
            },
            category: [{
                text: 'Select One',
                value: null,
                disabled: true
            }, 'Problem', 'Solution']
        }
    }
}
</script>
