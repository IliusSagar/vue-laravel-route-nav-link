<template>
    <div>
       <div>
            <!-- <router-link to="/">Home</router-link> |
            <router-link to="/login">Login</router-link> |
            <router-link to="/register">Register</router-link> -->

            <router-link :to="{name : 'Home'}">Home</router-link> |
            <router-link :to="{name : 'Login'}">Login</router-link> |
            <router-link :to="{name : 'Register'}">Register</router-link>
       </div>

       <router-view></router-view>
    </div>
</template>