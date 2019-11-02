<template>
<center>
    <b-jumbotron id="form">
        <b-jumbotron id="content">
            <center>
                <img src="../assets/logos.png" />
                <h1>user</h1>
            </center><br />
            <b-form @submit="checkform">
                <b-form-group id="name" label="Name:" label-for="input-1">
                    <b-form-input type="text" placeholder="Full Name" v-model="user.name" required></b-form-input>
                </b-form-group>
                <b-form-group id="address" label="Address:" label-for="input-1">
                    <b-form-input type="text" placeholder="Input Address" v-model="user.address" required></b-form-input>
                </b-form-group>
                <b-form-group id="email" label="Email address:" label-for="input-1">
                    <b-form-input type="email" placeholder="Input Email" v-model="user.email" required></b-form-input>
                </b-form-group>
                <b-form-group id="password" label="Password:" label-for="input-2">
                    <b-form-input type="password" placeholder="Password" v-model="user.password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"></b-form-input>
                </b-form-group>
                <!-- <router-link to="/"> -->
                <b-button type="submit" @click="save" variant="primary">Sign Up</b-button>
                <!-- </router-link> -->
            </b-form>
        </b-jumbotron>
    </b-jumbotron>
</center>
</template>

<script>
export default {
    name: "user-form",
    data() {
        return {
            user: null
        }
    },
    created() {
        if (this.$route.params.user) {
            this.user = this.$route.params.user;
            console.log(this.user)
        } else {
            this.user = {
                name: '',
                address: '',
                email: ''
            };
        }
    },
    methods: {
        checkform: function (e) {
            if (this.name !== null && this.email !== null && this.address !== null && this.password !== null) {
                this.$router.push('/login')
            }
            e.preventDefault();
        },
        async save() {
            await this.$store.dispatch('saveUser', this.user);
            console.log('back');
            this.$router.push('/');
        }

    }

}
</script>

<style>
body {
    background-image: url("../assets/background.jpg");
    background-size: cover;
    background-repeat: no-repeat;

}

img {
    width: 30%;
    height: 30%;
}

#form {
    position: relative;
    width: 40%;
    background-color: transparent;
}

#content {
    background-color: rgba(0, 0, 0, .10);
    box-shadow: 1px 1px 2px black, 0 0 25px lightblue, 0 0 5px black;
}

#name,
#email,
#address,
#password,
h1 {
    color: white;
}

[class*='-message'] {
    font-weight: 500;
}

.error-message {
    color: #d33c40;
}

.success-message {
    color: #32a95d;
}
</style>
