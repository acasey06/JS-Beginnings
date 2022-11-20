var box = document.getElementById("square");
var count = 0;
var rate = 1
box.addEventListener('click', function(){
    count+=rate;
    box.innerHTML = count;
})

var reBir = document.getElementById("rebirth");
var reBirCount = 0;
reBir.addEventListener('click', function(){
    if(count>= 20*(1+reBirCount))
    {
        reBirCount++;
        count = 0; 
        rate++;
    }
})