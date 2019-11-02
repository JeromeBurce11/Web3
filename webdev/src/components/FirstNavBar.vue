<template>
<div class="fnavBar">
    <div>
        <b-navbar toggleable="lg" type="dark">
            <b-navbar-nav class="ml-auto">
                <router-link to="/login">
                    <b-navbar-brand>Login |</b-navbar-brand>
                </router-link>
                <router-link to="/register">
                    <b-navbar-brand>Register</b-navbar-brand>
                </router-link>
            </b-navbar-nav>
        </b-navbar>
    </div>
</div>
</template>

<script>
export default {
    name: "navbar"
}
</script>

<style>
.fnavBar {
    background-color: rgba(0, 0, 0, .10);
    box-shadow: 1px 1px 2px black, 0 0 25px lightblue, 0 0 5px black;
}
</style>
