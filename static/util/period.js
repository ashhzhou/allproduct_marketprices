function period(data){
    var len = data.length
    var start_date = data[0]['date']
    var start_dateArr = start_date.split('-');
    var start_year = start_dateArr[0]
    var start_month = start_dateArr[1]
    var end_date = data[len-1]['date']
    var end_dateArr = end_date.split('-');
    var end_year = end_dateArr[0]
    var end_month = end_dateArr[1]
    var period = []
    var gap = parseInt(end_year)  - parseInt( start_year ) - 1
    for(var i = parseInt(start_month) ; i < 13; i++ ){
        if(i < 10){
            period.push(start_year + '-' + '0' + i)
        }else{
            period.push(start_year + '-' + i)
        }
    }   
    for( var j = 0; j < gap; j++ ){
        for(var k = 0; k <12; k++){
            if(k < 10){
                period.push( parseInt(start_year) + j + 1 + '-' + '0' + k )
            }else{
                period.push( parseInt(start_year) + j + 1 + '-' + k)
            }
        }
    }
    for( var m = 1; m < parseInt(end_month)+1 ; m++ ){
        if( m < 10 ){
            period.push( end_year + '-' + '0' + m )
        }else{
            period.push( end_year + '-' +  m )
        }
    }
    return period
}