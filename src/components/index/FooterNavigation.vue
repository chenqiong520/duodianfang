<template>
  <div class="footer-navigation">
    <el-tabs type="card">
      <el-tab-pane label="在售楼盘">
      </el-tab-pane>
      <el-tab-pane label="即将开盘"></el-tab-pane>
      <div class="flex-layout city-type">
        <div class="city-item">
          <div class="city-name">东莞</div>
          <div class="flex-layout city-house">
            <div class="city-house-item ">西丽城市公寓</div>
            <div class="city-house-item ">西丽城市公寓</div>
            <div class="city-house-item ">西丽城市公寓</div>
            <div class="city-house-item ">西丽城市公寓</div>

          </div>
        </div>
        <div class="city-item">
          <div class="city-name">东莞</div>
          <div class="flex-layout city-house">
            <div class="city-house-item">西丽城市公寓</div>
            <div class="city-house-item">西丽城市公寓</div>
            <div class="city-house-item">西丽城市公寓</div>
            <div class="city-house-item">西丽城市公寓</div>

          </div>
        </div>
        <div class="city-item">
          <div class="city-name">东莞</div>
          <div class="flex-layout city-house">
            <div class="city-house-item">西丽城市公寓</div>
            <div class="city-house-item">西丽城市公寓</div>
            <div class="city-house-item">西丽城市公寓</div>
            <div class="city-house-item">西丽城市公寓</div>

          </div>
        </div>
        <div class="city-item">
          <div class="city-name">东莞</div>
          <div class="flex-layout city-house">
            <div class="city-house-item">西丽城市公寓</div>
            <div class="city-house-item">西丽城市公寓</div>
            <div class="city-house-item">西丽城市公寓</div>
            <div class="city-house-item">西丽城市公寓</div>

          </div>
        </div>
      </div>
    </el-tabs>
  </div>
</template>
<script>
  export default {
      data () {
        return {
        }
      },
      methods: {

      }
    }
  </script>
  <style lang="scss" scoped>
    @import '../../style/theme';
    .footer-navigation {
      margin-bottom: 30px;
      line-height: 24px;
      .city-type {
        font-size: 14px;
        .city-item {
          width: 25%;
          .city-name {
            color:#467e00;
          }
          .city-house {
            flex-wrap: wrap;
          }
          .city-house-item {
            font-size: 12px;
            margin-right: 10px;
            color: $font-color-text;
            cursor: pointer;
            &:hover {
              color: #ff911b;
              text-decoration: underline;
            }
          }
        }
      }
    }
  </style>
