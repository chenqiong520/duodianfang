<template>
  <section>
    <div class="newItem" v-for="(i,k) in newimgList" :key="k" v-if="wordOrimg=='1'">
        <img :src="i.url" alt="item" width="100%">
        <div class="myword">{{i.word}}</div>
    </div>
    <div class="newItemT" v-for="(i,k) in newimgList" :key="k"  v-if="wordOrimg!='1'">
      <template>
        <div class="mywordT">
          <span :class="['pint',(k+1)==1?'red':(k+1)==2?'red':(k+1)==3?'red':'gray'] " >{{k+1}}</span>
          <span class="content">{{i.word}}</span>
        </div>
      </template>
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
        },
        wordOrimg:{
          type: String,
          default: () => {
            return 
          }
        },
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
  .newItemT{
    text-align: left;
    font-size: 14px;
    padding:0px 15px 0px;
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