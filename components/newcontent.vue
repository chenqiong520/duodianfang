<template>
  <section>
    <div class="itemWarp" v-for="(i,k) in newcontentList" :key="k">
      <el-row :gutter="24">
        <el-col :span="6" v-if="i.url">
          <img :src="i.url" alt="item" width="100%">
        </el-col>
        <el-col :span="18" v-if="i.url">
          <p class="itemName">{{ i.name }}</p>
          <div class="itemContent">{{ i.content }}</div>
          <div class="itemTime">{{ i.time }}</div>
        </el-col>
        <el-col :span="24" v-if="!i.url">
          <p class="itemName">{{ i.name }}</p>
          <div class="itemContent">{{ i.content }}</div>
          <div class="itemTime">{{ i.time }}</div>
        </el-col>
      </el-row>
    </div>
  </section>
</template>
<script>
export default {
  name: 'NewContent',
  props: {
    newcontentList: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>
<style scoped>
.itemWarp {
  padding: 20px 15px 15px;
  border-bottom: 1px dashed #ddd;
  font-size: 14px;
  text-align: left;
  cursor: pointer;
}
.itemWarp:hover {
  background: #f9f9f9;
}
.itemName {
  font-size: 22px;
  font-weight: 600;
  line-height: 24px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.address {
  width: 100%;
  height: 30px;
  margin-top: 8px;
  color: #999;
  /* text-align: left; */
}
.itemContent {
  color: #999;
  width: 100%;
  height: 105px;
  margin-top: 6px;
  overflow: hidden;
  line-height: 21px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}
.itemTime {
  color: #999;
  font-size: 12px;
}
</style>
