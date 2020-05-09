<template>
  <section>
    <div class="footerpage">
      <span class="text">共有 {{pagination.total}}条</span>
      <el-pagination background
        style="float: right;"
        @size-change="sizeChange"
        @current-change="pageChange"
        :current-page="pagination.pageNo"
        :page-size="parseInt(pagination.pageSize)"
        :page-sizes="[10, 15,20,50,100]"
        layout="prev, pager, next"
        :total="pagination.total"
        v-if="pagination.total > 0" />
    </div>
  </section>
  
</template>
<script>
export default {
name: 'pagination',
props: {
  pagination: {
    type: Object,
    default () {
      return {
        pageNo: 1,
        pageSize: 20,
        total: 20
      }
    }
  },
  sizeChange: {
    type: Function,
    default: pageSize => {}
  },
  pageChange: {
    type: Function,
    default: pageNo => {}
  }
},
methods: {
}
}
</script>
<style scoped>
  .footerpage{
    width: calc(100% - 16px);
    padding: 10px 8px;
    height: 30px;
    clear: both;
  }
  .text{
    float: left;
    line-height: 30px;
    font-size: 14px;
  }
</style>
