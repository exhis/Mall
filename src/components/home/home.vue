<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in lunboArray" :key="index">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1520761810850&di=c40390c56cdb807f193783b3ce7962c7&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0197935711ee3c6ac7251343b3addc.jpg" alt="">
      </mt-swipe-item>
    </mt-swipe>

    <!-- 九宫格 -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/news/newslist">
            <span class="mui-icon mui-icon-home"></span>
            <div class="mui-media-body">新闻咨询</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/photo/photolist">
            <span class="mui-icon mui-icon-email">
              <span class="mui-badge">1</span>
            </span>
            <div class="mui-media-body">图片分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/goods/goodslist">
            <span class="mui-icon mui-icon-chatbubble"></span>
            <div class="mui-media-body">商品购买</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-location"></span>
            <div class="mui-media-body">留言反馈</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-search"></span>
            <div class="mui-media-body">视频专区</div>
          </a>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
            <span class="mui-icon mui-icon-phone"></span>
            <div class="mui-media-body">联系我们</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
  /* 轮播图样式 */

  .mint-swipe {
    width: 100%;
    height: 250px;
  }

  img {
    width: 100%;
    height: 100%;
  }
  /* 九宫格样式 */

  .mui-grid-view.mui-grid-9 {
    background-color: #ffffff;
  }

  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: 0px;
  }

  .mui-icon::before {
    content: "";
  }

  .mui-icon {
    width: 50px;
    height: 50px;
  }

  .mui-icon-home {
    background-image: url(../../statics/images/menu3.png);
    background-size: cover;
  }

  .mui-icon-email {
    background-image: url(../../statics/images/menu4.png);
    background-size: cover;
  }

  .mui-icon-chatbubble {
    background-image: url(../../statics/images/menu5.png);
    background-size: cover;
  }

  .mui-icon-location {
    background-image: url(../../statics/images/menu6.png);
    background-size: cover;
  }

  .mui-icon-search {
    background-image: url(../../statics/images/menu9.png);
    background-size: cover;
  }

  .mui-icon-phone {
    background-image: url(../../statics/images/menu10.png);
    background-size: cover;
  }

</style>

<script>
  //导入对象
  import common from '../../common/common.js'
  //导出对象
  export default {
    data() {
      return {
        lunboArray: []
      };
    },
    created() {
      this.getLunboArrayData();
    },
    methods: {
      getLunboArrayData() {
        const url =`${common.apihost}api/getlunbo`;

        this.$http.get(url).then(Response => {
          // console.log(Response.body);
          this.lunboArray = Response.body.message;
        });
      }
    }
  };

</script>
