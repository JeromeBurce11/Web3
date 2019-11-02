<template>
<div id="dashboard">
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <img src="../assets/icon.png" id="img" />
            <router-link to="/">
                <b-navbar-brand>Home</b-navbar-brand>
            </router-link>
            <router-link to="/projects">
                <b-navbar-brand>Projects</b-navbar-brand>
            </router-link>
            <router-link to="/issues">
                <b-navbar-brand>Issues</b-navbar-brand>
            </router-link>
            <b-navbar-nav class="ml-auto">
                <router-link to="/register">
                    <b-navbar-brand>Logout</b-navbar-brand>
                </router-link>
            </b-navbar-nav>
        </b-navbar>
    </div><br />
</div>
</template>

<script>
export default {
    name: "dashboard"
}
</script>

<style>
#img {
    width: 30px;
    height: 30px;
}
</style>
