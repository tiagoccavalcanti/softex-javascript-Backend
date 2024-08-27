interface Rectangle {
 width:number;
 height:number;
}

function getArea(rectangle:Rectangle){
 return rectangle.width*rectangle.height;
}

const retangulo:Rectangle = {width:10, height:10} ;
console.log(getArea(retangulo));