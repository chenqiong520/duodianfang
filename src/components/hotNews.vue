<template>
  <div class="paihang">
    <div class="toptitle">
      <div class="rightTitle">
        热门排行榜
      </div>
    </div>
    <section>
      <div class="newItemT" v-for="(i,k) in list" :key="k" >
        <template>
          <div class="mywordT">
            <span :class="['pint',(k+1)==1?'red':(k+1)==2?'red':(k+1)==3?'red':'gray'] " >{{k+1}}</span>
            <span class="content" @click="toDetailNews(i.nrid)">{{i.title}}</span>
          </div>
        </template>
      </div>
    </section>
  </div>

</template>
<script>
  export default {
    name:'newimg',
    data() {
      return {
        list: []
      }
    },
    mounted() {
      this.getNewsList()
    },
    methods: {
      getNewsList() {
        let params = this.api.getParam('news1', {type: '3', ctid: this.$cookie.get('ctid')}, {paging: true,  pageNow:1, pageSize:10, order:"nrid",  sort:"desc" })
        this.api.postData(this, params).then((res) => {
          if (res.code === 0) {

            this.list= res.data.rows
          } else {

          }
        }).catch((code) => {

        })
      },
      toDetailNews(id) {
        this.$router.push(`/news/detail/${id}`)
      }
    }
  }
</script>
<style scoped>
  .paihang{
    border: 1px solid #ddd;
  }
  .rightTitle{
    float: left;
    font-size: 22px;
    line-height: 40px;
    font-weight: 600;
    text-align: left;

  }
  .toptitle{
    padding: 0px 15px;
    width: calc(100% - 30px);
    height: 40px;
  }
  .newItemT{
    text-align: left;
    font-size: 14px;
    padding:0px 15px 0px;
    margin-bottom: 10px;
  }
  .mywordT{
    cursor: pointer;
    line-height: 24px;
  }
  .pint{
    padding: 0px 4px;
    margin-right: 2px;
    color: #fff;

  }
  .red{
    background-color: #ff552e;
  }
  .gray{
    background-color: #ddd;
  }
  .mywordT>.content:hover{
    color: red;
    text-decoration: underline;
  }
  .newItem:hover{
    background:#f9f9f9
  }
  .newItem>div{
    padding: 5px 0px 10px;
    border-bottom: 1px dashed #ddd;
  }
  .newItem:last-child>.myword{
    border-bottom: none!important;
  }
</style>
