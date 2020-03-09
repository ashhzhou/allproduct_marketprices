function unique (data) {
    var arr = []
    for(var i = 0; i < data.length; i++){
        arr.push(data[i]['date'])
    }
    return Array.from(new Set(arr))
   }