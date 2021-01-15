<template>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Hello Vue 3.0 + Vite + TypeScript" />
    <h1>测试vue3功能</h1>
    <div>
        <router-link to="request-api/global">axios全局引入</router-link>
    </div>
    <div>
        <router-link to="request-api/require">axios外部使用调用</router-link>
    </div>
</template>

<script lang="ts">
import HelloWorld from "../components/HelloWorld.vue";

export default {
    name: "Home",
    components: {
        HelloWorld,
    },
};
</script>
