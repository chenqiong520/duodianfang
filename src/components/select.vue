<template>
  <section>
    <div class="itemDiv">
      <el-row :gutter="24" v-if="typeAll=='1'">
        <el-col :span="2" class="itemTitle">
          {{title}}
        </el-col>
        <el-col :span="22">
          <el-row :gutter="24">
            <el-col :span="2">
              <span @mouseover="overhanle(1)" :class="['selectPoint', areaIndex?'':'mypint']">区域找房</span> 
            </el-col>
            <el-col :span="2">
              <span @mouseover="overhanle(1)" :class="['selectPoint', areaIndex?'mypint':'']">位置找房</span>
            </el-col>
          </el-row>
          <div v-if="!areaIndex">
            <span class="item-list" v-for="(i,k) in areaList" :key="k" @click="selectValuearea(i,k)" :class="[k==selectIndexarea?'mypint':'']">{{i.label}}</span>
          </div>
          <div v-if="areaIndex">
            <span class="item-list" v-for="(i,k) in lineList" :key="k" @click="selectValueline(i,k)" :class="[k==selectIndexline?'mypint':'']">{{i.label}}</span>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="24" v-if="typeAll=='2'">
        <el-col :span="2" class="itemTitle">
          {{title}}
        </el-col>
        <el-col :span="22">
          <div>
            <span class="item-list" v-for="(i,k) in mylist" :key="k" @click="onleySelect(i,k)" :class="[k==onlyIndex?'mypint':'']">{{i.label}}</span>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="24" v-if="typeAll=='3'">
        <el-col :span="2" class="itemTitle">
          {{title}}
        </el-col>
        <el-col :span="22">
          <el-row :gutter="24">
            <el-col :span="3" v-for="(i,k) in optionsArray" :key="k">
              <el-select size="mini" v-model="allvalue[k]" :placeholder="shuomingArray[k]" @change="mychange">
                <el-option
                  v-for="item in i"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
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
      props: {
        typeAll:{
          type: String,
          default: () => {
                return 1
            }
        },
        areaList: {
          type: Array,
          default: () => {
                return []
            }
        },
        lineList: {
          type: Array,
          default: () => {
                return []
            }
        },
        title:{
          type: String,
          default: () => {
                return ''
            }
        },
        mylist: {
          type: Array,
          default: () => {
                return []
            }
        },
        optionsArray:{
          type: Array,
          default: () => {
                return []
            }
        },
        shuomingArray:{
          type: Array,
          default: () => {
                return []
            }
        }
      },
      data () {
        return {
          areaIndex:false,
          priceIndex:false,
          selectIndexarea:0,
          selectIndexline:0,
          onlyIndex:0,
          valueArray:[],
          allvalue:['','','','','']
        }
      },
      methods: {
        overhanle(i){
          if(i==1){
            this.areaIndex = !this.areaIndex
          }
          if(i==2){
            this.priceIndex = !this.priceIndex
          }
        },
        selectValuearea(i,k){
          this.selectIndexarea= k
          this.$emit('chidrenFnOne',i)
        },
        selectValueline(i,k){
          this.selectIndexline= k
          this.$emit('chidrenFnTwo',i)
        },
        onleySelect(i,k){
          this.onlyIndex= k
          this.$emit('chidrenFnThree',i)
        },
        mychange(i){
          this.$emit('chidrenFnfour',this.allvalue)
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