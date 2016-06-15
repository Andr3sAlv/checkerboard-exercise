// Your JS goes here
for(var i=0;i<81;i++){
var black = document.createElement('div');
black.style.width='11.1%';
black.style.float='left';
black.style.paddingBottom='11.1%';
    if(i%2) {
        black.style.backgroundColor = 'black';
        document.body.appendChild(black)
    }
    else {
        black.style.backgroundColor='red';
        document.body.appendChild(black)
    }
}

