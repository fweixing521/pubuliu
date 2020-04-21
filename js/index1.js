window.onload = function(){
    //waterFall('.wrap','.item-box')
    
}

function waterFall(fatherNode,childrenNode){
    var box = $(childrenNode);
    var boxWidth = $(childrenNode)[0].clientWidth;
    var fatherWidth = $(fatherNode)[0].clientWidth; 
    var row = parseInt(fatherWidth / boxWidth) //父元素中可以放几个子元素
    var heigthArray = [];
    for(var i = 0 ; i<box.length;i++){
        var thisH = box[i].clientHeight;
        var cur = i%row;
        if(i < row){
            heigthArray[i] = thisH;
        }else{
            box[i].style.position='absolute';
            box[i].style.left = cur*boxWidth+'px';
            box[i].style.top = heigthArray[cur]+'px';
            heigthArray[cur] = heigthArray[cur]+thisH;
        }
        
    }
}

function $(node){
    return document.querySelectorAll(node)
}
