// 封装方法  创建div appendchild
    // 传参
    // 随机位置 Math.random()
    index = 0
    var btn=document.getElementById('btn');
    var time=null;
    var map=document.getElementById("map")
    var score=0
    var controlNode=[]

    // 创建不同颜色的div
    function createDiv(color){
        var div=document.createElement("div")
        div.style.width="39px"
        div.style.height="39px"
        div.style.position="absolute"
        div.style.left=parseInt(Math.random()*20)*44+4+"px"
        div.style.top=parseInt(Math.random()*15)*44+4+"px"
        div.style.backgroundColor=color
        map.appendChild(div)
        return div
    }
    var controlNode = createDiv("white")
    var finalNode = createDiv("greenyellow")
    var bonusFiftyNode = createDiv("greenyellow")
    var bonusHundredNode = createDiv("greenyellow")
    var bonusFiveNode = createDiv("#bcbcde")
    var bonusTenNode = createDiv("#436ca8")
    var bonusTwentyNode = createDiv("#efc664")
    var bonusThirtyNode = createDiv("#cb7186")
    var barrierANode = createDiv("#554161")
    var barrierBNode = createDiv("#554161")
    var barrierCNode = createDiv("#554161")
    var barrierDNode = createDiv("#554161")
    var barrierENode = createDiv("#554161")
    var barrierFNode = createDiv("#554161")
    var barrierGNode = createDiv("#554161")
    var barrierHNode = createDiv("#554161")
    // console.log(finalNode) 
    // console.log(Math.random())

    //点击开始进入游戏
    var start=document.getElementById("start")
    var home=document.getElementById("home")

    start.onclick = function(){
        home.style.display="none";
    }

    // 小白块移动
    function move(){
        switch(controlNode.value){
            case "left":
                controlNode.style.left=parseInt(
                    controlNode.style.left)-44+"px"
            break
            case "right": 
            controlNode.style.left=parseInt(
                    controlNode.style.left)+44+"px"
            break
            case "up":
            controlNode.style.top=parseInt(
                    controlNode.style.top)-44+"px"
            break
            case "down":
            controlNode.style.top=parseInt(
                    controlNode.style.top)+44+"px"
            break
        }

        //让小白块在墙里运动，撞墙提示
            if(parseInt(controlNode.style.left)<4||parseInt(controlNode.style.left)>844||
            parseInt(controlNode.style.top)<4||parseInt(controlNode.style.top)>620){
                clearInterval(t)
                switch(controlNode.value){
                    case "left":
                    controlNode.style.left=4+"px"
                    break
                    case "right": 
                    controlNode.style.left=840+"px"
                    break
                    case "up":
                    controlNode.style.top=4+"px"
                    break
                    case "down":
                    controlNode.style.top=620+"px"
                    break
            }
                
                alert("撞到墙啦")
                num = 0
            }
        
        // 碰撞检测 碰到就game over
        if(controlNode.style.left==finalNode.style.left&&
        controlNode.style.top==finalNode.style.top){
            clearInterval(t)
            num = 0
            alert("Game Over")
        }

        // 碰撞检测 遇到障碍物停止
        if(controlNode.style.left==barrierANode.style.left && controlNode.style.top==barrierANode.style.top ||
            controlNode.style.left==barrierBNode.style.left && controlNode.style.top==barrierBNode.style.top ||
            controlNode.style.left==barrierCNode.style.left && controlNode.style.top==barrierCNode.style.top ||
            controlNode.style.left==barrierDNode.style.left && controlNode.style.top==barrierDNode.style.top ||
            controlNode.style.left==barrierENode.style.left && controlNode.style.top==barrierENode.style.top ||
            controlNode.style.left==barrierFNode.style.left && controlNode.style.top==barrierFNode.style.top ||
            controlNode.style.left==barrierGNode.style.left && controlNode.style.top==barrierGNode.style.top ||
            controlNode.style.left==barrierHNode.style.left && controlNode.style.top==barrierHNode.style.top ){
            //Num();
            switch(controlNode.value){
            case "left":
                controlNode.style.left=parseInt(
                    controlNode.style.left)+44+"px"
            break
            case "right": 
            controlNode.style.left=parseInt(
                    controlNode.style.left)-44+"px"
            break
            case "up":
            controlNode.style.top=parseInt(
                    controlNode.style.top)+44+"px"
            break
            case "down":
            controlNode.style.top=parseInt(
                    controlNode.style.top)-44+"px"
            break
        }
        }

        // 统计分数
        if(controlNode.style.left==bonusFiveNode.style.left && 
        controlNode.style.top==bonusFiveNode.style.top){
            mark = 5;
        } else if(controlNode.style.left==bonusTenNode.style.left && 
        controlNode.style.top==bonusTenNode.style.top){
            mark = 10;
        } else if(controlNode.style.left==bonusTwentyNode.style.left && 
        controlNode.style.top==bonusTwentyNode.style.top){
            mark = 20;
        } else if(controlNode.style.left==bonusThirtyNode.style.left && 
        controlNode.style.top==bonusThirtyNode.style.top){
            mark = 30;
        } else if(controlNode.style.left==bonusFiftyNode.style.left && 
        controlNode.style.top==bonusFiftyNode.style.top){
            mark = 50;
        } else if(controlNode.style.left==bonusHundredNode.style.left && 
        controlNode.style.top==bonusHundredNode.style.top){
            mark = 100;
        } 
        else {
            mark=0;
        }
        score = score + mark;
        updateScore();
    }


    var t=setInterval(move,100)

    // 通过键盘控制
    document.onkeydown=function(e){
        // console.log(e.keyCode)
         switch(e.keyCode){
             case 37:
                 controlNode.value="left"
             break
             case 38:
                  controlNode.value="up"
             break
             case 39:
                  controlNode.value="right"
             break
             case 40:
                  controlNode.value="down"
             break
         }
    }

    // update分数
    function updateScore(){  
        document.getElementById("score").innerHTML = score;  
    }  

    // 显示倒计时

    var num = 30;
    $("#start").click(function(){
        
        setInterval(function(){
            num --;
            if (num >= 0){
                var time = document.getElementById('time');
                time.innerHTML = num;
            }
            if(num==0){
                clearInterval(t);
                alert("Game Over");
            }
        },1000);
    })

    // 重新开始
    function reloadPage(){
        location.reload();
    }



