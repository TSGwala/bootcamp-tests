assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));

assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));


function countAllPaarl(regNumbers){
    let regList=regNumbers.split(',');
    let count=0;
    for(let i=0;i<regList.length;i++){
      let regNum=regList[i].trim();
      if (regNum.startsWith('CJ')){
         count++;
                            
      }
     }
   return count ;          
  }    
  console.log(countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));                        