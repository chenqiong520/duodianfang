<template>
  <div class="contWarp clearfix">
    <div class="contWarp-fl">
      <new-content :newcontentList="contentList"></new-content>
      <pagination :pagination="page" :sizeChange="sizeChange" :pageChange="pageChange"></pagination>
    </div>
    <div class="contWarp-fr">
      <hot-news></hot-news>
    </div>
  </div>
</template>
<script>
import newContent from "@/components/newcontent.vue";
import hotNews from "@/components/hotNews.vue";
import pagination from "@/components/pagination.vue";
export default {
    components:{
      newContent,
      hotNews,
      pagination
    },
    data(){
      return {
        page:{
          total: 0,
          pageNo: 1,
          pageSize: 10,
        },
        contentList:[ ],
      }
    },
  mounted() {
      this.getNewsList()
  },
  methods: {
      getNewsList() {
        let params = this.api.getParam('news1', {type: '3', ctid: this.$cookie.get('ctid')}, {paging: true,  pageNow:this.page.pageNo, pageSize:this.page.pageSize,
          order:"nrid",  sort:"desc" })
        this.api.postData(this, params).then((res) => {
          if (res.code === 0) {
            this.page.total = res.data.total
            this.contentList= res.data.rows
          } else {

          }
        }).catch((code) => {

        })
      },
    sizeChange (size) {
      this.page.pageSize = size
      this.getNewsList()
    },
    pageChange (page) {
      this.page.pageNo = page
      this.getNewsList()
    },
  }
}
</script>
<style scoped>
  .contWarp{
  margin-top: 10px;
  width: 100%;
}
.contWarp-fl{
  float: left;
  width: 870px;
}
.contWarp-fr{
  float: right;
  width: 293px;
  /* border: 1px solid #ddd; */
}


</style>
