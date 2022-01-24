<template>

    <router-link  to="/"> home </router-link>
    <router-link  to="/id"> Pokemon List </router-link>
    <router-link  to="/about"> about </router-link>

</template>

<style scoped>

    div {
        padding: o 30px;
    }

    div a {
        font-weight: bold;
        color: #2c3e50;
        margin: 0 10px;
    }
    div .router-link-exact-active {
        color: #42b983
    }

</style>