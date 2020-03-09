<template>
     <div style="background-color: #eee; width:100%;height:800px;">
    <div id="chart_example_month" style="width:100%;height:800px;">
    </div>
  </div>
</template>

<script>
export default {
    mounted(){
    var myChart = echarts.init(document.getElementById('chart_example_month'));
    var product = this.$route.name.split('-',1).toString()
    myChart.showLoading();
    $.get('http://192.168.0.107:8181/api/monthly/findAll',function(data){
   
    var option={
    title:{
        text:'各年度价格曲线',
        left:'center',
        textStyle:{
            fontSize:'25'
        }
    },
    tooltip:{
        trigger:'axis'
    },
    legend:{
        data:['2014','2015','2016','2017','2018','2019','2020'],
        bottom:'0.2%'
    },
    xAxis:{
        type:'category',
        data:['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月']
    },
    yAxis:{
        type:'value',
        name:'每月单价（元）',
        scale:true
    },
    series:[{
        name: '2014',
        type:'line',
        data:monthlyprices(data,2014,product)
    },{
        name: '2015',
        type:'line',
        data:monthlyprices(data,2015,product)
    },{
        name: '2016',
        type:'line',
        data:monthlyprices(data,2016,product)
    },{
        name: '2017',
        type:'line',
        data:monthlyprices(data,2017,product)
    },{
        name: '2018',
        type:'line',
        data:monthlyprices(data,2018,product)
    },{
        name: '2019',
        type:'line',
        data:monthlyprices(data,2019,product)
    }]



    };
    myChart.hideLoading();
    myChart.setOption(option);
    })

    window.addEventListener('resize',function() {myChart.resize()});


    }
}
</script>

<style>

</style>