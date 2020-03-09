function selfsplit(xaxis_data,product,channel,data){
    var years =[]
    for(i = 0; i < xaxis_data.length; i++){
        var date = xaxis_data[i]
        var dateArr = date.split('-')
        var foo = dateArr[0]
        years.push(foo)
    }       
    var years_neo = Array.from( new Set(years) )
    var con = []
    for( k=0; k < years_neo.length; k++){
        year = years_neo[k]
        var voo = gather(year,product,channel,data)
        var len = voo.length
        for(var i = 0; i < len; i++){
        // debugger;
           con.push(voo[i][0]['value'])
        }            
    }
    return con
    }
    