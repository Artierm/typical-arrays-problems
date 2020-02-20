
exports.min = function min (array) {
  if(array==undefined || array.length==0)
  {
    return 0;
  }
     let min=array[0];
      for(let index=0;index<array.length;index++){
  
          if (array[index]<min)
          {
              min=array[index];   
          }
          
      };
     return  min;
  }
  


exports.max = function max (array) {
  if(array==undefined || array.length==0 )
  { 
    return 0;
  }
     let max=array[0];
      for(let index=0; index<array.length; index++){
  
          if (array[index]>max)
          {
              max=array[index];   
          }
          
      };
     return  max;
  }


exports.avg = function avg (array) {
  if(array==undefined || array.length==0)
  {
    return 0;
  }
   let del = array.length;
   let sum = 0;
    for (let index=0; index<array.length; index++)
    {
    sum+=array[index];
    }
    return sum/del;
}

