//fourth part
var body = document.getElementsByTagName('body')[0];

for(var i=0;i<81;i++){                                                          
  var hue = (255/ 81) * i;                                                      
  var div = document.createElement('div');                                      
  div.style.width='11.1%';                                                      
  div.style.float='left';                                                       
  div.style.paddingBottom='11.1%';                                              
                                                                                
  if(i%2) {                                                                     
           div.style.backgroundColor = 'rgba(0, 0, ' + Math.floor(hue) + ', 1)';  
       } else {                                                                      
              div.style.backgroundColor = 'rgba(0, ' + Math.floor(hue) + ',0 , 1)';  
          }                                                                          
     document.body.appendChild(div);                                            
 }                                                                              
                                                                                     
function changeColor() {
  for (var i=0;i<body.children.length; i++){
    var r = Math.floor(Math.random()*255) 
    var g = Math.floor(Math.random()*255) 
    var b = Math.floor(Math.random()*255) 
    body.children[i].style.backgroundColor = 'rgb('+r+','+g+','+b+')' 
  }
}

setInterval(changeColor, 1);
