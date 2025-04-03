<script setup lang="ts">
  import {useDraggable} from '@vueuse/core';
  import {useTemplateRef, shallowRef, ref} from 'vue'
  import {isClient} from '@vueuse/shared'
  import { UseDraggable as Draggable } from '../components/ts-components/useDraggableComponent';
  import GoogleCharts from './ts-components/GoogleCharts'
  import StockInfoBox from './StockInfoBox.vue'
  import TickerSearch from './TickerSearch.vue'
  
  
  const infobox = useTemplateRef<HTMLElement>("infobox-handle");
  const tickersearch = useTemplateRef<HTMLElement>('tickersearch-handle');
  const chart = useTemplateRef<HTMLElement>('chart-handle');
  const innerWidth = isClient ? window.innerWidth : 200;
  const innerHeight = window.innerHeight;
  const disabled = shallowRef(false);
  const stockNameValue=ref("");

  defineProps(['stockList', 'chartData']);
  const emit = defineEmits(['getStockData']);
  const getStockDataFunction = (eventDetail) => {
    emit('getStockData', eventDetail);
    stockNameValue.value=eventDetail.Name;
  }
  
</script>

<template>
    <Draggable
      v-slot="{ x, y }"
      p="x-4 y-2"
      border="~ gray-400/30 rounded"
      shadow="~ hover:lg"
      class="fixed bg-$vp-c-bg select-none z-31"
      :initial-value="{ x: innerWidth / 100, y: (innerHeight*0.33)+130 }"
      :prevent-default="true"
      :handle="tickersearch"
      :disabled="disabled"
    >
      <div ref="tickersearch-handle" class="cursor-move box-size">
        👋 Drag here!
      </div>
      <TickerSearch  :stockList="stockList" @getStockData="getStockDataFunction"/>
    </Draggable>
    <Draggable
      v-slot="{ x, y }"
      p="x-4 y-2"
      border="~ gray-400/30 rounded"
      shadow="~ hover:lg"
      class="fixed bg-$vp-c-bg select-none z-31"
      :initial-value="{ x: innerWidth / 100, y: 90 }"
      :prevent-default="true"
      :handle="infobox"
      :disabled="disabled"
    >
      <div ref="infobox-handle" class="cursor-move box-size">
        👋 Drag here!
      </div>
      <StockInfoBox :stockName="stockNameValue"/>
    </Draggable>
    <Draggable

      v-slot="{ x, y }"
      p="x-4 y-2"
      border="4px solid lightslategrey"
      shadow="~ hover:lg"
      class="fixed bg-$vp-c-bg select-none z-31"
      :initial-value="{ x: innerWidth / 50 + innerWidth* 0.2, y: 90 }"
      :prevent-default="true"
      :handle="chart"
      :disabled="disabled"
    >
      <div ref="chart-handle" class="cursor-move chart-box-size">
        👋 Drag here!
      </div>
      <div class="grey-border">
            <GoogleCharts :chartData="chartData"/>
      </div>
    </Draggable>
</template>

<style scoped>
.fixed {
  position: fixed;
}
</style>



             