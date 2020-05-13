<template>
  <div class="news_detail">
    <div class="news_main">
      <div class="title">{{news.title}}</div>
      <div class="content" v-html="news.ContentStr"></div>
    </div>
   <div class="hot_news">
     <hot-news ></hot-news>
   </div>
  </div>
</template>

<script>
  import hotNews from "@/components/hotNews.vue";
  export default {
    components:{
      hotNews
    },
    data() {
      return {
        news: {
          title: '',

        },
        list: [ {title:'现在上海外地人可以租房搬家进小区吗？'},
          {title:'现在上海外地人可以租房搬家进小区吗？'},
          {title:'现在上海外地人可以租房搬家进小区吗？'},
          {title:'现在上海外地人可以租房搬家进小区吗？'},
          {title:'现在上海外地人可以租房搬家进小区吗？'}]
      }

    },
    watch: {
      $route (to, from) {
        this.getNewsDetailById()
      }
    },
    mounted() {
      this.getNewsDetailById()
    },
    methods: {
      getNewsDetailById() {
        const newsId = this.$route.params.id;
        let params = this.api.getParam('news5', {nrid: newsId})
        this.api.postData(this, params).then((res) => {
          if (res.code === 0) {
            this.news = res.data
          } else {

          }
        }).catch((code) => {

        })
      }
    }
  }


</script>
<style lang="scss" scoped>
 .news_detail {
   display: flex;
   margin-top: 20px;
   .news_main {
     width: 870px;
     margin-right: 20px;
     .title {
      text-align: center;
       font-size: 32px;
       margin-bottom: 20px;
     }
     .content {
        line-height: 24px;
       img {
         max-width:100%;
       }
     }
   }
   .hot_news {
     flex: 1;
   }
 }
</style>
