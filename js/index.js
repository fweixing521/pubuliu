$(function(){
    waterFall('.wrap','.item-box')
})
function waterFall(fatherNode,childrenNode){
    var box = $(childrenNode);  //子元素
    var boxWidth = box.outerWidth(); //获取子元素的宽
    var row = parseInt($(fatherNode).outerWidth() / boxWidth); //通过子元素算是父元素一排可以存放几个元素
    var arrHight = []; // 存放第一排的高度
    $.each(box,function(index,item){ //遍历每一个元素
        let boxHight = $(this).outerHeight(); // 每一个元素的高度
        if(index >= row){ // 不是第一排。第一排只能存放row(变量)，大于row说明不在第一排
            let cur = index%row ;  // 可以获取到一排中的第几个。如果：5%3=2 说明是这一排的第二个元素索引
            $(this).css({
                position:'absolute',
                left : cur*boxWidth+'px',
                top : arrHight[cur] +'px'
            })
            arrHight[cur] = arrHight[cur]+boxHight;
        }else{ 
            arrHight[index] = boxHight; //将第一排的高度存放到数组中（arrHight）
        }
    })
}