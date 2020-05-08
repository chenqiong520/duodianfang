<template>
  <section>
    <div>
      <el-row :gutter="24" class="itemDiv">
        <el-col :span="2" class="itemTitle">
         位置
        </el-col>
        <el-col :span="22">
          <el-row :gutter="24">
            <el-col :span="2">
              <span @mouseover="overhanle(1)" :class="['selectPoint', index === 1?'mypint':'']">区域找房</span>
            </el-col>
            <el-col :span="2">
              <!--<span @mouseover="overhanle(2)" :class="['selectPoint', index===2?'mypint':'']">位置找房</span>-->
            </el-col>
          </el-row>
          <div v-if="index === 1">
            <span class="item-list" v-for="(i,k) in areaList" :key="k" @click="selectValuearea(i,k)" :class="[k==selectIndexarea?'mypint':'']">{{i.ctqyname}}</span>
          </div>
          <div v-else>
            <span class="item-list" v-for="(i,k) in lineList" :key="k" @click="selectValueline(i,k)" :class="[k==selectIndexline?'mypint':'']">{{i.label}}</span>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="24" class="itemDiv">
        <el-col :span="2" class="itemTitle">
          价格
        </el-col>
        <el-col :span="22">
          <el-row :gutter="24">
            <el-col :span="2">
              <span @mouseover="overPrice(1)" :class="['selectPoint', priceIndex === 1?'mypint':'']">单价</span>
            </el-col>
            <el-col :span="2">
              <span @mouseover="overPrice(2)" :class="['selectPoint', priceIndex===2?'mypint':'']">总价</span>
            </el-col>
          </el-row>
          <div v-if="priceIndex === 1">
            <span class="item-list" v-for="(i,k) in averagePriceList" :key="k" @click="selectAveragePriceValue(i,k)" :class="[k==selectIndexAverage?'mypint':'']">{{i.dj}}</span>
          </div>
          <div v-else>
            <span class="item-list" v-for="(i,k) in totalPriceList" :key="k" @click="selectTotalPriceValue(i,k)" :class="[k==selectIndexTotal?'mypint':'']">{{i.zj}}</span>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="24" class="itemDiv">
        <el-col :span="2" class="itemTitle">
          户型
        </el-col>
        <el-col :span="22">
          <div>
            <span class="item-list"  @click="hxSelect('all','all')" :class="['all'==onlyIndex?'mypint':'']">全部</span>
            <span  class="item-list"v-if ="metadata.HX" v-for="(i,k) in metadata.HX" :key="k" @click="hxSelect(i,k)" :class="[k==onlyIndex?'mypint':'']">{{i.aaa103}}</span>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="24" class="itemDiv">
        <el-col :span="2" class="itemTitle">
          面积
        </el-col>
        <el-col :span="22">
         <!-- <div>
            <span class="item-list" v-for="(i,k) in mylist" :key="k" @click="onleySelect(i,k)" :class="[k==onlyIndex?'mypint':'']">{{i.label}}</span>
          </div>-->
        </el-col>
      </el-row>
      <el-row :gutter="24" class="itemDiv">
        <el-col :span="2" class="itemTitle">
          更多
        </el-col>
        <el-col :span="22">
          <el-row :gutter="24">
            <el-col :span="3">
              <el-select size="mini" v-model="conditions.JCNT"  placeholder="建造年代" @change="mychange">
                <el-option
                  v-for="item in metadata.JCNT"
                  :key="item.aaa101"
                  :label="item.aaa103"
                  :value="item.aaa101">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="3">
              <el-select size="mini" v-model="conditions.JZLX" placeholder="房屋类型" @change="mychange">
                <el-option
                  v-for="item in metadata.JZLX"
                  :key="item.aaa101"
                  :label="item.aaa103"
                  :value="item.aaa101">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="3">
              <el-select size="mini" v-model="conditions.LC" placeholder="楼层" @change="mychange">
                <el-option
                  v-for="item in metadata.LC"
                  :key="item.aaa101"
                  :label="item.aaa103"
                  :value="item.aaa101">
                </el-option>
              </el-select>
            </el-col><el-col :span="3">
            <el-select size="mini" v-model="conditions.FWCX" placeholder="朝向" @change="mychange">
              <el-option
                v-for="item in metadata.FWCX"
                :key="item.aaa101"
                :label="item.aaa103"
                :value="item.aaa101">
              </el-option>
            </el-select>
          </el-col><el-col :span="3">
            <el-select size="mini" v-model="conditions.ZXZK" placeholder="装修" @change="mychange">
              <el-option
                v-for="item in metadata.ZXZK"
                :key="item.aaa101"
                :label="item.aaa103"
                :value="item.aaa101">
              </el-option>
            </el-select>
          </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>

  </section>
</template>
<script>
  export default {
      name:'myselect',
      data () {
        return {
          index:1,
          priceIndex:1,
          selectIndexAverage: '',
          selectIndexTotal: '',
          selectIndexarea:0,
          selectIndexline:0,
          onlyIndex:'all',
          valueArray:[],
          allvalue:['','','','',''],
          areaList: JSON.parse(window.localStorage.getItem('areaList'))  || [],
          lineList: [],
          averagePriceList: JSON.parse(window.localStorage.getItem('averagePriceList')) || [],
          totalPriceList: JSON.parse(window.localStorage.getItem('totalPriceList')) || [],
          conditions: {
            area: '',
            dj: {},
            zj: {},
            hx: '',
            mj: '',
            JCNT: '',
            JZLX: '',
            LC: '',
            FWCX: '',
            ZXZK: ''

          },
          metadata: {
            HX: [],
            JCNT: [], //年代
            JZLX: [], //类型
            LC: [], // 楼层
            FWCX: [],//朝向
            ZXZK: [] // 装修

          }

        }
      },
    mounted() {
      this.init()
    },
    methods: {
        init() {
          this.metadata= this.$root.metadata
          this.areaList.splice(0, 0,{ctqyname: '全部', qybm: null})
          this.averagePriceList.splice(0, 0,{dj: '全部', djmaxvalue: null})
          this.totalPriceList.splice(0, 0,{zj: '全部', zjmaxvalue: null})
        },

      overhanle(i){
       this.index = i
      },
      overPrice(i) {
        this.priceIndex = i
      },
      // 选择区域
      selectValuearea(i,k){
        this.selectIndexarea= k
        this.conditions.area = i.ctqybm
        this.$emit('selectConditions',this.conditions)
      },
      selectValueline(i,k){
        this.selectIndexline= k
        this.$emit('selectConditions',this.conditions)
      },
      // 选择单价
      selectAveragePriceValue(i,k) {
        this.selectIndexAverage = k
        this.conditions.dj.djminvaue = i.djminvaue
        this.conditions.dj.djmaxvalue = i.djmaxvalue
        this.$emit('selectConditions',this.conditions)
      },
      // 选择总价
      selectTotalPriceValue(i,k) {
        this.selectIndexTotal= k
        this.conditions.zj.zjminvalue = i.zjminvalue
        this.conditions.zj.zjmaxvalue = i.zjmaxvalue
        this.$emit('selectConditions',this.conditions)
      },
      hxSelect(i,k){
        this.onlyIndex= k
        this.conditions.hx = i.aaa101
        this.$emit('selectConditions',this.conditions)
      },
      mychange(i){
      /*  this.conditions[i.aaa100] = i.aaa101*/
        this.$emit('selectConditions',this.conditions)
      }
    }
    }
  </script>
  <style scoped>
.itemDiv{
  color: #666;
  width: 100%;
  border-bottom: 1px dashed #DCDFE6;
  text-align: left;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 5px;
  padding: 3px;
}
.itemTitle{
  text-align: center;
}
.selectPoint{
  cursor: pointer;
}
.mypint{
  color: rgb(255, 208, 75);
}

.item-list{
  padding: 0px 8px;
  cursor: pointer;
}
.item-list:first-child{
  padding-left: 0px;
}
  </style>
