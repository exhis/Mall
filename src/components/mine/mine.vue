<template>
<div class="xixi">
    <div class="getTask">
      <p>领取任务</p>
    </div>
    <div class="finish">
        <P>已完成</P>
    </div>
    <div class="taskStatu">
        <p class="cancel">取消任务</p>
        <div class="submitTask">提交任务
            <p>过期倒计时00:00:00</p>
        </div>
    </div>
    <div class="failure">
        <p>任务失败</p>
    </div>
    <div class="stale">
        <p>已过期</p>
    </div>
    <div class="check">
        <p>审核中</p>
    </div>
</div>
  
</template>


<style scoped>
.xixi{
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    width: 100%;
    height: 400px;
}
.getTask,.finish,.taskStatu,.failure,.stale,.check{
    width: 100%;
    background: cornflowerblue;
    height: 50px;
    flex:1;
    margin: 4px auto;
}
.failure,.stale{
    background: gainsboro;
}
p{
    color: white;
    font-size: 20px;
    text-align: center;
    line-height: 50px;
    margin: 0;
}
.failure p,.stale p{
    color: black;
}
.taskStatu{
    display: flex;
}
.taskStatu .cancel{
    flex:1;
    background: gainsboro;
    line-height: 50px;
    color: black;
    height: 100%;
}
.taskStatu .submitTask{
    flex: 1;
    height: 100%;
    width: 100%;
    text-align: center;
    font-size: 18px;   
    padding: 3px; 
    color: white;
}
.taskStatu .submitTask p{
    width: 100%;
    height: 50px;
    line-height: 30px;
    color: white;
    font-size: 16px;
}
</style>

<script>
export default {
  
}
</script>

