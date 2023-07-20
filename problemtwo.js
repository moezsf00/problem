var dot_product=function(v1,v2){
    var ps=v1.x*v2.x+v1.y+v2.y   ;
    return ps
       
   }
   
   console.log(dot_product({x:2,y:3},{x:5,y:4}))
   
   var orthogonal=function(v1,v2){
       
   if(dot_product(v1,v2)===0){
       
   return true    
       
   }    
   else{
   return false
   }
   
   
   }