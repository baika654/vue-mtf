<template>
    <div id="info-box">
        <h1> Stock Name</h1>
        <h2>{{ stockName }}</h2>
        
        
    </div>
</template>

<script>

export default {
     name:'StockInfoBox',
     props: ['stockName'],
//     props: ['stockList'],
//     setup(props)  {
//         const test = props.stockList;
//         console.log(test);
//         //const test = props.stockList.map((item)=> item.Name);
        
//     }
    
 }

</script>

<style>
#info-box {
border-radius: 0px 0px 25px 25px;
border: 4px solid lightslategrey;
background:inherit;
padding: 20px;
width: 20vw;
height: 33vh;
}
</style>