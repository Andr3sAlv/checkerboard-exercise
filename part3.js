//third part

for(var i=0;i<81;i++){                                                          
  var hue = (255/ 81) * i;                                                      
  var div = document.createElement('div');                                      
  div.style.width='11.1%';                                                      
  div.style.float='left';                                                       
  div.style.paddingBottom='11.1%';                                              
                                                                                
  if(i%2) {                                                                     
           div.style.backgroundColor = 'rgba(0, 0, ' + Math.floor(hue) + ', 1)';  
       }                                                                          
     else{                                                                      
              div.style.backgroundColor = 'rgba(0, ' + Math.floor(hue) + ',0 , 1)';  
          }                                                                          
     document.body.appendChild(div);                                            
 }                                                                              
     document.body.appendChild(div);                                            
                                                                                     
