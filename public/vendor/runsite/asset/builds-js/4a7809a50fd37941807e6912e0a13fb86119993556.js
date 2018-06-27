.pace{-webkit-pointer-events:none;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;position:fixed;width:170px;left:50%;top:50%;background-color:#dcdcdc;z-index:10000;height:1px;overflow:hidden;transform:translate(-50%,-50%);}.pace-inactive{display:none;}.pace.pace-progress{background:#000;position:absolute;z-index:10001;top:0;right:100%;width:100%;height:1px;}.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both;}.animated.infinite{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;}.animated.hinge{-webkit-animation-duration:2s;animation-duration:2s;}.animated.flipOutX,.animated.flipOutY,.animated.bounceIn,.animated.bounceOut{-webkit-animation-duration:.75s;animation-duration:.75s;}
@-webkit-keyframes bounce{from,20%,53%,80%,to{-webkit-animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000);animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}
40%,43%{-webkit-animation-timing-function:cubic-bezier(0.755,0.050,0.855,0.060);animation-timing-function:cubic-bezier(0.755,0.050,0.855,0.060);-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0);}
70%{-webkit-animation-timing-function:cubic-bezier(0.755,0.050,0.855,0.060);animation-timing-function:cubic-bezier(0.755,0.050,0.855,0.060);-webkit-transform:translate3d(0,-15px,0);transform:translate3d(0,-15px,0);}
90%{-webkit-transform:translate3d(0,-4px,0);transform:translate3d(0,-4px,0);}}
@keyframes bounce{from,20%,53%,80%,to{-webkit-animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000);animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}
40%,43%{-webkit-animation-timing-function:cubic-bezier(0.755,0.050,0.855,0.060);animation-timing-function:cubic-bezier(0.755,0.050,0.855,0.060);-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0);}
70%{-webkit-animation-timing-function:cubic-bezier(0.755,0.050,0.855,0.060);animation-timing-function:cubic-bezier(0.755,0.050,0.855,0.060);-webkit-transform:translate3d(0,-15px,0);transform:translate3d(0,-15px,0);}
90%{-webkit-transform:translate3d(0,-4px,0);transform:translate3d(0,-4px,0);}}.bounce{-webkit-animation-name:bounce;animation-name:bounce;-webkit-transform-origin:center bottom;transform-origin:center bottom;}
@-webkit-keyframes flash{from,50%,to{opacity:1;}
25%,75%{opacity:0;}}
@keyframes flash{from,50%,to{opacity:1;}
25%,75%{opacity:0;}}.flash{-webkit-animation-name:flash;animation-name:flash;}
@-webkit-keyframes pulse{from{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);}
50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.05,1.05,1.05);}
to{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);}}
@keyframes pulse{from{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);}
50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.05,1.05,1.05);}
to{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);}}.pulse{-webkit-animation-name:pulse;animation-name:pulse;}
@-webkit-keyframes rubberBand{from{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);}
30%{-webkit-transform:scale3d(1.25,0.75,1);transform:scale3d(1.25,0.75,1);}
40%{-webkit-transform:scale3d(0.75,1.25,1);transform:scale3d(0.75,1.25,1);}
50%{-webkit-transform:scale3d(1.15,0.85,1);transform:scale3d(1.15,0.85,1);}
65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1);}
75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1);}
to{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);}}
@keyframes rubberBand{from{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);}
30%{-webkit-transform:scale3d(1.25,0.75,1);transform:scale3d(1.25,0.75,1);}
40%{-webkit-transform:scale3d(0.75,1.25,1);transform:scale3d(0.75,1.25,1);}
50%{-webkit-transform:scale3d(1.15,0.85,1);transform:scale3d(1.15,0.85,1);}
65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1);}
75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1);}
to{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);}}.rubberBand{-webkit-animation-name:rubberBand;animation-name:rubberBand;}
@-webkit-keyframes shake{from,to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}
10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0);}
20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0);}}
@keyframes shake{from,to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}
10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0);}
20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0);}}.shake{-webkit-animation-name:shake;animation-name:shake;}
@-webkit-keyframes headShake{0%{-webkit-transform:translateX(0);transform:translateX(0);}
6.5%{-webkit-transform:translateX(-6px)rotateY(-9deg);transform:translateX(-6px)rotateY(-9deg);}
18.5%{-webkit-transform:translateX(5px)rotateY(7deg);transform:translateX(5px)rotateY(7deg);}
31.5%{-webkit-transform:translateX(-3px)rotateY(-5deg);transform:translateX(-3px)rotateY(-5deg);}
43.5%{-webkit-transform:translateX(2px)rotateY(3deg);transform:translateX(2px)rotateY(3deg);}
50%{-webkit-transform:translateX(0);transform:translateX(0);}}
@keyframes headShake{0%{-webkit-transform:translateX(0);transform:translateX(0);}
6.5%{-webkit-transform:translateX(-6px)rotateY(-9deg);transform:translateX(-6px)rotateY(-9deg);}
18.5%{-webkit-transform:translateX(5px)rotateY(7deg);transform:translateX(5px)rotateY(7deg);}
31.5%{-webkit-transform:translateX(-3px)rotateY(-5deg);transform:translateX(-3px)rotateY(-5deg);}
43.5%{-webkit-transform:translateX(2px)rotateY(3deg);transform:translateX(2px)rotateY(3deg);}
50%{-webkit-transform:translateX(0);transform:translateX(0);}}.headShake{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-name:headShake;animation-name:headShake;}
@-webkit-keyframes swing{20%{-webkit-transform:rotate3d(0,0,1,15deg);transform:rotate3d(0,0,1,15deg);}
40%{-webkit-transform:rotate3d(0,0,1,-10deg);transform:rotate3d(0,0,1,-10deg);}
60%{-webkit-transform:rotate3d(0,0,1,5deg);transform:rotate3d(0,0,1,5deg);}
80%{-webkit-transform:rotate3d(0,0,1,-5deg);transform:rotate3d(0,0,1,-5deg);}
to{-webkit-transform:rotate3d(0,0,1,0deg);transform:rotate3d(0,0,1,0deg);}}
@keyframes swing{20%{-webkit-transform:rotate3d(0,0,1,15deg);transform:rotate3d(0,0,1,15deg);}
40%{-webkit-transform:rotate3d(0,0,1,-10deg);transform:rotate3d(0,0,1,-10deg);}
60%{-webkit-transform:rotate3d(0,0,1,5deg);transform:rotate3d(0,0,1,5deg);}
80%{-webkit-transform:rotate3d(0,0,1,-5deg);transform:rotate3d(0,0,1,-5deg);}
to{-webkit-transform:rotate3d(0,0,1,0deg);transform:rotate3d(0,0,1,0deg);}}.swing{-webkit-transform-origin:top center;transform-origin:top center;-webkit-animation-name:swing;animation-name:swing;}
@-webkit-keyframes tada{from{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);}
10%,20%{-webkit-transform:scale3d(.9,.9,.9)rotate3d(0,0,1,-3deg);transform:scale3d(.9,.9,.9)rotate3d(0,0,1,-3deg);}
30%,50%,70%,90%{-webkit-transform:scale3d(1.1,1.1,1.1)rotate3d(0,0,1,3deg);transform:scale3d(1.1,1.1,1.1)rotate3d(0,0,1,3deg);}
40%,60%,80%{-webkit-transform:scale3d(1.1,1.1,1.1)rotate3d(0,0,1,-3deg);transform:scale3d(1.1,1.1,1.1)rotate3d(0,0,1,-3deg);}
to{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);}}
@keyframes tada{from{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);}
10%,20%{-webkit-transform:scale3d(.9,.9,.9)rotate3d(0,0,1,-3deg);transform:scale3d(.9,.9,.9)rotate3d(0,0,1,-3deg);}
30%,50%,70%,90%{-webkit-transform:scale3d(1.1,1.1,1.1)rotate3d(0,0,1,3deg);transform:scale3d(1.1,1.1,1.1)rotate3d(0,0,1,3deg);}
40%,60%,80%{-webkit-transform:scale3d(1.1,1.1,1.1)rotate3d(0,0,1,-3deg);transform:scale3d(1.1,1.1,1.1)rotate3d(0,0,1,-3deg);}
to{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);}}.tada{-webkit-animation-name:tada;animation-name:tada;}
@-webkit-keyframes wobble{from{-webkit-transform:none;transform:none;}
15%{-webkit-transform:translate3d(-25%,0,0)rotate3d(0,0,1,-5deg);transform:translate3d(-25%,0,0)rotate3d(0,0,1,-5deg);}
30%{-webkit-transform:translate3d(20%,0,0)rotate3d(0,0,1,3deg);transform:translate3d(20%,0,0)rotate3d(0,0,1,3deg);}
45%{-webkit-transform:translate3d(-15%,0,0)rotate3d(0,0,1,-3deg);transform:translate3d(-15%,0,0)rotate3d(0,0,1,-3deg);}
60%{-webkit-transform:translate3d(10%,0,0)rotate3d(0,0,1,2deg);transform:translate3d(10%,0,0)rotate3d(0,0,1,2deg);}
75%{-webkit-transform:translate3d(-5%,0,0)rotate3d(0,0,1,-1deg);transform:translate3d(-5%,0,0)rotate3d(0,0,1,-1deg);}
to{-webkit-transform:none;transform:none;}}
@keyframes wobble{from{-webkit-transform:none;transform:none;}
15%{-webkit-transform:translate3d(-25%,0,0)rotate3d(0,0,1,-5deg);transform:translate3d(-25%,0,0)rotate3d(0,0,1,-5deg);}
30%{-webkit-transform:translate3d(20%,0,0)rotate3d(0,0,1,3deg);transform:translate3d(20%,0,0)rotate3d(0,0,1,3deg);}
45%{-webkit-transform:translate3d(-15%,0,0)rotate3d(0,0,1,-3deg);transform:translate3d(-15%,0,0)rotate3d(0,0,1,-3deg);}
60%{-webkit-transform:translate3d(10%,0,0)rotate3d(0,0,1,2deg);transform:translate3d(10%,0,0)rotate3d(0,0,1,2deg);}
75%{-webkit-transform:translate3d(-5%,0,0)rotate3d(0,0,1,-1deg);transform:translate3d(-5%,0,0)rotate3d(0,0,1,-1deg);}
to{-webkit-transform:none;transform:none;}}.wobble{-webkit-animation-name:wobble;animation-name:wobble;}
@-webkit-keyframes jello{from,11.1%,to{-webkit-transform:none;transform:none;}
22.2%{-webkit-transform:skewX(-12.5deg)skewY(-12.5deg);transform:skewX(-12.5deg)skewY(-12.5deg);}
33.3%{-webkit-transform:skewX(6.25deg)skewY(6.25deg);transform:skewX(6.25deg)skewY(6.25deg);}
44.4%{-webkit-transform:skewX(-3.125deg)skewY(-3.125deg);transform:skewX(-3.125deg)skewY(-3.125deg);}
55.5%{-webkit-transform:skewX(1.5625deg)skewY(1.5625deg);transform:skewX(1.5625deg)skewY(1.5625deg);}
66.6%{-webkit-transform:skewX(-0.78125deg)skewY(-0.78125deg);transform:skewX(-0.78125deg)skewY(-0.78125deg);}
77.7%{-webkit-transform:skewX(0.390625deg)skewY(0.390625deg);transform:skewX(0.390625deg)skewY(0.390625deg);}
88.8%{-webkit-transform:skewX(-0.1953125deg)skewY(-0.1953125deg);transform:skewX(-0.1953125deg)skewY(-0.1953125deg);}}
@keyframes jello{from,11.1%,to{-webkit-transform:none;transform:none;}
22.2%{-webkit-transform:skewX(-12.5deg)skewY(-12.5deg);transform:skewX(-12.5deg)skewY(-12.5deg);}
33.3%{-webkit-transform:skewX(6.25deg)skewY(6.25deg);transform:skewX(6.25deg)skewY(6.25deg);}
44.4%{-webkit-transform:skewX(-3.125deg)skewY(-3.125deg);transform:skewX(-3.125deg)skewY(-3.125deg);}
55.5%{-webkit-transform:skewX(1.5625deg)skewY(1.5625deg);transform:skewX(1.5625deg)skewY(1.5625deg);}
66.6%{-webkit-transform:skewX(-0.78125deg)skewY(-0.78125deg);transform:skewX(-0.78125deg)skewY(-0.78125deg);}
77.7%{-webkit-transform:skewX(0.390625deg)skewY(0.390625deg);transform:skewX(0.390625deg)skewY(0.390625deg);}
88.8%{-webkit-transform:skewX(-0.1953125deg)skewY(-0.1953125deg);transform:skewX(-0.1953125deg)skewY(-0.1953125deg);}}.jello{-webkit-animation-name:jello;animation-name:jello;-webkit-transform-origin:center;transform-origin:center;}
@-webkit-keyframes bounceIn{from,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000);animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000);}
0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3);}
20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1);}
40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9);}
60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03);}
80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97);}
to{opacity:1;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);}}
@keyframes bounceIn{from,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000);animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000);}
0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3);}
20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1);}
40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9);}
60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03);}
80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97);}
to{opacity:1;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);}}.bounceIn{-webkit-animation-name:bounceIn;animation-name:bounceIn;}
@-webkit-keyframes bounceInDown{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000);animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000);}
0%{opacity:0;-webkit-transform:translate3d(0,-3000px,0);transform:translate3d(0,-3000px,0);}
60%{opacity:1;-webkit-transform:translate3d(0,25px,0);transform:translate3d(0,25px,0);}
75%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0);}
90%{-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0);}
to{-webkit-transform:none;transform:none;}}
@keyframes bounceInDown{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000);animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000);}
0%{opacity:0;-webkit-transform:translate3d(0,-3000px,0);transform:translate3d(0,-3000px,0);}
60%{opacity:1;-webkit-transform:translate3d(0,25px,0);transform:translate3d(0,25px,0);}
75%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0);}
90%{-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0);}
to{-webkit-transform:none;transform:none;}}.bounceInDown{-webkit-animation-name:bounceInDown;animation-name:bounceInDown;}
@-webkit-keyframes bounceInLeft{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000);animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000);}
0%{opacity:0;-webkit-transform:translate3d(-3000px,0,0);transform:translate3d(-3000px,0,0);}
60%{opacity:1;-webkit-transform:translate3d(25px,0,0);transform:translate3d(25px,0,0);}
75%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0);}
90%{-webkit-transform:translate3d(5px,0,0);transform:translate3d(5px,0,0);}
to{-webkit-transform:none;transform:none;}}
@keyframes bounceInLeft{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000);animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000);}
0%{opacity:0;-webkit-transform:translate3d(-3000px,0,0);transform:translate3d(-3000px,0,0);}
60%{opacity:1;-webkit-transform:translate3d(25px,0,0);transform:translate3d(25px,0,0);}
75%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0);}
90%{-webkit-transform:translate3d(5px,0,0);transform:translate3d(5px,0,0);}
to{-webkit-transform:none;transform:none;}}.bounceInLeft{-webkit-animation-name:bounceInLeft;animation-name:bounceInLeft;}
@-webkit-keyframes bounceInRight{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000);animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000);}
from{opacity:0;-webkit-transform:translate3d(3000px,0,0);transform:translate3d(3000px,0,0);}
60%{opacity:1;-webkit-transform:translate3d(-25px,0,0);transform:translate3d(-25px,0,0);}
75%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0);}
90%{-webkit-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0);}
to{-webkit-transform:none;transform:none;}}
@keyframes bounceInRight{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000);animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000);}
from{opacity:0;-webkit-transform:translate3d(3000px,0,0);transform:translate3d(3000px,0,0);}
60%{opacity:1;-webkit-transform:translate3d(-25px,0,0);transform:translate3d(-25px,0,0);}
75%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0);}
90%{-webkit-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0);}
to{-webkit-transform:none;transform:none;}}.bounceInRight{-webkit-animation-name:bounceInRight;animation-name:bounceInRight;}
@-webkit-keyframes bounceInUp{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000);animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000);}
from{opacity:0;-webkit-transform:translate3d(0,3000px,0);transform:translate3d(0,3000px,0);}
60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0);}
75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0);}
90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0);}
to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}
@keyframes bounceInUp{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000);animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000);}
from{opacity:0;-webkit-transform:translate3d(0,3000px,0);transform:translate3d(0,3000px,0);}
60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0);}
75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0);}
90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0);}
to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}.bounceInUp{-webkit-animation-name:bounceInUp;animation-name:bounceInUp;}
@-webkit-keyframes bounceOut{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9);}
50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1);}
to{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3);}}
@keyframes bounceOut{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9);}
50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1);}
to{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3);}}.bounceOut{-webkit-animation-name:bounceOut;animation-name:bounceOut;}
@-webkit-keyframes bounceOutDown{20%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0);}
40%,45%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0);}
to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0);}}
@keyframes bounceOutDown{20%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0);}
40%,45%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0);}
to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0);}}.bounceOutDown{-webkit-animation-name:bounceOutDown;animation-name:bounceOutDown;}
@-webkit-keyframes bounceOutLeft{20%{opacity:1;-webkit-transform:translate3d(20px,0,0);transform:translate3d(20px,0,0);}
to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0);}}
@keyframes bounceOutLeft{20%{opacity:1;-webkit-transform:translate3d(20px,0,0);transform:translate3d(20px,0,0);}
to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0);}}.bounceOutLeft{-webkit-animation-name:bounceOutLeft;animation-name:bounceOutLeft;}
@-webkit-keyframes bounceOutRight{20%{opacity:1;-webkit-transform:translate3d(-20px,0,0);transform:translate3d(-20px,0,0);}
to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0);}}
@keyframes bounceOutRight{20%{opacity:1;-webkit-transform:translate3d(-20px,0,0);transform:translate3d(-20px,0,0);}
to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0);}}.bounceOutRight{-webkit-animation-name:bounceOutRight;animation-name:bounceOutRight;}
@-webkit-keyframes bounceOutUp{20%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0);}
40%,45%{opacity:1;-webkit-transform:translate3d(0,20px,0);transform:translate3d(0,20px,0);}
to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0);}}
@keyframes bounceOutUp{20%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0);}
40%,45%{opacity:1;-webkit-transform:translate3d(0,20px,0);transform:translate3d(0,20px,0);}
to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0);}}.bounceOutUp{-webkit-animation-name:bounceOutUp;animation-name:bounceOutUp;}
@-webkit-keyframes fadeIn{from{opacity:0;}
to{opacity:1;}}
@keyframes fadeIn{from{opacity:0;}
to{opacity:1;}}.fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn;}
@-webkit-keyframes fadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);}
to{opacity:1;-webkit-transform:none;transform:none;}}
@keyframes fadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);}
to{opacity:1;-webkit-transform:none;transform:none;}}.fadeInDown{-webkit-animation-name:fadeInDown;animation-name:fadeInDown;}
@-webkit-keyframes fadeInDownBig{from{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0);}
to{opacity:1;-webkit-transform:none;transform:none;}}
@keyframes fadeInDownBig{from{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0);}
to{opacity:1;-webkit-transform:none;transform:none;}}.fadeInDownBig{-webkit-animation-name:fadeInDownBig;animation-name:fadeInDownBig;}
@-webkit-keyframes fadeInLeft{from{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);}
to{opacity:1;-webkit-transform:none;transform:none;}}
@keyframes fadeInLeft{from{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);}
to{opacity:1;-webkit-transform:none;transform:none;}}.fadeInLeft{-webkit-animation-name:fadeInLeft;animation-name:fadeInLeft;}
@-webkit-keyframes fadeInLeftBig{from{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0);}
to{opacity:1;-webkit-transform:none;transform:none;}}
@keyframes fadeInLeftBig{from{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0);}
to{opacity:1;-webkit-transform:none;transform:none;}}.fadeInLeftBig{-webkit-animation-name:fadeInLeftBig;animation-name:fadeInLeftBig;}
@-webkit-keyframes fadeInRight{from{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);}
to{opacity:1;-webkit-transform:none;transform:none;}}
@keyframes fadeInRight{from{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);}
to{opacity:1;-webkit-transform:none;transform:none;}}.fadeInRight{-webkit-animation-name:fadeInRight;animation-name:fadeInRight;}
@-webkit-keyframes fadeInRightBig{from{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0);}
to{opacity:1;-webkit-transform:none;transform:none;}}
@keyframes fadeInRightBig{from{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0);}
to{opacity:1;-webkit-transform:none;transform:none;}}.fadeInRightBig{-webkit-animation-name:fadeInRightBig;animation-name:fadeInRightBig;}
@-webkit-keyframes fadeInUp{from{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);}
to{opacity:1;-webkit-transform:none;transform:none;}}
@keyframes fadeInUp{from{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);}
to{opacity:1;-webkit-transform:none;transform:none;}}.fadeInUp{-webkit-animation-name:fadeInUp;animation-name:fadeInUp;}
@-webkit-keyframes fadeInUpBig{from{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0);}
to{opacity:1;-webkit-transform:none;transform:none;}}
@keyframes fadeInUpBig{from{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0);}
to{opacity:1;-webkit-transform:none;transform:none;}}.fadeInUpBig{-webkit-animation-name:fadeInUpBig;animation-name:fadeInUpBig;}
@-webkit-keyframes fadeOut{from{opacity:1;}
to{opacity:0;}}
@keyframes fadeOut{from{opacity:1;}
to{opacity:0;}}.fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut;}
@-webkit-keyframes fadeOutDown{from{opacity:1;}
to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);}}
@keyframes fadeOutDown{from{opacity:1;}
to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);}}.fadeOutDown{-webkit-animation-name:fadeOutDown;animation-name:fadeOutDown;}
@-webkit-keyframes fadeOutDownBig{from{opacity:1;}
to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0);}}
@keyframes fadeOutDownBig{from{opacity:1;}
to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0);}}.fadeOutDownBig{-webkit-animation-name:fadeOutDownBig;animation-name:fadeOutDownBig;}
@-webkit-keyframes fadeOutLeft{from{opacity:1;}
to{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);}}
@keyframes fadeOutLeft{from{opacity:1;}
to{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);}}.fadeOutLeft{-webkit-animation-name:fadeOutLeft;animation-name:fadeOutLeft;}
@-webkit-keyframes fadeOutLeftBig{from{opacity:1;}
to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0);}}
@keyframes fadeOutLeftBig{from{opacity:1;}
to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0);}}.fadeOutLeftBig{-webkit-animation-name:fadeOutLeftBig;animation-name:fadeOutLeftBig;}
@-webkit-keyframes fadeOutRight{from{opacity:1;}
to{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);}}
@keyframes fadeOutRight{from{opacity:1;}
to{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);}}.fadeOutRight{-webkit-animation-name:fadeOutRight;animation-name:fadeOutRight;}
@-webkit-keyframes fadeOutRightBig{from{opacity:1;}
to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0);}}
@keyframes fadeOutRightBig{from{opacity:1;}
to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0);}}.fadeOutRightBig{-webkit-animation-name:fadeOutRightBig;animation-name:fadeOutRightBig;}
@-webkit-keyframes fadeOutUp{from{opacity:1;}
to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);}}
@keyframes fadeOutUp{from{opacity:1;}
to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);}}.fadeOutUp{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp;}
@-webkit-keyframes fadeOutUpBig{from{opacity:1;}
to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0);}}
@keyframes fadeOutUpBig{from{opacity:1;}
to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0);}}.fadeOutUpBig{-webkit-animation-name:fadeOutUpBig;animation-name:fadeOutUpBig;}
@-webkit-keyframes flip{from{-webkit-transform:perspective(400px)rotate3d(0,1,0,-360deg);transform:perspective(400px)rotate3d(0,1,0,-360deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}
40%{-webkit-transform:perspective(400px)translate3d(0,0,150px)rotate3d(0,1,0,-190deg);transform:perspective(400px)translate3d(0,0,150px)rotate3d(0,1,0,-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}
50%{-webkit-transform:perspective(400px)translate3d(0,0,150px)rotate3d(0,1,0,-170deg);transform:perspective(400px)translate3d(0,0,150px)rotate3d(0,1,0,-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}
80%{-webkit-transform:perspective(400px)scale3d(.95,.95,.95);transform:perspective(400px)scale3d(.95,.95,.95);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}
to{-webkit-transform:perspective(400px);transform:perspective(400px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}}
@keyframes flip{from{-webkit-transform:perspective(400px)rotate3d(0,1,0,-360deg);transform:perspective(400px)rotate3d(0,1,0,-360deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}
40%{-webkit-transform:perspective(400px)translate3d(0,0,150px)rotate3d(0,1,0,-190deg);transform:perspective(400px)translate3d(0,0,150px)rotate3d(0,1,0,-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}
50%{-webkit-transform:perspective(400px)translate3d(0,0,150px)rotate3d(0,1,0,-170deg);transform:perspective(400px)translate3d(0,0,150px)rotate3d(0,1,0,-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}
80%{-webkit-transform:perspective(400px)scale3d(.95,.95,.95);transform:perspective(400px)scale3d(.95,.95,.95);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}
to{-webkit-transform:perspective(400px);transform:perspective(400px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}}.animated.flip{-webkit-backface-visibility:visible;backface-visibility:visible;-webkit-animation-name:flip;animation-name:flip;}
@-webkit-keyframes flipInX{from{-webkit-transform:perspective(400px)rotate3d(1,0,0,90deg);transform:perspective(400px)rotate3d(1,0,0,90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;}
40%{-webkit-transform:perspective(400px)rotate3d(1,0,0,-20deg);transform:perspective(400px)rotate3d(1,0,0,-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}
60%{-webkit-transform:perspective(400px)rotate3d(1,0,0,10deg);transform:perspective(400px)rotate3d(1,0,0,10deg);opacity:1;}
80%{-webkit-transform:perspective(400px)rotate3d(1,0,0,-5deg);transform:perspective(400px)rotate3d(1,0,0,-5deg);}
to{-webkit-transform:perspective(400px);transform:perspective(400px);}}
@keyframes flipInX{from{-webkit-transform:perspective(400px)rotate3d(1,0,0,90deg);transform:perspective(400px)rotate3d(1,0,0,90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;}
40%{-webkit-transform:perspective(400px)rotate3d(1,0,0,-20deg);transform:perspective(400px)rotate3d(1,0,0,-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}
60%{-webkit-transform:perspective(400px)rotate3d(1,0,0,10deg);transform:perspective(400px)rotate3d(1,0,0,10deg);opacity:1;}
80%{-webkit-transform:perspective(400px)rotate3d(1,0,0,-5deg);transform:perspective(400px)rotate3d(1,0,0,-5deg);}
to{-webkit-transform:perspective(400px);transform:perspective(400px);}}.flipInX{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipInX;animation-name:flipInX;}
@-webkit-keyframes flipInY{from{-webkit-transform:perspective(400px)rotate3d(0,1,0,90deg);transform:perspective(400px)rotate3d(0,1,0,90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;}
40%{-webkit-transform:perspective(400px)rotate3d(0,1,0,-20deg);transform:perspective(400px)rotate3d(0,1,0,-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}
60%{-webkit-transform:perspective(400px)rotate3d(0,1,0,10deg);transform:perspective(400px)rotate3d(0,1,0,10deg);opacity:1;}
80%{-webkit-transform:perspective(400px)rotate3d(0,1,0,-5deg);transform:perspective(400px)rotate3d(0,1,0,-5deg);}
to{-webkit-transform:perspective(400px);transform:perspective(400px);}}
@keyframes flipInY{from{-webkit-transform:perspective(400px)rotate3d(0,1,0,90deg);transform:perspective(400px)rotate3d(0,1,0,90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0;}
40%{-webkit-transform:perspective(400px)rotate3d(0,1,0,-20deg);transform:perspective(400px)rotate3d(0,1,0,-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}
60%{-webkit-transform:perspective(400px)rotate3d(0,1,0,10deg);transform:perspective(400px)rotate3d(0,1,0,10deg);opacity:1;}
80%{-webkit-transform:perspective(400px)rotate3d(0,1,0,-5deg);transform:perspective(400px)rotate3d(0,1,0,-5deg);}
to{-webkit-transform:perspective(400px);transform:perspective(400px);}}.flipInY{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipInY;animation-name:flipInY;}
@-webkit-keyframes flipOutX{from{-webkit-transform:perspective(400px);transform:perspective(400px);}
30%{-webkit-transform:perspective(400px)rotate3d(1,0,0,-20deg);transform:perspective(400px)rotate3d(1,0,0,-20deg);opacity:1;}
to{-webkit-transform:perspective(400px)rotate3d(1,0,0,90deg);transform:perspective(400px)rotate3d(1,0,0,90deg);opacity:0;}}
@keyframes flipOutX{from{-webkit-transform:perspective(400px);transform:perspective(400px);}
30%{-webkit-transform:perspective(400px)rotate3d(1,0,0,-20deg);transform:perspective(400px)rotate3d(1,0,0,-20deg);opacity:1;}
to{-webkit-transform:perspective(400px)rotate3d(1,0,0,90deg);transform:perspective(400px)rotate3d(1,0,0,90deg);opacity:0;}}.flipOutX{-webkit-animation-name:flipOutX;animation-name:flipOutX;-webkit-backface-visibility:visible!important;backface-visibility:visible!important;}
@-webkit-keyframes flipOutY{from{-webkit-transform:perspective(400px);transform:perspective(400px);}
30%{-webkit-transform:perspective(400px)rotate3d(0,1,0,-15deg);transform:perspective(400px)rotate3d(0,1,0,-15deg);opacity:1;}
to{-webkit-transform:perspective(400px)rotate3d(0,1,0,90deg);transform:perspective(400px)rotate3d(0,1,0,90deg);opacity:0;}}
@keyframes flipOutY{from{-webkit-transform:perspective(400px);transform:perspective(400px);}
30%{-webkit-transform:perspective(400px)rotate3d(0,1,0,-15deg);transform:perspective(400px)rotate3d(0,1,0,-15deg);opacity:1;}
to{-webkit-transform:perspective(400px)rotate3d(0,1,0,90deg);transform:perspective(400px)rotate3d(0,1,0,90deg);opacity:0;}}.flipOutY{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipOutY;animation-name:flipOutY;}
@-webkit-keyframes lightSpeedIn{from{-webkit-transform:translate3d(100%,0,0)skewX(-30deg);transform:translate3d(100%,0,0)skewX(-30deg);opacity:0;}
60%{-webkit-transform:skewX(20deg);transform:skewX(20deg);opacity:1;}
80%{-webkit-transform:skewX(-5deg);transform:skewX(-5deg);opacity:1;}
to{-webkit-transform:none;transform:none;opacity:1;}}
@keyframes lightSpeedIn{from{-webkit-transform:translate3d(100%,0,0)skewX(-30deg);transform:translate3d(100%,0,0)skewX(-30deg);opacity:0;}
60%{-webkit-transform:skewX(20deg);transform:skewX(20deg);opacity:1;}
80%{-webkit-transform:skewX(-5deg);transform:skewX(-5deg);opacity:1;}
to{-webkit-transform:none;transform:none;opacity:1;}}.lightSpeedIn{-webkit-animation-name:lightSpeedIn;animation-name:lightSpeedIn;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;}
@-webkit-keyframes lightSpeedOut{from{opacity:1;}
to{-webkit-transform:translate3d(100%,0,0)skewX(30deg);transform:translate3d(100%,0,0)skewX(30deg);opacity:0;}}
@keyframes lightSpeedOut{from{opacity:1;}
to{-webkit-transform:translate3d(100%,0,0)skewX(30deg);transform:translate3d(100%,0,0)skewX(30deg);opacity:0;}}.lightSpeedOut{-webkit-animation-name:lightSpeedOut;animation-name:lightSpeedOut;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}
@-webkit-keyframes rotateIn{from{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate3d(0,0,1,-200deg);transform:rotate3d(0,0,1,-200deg);opacity:0;}
to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:none;transform:none;opacity:1;}}
@keyframes rotateIn{from{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate3d(0,0,1,-200deg);transform:rotate3d(0,0,1,-200deg);opacity:0;}
to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:none;transform:none;opacity:1;}}.rotateIn{-webkit-animation-name:rotateIn;animation-name:rotateIn;}
@-webkit-keyframes rotateInDownLeft{from{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0,0,1,-45deg);transform:rotate3d(0,0,1,-45deg);opacity:0;}
to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1;}}
@keyframes rotateInDownLeft{from{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0,0,1,-45deg);transform:rotate3d(0,0,1,-45deg);opacity:0;}
to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1;}}.rotateInDownLeft{-webkit-animation-name:rotateInDownLeft;animation-name:rotateInDownLeft;}
@-webkit-keyframes rotateInDownRight{from{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0,0,1,45deg);transform:rotate3d(0,0,1,45deg);opacity:0;}
to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1;}}
@keyframes rotateInDownRight{from{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0,0,1,45deg);transform:rotate3d(0,0,1,45deg);opacity:0;}
to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1;}}.rotateInDownRight{-webkit-animation-name:rotateInDownRight;animation-name:rotateInDownRight;}
@-webkit-keyframes rotateInUpLeft{from{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0,0,1,45deg);transform:rotate3d(0,0,1,45deg);opacity:0;}
to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1;}}
@keyframes rotateInUpLeft{from{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0,0,1,45deg);transform:rotate3d(0,0,1,45deg);opacity:0;}
to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1;}}.rotateInUpLeft{-webkit-animation-name:rotateInUpLeft;animation-name:rotateInUpLeft;}
@-webkit-keyframes rotateInUpRight{from{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0,0,1,-90deg);transform:rotate3d(0,0,1,-90deg);opacity:0;}
to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1;}}
@keyframes rotateInUpRight{from{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0,0,1,-90deg);transform:rotate3d(0,0,1,-90deg);opacity:0;}
to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1;}}.rotateInUpRight{-webkit-animation-name:rotateInUpRight;animation-name:rotateInUpRight;}
@-webkit-keyframes rotateOut{from{-webkit-transform-origin:center;transform-origin:center;opacity:1;}
to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate3d(0,0,1,200deg);transform:rotate3d(0,0,1,200deg);opacity:0;}}
@keyframes rotateOut{from{-webkit-transform-origin:center;transform-origin:center;opacity:1;}
to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate3d(0,0,1,200deg);transform:rotate3d(0,0,1,200deg);opacity:0;}}.rotateOut{-webkit-animation-name:rotateOut;animation-name:rotateOut;}
@-webkit-keyframes rotateOutDownLeft{from{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1;}
to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0,0,1,45deg);transform:rotate3d(0,0,1,45deg);opacity:0;}}
@keyframes rotateOutDownLeft{from{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1;}
to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0,0,1,45deg);transform:rotate3d(0,0,1,45deg);opacity:0;}}.rotateOutDownLeft{-webkit-animation-name:rotateOutDownLeft;animation-name:rotateOutDownLeft;}
@-webkit-keyframes rotateOutDownRight{from{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1;}
to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0,0,1,-45deg);transform:rotate3d(0,0,1,-45deg);opacity:0;}}
@keyframes rotateOutDownRight{from{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1;}
to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0,0,1,-45deg);transform:rotate3d(0,0,1,-45deg);opacity:0;}}.rotateOutDownRight{-webkit-animation-name:rotateOutDownRight;animation-name:rotateOutDownRight;}
@-webkit-keyframes rotateOutUpLeft{from{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1;}
to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0,0,1,-45deg);transform:rotate3d(0,0,1,-45deg);opacity:0;}}
@keyframes rotateOutUpLeft{from{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1;}
to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0,0,1,-45deg);transform:rotate3d(0,0,1,-45deg);opacity:0;}}.rotateOutUpLeft{-webkit-animation-name:rotateOutUpLeft;animation-name:rotateOutUpLeft;}
@-webkit-keyframes rotateOutUpRight{from{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1;}
to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0,0,1,90deg);transform:rotate3d(0,0,1,90deg);opacity:0;}}
@keyframes rotateOutUpRight{from{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1;}
to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0,0,1,90deg);transform:rotate3d(0,0,1,90deg);opacity:0;}}.rotateOutUpRight{-webkit-animation-name:rotateOutUpRight;animation-name:rotateOutUpRight;}
@-webkit-keyframes hinge{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;}
20%,60%{-webkit-transform:rotate3d(0,0,1,80deg);transform:rotate3d(0,0,1,80deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;}
40%,80%{-webkit-transform:rotate3d(0,0,1,60deg);transform:rotate3d(0,0,1,60deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1;}
to{-webkit-transform:translate3d(0,700px,0);transform:translate3d(0,700px,0);opacity:0;}}
@keyframes hinge{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;}
20%,60%{-webkit-transform:rotate3d(0,0,1,80deg);transform:rotate3d(0,0,1,80deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;}
40%,80%{-webkit-transform:rotate3d(0,0,1,60deg);transform:rotate3d(0,0,1,60deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1;}
to{-webkit-transform:translate3d(0,700px,0);transform:translate3d(0,700px,0);opacity:0;}}.hinge{-webkit-animation-name:hinge;animation-name:hinge;}
@-webkit-keyframes rollIn{from{opacity:0;-webkit-transform:translate3d(-100%,0,0)rotate3d(0,0,1,-120deg);transform:translate3d(-100%,0,0)rotate3d(0,0,1,-120deg);}
to{opacity:1;-webkit-transform:none;transform:none;}}
@keyframes rollIn{from{opacity:0;-webkit-transform:translate3d(-100%,0,0)rotate3d(0,0,1,-120deg);transform:translate3d(-100%,0,0)rotate3d(0,0,1,-120deg);}
to{opacity:1;-webkit-transform:none;transform:none;}}.rollIn{-webkit-animation-name:rollIn;animation-name:rollIn;}
@-webkit-keyframes rollOut{from{opacity:1;}
to{opacity:0;-webkit-transform:translate3d(100%,0,0)rotate3d(0,0,1,120deg);transform:translate3d(100%,0,0)rotate3d(0,0,1,120deg);}}
@keyframes rollOut{from{opacity:1;}
to{opacity:0;-webkit-transform:translate3d(100%,0,0)rotate3d(0,0,1,120deg);transform:translate3d(100%,0,0)rotate3d(0,0,1,120deg);}}.rollOut{-webkit-animation-name:rollOut;animation-name:rollOut;}
@-webkit-keyframes zoomIn{from{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3);}
50%{opacity:1;}}
@keyframes zoomIn{from{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3);}
50%{opacity:1;}}.zoomIn{-webkit-animation-name:zoomIn;animation-name:zoomIn;}
@-webkit-keyframes zoomInDown{from{opacity:0;-webkit-transform:scale3d(.1,.1,.1)translate3d(0,-1000px,0);transform:scale3d(.1,.1,.1)translate3d(0,-1000px,0);-webkit-animation-timing-function:cubic-bezier(0.550,0.055,0.675,0.190);animation-timing-function:cubic-bezier(0.550,0.055,0.675,0.190);}
60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475)translate3d(0,60px,0);transform:scale3d(.475,.475,.475)translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(0.175,0.885,0.320,1);animation-timing-function:cubic-bezier(0.175,0.885,0.320,1);}}
@keyframes zoomInDown{from{opacity:0;-webkit-transform:scale3d(.1,.1,.1)translate3d(0,-1000px,0);transform:scale3d(.1,.1,.1)translate3d(0,-1000px,0);-webkit-animation-timing-function:cubic-bezier(0.550,0.055,0.675,0.190);animation-timing-function:cubic-bezier(0.550,0.055,0.675,0.190);}
60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475)translate3d(0,60px,0);transform:scale3d(.475,.475,.475)translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(0.175,0.885,0.320,1);animation-timing-function:cubic-bezier(0.175,0.885,0.320,1);}}.zoomInDown{-webkit-animation-name:zoomInDown;animation-name:zoomInDown;}
@-webkit-keyframes zoomInLeft{from{opacity:0;-webkit-transform:scale3d(.1,.1,.1)translate3d(-1000px,0,0);transform:scale3d(.1,.1,.1)translate3d(-1000px,0,0);-webkit-animation-timing-function:cubic-bezier(0.550,0.055,0.675,0.190);animation-timing-function:cubic-bezier(0.550,0.055,0.675,0.190);}
60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475)translate3d(10px,0,0);transform:scale3d(.475,.475,.475)translate3d(10px,0,0);-webkit-animation-timing-function:cubic-bezier(0.175,0.885,0.320,1);animation-timing-function:cubic-bezier(0.175,0.885,0.320,1);}}
@keyframes zoomInLeft{from{opacity:0;-webkit-transform:scale3d(.1,.1,.1)translate3d(-1000px,0,0);transform:scale3d(.1,.1,.1)translate3d(-1000px,0,0);-webkit-animation-timing-function:cubic-bezier(0.550,0.055,0.675,0.190);animation-timing-function:cubic-bezier(0.550,0.055,0.675,0.190);}
60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475)translate3d(10px,0,0);transform:scale3d(.475,.475,.475)translate3d(10px,0,0);-webkit-animation-timing-function:cubic-bezier(0.175,0.885,0.320,1);animation-timing-function:cubic-bezier(0.175,0.885,0.320,1);}}.zoomInLeft{-webkit-animation-name:zoomInLeft;animation-name:zoomInLeft;}
@-webkit-keyframes zoomInRight{from{opacity:0;-webkit-transform:scale3d(.1,.1,.1)translate3d(1000px,0,0);transform:scale3d(.1,.1,.1)translate3d(1000px,0,0);-webkit-animation-timing-function:cubic-bezier(0.550,0.055,0.675,0.190);animation-timing-function:cubic-bezier(0.550,0.055,0.675,0.190);}
60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475)translate3d(-10px,0,0);transform:scale3d(.475,.475,.475)translate3d(-10px,0,0);-webkit-animation-timing-function:cubic-bezier(0.175,0.885,0.320,1);animation-timing-function:cubic-bezier(0.175,0.885,0.320,1);}}
@keyframes zoomInRight{from{opacity:0;-webkit-transform:scale3d(.1,.1,.1)translate3d(1000px,0,0);transform:scale3d(.1,.1,.1)translate3d(1000px,0,0);-webkit-animation-timing-function:cubic-bezier(0.550,0.055,0.675,0.190);animation-timing-function:cubic-bezier(0.550,0.055,0.675,0.190);}
60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475)translate3d(-10px,0,0);transform:scale3d(.475,.475,.475)translate3d(-10px,0,0);-webkit-animation-timing-function:cubic-bezier(0.175,0.885,0.320,1);animation-timing-function:cubic-bezier(0.175,0.885,0.320,1);}}.zoomInRight{-webkit-animation-name:zoomInRight;animation-name:zoomInRight;}
@-webkit-keyframes zoomInUp{from{opacity:0;-webkit-transform:scale3d(.1,.1,.1)translate3d(0,1000px,0);transform:scale3d(.1,.1,.1)translate3d(0,1000px,0);-webkit-animation-timing-function:cubic-bezier(0.550,0.055,0.675,0.190);animation-timing-function:cubic-bezier(0.550,0.055,0.675,0.190);}
60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475)translate3d(0,-60px,0);transform:scale3d(.475,.475,.475)translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(0.175,0.885,0.320,1);animation-timing-function:cubic-bezier(0.175,0.885,0.320,1);}}
@keyframes zoomInUp{from{opacity:0;-webkit-transform:scale3d(.1,.1,.1)translate3d(0,1000px,0);transform:scale3d(.1,.1,.1)translate3d(0,1000px,0);-webkit-animation-timing-function:cubic-bezier(0.550,0.055,0.675,0.190);animation-timing-function:cubic-bezier(0.550,0.055,0.675,0.190);}
60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475)translate3d(0,-60px,0);transform:scale3d(.475,.475,.475)translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(0.175,0.885,0.320,1);animation-timing-function:cubic-bezier(0.175,0.885,0.320,1);}}.zoomInUp{-webkit-animation-name:zoomInUp;animation-name:zoomInUp;}
@-webkit-keyframes zoomOut{from{opacity:1;}
50%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3);}
to{opacity:0;}}
@keyframes zoomOut{from{opacity:1;}
50%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3);}
to{opacity:0;}}.zoomOut{-webkit-animation-name:zoomOut;animation-name:zoomOut;}
@-webkit-keyframes zoomOutDown{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475)translate3d(0,-60px,0);transform:scale3d(.475,.475,.475)translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(0.550,0.055,0.675,0.190);animation-timing-function:cubic-bezier(0.550,0.055,0.675,0.190);}
to{opacity:0;-webkit-transform:scale3d(.1,.1,.1)translate3d(0,2000px,0);transform:scale3d(.1,.1,.1)translate3d(0,2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(0.175,0.885,0.320,1);animation-timing-function:cubic-bezier(0.175,0.885,0.320,1);}}
@keyframes zoomOutDown{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475)translate3d(0,-60px,0);transform:scale3d(.475,.475,.475)translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(0.550,0.055,0.675,0.190);animation-timing-function:cubic-bezier(0.550,0.055,0.675,0.190);}
to{opacity:0;-webkit-transform:scale3d(.1,.1,.1)translate3d(0,2000px,0);transform:scale3d(.1,.1,.1)translate3d(0,2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(0.175,0.885,0.320,1);animation-timing-function:cubic-bezier(0.175,0.885,0.320,1);}}.zoomOutDown{-webkit-animation-name:zoomOutDown;animation-name:zoomOutDown;}
@-webkit-keyframes zoomOutLeft{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475)translate3d(42px,0,0);transform:scale3d(.475,.475,.475)translate3d(42px,0,0);}
to{opacity:0;-webkit-transform:scale(.1)translate3d(-2000px,0,0);transform:scale(.1)translate3d(-2000px,0,0);-webkit-transform-origin:left center;transform-origin:left center;}}
@keyframes zoomOutLeft{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475)translate3d(42px,0,0);transform:scale3d(.475,.475,.475)translate3d(42px,0,0);}
to{opacity:0;-webkit-transform:scale(.1)translate3d(-2000px,0,0);transform:scale(.1)translate3d(-2000px,0,0);-webkit-transform-origin:left center;transform-origin:left center;}}.zoomOutLeft{-webkit-animation-name:zoomOutLeft;animation-name:zoomOutLeft;}
@-webkit-keyframes zoomOutRight{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475)translate3d(-42px,0,0);transform:scale3d(.475,.475,.475)translate3d(-42px,0,0);}
to{opacity:0;-webkit-transform:scale(.1)translate3d(2000px,0,0);transform:scale(.1)translate3d(2000px,0,0);-webkit-transform-origin:right center;transform-origin:right center;}}
@keyframes zoomOutRight{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475)translate3d(-42px,0,0);transform:scale3d(.475,.475,.475)translate3d(-42px,0,0);}
to{opacity:0;-webkit-transform:scale(.1)translate3d(2000px,0,0);transform:scale(.1)translate3d(2000px,0,0);-webkit-transform-origin:right center;transform-origin:right center;}}.zoomOutRight{-webkit-animation-name:zoomOutRight;animation-name:zoomOutRight;}
@-webkit-keyframes zoomOutUp{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475)translate3d(0,60px,0);transform:scale3d(.475,.475,.475)translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(0.550,0.055,0.675,0.190);animation-timing-function:cubic-bezier(0.550,0.055,0.675,0.190);}
to{opacity:0;-webkit-transform:scale3d(.1,.1,.1)translate3d(0,-2000px,0);transform:scale3d(.1,.1,.1)translate3d(0,-2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(0.175,0.885,0.320,1);animation-timing-function:cubic-bezier(0.175,0.885,0.320,1);}}
@keyframes zoomOutUp{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475)translate3d(0,60px,0);transform:scale3d(.475,.475,.475)translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(0.550,0.055,0.675,0.190);animation-timing-function:cubic-bezier(0.550,0.055,0.675,0.190);}
to{opacity:0;-webkit-transform:scale3d(.1,.1,.1)translate3d(0,-2000px,0);transform:scale3d(.1,.1,.1)translate3d(0,-2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(0.175,0.885,0.320,1);animation-timing-function:cubic-bezier(0.175,0.885,0.320,1);}}.zoomOutUp{-webkit-animation-name:zoomOutUp;animation-name:zoomOutUp;}
@-webkit-keyframes slideInDown{from{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);visibility:visible;}
to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}
@keyframes slideInDown{from{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);visibility:visible;}
to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}.slideInDown{-webkit-animation-name:slideInDown;animation-name:slideInDown;}
@-webkit-keyframes slideInLeft{from{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible;}
to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}
@keyframes slideInLeft{from{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible;}
to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}.slideInLeft{-webkit-animation-name:slideInLeft;animation-name:slideInLeft;}
@-webkit-keyframes slideInRight{from{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:visible;}
to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}
@keyframes slideInRight{from{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:visible;}
to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}}.slideInRight{-webkit-animation-name:slideInRight;animation-name:slideInRight;}
@-webkit-keyframes slideInUp{from{-webkit-transform:translate(0,100%);transform:translate(0,100%);visibility:visible;}
to{-webkit-transform:translate(0,-50%);transform:translate(0,-50%);}}
@keyframes slideInUp{from{-webkit-transform:translate(0,100%);transform:translate(0,100%);visibility:visible;}
to{-webkit-transform:translate(0,-50%);transform:translate(0,-50%);}}.slideInUp{-webkit-animation-name:slideInUp;animation-name:slideInUp;}
@-webkit-keyframes slideOutDown{from{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}
to{visibility:hidden;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);}}
@keyframes slideOutDown{from{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}
to{visibility:hidden;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);}}.slideOutDown{-webkit-animation-name:slideOutDown;animation-name:slideOutDown;}
@-webkit-keyframes slideOutLeft{from{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}
to{visibility:hidden;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);}}
@keyframes slideOutLeft{from{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}
to{visibility:hidden;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);}}.slideOutLeft{-webkit-animation-name:slideOutLeft;animation-name:slideOutLeft;}
@-webkit-keyframes slideOutRight{from{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}
to{visibility:hidden;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);}}
@keyframes slideOutRight{from{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}
to{visibility:hidden;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);}}.slideOutRight{-webkit-animation-name:slideOutRight;animation-name:slideOutRight;}
@-webkit-keyframes slideOutUp{from{-webkit-transform:translate(0,-50%);transform:translate(0,-50%);}
to{visibility:hidden;-webkit-transform:translate(0,-150%);transform:translate(0,-150%);}}
@keyframes slideOutUp{from{-webkit-transform:translate(0,-50%);transform:translate(0,-50%);}
to{visibility:hidden;-webkit-transform:translate(0,-250%);transform:translate(0,-250%);}}.slideOutUp{-webkit-animation-name:slideOutUp;animation-name:slideOutUp;}
[data-aos][data-aos][data-aos-duration="50"],body[data-aos-duration="50"][data-aos]{transition-duration:50ms}[data-aos][data-aos][data-aos-delay="50"],body[data-aos-delay="50"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="50"].aos-animate,body[data-aos-delay="50"][data-aos].aos-animate{transition-delay:50ms}[data-aos][data-aos][data-aos-duration="100"],body[data-aos-duration="100"][data-aos]{transition-duration:.1s}[data-aos][data-aos][data-aos-delay="100"],body[data-aos-delay="100"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="100"].aos-animate,body[data-aos-delay="100"][data-aos].aos-animate{transition-delay:.1s}[data-aos][data-aos][data-aos-duration="150"],body[data-aos-duration="150"][data-aos]{transition-duration:.15s}[data-aos][data-aos][data-aos-delay="150"],body[data-aos-delay="150"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="150"].aos-animate,body[data-aos-delay="150"][data-aos].aos-animate{transition-delay:.15s}[data-aos][data-aos][data-aos-duration="200"],body[data-aos-duration="200"][data-aos]{transition-duration:.2s}[data-aos][data-aos][data-aos-delay="200"],body[data-aos-delay="200"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="200"].aos-animate,body[data-aos-delay="200"][data-aos].aos-animate{transition-delay:.2s}[data-aos][data-aos][data-aos-duration="250"],body[data-aos-duration="250"][data-aos]{transition-duration:.25s}[data-aos][data-aos][data-aos-delay="250"],body[data-aos-delay="250"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="250"].aos-animate,body[data-aos-delay="250"][data-aos].aos-animate{transition-delay:.25s}[data-aos][data-aos][data-aos-duration="300"],body[data-aos-duration="300"][data-aos]{transition-duration:.3s}[data-aos][data-aos][data-aos-delay="300"],body[data-aos-delay="300"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="300"].aos-animate,body[data-aos-delay="300"][data-aos].aos-animate{transition-delay:.3s}[data-aos][data-aos][data-aos-duration="350"],body[data-aos-duration="350"][data-aos]{transition-duration:.35s}[data-aos][data-aos][data-aos-delay="350"],body[data-aos-delay="350"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="350"].aos-animate,body[data-aos-delay="350"][data-aos].aos-animate{transition-delay:.35s}[data-aos][data-aos][data-aos-duration="400"],body[data-aos-duration="400"][data-aos]{transition-duration:.4s}[data-aos][data-aos][data-aos-delay="400"],body[data-aos-delay="400"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="400"].aos-animate,body[data-aos-delay="400"][data-aos].aos-animate{transition-delay:.4s}[data-aos][data-aos][data-aos-duration="450"],body[data-aos-duration="450"][data-aos]{transition-duration:.45s}[data-aos][data-aos][data-aos-delay="450"],body[data-aos-delay="450"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="450"].aos-animate,body[data-aos-delay="450"][data-aos].aos-animate{transition-delay:.45s}[data-aos][data-aos][data-aos-duration="500"],body[data-aos-duration="500"][data-aos]{transition-duration:.5s}[data-aos][data-aos][data-aos-delay="500"],body[data-aos-delay="500"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="500"].aos-animate,body[data-aos-delay="500"][data-aos].aos-animate{transition-delay:.5s}[data-aos][data-aos][data-aos-duration="550"],body[data-aos-duration="550"][data-aos]{transition-duration:.55s}[data-aos][data-aos][data-aos-delay="550"],body[data-aos-delay="550"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="550"].aos-animate,body[data-aos-delay="550"][data-aos].aos-animate{transition-delay:.55s}[data-aos][data-aos][data-aos-duration="600"],body[data-aos-duration="600"][data-aos]{transition-duration:.6s}[data-aos][data-aos][data-aos-delay="600"],body[data-aos-delay="600"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="600"].aos-animate,body[data-aos-delay="600"][data-aos].aos-animate{transition-delay:.6s}[data-aos][data-aos][data-aos-duration="650"],body[data-aos-duration="650"][data-aos]{transition-duration:.65s}[data-aos][data-aos][data-aos-delay="650"],body[data-aos-delay="650"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="650"].aos-animate,body[data-aos-delay="650"][data-aos].aos-animate{transition-delay:.65s}[data-aos][data-aos][data-aos-duration="700"],body[data-aos-duration="700"][data-aos]{transition-duration:.7s}[data-aos][data-aos][data-aos-delay="700"],body[data-aos-delay="700"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="700"].aos-animate,body[data-aos-delay="700"][data-aos].aos-animate{transition-delay:.7s}[data-aos][data-aos][data-aos-duration="750"],body[data-aos-duration="750"][data-aos]{transition-duration:.75s}[data-aos][data-aos][data-aos-delay="750"],body[data-aos-delay="750"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="750"].aos-animate,body[data-aos-delay="750"][data-aos].aos-animate{transition-delay:.75s}[data-aos][data-aos][data-aos-duration="800"],body[data-aos-duration="800"][data-aos]{transition-duration:.8s}[data-aos][data-aos][data-aos-delay="800"],body[data-aos-delay="800"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="800"].aos-animate,body[data-aos-delay="800"][data-aos].aos-animate{transition-delay:.8s}[data-aos][data-aos][data-aos-duration="850"],body[data-aos-duration="850"][data-aos]{transition-duration:.85s}[data-aos][data-aos][data-aos-delay="850"],body[data-aos-delay="850"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="850"].aos-animate,body[data-aos-delay="850"][data-aos].aos-animate{transition-delay:.85s}[data-aos][data-aos][data-aos-duration="900"],body[data-aos-duration="900"][data-aos]{transition-duration:.9s}[data-aos][data-aos][data-aos-delay="900"],body[data-aos-delay="900"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="900"].aos-animate,body[data-aos-delay="900"][data-aos].aos-animate{transition-delay:.9s}[data-aos][data-aos][data-aos-duration="950"],body[data-aos-duration="950"][data-aos]{transition-duration:.95s}[data-aos][data-aos][data-aos-delay="950"],body[data-aos-delay="950"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="950"].aos-animate,body[data-aos-delay="950"][data-aos].aos-animate{transition-delay:.95s}[data-aos][data-aos][data-aos-duration="1000"],body[data-aos-duration="1000"][data-aos]{transition-duration:1s}[data-aos][data-aos][data-aos-delay="1000"],body[data-aos-delay="1000"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1000"].aos-animate,body[data-aos-delay="1000"][data-aos].aos-animate{transition-delay:1s}[data-aos][data-aos][data-aos-duration="1050"],body[data-aos-duration="1050"][data-aos]{transition-duration:1.05s}[data-aos][data-aos][data-aos-delay="1050"],body[data-aos-delay="1050"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1050"].aos-animate,body[data-aos-delay="1050"][data-aos].aos-animate{transition-delay:1.05s}[data-aos][data-aos][data-aos-duration="1100"],body[data-aos-duration="1100"][data-aos]{transition-duration:1.1s}[data-aos][data-aos][data-aos-delay="1100"],body[data-aos-delay="1100"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1100"].aos-animate,body[data-aos-delay="1100"][data-aos].aos-animate{transition-delay:1.1s}[data-aos][data-aos][data-aos-duration="1150"],body[data-aos-duration="1150"][data-aos]{transition-duration:1.15s}[data-aos][data-aos][data-aos-delay="1150"],body[data-aos-delay="1150"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1150"].aos-animate,body[data-aos-delay="1150"][data-aos].aos-animate{transition-delay:1.15s}[data-aos][data-aos][data-aos-duration="1200"],body[data-aos-duration="1200"][data-aos]{transition-duration:1.2s}[data-aos][data-aos][data-aos-delay="1200"],body[data-aos-delay="1200"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1200"].aos-animate,body[data-aos-delay="1200"][data-aos].aos-animate{transition-delay:1.2s}[data-aos][data-aos][data-aos-duration="1250"],body[data-aos-duration="1250"][data-aos]{transition-duration:1.25s}[data-aos][data-aos][data-aos-delay="1250"],body[data-aos-delay="1250"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1250"].aos-animate,body[data-aos-delay="1250"][data-aos].aos-animate{transition-delay:1.25s}[data-aos][data-aos][data-aos-duration="1300"],body[data-aos-duration="1300"][data-aos]{transition-duration:1.3s}[data-aos][data-aos][data-aos-delay="1300"],body[data-aos-delay="1300"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1300"].aos-animate,body[data-aos-delay="1300"][data-aos].aos-animate{transition-delay:1.3s}[data-aos][data-aos][data-aos-duration="1350"],body[data-aos-duration="1350"][data-aos]{transition-duration:1.35s}[data-aos][data-aos][data-aos-delay="1350"],body[data-aos-delay="1350"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1350"].aos-animate,body[data-aos-delay="1350"][data-aos].aos-animate{transition-delay:1.35s}[data-aos][data-aos][data-aos-duration="1400"],body[data-aos-duration="1400"][data-aos]{transition-duration:1.4s}[data-aos][data-aos][data-aos-delay="1400"],body[data-aos-delay="1400"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1400"].aos-animate,body[data-aos-delay="1400"][data-aos].aos-animate{transition-delay:1.4s}[data-aos][data-aos][data-aos-duration="1450"],body[data-aos-duration="1450"][data-aos]{transition-duration:1.45s}[data-aos][data-aos][data-aos-delay="1450"],body[data-aos-delay="1450"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1450"].aos-animate,body[data-aos-delay="1450"][data-aos].aos-animate{transition-delay:1.45s}[data-aos][data-aos][data-aos-duration="1500"],body[data-aos-duration="1500"][data-aos]{transition-duration:1.5s}[data-aos][data-aos][data-aos-delay="1500"],body[data-aos-delay="1500"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1500"].aos-animate,body[data-aos-delay="1500"][data-aos].aos-animate{transition-delay:1.5s}[data-aos][data-aos][data-aos-duration="1550"],body[data-aos-duration="1550"][data-aos]{transition-duration:1.55s}[data-aos][data-aos][data-aos-delay="1550"],body[data-aos-delay="1550"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1550"].aos-animate,body[data-aos-delay="1550"][data-aos].aos-animate{transition-delay:1.55s}[data-aos][data-aos][data-aos-duration="1600"],body[data-aos-duration="1600"][data-aos]{transition-duration:1.6s}[data-aos][data-aos][data-aos-delay="1600"],body[data-aos-delay="1600"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1600"].aos-animate,body[data-aos-delay="1600"][data-aos].aos-animate{transition-delay:1.6s}[data-aos][data-aos][data-aos-duration="1650"],body[data-aos-duration="1650"][data-aos]{transition-duration:1.65s}[data-aos][data-aos][data-aos-delay="1650"],body[data-aos-delay="1650"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1650"].aos-animate,body[data-aos-delay="1650"][data-aos].aos-animate{transition-delay:1.65s}[data-aos][data-aos][data-aos-duration="1700"],body[data-aos-duration="1700"][data-aos]{transition-duration:1.7s}[data-aos][data-aos][data-aos-delay="1700"],body[data-aos-delay="1700"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1700"].aos-animate,body[data-aos-delay="1700"][data-aos].aos-animate{transition-delay:1.7s}[data-aos][data-aos][data-aos-duration="1750"],body[data-aos-duration="1750"][data-aos]{transition-duration:1.75s}[data-aos][data-aos][data-aos-delay="1750"],body[data-aos-delay="1750"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1750"].aos-animate,body[data-aos-delay="1750"][data-aos].aos-animate{transition-delay:1.75s}[data-aos][data-aos][data-aos-duration="1800"],body[data-aos-duration="1800"][data-aos]{transition-duration:1.8s}[data-aos][data-aos][data-aos-delay="1800"],body[data-aos-delay="1800"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1800"].aos-animate,body[data-aos-delay="1800"][data-aos].aos-animate{transition-delay:1.8s}[data-aos][data-aos][data-aos-duration="1850"],body[data-aos-duration="1850"][data-aos]{transition-duration:1.85s}[data-aos][data-aos][data-aos-delay="1850"],body[data-aos-delay="1850"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1850"].aos-animate,body[data-aos-delay="1850"][data-aos].aos-animate{transition-delay:1.85s}[data-aos][data-aos][data-aos-duration="1900"],body[data-aos-duration="1900"][data-aos]{transition-duration:1.9s}[data-aos][data-aos][data-aos-delay="1900"],body[data-aos-delay="1900"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1900"].aos-animate,body[data-aos-delay="1900"][data-aos].aos-animate{transition-delay:1.9s}[data-aos][data-aos][data-aos-duration="1950"],body[data-aos-duration="1950"][data-aos]{transition-duration:1.95s}[data-aos][data-aos][data-aos-delay="1950"],body[data-aos-delay="1950"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="1950"].aos-animate,body[data-aos-delay="1950"][data-aos].aos-animate{transition-delay:1.95s}[data-aos][data-aos][data-aos-duration="2000"],body[data-aos-duration="2000"][data-aos]{transition-duration:2s}[data-aos][data-aos][data-aos-delay="2000"],body[data-aos-delay="2000"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2000"].aos-animate,body[data-aos-delay="2000"][data-aos].aos-animate{transition-delay:2s}[data-aos][data-aos][data-aos-duration="2050"],body[data-aos-duration="2050"][data-aos]{transition-duration:2.05s}[data-aos][data-aos][data-aos-delay="2050"],body[data-aos-delay="2050"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2050"].aos-animate,body[data-aos-delay="2050"][data-aos].aos-animate{transition-delay:2.05s}[data-aos][data-aos][data-aos-duration="2100"],body[data-aos-duration="2100"][data-aos]{transition-duration:2.1s}[data-aos][data-aos][data-aos-delay="2100"],body[data-aos-delay="2100"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2100"].aos-animate,body[data-aos-delay="2100"][data-aos].aos-animate{transition-delay:2.1s}[data-aos][data-aos][data-aos-duration="2150"],body[data-aos-duration="2150"][data-aos]{transition-duration:2.15s}[data-aos][data-aos][data-aos-delay="2150"],body[data-aos-delay="2150"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2150"].aos-animate,body[data-aos-delay="2150"][data-aos].aos-animate{transition-delay:2.15s}[data-aos][data-aos][data-aos-duration="2200"],body[data-aos-duration="2200"][data-aos]{transition-duration:2.2s}[data-aos][data-aos][data-aos-delay="2200"],body[data-aos-delay="2200"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2200"].aos-animate,body[data-aos-delay="2200"][data-aos].aos-animate{transition-delay:2.2s}[data-aos][data-aos][data-aos-duration="2250"],body[data-aos-duration="2250"][data-aos]{transition-duration:2.25s}[data-aos][data-aos][data-aos-delay="2250"],body[data-aos-delay="2250"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2250"].aos-animate,body[data-aos-delay="2250"][data-aos].aos-animate{transition-delay:2.25s}[data-aos][data-aos][data-aos-duration="2300"],body[data-aos-duration="2300"][data-aos]{transition-duration:2.3s}[data-aos][data-aos][data-aos-delay="2300"],body[data-aos-delay="2300"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2300"].aos-animate,body[data-aos-delay="2300"][data-aos].aos-animate{transition-delay:2.3s}[data-aos][data-aos][data-aos-duration="2350"],body[data-aos-duration="2350"][data-aos]{transition-duration:2.35s}[data-aos][data-aos][data-aos-delay="2350"],body[data-aos-delay="2350"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2350"].aos-animate,body[data-aos-delay="2350"][data-aos].aos-animate{transition-delay:2.35s}[data-aos][data-aos][data-aos-duration="2400"],body[data-aos-duration="2400"][data-aos]{transition-duration:2.4s}[data-aos][data-aos][data-aos-delay="2400"],body[data-aos-delay="2400"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2400"].aos-animate,body[data-aos-delay="2400"][data-aos].aos-animate{transition-delay:2.4s}[data-aos][data-aos][data-aos-duration="2450"],body[data-aos-duration="2450"][data-aos]{transition-duration:2.45s}[data-aos][data-aos][data-aos-delay="2450"],body[data-aos-delay="2450"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2450"].aos-animate,body[data-aos-delay="2450"][data-aos].aos-animate{transition-delay:2.45s}[data-aos][data-aos][data-aos-duration="2500"],body[data-aos-duration="2500"][data-aos]{transition-duration:2.5s}[data-aos][data-aos][data-aos-delay="2500"],body[data-aos-delay="2500"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2500"].aos-animate,body[data-aos-delay="2500"][data-aos].aos-animate{transition-delay:2.5s}[data-aos][data-aos][data-aos-duration="2550"],body[data-aos-duration="2550"][data-aos]{transition-duration:2.55s}[data-aos][data-aos][data-aos-delay="2550"],body[data-aos-delay="2550"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2550"].aos-animate,body[data-aos-delay="2550"][data-aos].aos-animate{transition-delay:2.55s}[data-aos][data-aos][data-aos-duration="2600"],body[data-aos-duration="2600"][data-aos]{transition-duration:2.6s}[data-aos][data-aos][data-aos-delay="2600"],body[data-aos-delay="2600"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2600"].aos-animate,body[data-aos-delay="2600"][data-aos].aos-animate{transition-delay:2.6s}[data-aos][data-aos][data-aos-duration="2650"],body[data-aos-duration="2650"][data-aos]{transition-duration:2.65s}[data-aos][data-aos][data-aos-delay="2650"],body[data-aos-delay="2650"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2650"].aos-animate,body[data-aos-delay="2650"][data-aos].aos-animate{transition-delay:2.65s}[data-aos][data-aos][data-aos-duration="2700"],body[data-aos-duration="2700"][data-aos]{transition-duration:2.7s}[data-aos][data-aos][data-aos-delay="2700"],body[data-aos-delay="2700"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2700"].aos-animate,body[data-aos-delay="2700"][data-aos].aos-animate{transition-delay:2.7s}[data-aos][data-aos][data-aos-duration="2750"],body[data-aos-duration="2750"][data-aos]{transition-duration:2.75s}[data-aos][data-aos][data-aos-delay="2750"],body[data-aos-delay="2750"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2750"].aos-animate,body[data-aos-delay="2750"][data-aos].aos-animate{transition-delay:2.75s}[data-aos][data-aos][data-aos-duration="2800"],body[data-aos-duration="2800"][data-aos]{transition-duration:2.8s}[data-aos][data-aos][data-aos-delay="2800"],body[data-aos-delay="2800"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2800"].aos-animate,body[data-aos-delay="2800"][data-aos].aos-animate{transition-delay:2.8s}[data-aos][data-aos][data-aos-duration="2850"],body[data-aos-duration="2850"][data-aos]{transition-duration:2.85s}[data-aos][data-aos][data-aos-delay="2850"],body[data-aos-delay="2850"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2850"].aos-animate,body[data-aos-delay="2850"][data-aos].aos-animate{transition-delay:2.85s}[data-aos][data-aos][data-aos-duration="2900"],body[data-aos-duration="2900"][data-aos]{transition-duration:2.9s}[data-aos][data-aos][data-aos-delay="2900"],body[data-aos-delay="2900"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2900"].aos-animate,body[data-aos-delay="2900"][data-aos].aos-animate{transition-delay:2.9s}[data-aos][data-aos][data-aos-duration="2950"],body[data-aos-duration="2950"][data-aos]{transition-duration:2.95s}[data-aos][data-aos][data-aos-delay="2950"],body[data-aos-delay="2950"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="2950"].aos-animate,body[data-aos-delay="2950"][data-aos].aos-animate{transition-delay:2.95s}[data-aos][data-aos][data-aos-duration="3000"],body[data-aos-duration="3000"][data-aos]{transition-duration:3s}[data-aos][data-aos][data-aos-delay="3000"],body[data-aos-delay="3000"][data-aos]{transition-delay:0}[data-aos][data-aos][data-aos-delay="3000"].aos-animate,body[data-aos-delay="3000"][data-aos].aos-animate{transition-delay:3s}[data-aos][data-aos][data-aos-easing=linear],body[data-aos-easing=linear][data-aos]{transition-timing-function:cubic-bezier(.25,.25,.75,.75)}[data-aos][data-aos][data-aos-easing=ease],body[data-aos-easing=ease][data-aos]{transition-timing-function:ease}[data-aos][data-aos][data-aos-easing=ease-in],body[data-aos-easing=ease-in][data-aos]{transition-timing-function:ease-in}[data-aos][data-aos][data-aos-easing=ease-out],body[data-aos-easing=ease-out][data-aos]{transition-timing-function:ease-out}[data-aos][data-aos][data-aos-easing=ease-in-out],body[data-aos-easing=ease-in-out][data-aos]{transition-timing-function:ease-in-out}[data-aos][data-aos][data-aos-easing=ease-in-back],body[data-aos-easing=ease-in-back][data-aos]{transition-timing-function:cubic-bezier(.6,-.28,.735,.045)}[data-aos][data-aos][data-aos-easing=ease-out-back],body[data-aos-easing=ease-out-back][data-aos]{transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}[data-aos][data-aos][data-aos-easing=ease-in-out-back],body[data-aos-easing=ease-in-out-back][data-aos]{transition-timing-function:cubic-bezier(.68,-.55,.265,1.55)}[data-aos][data-aos][data-aos-easing=ease-in-sine],body[data-aos-easing=ease-in-sine][data-aos]{transition-timing-function:cubic-bezier(.47,0,.745,.715)}[data-aos][data-aos][data-aos-easing=ease-out-sine],body[data-aos-easing=ease-out-sine][data-aos]{transition-timing-function:cubic-bezier(.39,.575,.565,1)}[data-aos][data-aos][data-aos-easing=ease-in-out-sine],body[data-aos-easing=ease-in-out-sine][data-aos]{transition-timing-function:cubic-bezier(.445,.05,.55,.95)}[data-aos][data-aos][data-aos-easing=ease-in-quad],body[data-aos-easing=ease-in-quad][data-aos]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-quad],body[data-aos-easing=ease-out-quad][data-aos]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-quad],body[data-aos-easing=ease-in-out-quad][data-aos]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}[data-aos][data-aos][data-aos-easing=ease-in-cubic],body[data-aos-easing=ease-in-cubic][data-aos]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-cubic],body[data-aos-easing=ease-out-cubic][data-aos]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-cubic],body[data-aos-easing=ease-in-out-cubic][data-aos]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}[data-aos][data-aos][data-aos-easing=ease-in-quart],body[data-aos-easing=ease-in-quart][data-aos]{transition-timing-function:cubic-bezier(.55,.085,.68,.53)}[data-aos][data-aos][data-aos-easing=ease-out-quart],body[data-aos-easing=ease-out-quart][data-aos]{transition-timing-function:cubic-bezier(.25,.46,.45,.94)}[data-aos][data-aos][data-aos-easing=ease-in-out-quart],body[data-aos-easing=ease-in-out-quart][data-aos]{transition-timing-function:cubic-bezier(.455,.03,.515,.955)}[data-aos^=fade][data-aos^=fade]{opacity:0;transition-property:opacity,transform}[data-aos^=fade][data-aos^=fade].aos-animate{opacity:1;transform:translateZ(0)}[data-aos=fade-up]{transform:translate3d(0,100px,0)}[data-aos=fade-down]{transform:translate3d(0,-100px,0)}[data-aos=fade-right]{transform:translate3d(-100px,0,0)}[data-aos=fade-left]{transform:translate3d(100px,0,0)}[data-aos=fade-up-right]{transform:translate3d(-100px,100px,0)}[data-aos=fade-up-left]{transform:translate3d(100px,100px,0)}[data-aos=fade-down-right]{transform:translate3d(-100px,-100px,0)}[data-aos=fade-down-left]{transform:translate3d(100px,-100px,0)}[data-aos^=zoom][data-aos^=zoom]{opacity:0;transition-property:opacity,transform}[data-aos^=zoom][data-aos^=zoom].aos-animate{opacity:1;transform:translateZ(0)scale(1)}[data-aos=zoom-in]{transform:scale(.6)}[data-aos=zoom-in-up]{transform:translate3d(0,100px,0)scale(.6)}[data-aos=zoom-in-down]{transform:translate3d(0,-100px,0)scale(.6)}[data-aos=zoom-in-right]{transform:translate3d(-100px,0,0)scale(.6)}[data-aos=zoom-in-left]{transform:translate3d(100px,0,0)scale(.6)}[data-aos=zoom-out]{transform:scale(1.2)}[data-aos=zoom-out-up]{transform:translate3d(0,100px,0)scale(1.2)}[data-aos=zoom-out-down]{transform:translate3d(0,-100px,0)scale(1.2)}[data-aos=zoom-out-right]{transform:translate3d(-100px,0,0)scale(1.2)}[data-aos=zoom-out-left]{transform:translate3d(100px,0,0)scale(1.2)}[data-aos^=slide][data-aos^=slide]{transition-property:transform}[data-aos^=slide][data-aos^=slide].aos-animate{transform:translateZ(0)}[data-aos=slide-up]{transform:translate3d(0,100%,0)}[data-aos=slide-down]{transform:translate3d(0,-100%,0)}[data-aos=slide-right]{transform:translate3d(-100%,0,0)}[data-aos=slide-left]{transform:translate3d(100%,0,0)}[data-aos^=flip][data-aos^=flip]{backface-visibility:hidden;transition-property:transform}[data-aos=flip-left]{transform:perspective(2500px)rotateY(-100deg)}[data-aos=flip-left].aos-animate{transform:perspective(2500px)rotateY(0)}[data-aos=flip-right]{transform:perspective(2500px)rotateY(100deg)}[data-aos=flip-right].aos-animate{transform:perspective(2500px)rotateY(0)}[data-aos=flip-up]{transform:perspective(2500px)rotateX(-100deg)}[data-aos=flip-up].aos-animate{transform:perspective(2500px)rotateX(0)}[data-aos=flip-down]{transform:perspective(2500px)rotateX(100deg)}[data-aos=flip-down].aos-animate{transform:perspective(2500px)rotateX(0)}
@charset"UTF-8";
/*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */
html{line-height:1.15;-webkit-text-size-adjust:100%;}
body{margin:0;}
h1{font-size:2em;margin:0.67em 0;}
hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible;}
pre{font-family:monospace,monospace;font-size:1em;}
a{background-color:transparent;}
abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}
b,strong{font-weight:bolder;}
code,kbd,samp{font-family:monospace,monospace;font-size:1em;}
small{font-size:80%;}
sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}
sub{bottom:-0.25em;}
sup{top:-0.5em;}
img{border-style:none;}
button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}
button,input{overflow:visible;}
button,select{text-transform:none;}
button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button;}
button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0;}
button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText;}
fieldset{padding:0.35em 0.75em 0.625em;}
legend{-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}
progress{vertical-align:baseline;}
textarea{overflow:auto;}
[type="checkbox"],[type="radio"]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0;}
[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto;}
[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}
[type="search"]::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}
details{display:block;}
summary{display:list-item;}
template{display:none;}
[hidden]{display:none;}*{-webkit-box-sizing:border-box;box-sizing:border-box;}
html,body{font-family:'Poppins',sans-serif;font-size:18px;overflow:hidden;overflow-y:auto;}
a{text-decoration:none;color:#8d8d8d;}
a:hover,a.active{color:black;}.mouse{position:absolute;right:95px;bottom:85px;z-index:5;}
@media(max-width:992px){.mouse{right:30px;bottom:30px;}}.btn-transp{background-color:transparent;border:none;-webkit-box-shadow:none;box-shadow:none;outline:none;}.btn-transp:hover,.btn-transp:focus{background-color:transparent;}.ovf-hidd{overflow:hidden;}.title-block{clear:both;padding-top:210px;padding-bottom:210px;width:100%;}
@media(min-width:992px){.title-block{padding-left:172px!important;padding-right:172px!important;}}
@media(min-width:1190px){.title-block{padding-left:0px!important;padding-right:0px!important;}}.title-block_small-title{text-transform:uppercase;color:rgba(5,5,5,0.5);letter-spacing:2.31px;font-family:'Maitree',sans-serif;margin:0;font-size:14px;}
@media(min-width:2500px){.title-block_small-title{font-size:18px;}}.title-block_big-title{font-size:72px;margin:0;color:#000;margin-top:10px;}
@media(min-width:2500px){.title-block_big-title{font-size:90px;}}
@media(max-width:768px){.title-block_big-title{font-size:48px;}}
@media(max-width:550px){.title-block_big-title{font-size:36px;}}.title-block_descr{line-height:24px;font-size:18px;color:#000;}
@media(min-width:2500px){.title-block_descr{font-size:24px;line-height:30px;}}
@media(max-width:1190px){.title-block_descr{padding:0 15px;}}.inner-block{width:50%;float:left;}
@media(max-width:1190px){.inner-block{float:none;width:100%;}}.h-520{height:520px;}.pl-172{padding-left:172px;}.pr-172{padding-right:172px;}
@media(max-width:1190px){.inner-block.pl-172{padding-left:0;}}
@media(max-width:1190px){.inner-block.pr-172{padding-right:0;}}
@media(max-width:1190px){.text-xs-md-center{text-align:left;padding-left:40px;padding-right:40px;}.text-xs-md-center.title-block_descr{padding:0;}}.inner-block_link{position:relative;display:block;width:100%;height:480px;overflow:hidden;}.inner-block_link img{position:absolute;-webkit-transition:all 0.95s;-o-transition:all 0.95s;transition:all 0.95s;left:0;top:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;}
@media(min-width:2500px){.inner-block_link{height:750px;}}.inner-block_link__descr{position:absolute;left:82px;bottom:71px;z-index:2;}
@media(max-width:550px){.inner-block_link__descr{left:20px;bottom:50px;}}.inner-block_link__big-title{font-size:30px;color:#fff;margin:0;}.inner-block_link__small-title{margin:0;text-transform:uppercase;letter-spacing:2.31px;font-family:'Maitree';color:rgba(255,255,255,0.6);margin-top:10px;font-size:14px;}.inner-block_link:before{content:'';-webkit-transition:all 0.95s;-o-transition:all 0.95s;transition:all 0.95s;}.inner-block_link:hover:before{position:absolute;left:0;top:0;bottom:0;right:0;content:'';z-index:1;background-color:rgba(0,0,0,0.5);}.inner-block_link:hover img{-webkit-transform:scale(1.07);-ms-transform:scale(1.07);transform:scale(1.07);}.all-portfolio_btn__wrapp{margin-top:90px;position:relative;}.all-portfolio_btn__wrapp.all-portfolio_btn{display:block;height:30px;position:absolute;left:50%;-webkit-transform:translate(-50%,0);-ms-transform:translate(-50%,0);transform:translate(-50%,0);-webkit-transition:left 0.2s ease;-o-transition:left 0.2s ease;transition:left 0.2s ease;}.all-portfolio_btn__wrapp.all-portfolio_btn img{margin-top:5px;}.all-portfolio_btn__wrapp.all-portfolio_btn:hover{left:-webkit-calc(50%+5px);left:calc(50%+5px);}.bottom_links-wrapp{margin-top:200px;border-top:1px solid#DCDCDC;padding-top:110px;margin-bottom:100px;}.bottom_links{margin-top:55px;}.bottom_links.links{margin:0;padding:0;}.bottom_links.links li{list-style-type:none;}.bottom_links.links li.bottom-link{margin:25px 0;display:inline-block;font-size:38px;color:#000000;font-weight:700;position:relative;}
@media(max-width:768px){.bottom_links.links li.bottom-link{margin:25px 0;font-size:24px;}}
@media(max-width:550px){.bottom_links.links li.bottom-link{margin:25px 0;font-size:20px;}.bottom_links.links li.bottom-link:after{width:52px;height:12px;margin-left:10px;}}.bottom-link{-webkit-transition:all 0.3s;-o-transition:all 0.3s;transition:all 0.3s;display:inline-block;}.bottom-link:before{content:'';position:absolute;left:-60px;top:10px;opacity:0;display:inline-block;width:60px;height:23px;background:url(../images/arrow_b.svg)no-repeat right center;}
@media(max-width:768px){.bottom-link:before{top:0;}}.bottom-link:after{content:'';display:inline-block;width:60px;position:absolute;right:-60px;top:10px;height:23px;opacity:0;background:url(../images/arrow_b.svg)no-repeat right center;}.link-hover{padding-left:60px;}.link-hover:after{-webkit-animation:fadeOutLeft 0.4s;animation:fadeOutLeft 0.4s;}.link-hover:before{-webkit-animation:fadeInLeft 0.4s;animation:fadeInLeft 0.4s;-webkit-animation-fill-mode:forwards;}
@-webkit-keyframes fadeOutLeft{from{opacity:1;}
to{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);}}
@keyframes fadeOutLeft{from{opacity:1;}
to{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);}}
@-webkit-keyframes fadeInLeft{from{opacity:0;}
to{opacity:1;left:-5px;}}
@keyframes fadeInLeft{from{opacity:0;}
to{opacity:1;left:-5px;}}
@media(max-width:1190px){.bottom_links-wrapp.pl-172{padding-left:40px;}}
@media(max-width:1190px){.bottom_links-wrapp.pr-172{padding-right:40px;}}
@media(max-width:450px){.bottom_links-wrapp.pr-172{padding-right:15px;}}.inner-block_wrapp{margin-top:0;border-top:1px solid#DCDCDC;padding-top:60px;padding-bottom:60px;}.fz48{font-size:48px;}
@media(max-width:768px){.fz48{font-size:32px;}}.text-right{text-align:right;}.text-left{text-align:left;}.text-uppercase{text-transform:uppercase;}.has-icon-btn{background-color:transparent;border:none;-webkit-box-shadow:none;box-shadow:none;padding:0;outline:0;cursor:pointer;letter-spacing:2.64px;font-weight:bold;color:#000;display:inline-block;margin-top:30px;}.has-icon-btn img{margin-left:10px;-webkit-transition:margin-left 0.2s;-o-transition:margin-left 0.2s;transition:margin-left 0.2s;}.has-icon-btn:hover img{margin-left:14px;}
@media(max-width:1190px){.inner-block_wrapp.pl-172{padding-left:40px;}.inner-block_wrapp.pl-172.inner-block{float:left;width:50%;}}
@media(max-width:1190px){.inner-block_wrapp.pl-172{padding-left:40px;}}
@media(max-width:1190px){.inner-block_wrapp.pr-172{padding-right:40px;}.inner-block_wrapp.pr-172.inner-block{float:left;width:50%;}}
@media(max-width:650px){.inner-block_wrapp.pl-172.inner-block{float:none;width:100%;}}
@media(max-width:650px){.inner-block_wrapp.pr-172.inner-block{float:none;width:100%;text-align:left;}}.footer-top-line{padding-top:100px;padding-bottom:100px;}
footer{background-color:#000;color:#fff;}
footer.contact-info{letter-spacing:3.6px;font-size:12px;text-transform:uppercase;}
footer.contact-info p{margin:20px 0;}
footer.contact-info_bottom{margin-top:80px;}
footer.contact-info_bottom span{margin-left:20px;}
footer.contact-info_bottom span a{-webkit-transition:color 0.2s;-o-transition:color 0.2s;transition:color 0.2s;}
footer.contact-info_bottom span a:hover,footer.contact-info_bottom span a:focus{color:#fff;}
footer.footer-bottom-line{border-top:1px solid#747473;padding-top:50px;padding-bottom:50px;}
footer.footer-bottom-line ul{font-size:0;margin:0;padding:0;list-style-type:none;}
footer.footer-bottom-line ul li{padding:0;margin:0;display:inline-block;}
footer.footer-bottom-line ul li a{text-transform:uppercase;letter-spacing:3.6px;color:#747473;font-size:12px;text-decoration:none;margin-right:30px;-webkit-transition:color 0.2s;-o-transition:color 0.2s;transition:color 0.2s;line-height:20px;}
footer.footer-bottom-line ul li a:hover,footer.footer-bottom-line ul li a:active{color:white;}
footer.footer-bottom-line.footer-nav_right li a{font-size:16px;}
footer.footer-nav_right li:last-child a{margin-right:0;}.transform-btn{-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg);}.fz10{font-size:10px;}.fz10 img{width:35px;height:10px;}.white-btn{color:#fff;}.to-top{margin-right:-40px;margin-top:60px;-webkit-transition:margin-top 0.2s;-o-transition:margin-top 0.2s;transition:margin-top 0.2s;}.to-top:hover{cursor:pointer;margin-top:55px;}.to-top:hover img{margin-left:10px;}
@media(max-width:1190px){.footer-top-line.inner-block{width:50%;float:left;}}
@media(max-width:1190px){.footer-bottom-line.inner-block{width:50%;float:left;}}
@media(max-width:990px){.footer-bottom-line.inner-block{float:none;width:100%;text-align:left;}}
@media(max-width:990px){.footer-bottom-line.footer-nav_right{margin-top:20px;}}
@media(max-width:990px){.footer-bottom-line.footer-nav_left li a{display:block;margin-top:5px;margin-bottom:5px;}}
@media(max-width:1190px){footer.pl-172{padding-left:40px;}}
@media(max-width:1190px){footer.pr-172{padding-right:40px;}}.portfolio-nav{margin-bottom:75px;}
@media(min-width:1191px){.portfolio-nav{margin-left:172px;margin-right:172px;}}.portfolio-nav ul{margin:0;padding:0;font-size:0;}.portfolio-nav li{list-style-type:none;display:inline-block;}.portfolio-nav.active a{color:#000;}.portfolio-nav a{color:#cecece;font-size:18px;font-weight:700;display:block;margin-right:40px;margin-top:10px;-webkit-transition:color 0.2s;-o-transition:color 0.2s;transition:color 0.2s;}
@media(max-width:1190px){.portfolio-nav a{margin-right:20px;margin-left:20px;}}
@media(min-width:2400px){.portfolio-nav a{margin-right:55px;}}.portfolio-nav a:hover{color:#000;}.title-block_portfolio{padding-bottom:120px;}
@media(max-width:1190px){.portfolio-nav.pl-172{text-align:center;padding-left:40px;padding-right:40px;}}.back-to-portfolio{position:absolute;right:93px;bottom:70px;display:block;text-align:center;color:#fff;}
@media(max-width:992px){.back-to-portfolio{right:33px;}}
@media(max-width:576px){.back-to-portfolio{right:15px;}}.back-to-portfolio:after{content:'';display:inline-block;width:60px;height:15px;opacity:1;background:url(../images/arrow_w.svg)no-repeat right center;-webkit-transition:all 0.3s;-o-transition:all 0.3s;transition:all 0.3s;}.back-to-portfolio:hover{color:#fff;}.back-to-portfolio:hover::after{width:70px;}.portfolio-inner-head{height:590px;width:100%;position:relative;}
@media(min-width:2500px){.portfolio-inner-head{height:900px;}}.portfolio-inner-head:before{content:'';position:absolute;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,0.2);}.portfolio-inner-head img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:25%0;object-position:25%0;}.text-center{text-align:center;}.portfolio-images{margin-bottom:195px;}.portfolio-images img{width:auto;display:block;max-width:100%;margin-bottom:50px;margin-left:auto;margin-right:auto;}.portfolio-inner_nav.inner-block_link__descr{top:50%;-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);bottom:auto;opacity:0;-webkit-transition:opacity 0.25s;-o-transition:opacity 0.25s;transition:opacity 0.25s;}.portfolio-inner_nav.portfolio-nav-left.inner-block_link__descr{left:150px;right:auto;}
@media(max-width:550px){.portfolio-inner_nav.portfolio-nav-left.inner-block_link__descr{left:100px;padding-right:10px;}}
@media(max-width:992px){.portfolio-inner_nav.portfolio-nav-left.inner-block_link__descr{opacity:1;}}
@media(max-width:992px){.portfolio-inner_nav.portfolio-nav-left:before{position:absolute;left:0;top:0;bottom:0;right:0;content:'';z-index:1;background-color:rgba(0,0,0,0.5);}}
@media(max-width:992px){.portfolio-inner_nav.portfolio-nav-right:before{position:absolute;left:0;top:0;bottom:0;right:0;content:'';z-index:1;background-color:rgba(0,0,0,0.5);}}.portfolio-inner_nav.portfolio-nav-right.inner-block_link__descr{right:150px;left:auto;}
@media(max-width:992px){.portfolio-inner_nav.portfolio-nav-right.inner-block_link__descr{opacity:1;}}
@media(max-width:550px){.portfolio-inner_nav.portfolio-nav-right.inner-block_link__descr{right:100px;padding-left:10px;}}.portfolio-inner_nav.inner-block_link:hover.inner-block_link__descr{opacity:1;}.pos-relative{position:relative;}.pos-relative:before{content:'';position:absolute;display:inline-block;width:60px;height:30px;top:20px;background:url(../images/arrow_w.svg)no-repeat right center;}.portfolio-nav-left.pos-relative:before{left:-75px;-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);}.portfolio-nav-right.pos-relative:before{right:-75px;}.fz36{font-size:36px;}.studio-inner-block{position:relative;height:670px;overflow:hidden;}.studio-inner-block:hover img{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);}
@media(max-width:992px){.studio-inner-block{height:480px;}}.studio-inner-block img{-webkit-transition:-webkit-transform 0.95s;transition:-webkit-transform 0.95s;-o-transition:transform 0.95s;transition:transform 0.95s;transition:transform 0.95s,-webkit-transform 0.95s;position:absolute;left:0;top:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;z-index:-1;}.studio-inner-block_descr{padding-right:172px;position:absolute;left:50%;top:50%;-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);}
@media(max-width:1190px){.studio-inner-block_descr{padding-right:40px;}.studio-inner-block_descr.title-block_descr{padding-left:0;}}
@media(max-width:768px){.studio-inner-block_descr{left:40%;}}
@media(max-width:450px){.studio-inner-block_descr{left:40px;}}.studio-inner-block_descr.inner-block_link__big-title{color:#000;}.studio-inner-block_descr.inner-block_link__small-title{color:rgba(0,0,0,0.6);}.studio-inner-block_descr.title-block_desc{font-size:18px;line-height:26px;}.bg-reverse.studio-inner-block_descr{padding-left:172px;position:absolute;right:50%;left:auto;}
@media(max-width:1190px){.bg-reverse.studio-inner-block_descr{padding-left:40px;padding-right:0;}}
@media(max-width:768px){.bg-reverse.studio-inner-block_descr{right:40%;}}
@media(max-width:450px){.bg-reverse.studio-inner-block_descr{right:40px;}}.studio-text{margin-top:100px;color:#000;padding-bottom:100px;}.studio-text h3{font-size:36px;margin-top:10px;margin-bottom:10px;}.studio-text p{margin-top:30px;margin-bottom:30px;}.studio-text p,.studio-text h3,.studio-text ul{margin-left:20%;margin-right:20%;line-height:30px;}
@media(max-width:992px){.studio-text p,.studio-text h3,.studio-text ul{margin-left:10%;margin-right:10%;}}.studio-text ul{padding:0;}.studio-text ul li{list-style-type:none;position:relative;padding-left:20px;}.studio-text ul li:before{content:'';position:absolute;left:0px;top:50%;-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);display:block;width:5px;height:5px;background-color:#000;}.studio-text img{padding-right:172px;padding-left:172px;max-width:100%;margin:70px auto;display:block;}
@media(max-width:992px){.studio-text img{padding-left:40px;padding-right:40px;}}
@media(max-width:768px){.studio-text img{padding-left:15px;padding-right:15px;}}.partners-block{padding-top:100px;border-top:1px solid#dcdcdc;}
@media(max-width:768px){.partners-block.text-center{text-align:left;padding-left:40px;}}.logo-wrapp{width:20%;float:left;text-align:center;margin:10px 0;position:relative;display:block;height:100px;overflow:hidden;padding:0 10px;}
@media(max-width:768px){.logo-wrapp{width:50%;}}
@media(max-width:450px){.logo-wrapp{width:100%;}}.logo-wrapp:hover img{-webkit-transform:translate(-50%,-50%)scale(1.07);-ms-transform:translate(-50%,-50%)scale(1.07);transform:translate(-50%,-50%)scale(1.07);}.logo-wrapp img{max-width:90%;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);-webkit-transition:all 0.95s;-o-transition:all 0.95s;transition:all 0.95s;}.partners-wrapp{margin-top:70px;margin-bottom:70px;}
@media(max-width:1190px){.partners-wrapp{padding-right:40px;padding-left:40px;}}.small-block{padding-top:110px;padding-bottom:110px;}.reverse-block{background-color:#000;}.reverse-block.title-block_big-title,.reverse-block.title-block_descr,.reverse-block.title-block_small-title{color:#fff;}.reverse-block.title-block_descr{font-weight:300;}.title-block.has-img{padding-top:0;padding-bottom:0px;}
@media(max-width:992px){.title-block.has-img{padding-right:0;padding-left:0;}.title-block.has-img.oferta-inner-block_descr{padding-right:40px;padding-left:40px;}}.title-block.has-img img{position:absolute;max-width:100%;height:100%;width:50%;right:0;top:0;bottom:0;-o-object-fit:cover;object-fit:cover;display:block;}
@media(max-width:1190px){.title-block.has-img img{position:relative;width:100%;margin-bottom:0px;}}.block-relative{position:relative;}.oferta-inner-block_descr{padding-top:130px;padding-bottom:130px;}
@media(min-width:1190px){.oferta-inner-block_descr{padding-right:70px;}}.has-img.img-left.inner-block{float:right;}.has-img.img-left img{left:0;right:auto;}
@media(min-width:1190px){.has-img.img-left.oferta-inner-block_descr{padding-left:70px;padding-right:0;}}.oferta-list{padding:0;margin:0;}
@media(max-width:1190px){.oferta-list{margin-top:30px;}}.oferta-list li{list-style-type:none;color:#fff;line-height:36px;}.oferta-list li a{display:block;color:#fff;}.oferta-list li a:hover{text-decoration:underline!important;}.contact-form{padding-left:40px;padding-right:40px;margin-bottom:100px;}
@media(min-width:1300px){.contact-form{padding-left:172px;padding-right:172px;}}
@media(max-width:768px){.contact-form{margin-bottom:50px;}}.contact-form.title-block_small-title{margin-bottom:30px;}.has-label{margin-bottom:70px;}
@media(max-width:768px){.has-label{margin-bottom:30px;}}.has-label.title-block_small-title{margin-bottom:50px;}.has-label.form-control{margin-bottom:40px;}.form-group{width:33.3333%;float:left;padding:0 15px;}
@media(max-width:1190px){.form-group{width:100%;float:none;}}.form-control{margin:15px 0;padding:15px 0;letter-spacing:0.44px;font-size:16px;outline:0;border:none;-webkit-box-shadow:none;box-shadow:none;width:100%;background:transparent;border-bottom:1px solid#dcdcdc;}.form-control:focus,.form-control:active{border-bottom:1px solid#000;}.form-control::-webkit-input-placeholder{color:rgba(5,5,5,0.5);letter-spacing:0.44px;}.form-control::-moz-placeholder{color:rgba(5,5,5,0.5);letter-spacing:0.44px;}.form-control:-ms-input-placeholder{color:rgba(5,5,5,0.5);letter-spacing:0.44px;}.form-control::-ms-input-placeholder{color:rgba(5,5,5,0.5);letter-spacing:0.44px;}.form-control::placeholder{color:rgba(5,5,5,0.5);letter-spacing:0.44px;}.ph-bold::-webkit-input-placeholder{color:#050505;font-weight:700;}.ph-bold::-moz-placeholder{color:#050505;font-weight:700;}.ph-bold:-ms-input-placeholder{color:#050505;font-weight:700;}.ph-bold::-ms-input-placeholder{color:#050505;font-weight:700;}.ph-bold::placeholder{color:#050505;font-weight:700;}.row{margin-right:-15px;margin-left:-15px;}.clearfix:before,.clearfix:after{content:"";display:table;}.clearfix:after{clear:both;}.form-control_label{letter-spacing:0.44px;font-size:16px;font-weight:700;}
@media(max-width:1600px){.form-control_label{font-size:12px;}}
input.chk-btn{display:none;}
input.chk-btn+label{border:1px solid transparent;padding:5px 15px;cursor:pointer;-webkit-border-radius:0px;border-radius:0px;font-size:18px;font-weight:700;color:#cecece;margin:0 15px;}
input.chk-btn:not(:checked)+label:hover{border:1px solid#000;}
input.chk-btn+label:active,input.chk-btn:checked+label{border:1px solid#000;color:#000;}.checkb-wrapp{margin-top:15px;margin-bottom:25px;display:inline-block;}.contact-btn{border:none;-webkit-box-shadow:none;box-shadow:none;display:block;width:100%;background-color:transparent;cursor:pointer;outline:0;text-align:left;}.preloader{position:fixed;width:100vw;background-color:#fff;z-index:10000;height:100vh;overflow:hidden;}.preloader.done{display:none;}.loader{text-align:center;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}.loader-logo{display:inline-block;text-decoration:none;height:50px;width:110px;position:relative;background:url("../images/logo_mause_b.svg")no-repeat 0 0;}.loader-line{position:relative;width:180px;height:1px;margin-top:40px;}.loader-line.loader-default{position:absolute;height:1px;width:100%;left:0;top:0;background-color:#dcdcdc;z-index:1;}.loader-line.loader-progress{position:absolute;height:1px;left:0;top:0;width:0%;background-color:#231f20;z-index:2;}.hidden{display:none;}.inner-portfolio{position:absolute;z-index:50000;left:0;top:590px;bottom:0;right:0;-webkit-transition:all 0.5s;-o-transition:all 0.5s;transition:all 0.5s;}.inner-portfolio.block-relative{-webkit-transition:width 0.5s;-o-transition:width 0.5s;transition:width 0.5s;}
@media(min-width:2000px){.inner-portfolio{top:900px;}}.stage-close{width:0%;height:0%;}.stage-close.block-relative{width:0%;}.stage-open{width:100%;height:100%;}.stage-open.block-relative{background-color:#fff;width:100%;}.close-portfolio{position:fixed;border:none;-webkit-box-shadow:none;box-shadow:none;display:inline-block;-webkit-border-radius:50%;border-radius:50%;color:#f5f5f5;width:50px;height:48px;right:40px;top:40px;outline:0;z-index:500001;cursor:pointer;background-color:rgba(0,0,0,0.2);-webkit-transition:all 0.2s;-o-transition:all 0.2s;transition:all 0.2s;}
@media(max-width:768px){.close-portfolio{right:15px;top:15px;}}.close-portfolio:hover{background-color:rgba(0,0,0,0.4);color:#fff;}.portfolio-open{position:absolute;top:0;left:0;z-index:50000;height:590px;}.portfolio-open img{height:590px;}
@media(min-width:2000px){.portfolio-open{height:900px;}}.portfolio-open.inner-block_link__descr{display:none;}.portfolio-open:hover{cursor:default;}.portfolio-open:hover:before{background-color:transparent;}.portfolio-open:hover img{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}
@media(max-width:768px){.all-white{position:relative;}.all-white:before{content:'';position:absolute;left:0;right:0;top:0;bottom:0;background-color:#fff;z-index:100;}}.pace-running{position:relative;}.pace-running:before{content:'';position:absolute;left:0;right:0;top:0;bottom:0;background-color:#fff;z-index:10000;opacity:1;-webkit-transition:all 1.85s ease;-o-transition:all 1.85s ease;transition:all 1.85s ease;}.pace-running:after{content:'';position:fixed;background:url("../images/logo_mause_b.svg")no-repeat 0 0;left:50%;top:-webkit-calc(50%-70px);top:calc(50%-70px);display:inline-block;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);height:50px;width:110px;z-index:10000;opacity:1;-webkit-transition:all 1.85s ease;-o-transition:all 1.85s ease;transition:all 1.85s ease;}.pace-done:before{opacity:0.8;left:50%;right:50%;z-index:-10;}.pace-done:after{opacity:0;z-index:-10;right:auto;}.hover-green{display:block;-webkit-transition-property:all!important;-o-transition-property:all!important;transition-property:all!important;}.hover-green.title-block_small-title,.hover-green.title-block_big-title,.hover-green.has-icon-btn{-webkit-transition:color 0.3s;-o-transition:color 0.3s;transition:color 0.3s;}.hover-green.has-icon-btn{position:relative;}.hover-green.has-icon-btn:after{content:'';display:inline-block;width:60px;height:15px;opacity:1;background:url(../images/arrow_b.svg)no-repeat right center;-webkit-transition:all 0.3s;-o-transition:all 0.3s;transition:all 0.3s;}.hover-green.has-icon-btn:hover::after{width:70px;}.hover-green:hover{border-top:1px solid#18A191;background-color:#18A191;}.hover-green:hover.title-block_small-title{color:#fff;}.hover-green:hover.title-block_big-title{color:#fff;}.hover-green:hover.has-icon-btn{color:#fff;}.hover-green:hover.has-icon-btn:after{background:url(../images/arrow_w.svg)no-repeat right center;}
@media(max-width:1190px){.header{height:55px;background-color:#333;position:relative;}.p-nav-container{margin-left:172px;margin-right:172px;margin-bottom:40px;}.p-nav{width:100%;position:absolute;top:100%;left:0;z-index:100;display:none;}.p-nav ul li{display:block;margin-top:-1px;}.p-nav ul li a{margin:0;background-color:#fff;color:#cecece;}.nav__item{display:block;height:56px;font-weight:bold;color:#fff;font-size:14px;line-height:56px;text-align:left;padding-left:25px;text-transform:uppercase;text-decoration:none;background-color:#fff;-webkit-transition:background-color.1s linear,color.1s linear;-o-transition:background-color.1s linear,color.1s linear;transition:background-color.1s linear,color.1s linear;}.nav__item:hover{background-color:#fff;}.nav__item:active{background-color:#fff;color:#000;}.nav-burger{display:block;width:25px;height:23px;cursor:pointer;color:transparent;font-size:0;background:url("../images/icon-menu.svg")no-repeat;position:absolute;top:16px;right:20px;z-index:1;}.nav-burger__checkbox{display:none;}.nav-burger__checkbox:checked+.nav-burger{background-image:url("../images/icon-cross.svg");}.nav-burger__checkbox:checked~.p-nav{display:block;}}
@media(min-width:1191px){.hidden-md{display:none;}}
@media(max-width:992px){.p-nav-container{margin-left:40px;margin-right:40px;}}
@media(max-width:540px){.p-nav-container{margin-left:15px;margin-right:15px;}}.typed-cursor{opacity:1;-webkit-animation:blink 0.7s infinite;animation:blink 0.7s infinite;}
@keyframes blink{0%{opacity:1;}
50%{opacity:0;}
100%{opacity:1;}}
@-webkit-keyframes blink{0%{opacity:1;}
50%{opacity:0;}
100%{opacity:1;}}
header{position:fixed;left:0;right:0;top:0;z-index:9999;}
header.logo{-webkit-transition:margin-top 0.8s;-o-transition:margin-top 0.8s;transition:margin-top 0.8s;z-index:3;display:inline-block;text-decoration:none;height:50px;width:50px;position:relative;margin-left:90px;margin-top:90px;}
@media(max-width:992px){header.logo{margin-left:30px;margin-top:30px;}}
@media(max-width:576px){header.logo{margin-left:15px;margin-top:15px;}}
header.logo.logo-default-state{position:absolute;left:0;top:0;bottom:0;width:50px;z-index:1;-webkit-transition:width 200ms;-o-transition:width 200ms;transition:width 200ms;}
header.logo.logo-hover-state{position:absolute;left:0;top:0;bottom:0;width:0px;z-index:2;-webkit-transition:width 300ms;-o-transition:width 300ms;transition:width 300ms;}
header.logo:hover.logo-default-state{width:0px;-webkit-transition:width 200ms;-o-transition:width 200ms;transition:width 200ms;}
header.logo:hover.logo-hover-state{width:120px;-webkit-transition:width 200ms;-o-transition:width 200ms;transition:width 200ms;}
header.menu-toggler{-webkit-transition:margin-top 0.8s;-o-transition:margin-top 0.8s;transition:margin-top 0.8s;outline:0;float:right;margin-right:93px;margin-top:103px;height:23px;width:36px;background:transparent;border:none;cursor:pointer;position:relative;}
@media(max-width:992px){header.menu-toggler{margin-right:33px;margin-top:40px;}}
@media(max-width:576px){header.menu-toggler{margin-right:15px;margin-top:25px;}}
header.menu-toggler.menu-toggler__default-state,header.menu-toggler.menu-toggler__hover-state{position:absolute;left:0;top:0;bottom:0;}
header.menu-toggler.menu-toggler__default-state{width:100%;}
header.menu-toggler.menu-toggler__hover-state{width:0%;-webkit-transition:width 200ms;-o-transition:width 200ms;transition:width 200ms;}
header.menu-toggler:hover.menu-toggler__hover-state{width:100%;}
header.white-objects.logo.logo-default-state{background:url("../images/logo_w.svg")no-repeat 0 0;}
header.white-objects.logo.logo-hover-state{background:url("../images/logo_mause_w.svg")no-repeat 0 0;}
header.white-objects.menu-toggler.menu-toggler__default-state{background:url("../images/menu_w.svg")no-repeat 0 0;}
header.white-objects.menu-toggler.menu-toggler__hover-state{background:url("../images/menu_mause_w.svg")no-repeat 0 0;}
header.black-objects.logo.logo-default-state{background:url("../images/logo_b.svg")no-repeat 0 0;}
header.black-objects.logo.logo-hover-state{background:url("../images/logo_mause_b.svg")no-repeat 0 0;}
header.black-objects.menu-toggler.menu-toggler__default-state{background:url("../images/menu_b.svg")no-repeat 0 0;}
header.black-objects.menu-toggler.menu-toggler__hover-state{background:url("../images/menu_mause_b.svg")no-repeat 0 0;}
header.scrolled{padding-bottom:23px;background-color:#fff;}
header.scrolled.logo{margin-top:25px;}
header.scrolled.menu-toggler{margin-top:40px;}
@media(max-width:576px){header.scrolled{padding-bottom:15px;}
header.scrolled.logo{margin-top:15px;}
header.scrolled.menu-toggler{margin-top:25px;}}.home-slider{margin:0;padding:0;list-style-type:none;}.home-slider.home-slider__item{margin:0;padding:0;position:relative;height:100vh;}.home-slider.home-slider__item:before{content:'';position:absolute;z-index:2;left:0;right:0;top:0;bottom:0;background:rgba(0,0,0,0.22);}.home-slider.home-slider__item img{position:relative;z-index:1;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;}.home-slider.home-slider__item.home-slider__item__title{position:absolute;z-index:3;top:-webkit-calc(50%+50px);top:calc(50%+50px);left:172px;color:#fff;font-weight:700;font-size:5.55vw;line-height:5.95vw;max-width:500px;-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);opacity:0;-webkit-transition:top 1s,opacity 1s;-o-transition:top 1s,opacity 1s;transition:top 1s,opacity 1s;-webkit-transition-delay:.4s;-o-transition-delay:.4s;transition-delay:.4s;}
@media(max-width:992px){.home-slider.home-slider__item.home-slider__item__title{left:30px;top:-webkit-calc(50%+30px);top:calc(50%+30px);}}
@media(max-width:576px){.home-slider.home-slider__item.home-slider__item__title{font-size:11.55vw;line-height:11.25vw;}}.home-slider.home-slider__item.home-slider__item__title span.home-slider__item__title_little{position:absolute;top:-120px;font-size:1.25vw;font-weight:normal;font-family:'Maitree',serif;text-transform:uppercase;line-height:45px;opacity:0;-webkit-transition:top.8s,opacity.8s;-o-transition:top.8s,opacity.8s;transition:top.8s,opacity.8s;-webkit-transition-delay:.5s;-o-transition-delay:.5s;transition-delay:.5s;}
@media(max-width:992px){.home-slider.home-slider__item.home-slider__item__title span.home-slider__item__title_little{font-size:2vw;}}
@media(max-width:768px){.home-slider.home-slider__item.home-slider__item__title span.home-slider__item__title_little{font-size:2.5vw;}}
@media(max-width:576px){.home-slider.home-slider__item.home-slider__item__title span.home-slider__item__title_little{font-size:5vw;line-height:75px;}}.home-slider.owl-dots{position:absolute;bottom:100px;left:172px;font-size:0;}
@media(max-width:992px){.home-slider.owl-dots{left:30px;bottom:30px;}}.home-slider.owl-dots.owl-dot{display:inline-block;width:44px;height:20px;margin-right:15px;position:relative;}
@media(max-width:992px){.home-slider.owl-dots.owl-dot{width:22px;}}.home-slider.owl-dots.owl-dot.line{content:'';position:absolute;left:0;top:50%;right:0;height:1px;background:rgba(255,255,255,0.3);-webkit-transition:background 100ms;-o-transition:background 100ms;transition:background 100ms;}.home-slider.owl-dots.owl-dot.progress{content:'';position:absolute;left:0;top:50%;height:1px;background:#fff;width:0%;display:none;}.home-slider.owl-dots.owl-dot:hover.line{background:rgba(255,255,255,0.5);}.home-slider.owl-dots.owl-dot.active.progress{display:block;}.home-slider.owl-dots.owl-dot:active,.home-slider.owl-dots.owl-dot:focus{outline:none;}.active.home-slider__item__title{top:50%!important;opacity:1!important;}.active span.home-slider__item__title_little{top:-50px!important;opacity:1!important;}#navigation{position:fixed;top:0;bottom:0;right:-100vw;width:100vw;background:#fff;z-index:2;-webkit-transition:width.7s ease,right.7s ease;-o-transition:width.7s ease,right.7s ease;transition:width.7s ease,right.7s ease;overflow-x:hidden;}#navigation.navigation-inner{position:absolute;right:-500px;top:0px;width:100vw;height:100vh;-webkit-transition:right.7s ease;-o-transition:right.7s ease;transition:right.7s ease;}#navigation.open{right:0vw;}#navigation.open.navigation-inner{right:0px;}#navigation.main-nav{position:absolute;left:170px;top:50%;-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);-webkit-transition:left 1.5s;-o-transition:left 1.5s;transition:left 1.5s;}#navigation.main-nav ul{margin:0;padding:0;list-style-type:none;}#navigation.main-nav ul li{padding:0;margin:0;}#navigation.main-nav ul li a{position:relative;display:block;font-size:48px;font-weight:bold;color:rgba(0,0,0,0.5);text-decoration:none;-webkit-transition:all 300ms;-o-transition:all 300ms;transition:all 300ms;padding-right:70px;}#navigation.main-nav ul li a:before{content:'';position:absolute;left:-60px;top:16px;opacity:0;display:inline-block;width:60px;height:23px;background:url(../images/arrow_b.svg)no-repeat right center;-webkit-transition:width 300ms;-o-transition:width 300ms;transition:width 300ms;}
@media(max-width:540px){#navigation.main-nav ul li a:before{top:3px;}}#navigation.main-nav ul li a:after{content:'';display:inline-block;width:60px;height:30px;opacity:0;-webkit-transition:opacity 300ms;-o-transition:opacity 300ms;transition:opacity 300ms;background:url(../images/arrow_b.svg)no-repeat right center;}#navigation.main-nav ul li a:hover,#navigation.main-nav ul li a.active{color:black;}
@media(max-width:992px){#navigation.main-nav{left:90px;}}#navigation.contact-info{position:absolute;top:50%;-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);right:94px;text-align:right;letter-spacing:3.6px;font-size:12px;text-transform:uppercase;}#navigation.contact-info p{margin:20px 0;}#navigation.contact-info_bottom{margin-top:80px;}#navigation.contact-info_bottom span{margin-left:20px;}#navigation.footer-nav{position:absolute;bottom:100px;left:170px;width:-webkit-calc(100%-264px);width:calc(100%-264px);right:0;}#navigation.footer-nav ul{font-size:0;margin:0;padding:0;list-style-type:none;}#navigation.footer-nav ul li{padding:0;margin:0;display:inline-block;}#navigation.footer-nav ul li a{text-transform:uppercase;letter-spacing:3.6px;color:#747473;text-decoration:none;margin-right:30px;-webkit-transition:color 0.2s;-o-transition:color 0.2s;transition:color 0.2s;}#navigation.footer-nav ul li a:hover,#navigation.footer-nav ul li a:active{color:black;}
@media(max-width:767px){#navigation.footer-nav{padding-left:70px;}}
@media(max-width:992px){#navigation.footer-nav{left:90px;}}#navigation.footer-nav_left{float:left;}
@media(max-width:992px){#navigation.footer-nav_left{display:block;float:none;width:100%;text-align:left;margin-bottom:20px!important;}}
@media(max-width:767px){#navigation.footer-nav_left li{display:block!important;}}#navigation.footer-nav_left li a{line-height:24px;font-size:12px;}#navigation.footer-nav_right{float:right;}
@media(max-width:992px){#navigation.footer-nav_right{display:block;float:none;width:100%;text-align:left;}}#navigation.footer-nav_right li a{font-size:20px;}#navigation.footer-nav_right li:last-child a{margin-right:0;}#navigation.menu-close{z-index:100;position:absolute;right:94px;top:107px;cursor:pointer;-webkit-transition:right 0.25s;-o-transition:right 0.25s;transition:right 0.25s;}
@media(max-width:992px){#navigation.menu-close{top:40px;right:30px;}}
@media(max-width:576px){#navigation.menu-close{top:25px;right:15px;}}#navigation.menu-close span{display:inline-block;width:50px;height:20px;background:url("../images/arrow_b.svg")no-repeat center center;}#navigation.menu-close:hover{right:90px;}
@media(max-width:767px){#navigation{overflow-y:scroll;}#navigation.main-nav{display:block;position:static;margin-top:120px;margin-left:80px;-webkit-transform:none;-ms-transform:none;transform:none;}#navigation.contact-info{position:static;top:0;-webkit-transform:none;-ms-transform:none;transform:none;margin-right:20px;margin-top:60px;margin-left:80px;text-align:left;}#navigation.contact-info_bottom{margin-top:40px;}#navigation.footer-nav{position:static;margin-top:90px;width:100%;margin-bottom:40px;}#navigation.footer-nav ul li a{margin-right:0;margin:10px 10px;}}
@media(max-width:540px){#navigation.contact-info{margin-left:70px;}#navigation.footer-nav{padding-left:60px;margin-top:70px;}}
@media(max-width:540px){#navigation.main-nav{margin-left:70px;}#navigation.main-nav ul li a{font-size:28px!important;margin-bottom:10px;}#navigation.main-nav ul li a:after{height:20px;width:35px;margin-left:8px;}}
@media(max-width:360px){#navigation.main-nav ul li a{font-size:23px!important;margin-bottom:10px;}#navigation.main-nav ul li a:after{height:14px;width:25px;margin-left:5px;}}
main{-webkit-transition:-webkit-transform.7s ease-out;transition:-webkit-transform.7s ease-out;-o-transition:transform.7s ease-out;transition:transform.7s ease-out;transition:transform.7s ease-out,-webkit-transform.7s ease-out;overflow:hidden;}.ovf-hidd{overflow:hidden;}.navigation-is-open header.logo{margin-top:90px;}
@media(max-width:992px){.navigation-is-open header.logo{margin-top:25px;}}
@media(max-width:576px){.navigation-is-open header.logo{margin-top:15px;}}.navigation-is-open header.menu-toggler{margin-top:103px;}
@media(max-width:992px){.navigation-is-open header.menu-toggler{margin-top:40px;}}
@media(max-width:576px){.navigation-is-open header.menu-toggler{margin-top:25px;}}.navigation-is-open main{overflow:hidden;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%);-webkit-transition:-webkit-transform.8s ease;transition:-webkit-transform.8s ease;-o-transition:transform.8s ease;transition:transform.8s ease;transition:transform.8s ease,-webkit-transform.8s ease;}