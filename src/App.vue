<template>
  <div>
    <!-- 头部 -->
    <mt-header fixed title="MALL"></mt-header>
    <div @click="goBack()" v-show="isShowBack" class="backStyle">&lt;返回</div>
    <!-- 中间 -->
    <router-view class="routerStyle"></router-view>
    <!-- 底部 -->
    <mt-tabbar fixed :class="isShowTabBar ? '' : 'hiddenTabBarStyle'">
        <mt-tab-item>
          <router-link to="/home">
            <img src="http://st.360buyimg.com/m/images/index/a-home.png">
          </router-link>
        </mt-tab-item>
        <mt-tab-item>
          <router-link to="/category">
            <img src="http://st.360buyimg.com/m/images/index/n-catergry.png">
          </router-link>
        </mt-tab-item>
        <mt-tab-item>
          <router-link to="/find">
            <img src="http://st.360buyimg.com/m/images/index/n-find.png">
          </router-link>
        </mt-tab-item>
        <mt-tab-item>
          <router-link to="/shopcart">
          <img src="http://st.360buyimg.com/m/images/index/n-cart.png">
          <span v-show="!(count === 0)" class="mui-badge">{{count}}</span>
          </router-link>
        </mt-tab-item>
        <mt-tab-item>
          <router-link to="/mine">
          <img src="http://st.360buyimg.com/m/images/index/n-me.png">
          </router-link>
        </mt-tab-item>
    </mt-tabbar>

  </div>
</template>

<style scoped>
  .mint-tabbar > .mint-tab-item.is-selected{
    background-color: #FAFAFA;
  }
  img{
    width: 65px;
    height: 50px;
  }

   /* 路由占位符的样式 */
  .routerStyle{
    padding-top: 40px;
  }

  .backStyle{
    color: white;
    font-size: 14px;
    font-weight: 900;
    position: fixed;
    left: 10px;
    top: 10px;
    z-index: 2;
  }

  /**
  * 隐藏底部的TabBar样式
  */
  .hiddenTabBarStyle{
    display: none;
  }

  .mui-badge{
    background-color: red;
    color: white;
    position: absolute;
    right: 90px;
    top: 9px;
  }
</style>

<script>
import bus from './common/commonvue.js'

export default {
  data(){
    return{
      isShowBack:false,
      isShowTabBar:true,
      count : 0
    }
  },
  created(){
    this.isShowOrHidden(this.$route.path)
    bus.$on('badgeChange',function(goodsCount){
        this.count += goodsCount
      }.bind(this))
  },
  updated(){
    this.count = this.$store.getters.getGoodsTotalCount
  },
  methods:{
    goBack(){
      this.$router.go(-1)
    },
    isShowOrHidden(path){ //根据当前路径显示or隐藏返回按钮
      if(path!='/home'){
        this.isShowBack = true
        this.isShowTabBar = false
      }else{
        this.isShowBack = false,
        this.isShowTabBar = true
      }
    }
  },
  watch:{
    $route:function(newsValue,oldValue){
      this.isShowOrHidden(newsValue.path)
    }
  }
}
</script>
