<template>
  <section>
    <div class="footerpage">
      <span class="text">共有<span style="color:red">{{ pagination.totalItem }}</span>{{ pagination.textWord }}</span>
      <el-pagination
        @size-change="sizeChange"
        @current-change="pageChange"
        :current-page="pagination.curPage"
        :page-size="parseInt(pagination.perPage)"
        :page-sizes="perPages"
        :total="pagination.totalItem"
        v-if="pagination.totalItem > 0"
        style="float: right;"
        layout="prev, pager, next"
      />
    </div>
  </section>
</template>
<script>
export default {
  name: 'Pagination',
  props: {
    pagination: {
      type: Object,
      default() {
        return {
          curPage: 1,
          perPage: 20,
          totalItem: 20,
          textWord: ''
        }
      }
    },
    // textWord:{
    //   type: String,
    //   default () {
    //     return ''
    //   }
    // },
    sizeChange: {
      type: Function,
      default: size => {}
    },
    pageChange: {
      type: Function,
      default: page => {}
    }
  },
  computed: {
    perPages() {
      const arr = []
      const baseSize = 20
      for (
        let i = 0, len = Math.ceil(this.pagination.totalItem / baseSize);
        i < len;
        i++
      ) {
        arr.push(baseSize * (i + 1))
        if (baseSize * (i + 1) >= 200) {
          break
        }
      }
      return arr
    }
  },
  methods: {}
}
</script>
<style scoped>
.footerpage {
  width: calc(100% - 16px);
  padding: 10px 8px;
  height: 30px;
  clear: both;
}
.text {
  float: left;
  line-height: 30px;
  font-size: 14px;
}
</style>
