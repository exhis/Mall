<template>
  <div>
       <!-- 标题部分 -->
      <div class="titleStyle">
        <h4>{{this.newsInfo.title}}</h4>
        <p>
          <span>{{this.newsInfo.add_time | fmtDate}}</span>&nbsp;&nbsp;
          <span>{{this.newsInfo.click}}次浏览</span>&nbsp;&nbsp;
          <span>分类:民生经济</span>
        </p>
      </div>
      <!-- 内容部分 -->
      <div class="contentStyle">
        <p v-html="this.newsInfo.content"></p>
      </div>
      <!-- 评论子组件 -->
      <subcomponent :commentId="this.$route.params.newsId"></subcomponent>
  </div>
</template>
<style scoped>
  .titleStyle,.contentStyle{
    padding: 8px;
  }

  .titleStyle{
    border-bottom: 1px solid rgba(92,92,92,0.3);
  }

  h4{
    color: #0094ff;
    font-size: 16px;
  }
</style>


<script>
import Common from '../../common/common.js'
import subcomponent from '../subcomponents/subcomponents.vue'
export default {
  data(){
      return{
          newsInfo:{}
      }
  },
  created(){
      this.getNewsInfoData()
  },
  methods:{
      getNewsInfoData(){
          const url = `${Common.apihost}api/getnew/${this.$route.params.newsId}`
          this.$http.get(url).then(response=>{
              this.newsInfo = response.body.message[0]
          })
      }
  },
  components:{
    subcomponent:subcomponent
  }
}
</script>
