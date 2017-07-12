/*
var img = new Image();
img.onload = function(){
    //.hide()
    var cropMarginWidth = 50,
        canvas = $('<canvas width="'+ (img.width - 2 * cropMarginWidth) +'" height="'+ (img.height - 2 * cropMarginWidth) +'"/>')
                    .appendTo('body'),
        ctx = canvas.get(0).getContext('2d'),
        a = $('<a download="cropped-image" title="click to download the image" />'),
        cropCoords = {
            topLeft : {
                x : cropMarginWidth,
                y : cropMarginWidth 
            },
            bottomRight :{
                x : img.width - cropMarginWidth,
                y : img.height - cropMarginWidth
            }
        };
    
    ctx.drawImage(img, cropCoords.topLeft.x, cropCoords.topLeft.y, cropCoords.bottomRight.x, cropCoords.bottomRight.y, 0, 0, img.width, img.height  );
    var base64ImageData = canvas.get(0).toDataURL();
        
    a
        .attr('href', base64ImageData)
        .text('cropped image')
        .appendTo('body');
    
    a
        .clone()
        .attr('href', img.src)
        .text('original image')
        .attr('download','original-image')
        .appendTo('body');
    
    //canvas.remove();
}
img.src = 'images/star.jpg';
*/