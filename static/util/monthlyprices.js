function monthlyprices(data,year,product){
    var arr = []
    for(var i = 0; i < data.length ; i++){
        var _year = data[i]['year']
        var _product = data[i]['product']
        var price = data[i]['price']
        if(_year == year & _product == product){
            if(isNaN(price)==false){
                arr.push(price)
            }else{
                arr.push('-')
            }
    }
}
    return arr
}