function gather(year,product,channel,data){
    var arr2 = []
    var len = data.length
    var start_date = data[0]['date']
    var start_dateArr = start_date.split('-');
    var start_year = start_dateArr[0]
    var start_month = start_dateArr[1]
    var end_date = data[len-1]['date']
    var end_dateArr = end_date.split('-');
    var end_year = end_dateArr[0]
    var end_month = end_dateArr[1]
    // debugger;
    if(year == start_year){
        for(var s = parseInt(start_month); s < 13; s++){
            arr2.push(calculateMean(year,s,product,channel,data))
            // debugger;
        }
    }else if(year == end_year){
        for(var p = 1; p < parseInt(end_month)+1; p++){
            arr2.push(calculateMean(year,p,product,channel,data))
    }}
    else
    {
        for(var i = 1; i <13; i++){
            arr2.push(calculateMean(year,i,product,channel,data))

    }        
}
    return arr2}