<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bourbamy的世界</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
	    <script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
  </head>
  <body>
    <a href="index.html" >开启我的世界</a>
    <style>
    	body{
    	  margin: 0; /*外边距*/
    	  padding: 0; /*内边距*/
    	  background-color: #000; /*背景颜色*/
    	}
    	a{
    	  position: absolute; /*绝对对位*/
    	  top: 50%; /*距上部*/
    	  left: 50%; 
    	  transform: translate(-50%,-50%); /*移动，根据X,Y轴*/
    	  width: 400px; /*宽*/
    	  height: 120px; /*高*/
    	  text-align: center; /*字体水平居中*/
    	  font-size: 45px; /*字体大小*/
    	  line-height: 120px; /*行高*/
    	  color: #fff;
    	  text-transform: uppercase; /*字体大写*/
    	  text-decoration: none; /*字体增加装饰：去除下划线*/
    	  font-family: sans-serif; /*非衬线体*/
    	  box-sizing: border-box; /*盒模型大小规则*/
    	  background: linear-gradient(
    		90deg,#03a9f4, #f441a5, #ffeb3b, 
    	  #03a9f4, #f441a5, #ffeb3b, #03a9f4); /*渐变背景*/
    	  border-radius: 60px; /*边框圆角*/
    	  background-size: 400%; /*背景大小*/
    	  z-index: 1; /*层叠定位*/
    	}
    	a:hover{
    	  animation: animate 8s linear infinite alternate; /*动画: 名称 时间 线性 循环 播放完回退播放*/
    	}
    	@keyframes animate{
    	  0%{
    		background-position: 0%; /*修改背景定位，实现渐变色炫光*/
    	  }
    	  50%{
    		background-position: 100%;
    	  }
    	  100%{
    		background-position: 0%;
    	  }
    	}
    	a::before{ /*之前添加*/
    	  content: ''; /*内容*/
    	  position: absolute; /*绝对定位*/
    	  top:-5px; /*当设置对立的2个定位属性时，元素的大小将由对立的大小决定*/
    	  left: -5px;
    	  right: -5px;
    	  bottom: -5px; /*当设置对立的2个定位属性时，元素的大小将由对立的大小决定*/
    	  z-index: -1; 
    	  background: linear-gradient(
    		90deg,#03a9f4, #f441a5, #ffeb3b, #03a9f4, 
    	  #f441a5, #ffeb3b, #03a9f4);
    	  border-radius: 40px;
    	  background-size: 400%;
    	  filter: blur(20px); /*过渡：模糊*/
    	  opacity: 0; /*透明度*/
    	  transition: 1s; /*过渡时间*/
    	}
    	a:hover::before{
    	  filter: blur(20px);
    	  opacity: 1;
    	  animation: animate 8s linear infinite; /*注意动画名称统一*/
    	}
    
    </style>

  </body>
</html>
