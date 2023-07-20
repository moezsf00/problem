var problemone=function(arr1,arr2){
    
    sum=0;
    for(var i=0;i<arr1.length;i++){
        
    if(!arr2.includes(arr1[i])){
        
    sum=sum+arr1[i];    
        
    }    
    }
    for(var i=0;i<arr2.length;i++){
        
    if(!arr1.includes(arr2[i])){
        
    sum=sum+arr2[i];    
        
    }    
    }
    
    console.log(sum);
    }
    
    problemone([1,5,6],[1,5,2]);