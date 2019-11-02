<template>
<center>
    <b-jumbotron id="form">
        <b-jumbotron id="content">
            <center>
                <img src="../assets/logos.png" />
                <h1>Login</h1>
            </center><br />
            <b-form @submit="checkform">
                <b-form-group id="email" label="Email address:" label-for="input-1">
                    <b-form-input type="email" placeholder="Input Email" v-model="user.email" required></b-form-input>
                </b-form-group>
                <b-form-group id="password" label="Password:" label-for="input-2">
                    <b-form-input type="password" placeholder="Password" v-model="user.password" required></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="primary" @submit="save">Login</b-button><br />
                <p>NOt Have An Account?</p><br />
                <router-link to="/register">
                    <h6>REGISTER</h6>
                </router-link>
            </b-form>
        </b-jumbotron>
    </b-jumbotron>
</center>
</template>

<script>
export default {
    name: 'user-form',
    props:['users'],
    data() {
        return {
            user: null
        }
    },
    created() {
        if (this.$route.params.user) {
            this.user = this.$route.params.user;
            console.log(this.user = this.$route.params.user)
        } else {
            this.user = {
                email: '',
                password: ""
            };
        }
    },
    methods: {
        async save() {
            await this.$store.dispatch('saveUser', this.user);
            console.log('back');
            this.$router.push('/');
        },
        checkform: function (e) {
            if (this.email !== null && this.password !== null) {
                this.$router.push('/')
            }
            e.preventDefault();
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

#form {
    width: 40%;
    background-color: transparent;
}

img {
    width: 30%;
    height: 30%;
}

#content {
    background-color: rgba(0, 0, 0, .10);
    box-shadow: 1px 1px 2px black, 0 0 25px lightblue, 0 0 5px black;
}

#email,
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
