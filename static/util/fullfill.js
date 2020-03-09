function fullfill(product,channel,data){
    var con = []
    for(var i = 0; i < data.length; i++){
        var price = parseFloat(data[i][channel]);
        var _product = data[i]['product'];
        if(_product==product){
            if(isNaN(price) == false){
                con.push(price)
            }else{
                con.push('-')
            }
        }        
    }
    return con
}