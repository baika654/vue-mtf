<script setup lang="ts">
import Home from './components/Home.vue'
import {ref} from 'vue'

const chartData  = ref([]);

defineProps(['stockList']);
const getStockDataFunction = (eventDetail) => {
    console.log(eventDetail);
    const url = 'http://localhost:3010/api/stockDailyData/' + eventDetail.TickerSymbol;
    fetch(url).then(response => response.json()).then(data => chartData.value = data);
  }

</script>

<template>
  <main>
    <Home :stockList="stockList" :chartData="chartData" @getStockData="getStockDataFunction"/>
  </main>
</template>

<style>
#app {
  font-family:  Arial, Helvetica, sans-serif;
  text-align: center;
  color: #2c3e50;

}


</style>
