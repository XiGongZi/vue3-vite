<template>
    <div class="container">
        <h5>
            <router-link to="/">返回上一页</router-link>
        </h5>
        <h5>
            <router-link to="/request-api/require">前往 axios 外部引入api形式</router-link>
        </h5>
        <h1>全局引入</h1>
        <el-button type="primary" :loading="loading" @click="getQuotationData">发起请求</el-button>
        <el-input v-loading="loading" type="textarea" v-model="resultData" :rows="8"></el-input>
    </div>
</template>

<script lang="ts">
import { getCurrentInstance, reactive } from "vue";
export default {
    name: "Global",
    setup(props, context) {
        // https://v3.vuejs.org/guide/composition-api-setup.html#accessing-component-properties
        const { ctx }: any = getCurrentInstance();
        return {};
    },
    components: {},
    data() {
        return {
            resultData: "",
            loading: false,
        };
    },
    methods: {
        getQuotationData() {
            this.loading = true;
            this.$axios("https://api.66mz8.com/api/quotation.php?format=json")
                .then((result: any) => {
                    this.resultData = result.quotation;
                })
                .catch((err: any) => {
                    this.resultData = err.message;
                    console.error(err);
                })
                .finally(() => {
                    this.loading = false;
                });
        },
    },
};
</script>

<style scoped>
.container {
    width: 96%;
    max-width: 1440px;
    margin: 0 auto;
}
.container .el-textarea:deep(textarea) {
    resize: none;
}
</style>