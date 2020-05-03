<template>
  <div class="main">
    <div class="searchWarp">
      <el-card class="box-card">
        <my-select typeAll='1' title="位置" :areaList="areaList" :lineList="lineList" @chidrenFnOne="selectValuearea" @chidrenFnTwo="selectValueline"></my-select>
        <my-select typeAll='1' title="价格" :areaList="OnlypriceList" :lineList="allpriceList" @chidrenFnOne="selectValueonly" @chidrenFnTwo="selectValueall"></my-select>
        <my-select typeAll='2' title="户型" :mylist="typeArea" @chidrenFnthree="typeAreaselect" ></my-select>
        <my-select typeAll='2' title="面积" :mylist="mainjiArea" @chidrenFnthree="typeAreaselect" ></my-select>
        <my-select typeAll='3' title="更多" :shuomingArray="shuomingArray" :optionsArray="optionsList" @chidrenFnfour="getSelectValue"></my-select>
      </el-card>
    </div>
    <div class="contWarp">
      <div class="contWarp-fl">
        <el-tabs type="border-card">
          <el-tab-pane label="全部楼盘">
            <div class="itemHeader">
              <span class="allmx">共有<span>42</span>个符合要求的长沙楼盘</span>
              <span class="allpx" >
                <span @click="handhleCaret(1)" :class="[myCaret==1?'mypint':'']">默认排序</span>
                <span @click="handhleCaret(2)" :class="[myCaret==2?'mypint':'']">价格<i class="el-icon-d-caret"></i></span>
                <span @click="handhleCaret(3)" :class="[myCaret==3?'mypint':'']">开盘时间<i class="el-icon-d-caret"></i></span>
              </span>
            </div>
            <my-warp :warpList="allList"></my-warp>
          </el-tab-pane>
          <el-tab-pane label="优惠楼盘">
            <div class="itemHeader">
              <span class="allmx">共有<span>42</span>个符合要求的长沙楼盘</span>
              <span class="allpx" >
                <span @click="handhleCaret(1)" :class="[myCaret==1?'mypint':'']">默认排序</span>
                <span @click="handhleCaret(2)" :class="[myCaret==2?'mypint':'']">价格<i class="el-icon-d-caret"></i></span>
                <span @click="handhleCaret(3)" :class="[myCaret==3?'mypint':'']">开盘时间<i class="el-icon-d-caret"></i></span>
              </span>
            </div>
            <my-warp :warpList="allList"></my-warp>
          </el-tab-pane>
          <el-tab-pane label="品牌楼盘">
            <div class="itemHeader">
              <span class="allmx">共有<span>42</span>个符合要求的长沙楼盘</span>
              <span class="allpx" >
                <span @click="handhleCaret(1)" :class="[myCaret==1?'mypint':'']">默认排序</span>
                <span @click="handhleCaret(2)" :class="[myCaret==2?'mypint':'']">价格<i class="el-icon-d-caret"></i></span>
                <span @click="handhleCaret(3)" :class="[myCaret==3?'mypint':'']">开盘时间<i class="el-icon-d-caret"></i></span>
              </span>
            </div>
            <my-warp :warpList="allList"></my-warp>
          </el-tab-pane>
          <pagination :pagination="pagination" :sizeChange="sizeChange" :pageChange="pageChange"></pagination>
        </el-tabs>
      </div>
      <div class="contWarp-fr">
        <div class="toptitle">
          <div class="rightTitle">
            房产问答
          </div>
          <div class="more">更多<i class="el-icon-d-arrow-right"></i></div>
        </div>
        
        <new-img wordOrimg='1' :newimgList="imgList"></new-img>
      </div>
    </div>
   
  </div>
</template>
<script>
import mySelect from "@/components/select.vue";
import myWarp from "@/components/newwarp.vue";
import newImg from "@/components/newimg.vue";
import pagination from "@/components/pagination.vue";
export default {
    components:{
      mySelect,
      myWarp,
      newImg,
      pagination
    },
    data(){
      return {
       areaIndex:false,
       priceIndex:false,
       selectIndexarea:0,
       selectIndexline:0,
       selectIndexpriceonly:0,
       selectIndexpriceall:0,
       areaList:[
         {label:'全部',value:'1'},
         {label:'龙岗',value:'2'},
         {label:'南山',value:'3'},
         {label:'宝安',value:'4'},
         {label:'深圳周边',value:'4'},
         {label:'龙华区',value:'5'},
         {label:'福田',value:'6'},
         {label:'罗湖',value:'7'},
         {label:'坪山区',value:'8'},
         {label:'光明',value:'9'},
         {label:'盐田',value:'10'},
         {label:'大鹏新区',value:'11'},
         {label:'惠州',value:'12'}
       ],
       lineList:[
        {label:'全部',value:'1'},
        {label:'1号线',value:'2'},
        {label:'2号线',value:'3'},
        {label:'3号线',value:'4'},
        {label:'4号线',value:'4'},
        {label:'5号线',value:'5'},
        {label:'7号线',value:'6'},
        {label:'9号线',value:'7'},
        {label:'11号线',value:'8'}
              
       ],
       OnlypriceList:[
        {label:'全部',value:'1'},
        {label:'1万',value:'2'},
        {label:'2万',value:'3'},
        {label:'3万',value:'4'},
        {label:'4万',value:'4'},
        {label:'5万',value:'5'},
        {label:'7万',value:'6'},
        {label:'9万',value:'7'},
        {label:'11万',value:'8'}
       ],
       allpriceList:[
       {label:'全部',value:'1'},
        {label:'10万',value:'2'},
        {label:'20万',value:'3'},
        {label:'30万',value:'4'},
        {label:'40万',value:'4'},
        {label:'50-55万',value:'5'},
        {label:'70-80万',value:'6'},
        {label:'90万',value:'7'},
        {label:'110万',value:'8'}
       ],
       typeArea:[
        {label:'全部',value:'1'},
        {label:'一室',value:'2'},
        {label:'二室',value:'3'},
        {label:'三室',value:'4'},
        {label:'四室',value:'5'},
        {label:'四室以上',value:'6'}
       ],
       mainjiArea:[
        {label:'全部',value:'1'},
        {label:'60m^2',value:'2'},
        {label:'80m^2',value:'3'},
        {label:'90m^2',value:'4'},
        {label:'100m^2',value:'5'},
        {label:'100m^2以上',value:'6'}
       ],
       shuomingArray:['建造年代','房屋类型','楼层','朝向','装修'],
       optionsList:[
          [{
            value: '0',
            label: '全部'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
          [{
            value: '0',
            label: '全部'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
          [{
            value: '0',
            label: '全部'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
          [{
            value: '0',
            label: '全部'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
          [{
            value: '0',
            label: '全部'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }]
       ],
       myCaret:1,
       allList:[
         {url:require('../assets/item.jpg'),name:'碧桂园印象',address:'[ 雨花 雨花中心 ] 香樟路与圭塘路交汇处',price:10999,type:'户型：商住 |建筑面积30-50m2',ifsave:'待售',typeof:'住宅',dus:'vr看房',time:1469382644},
         {url:require('../assets/item.jpg'),name:'碧桂园印象',address:'[ 雨花 雨花中心 ] 香樟路与圭塘路交汇处',price:8325,type:'户型：商住 |建筑面积30-50m2',ifsave:'待售',typeof:'住宅',dus:'vr看房',time:1469342544},
         {url:require('../assets/item.jpg'),name:'碧桂园印象',address:'[ 雨花 雨花中心 ] 香樟路与圭塘路交汇处',price:9523,type:'户型：商住 |建筑面积30-50m2',ifsave:'待售',typeof:'住宅',dus:'vr看房',time:1463453444},
         {url:require('../assets/item.jpg'),name:'碧桂园印象',address:'[ 雨花 雨花中心 ] 香樟路与圭塘路交汇处',price:8642,type:'户型：商住 |建筑面积30-50m2',ifsave:'待售',typeof:'住宅',dus:'vr看房',time:1463453644},
         {url:require('../assets/item.jpg'),name:'碧桂园印象',address:'[ 雨花 雨花中心 ] 香樟路与圭塘路交汇处',price:13023,type:'户型：商住 |建筑面积30-50m2',ifsave:'待售',typeof:'住宅',dus:'vr看房',time:1464532644}
       ],
       imgList:[
        {url:require('../assets/item.jpg'),word:'碧桂园印象1'},
        {url:require('../assets/item.jpg'),word:'碧桂园印象2'},
        {url:require('../assets/item.jpg'),word:'碧桂园印象3'},
        {url:require('../assets/item.jpg'),word:'碧桂园印象4'},
       ],
       pagination: {
          totalItem: 20,
          totalPage: 20,
          curPage: 1,
          perPage: 1,
          textWord:"个有关深圳新房楼盘"
        },
      
      }
    },
    mounted(){
      window.sessionStorage.setItem('warpList',JSON.stringify(this.allList))
      

    },
    methods:{
      overhanle(i){
        if(i==1){
          this.areaIndex = !this.areaIndex
        }
        if(i==2){
          this.priceIndex = !this.priceIndex
        }
      },
      selectValuearea(i){
        console.log(i)
      },
      selectValueline(i){
        console.log(i)
      },
      selectValueonly(i){
        console.log(i)
      },
      selectValueall(i){
        console.log(i)
      },
      typeAreaselect(i){
        console.log(i)
      },
      getSelectValue(i){
        console.log(i)
      },
      handhleCaret(i){
        this.myCaret = i
        if(i==1){
          this.allList =JSON.parse(window.sessionStorage.getItem('warpList')) 
        }else if(i==2){
          function sortNumber(a,b){
            return a.price - b.price
          }
          this.allList = this.allList.sort(sortNumber)
        }else if(i==3){
          function sortNumber(a,b){
            return a.time - b.time
          }
          this.allList = this.allList.sort(sortNumber)
        }
      },
      sizeChange (size) {
        this.search.perPage = size
        // this.getData()
      },
      pageChange (page) {
        this.search.page = page
        // this.getData()
      },
    }
}
</script>
<style scoped>
.searchWarp{
  margin-top: 20px;
  width: 100%;
}

.itemDiv{
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






.contWarp{
  margin-top: 10px;
  width: 100%;
  /* height: 1000px; */
  /* border: 1px solid #ddd; */
}
.contWarp-fl{
  float: left;
  width: 870px;
  /* height: 1000px; */
  /* border: 1px solid #ddd; */
}
.contWarp-fr{
  float: right;
  width: 293px;
  /* height: 1000px; */
  border: 1px solid #ddd;
}

.itemHeader{
  width: 100%;
  height: 30px;
  font-size: 14px;
  border-bottom: 1px solid #ddd;
}
.allmx{
  float: left;
  
}
.allmx>span{
  color: red;
}
.allpx{
  float: right;
}
.allpx>span{
margin-left: 30px;
cursor: pointer;
}
.allpx>span:hover{
  color: rgb(255, 208, 75);
}



.mypint{
  color: rgb(255, 208, 75);
}

.rightTitle{
  float: left;
  font-size: 22px;
  line-height: 40px;
  font-weight: 600;
  text-align: left;

}
.toptitle{
  padding: 0px 24px;
  width: calc(100% - 48px);
  height: 40px;
}
.more{
  float: right;
  text-align: right;
  font-size: 14px;
  line-height: 40px;
  color: #999;
  cursor: pointer;
}
</style>