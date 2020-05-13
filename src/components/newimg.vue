<template>
  <section>
    <div class="newItem" v-for="(i,k) in newimgList" :key="k">
        <img :src="i.cxfmtpurl" alt="item" width="100%">
        <div class="myword">{{i.lpname}}</div>
    </div>
  </section>
</template>
<script>
  export default {
      name:'newimg',
      props: {
        newimgList:{
          type: Array,
          default: () => {
            return []
          }
        }
      }
  }
</script>
<style scoped>
  .newItem{
    text-align: left;
    font-size: 14px;
    padding:15px 24px 0px;
    cursor: pointer;
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
