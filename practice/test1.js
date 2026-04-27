 const getRes = ( line) => {
    let res = ''
    let couter = 1
    let tmp = line[0]
    for (let i = 1; i < line.length; i++) {
        const element = line[i];
        if (i ===  line.length -1){
            res += `${tmp}${couter}`
            return res;
        }
        if (element === tmp) {
            couter ++
            
        }
        else if (element !== tmp ) {
            res += `${tmp}${couter}`
            tmp = element
            couter = 1
            
        }
        
    }
    return res;
 }

 console.log("🚀 ~ getRes:",  getRes('aaabbcddddd'))
