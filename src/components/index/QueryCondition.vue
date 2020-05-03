<template>
  <div class="query-condition">
    <div class="inputContent">
      <el-input placeholder="请输入内容" style="width:360px" size="small"></el-input>
      <el-button @click="toNewHourse" slot="append" icon="el-icon-search" size="small" style="background:#ff911b;color: #fff;">新房搜索</el-button>
      <el-button @click="toOldHourse" slot="append" icon="el-icon-search" size="small" style="background:#ff612a;color: #fff;">二手房搜索</el-button>
    </div>
    <div class="searchDetail">
      <div class="detailFl">
        <div class="listContenttitle">
          <span style="float: left;color: #ff612a;">新房</span>
          <span style="float: right;"><a href="#" style="text-decoration: none;color: #2c81cd;"><i class="el-icon-location"></i>地图导航</a></span>
        </div>
        <div class="listContent">
          <span v-for="item in ctqy" @click="toNewHourse" class="link"><a >{{item.ctqyname}}</a></span>
          <div class="priceContent">
            <span v-for="item in dj" @click="toNewHourse" class="link"><a>{{item.dj}}</a></span>
          </div>
        </div>
      </div>
      <div class="detailFr">
        <div class="listContenttitle contenttitle">
          <span style="float: left;color: #ff612a;">二手房</span>
          <span style="float: right;"><a href="#" style="text-decoration: none;color: #2c81cd;"><i class="el-icon-location"></i>地图导航</a></span>
        </div>
        <div class="listContent borderLeft">
          <span v-for="item in ctqy" @click="toOldHourse" class="link"><a>{{item.ctqyname}}</a></span>
          <div class="priceContent">
            <span v-for="item in dj" @click="toOldHourse" class="link"><a >{{item.dj}}</a></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    props: {
      ctqy : { //城市 辖区
        type: Array,
        default: () => {
          return []
        }
      },
      dj : { //-楼盘查询条件字典，单价范围
        type: Array,
        default: () => {
          return []
        }
      }
    },
    methods: {
      toNewHourse() {
        this.$router.push('/newhouse')
      },
      toOldHourse() {
        this.$router.push('/oldhouse')
      }

    }
  }
</script>
