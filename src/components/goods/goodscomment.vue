<template>
   <div>
       <subcomment :commentId="this.$route.query.goodsId"></subcomment>
   </div>
</template>
   
<style scoped>
   
</style>
   
<script>
   //导入评论子组件
   import subcomment from '../subcomponents/subcomponents.vue'
   
   export default {
       components:{
           subcomment
       }
   }
</script>