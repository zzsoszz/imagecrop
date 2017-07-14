function ImageCrop(target){
  this.startPoint={};
  this.startSelect=false;
  this.ctx=null;
  this.canvas=target.get(0);
  this.drawSelectArea=function(startX,startY,width,height)
  { 
     console.log("startX:"+startX+" startY:"+startY+" width:"+width+" height:"+height);
     this.canvas.height=this.canvas.height;
     this.ctx.beginPath();
     //this.ctx.setLineDash([5,2]);
     this.ctx.rect(startX,startY,width,height);
     //this.ctx.rect(300,300,50,50);
     this.ctx.fill();
  };
  
  
  this.init=function(){
    var canEle=target.get(0);
    target.on("mousedown",function(e){
       this.startSelect=true;
       this.startPoint={
         x:e.clientX,
         y:e.clientY
       };
       //console.log("start",(e.clientX-canEle.offsetLeft)+" "+(e.clientY-canEle.offsetTop));
    }.bind(this)).on("mousemove",function(e){
      
      if(this.startSelect){
         var startX= (this.startPoint.x-canEle.offsetLeft);
         var startY= (this.startPoint.y-canEle.offsetTop);
         var endX= (e.clientX-canEle.offsetLeft);
         var endY= (e.clientY-canEle.offsetTop);
//          console.log("startX",startX);
//          console.log("startY",startY);
//          console.log("endX",endX);
//          console.log("endY",endY);
//          console.log("width:",endX-startX);
//          console.log("height",endY-startY);
         this.drawSelectArea(startX,startY,endX-startX,endY-startY);
         //console.log("move",+" "+(e.clientY-canEle.offsetTop));
      }
      
    }.bind(this)).on("mouseup",function(e){
       this.startSelect=false; 
       //console.log("end",(e.clientX-canEle.offsetLeft)+" "+(e.clientY-canEle.offsetTop));
    }.bind(this)).on("mouseout",function(e){
       //this.startSelect=false; 
    }.bind(this));
    
    
    this.ctx=canEle.getContext("2d");
//     this.ctx.rect(0,0,500,500);
//     this.ctx.fillStyle="green";
//     this.ctx.fill();
  };
  this.init();
  
}

$(document).ready(function(){
   var imagecrop=new ImageCrop($("#hello"));
});

