<template>
 <div style="background-color: #eee; width:100%;height:800px;">
    <div id="chart_example_date" style="width:auto;height:800px;">
    </div>
  </div>
</template>

<script>
export default {


    mounted(){
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('chart_example_date'));
    var product = this.$route.name.split('-',1).toString()
    // console.log(product);
    
    myChart.showLoading();
    $.get('http://192.168.0.107:8181/api/findAll',function(data){
    var sizeValue = '57%'
    var xaxis_data = unique(data)
    var allmarket_price = fullfill(product,'allmarket',data)
    var shangnong_price = fullfill(product,'shangnong',data)
    var jiangqiao_price = fullfill(product,'jiangqiao',data)
    var minhang_price = fullfill(product,'minhang',data)
    var pudongmarket_lowest_price = fullfill(product,'pudongmarket_lowest',data)
    var pudongmarket_highest_price = fullfill(product,'pudongmarket_highest',data)
    var jiangnan_price = fullfill(product,'jiangnan',data)
    var pudongmall_lowest_price = fullfill(product,'pudongmall_lowest',data)
    var pudongmall_highest_price = fullfill(product,'pudongmall_highest',data)
    var yonghuimall_price = fullfill(product,'yonghuimall',data)
    var lianhua_price = fullfill(product,'lianhua',data)
    var yonghuiapp_price = fullfill(product,'yonghuiapp',data)
    var hemaapp_price = fullfill(product,'hemaapp',data)
    var dingdong_price = fullfill(product,'dingdong',data)

    var option = {
        backgroundColor: '#eee',
        title: [{
        text: product + '各渠道价格统计',
        left: 'center',
        textStyle:{
            fontSize:'25',
            fontFamily: 'Microsoft YaHei'
        }
    },{
        text:  '批发渠道',
        left: '27%',
        top:'10%'
    },{
        text: '菜市场渠道',
        right: '27%',
        top:'10%'
    },{
        text: '超市渠道',
        left: '27%',
        top:'53%'
    },{
        text: 'App渠道',
        right: '27%',
        top:'53%'
    }],
        legend: {
            type: 'scroll',
            orient: 'vertical',
            right: 10,
            top: 250,
            bottom: 20,
        },
        toolbox:{
            feature:{
                dataView:{
                    show:true
            },
                saveAsImage:{},
            }
        },
        tooltip: {
            trigger:'axis'
        },
        dataZoom: [
            {
                type: 'inside',
                xAxisIndex: [0, 1, 2, 3],
                start: 60,
                end: 100
            },
            {
                show: true,
                xAxisIndex: [0, 1, 2, 3],
                type: 'slider',
                top: '97%',
                left:'20%',
                right:'20%',
                start: 60,
                end: 100
            }
        ],
        grid: [
            {right: '53%', bottom: '53%',top:'20%',left:'15%'},
            {left: '53%', bottom: '53%',top:'20%',right:'15%'},
            {right: '53%', top: '63%',left:'15%',bottom: '10%'},
            {left: '53%', top: '63%',bottom: '10%',right:'15%'}
            ],
        xAxis: [
            {type: 'category',data:xaxis_data, gridIndex: 0, },
            {type: 'category',data:xaxis_data,  gridIndex: 1, },
            {type: 'category',data:xaxis_data,  gridIndex: 2, },
            {type: 'category',data:xaxis_data,  gridIndex: 3, }
        ],
        yAxis: [
            {type: 'value', gridIndex: 0, name: '单价（元/公斤）'},
            {type: 'value', gridIndex: 1, name: '单价（元/公斤）'},
            {type: 'value', gridIndex: 2, name: '单价（元/公斤）'},
            {type: 'value', gridIndex: 3, name: '单价（元/公斤）'}
        ],    
        series: [
            {name:'全市批发市场当日售价',type: 'line',data:allmarket_price,xAxisIndex: 0,yAxisIndex: 0,},
            {name:'上农批市场当日售价',type: 'line',data:shangnong_price,xAxisIndex: 0,yAxisIndex: 0,},
            {name:'江桥批发市场当日售价',type: 'line',data:jiangqiao_price,xAxisIndex: 0,yAxisIndex: 0,},
            {name:'闵行菜市场当日售价',type: 'line',data:minhang_price,xAxisIndex: 1,yAxisIndex: 1,},
            {name:'江南菜市场当日售价',type: 'line',data:jiangnan_price,xAxisIndex: 1,yAxisIndex: 1,},
            {name:'浦东菜市场最低价当日售价',type: 'line',data:pudongmarket_lowest_price,xAxisIndex: 1,yAxisIndex: 1,},
            {name:'浦东菜市场最高价当日售价',type: 'line',data:pudongmarket_highest_price,xAxisIndex: 1,yAxisIndex: 1,},
            {name:'浦东超市市场最低价当日售价',type: 'line',data:pudongmall_lowest_price,xAxisIndex: 2,yAxisIndex: 2,},
            {name:'浦东超市市场最高价当日售价',type: 'line',data:pudongmall_highest_price,xAxisIndex: 2,yAxisIndex: 2},
            {name:'永辉超市当日售价',type: 'line',data:yonghuimall_price,xAxisIndex: 2,yAxisIndex: 2,},
            {name:'联华超市当日售价',type: 'line',data:lianhua_price,xAxisIndex: 2,yAxisIndex: 2},
            {name:'永辉App当日售价',type: 'line',data:yonghuiapp_price,xAxisIndex: 3,yAxisIndex: 3},
            {name:'盒马App当日售价',type: 'line',data:hemaapp_price,xAxisIndex: 3,yAxisIndex: 3},
            {name:'叮咚App当日售价',type: 'line',data:dingdong_price,xAxisIndex: 3,yAxisIndex: 3},]

    }
    myChart.hideLoading();
    myChart.setOption(option);
    }
    )

      
 
      window.addEventListener('resize',function() {myChart.resize()});
    },



    methods: {},
    watch: {},
    created() {
 
    }
}
</script>

<style>

</style>