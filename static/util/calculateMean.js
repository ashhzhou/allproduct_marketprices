function calculateMean(year, month, product, channel, data){
    var count = 0;
    var sum = 0;
    for( var i = 0 , len = data.length; i<len; i++ ){
        // debugger;
        var date = data[i]['date']
        var dateArr = date.split('-');
        var price = parseFloat(data[i][channel]);
        var _product = data[i]['product'];
        var _year = parseInt(dateArr[0]); //获取当前日期的年份
        
        var _month = parseInt(dateArr[1]); //获取当前日期的月份
        var arr = new Array();
        if(_year == year & _month == month &_product == product& isNaN(price) == false){
            count +=1
            sum +=price;
        }       
    }
    if(sum == 0){
        arr.push({value:'-' , month:month});
    }
    else
    {
        arr.push({value:(sum/count).toFixed(2) , month:month});
    }
    // console.log(arr)
    return arr
    }
