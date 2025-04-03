<template>
    <Header/>
    <Dashboard :stockList="stockList" :chartData="chartData" @getStockData="getStockDataFunction"/>
    
</template>

<script>
import Dashboard from './Dashboard.vue';
import Header from './Header.vue'
    export default {
        name:'Home',
        components: {
            Header, Dashboard
        },
        props: ['stockList','chartData'],
        emits: ['getStockData'],
        methods: {
            getStockDataFunction(eventDetail) {
            this.$emit('getStockData', eventDetail);
            }
        }
        
    }
    

</script>


