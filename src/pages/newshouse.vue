<template>
  <div class="contWarp">
    <div class="contWarp-fl">
      <new-content :newcontentList="contentList"></new-content>
    </div>
    <div class="contWarp-fr">
      <div class="paihang">
        <div class="toptitle">
          <div class="rightTitle">
            热门排行榜
          </div>
        </div>
        <new-img wordOrimg='2' :newimgList="imgList"></new-img>
      </div>
     
    </div>
  </div>
</template>
<script>
import newContent from "@/components/newcontent.vue";
import newImg from "@/components/newimg.vue";
export default {
    components:{
      newContent,
      newImg
    },
    data(){
      return {
        contentList:[
          {url:require('../assets/item.jpg'),name:'恒大滨江悦府丨全龄生活大城，悦享缤纷文旅配套',content:"一座充满着历史底蕴的城和一群饱满热血的人，在新时代下，继续演绎着娄文化跨越千年的不老传说，城市化改革进程加快，太仓城市发展不断加速。，城市化改革进程加快，太仓城市发展不断加速。",time:"房产在线  2019-12-05"},
          {url:'',name:'恒大滨江悦府丨全龄生活大城，悦享缤纷文旅配套',content:"一座充满着历史底蕴的城和一群饱满热血的人，在新时代下，继续演绎着娄文化跨越千年的不老传说，城市化改革进程加快，太仓城市发展不断加速。，城市化改革进程加快，太仓城市发展不断加速。",time:"房产在线  2019-12-05"},
          {url:'',name:'恒大滨江悦府丨全龄生活大城，悦享缤纷文旅配套',content:"一座充满着历史底蕴的城和一群饱满热血的人，在新时代下，继续演绎着娄文化跨越千年的不老传说，城市化改革进程加快，太仓城市发展不断加速。，城市化改革进程加快，太仓城市发展不断加速。",time:"房产在线  2019-12-05"},
          {url:require('../assets/item.jpg'),name:'恒大滨江悦府丨全龄生活大城，悦享缤纷文旅配套',content:"一座充满着历史底蕴的城和一群饱满热血的人，在新时代下，继续演绎着娄文化跨越千年的不老传说，城市化改革进程加快，太仓城市发展不断加速。，城市化改革进程加快，太仓城市发展不断加速。",time:"房产在线  2019-12-05"},
          {url:'',name:'恒大滨江悦府丨全龄生活大城，悦享缤纷文旅配套',content:"一座充满着历史底蕴的城和一群饱满热血的人，在新时代下，继续演绎着娄文化跨越千年的不老传说，城市化改革进程加快，太仓城市发展不断加速。，城市化改革进程加快，太仓城市发展不断加速。",time:"房产在线  2019-12-05"},
        ],
        imgList:[
          {word:'现在上海外地人可以租房搬家进小区吗？'},
          {word:'现在上海外地人可以租房搬家进小区吗？'},
          {word:'现在上海外地人可以租房搬家进小区吗？'},
          {word:'现在上海外地人可以租房搬家进小区吗？'},
          {word:'现在上海外地人可以租房搬家进小区吗？'}
        ]
      }
    }
}
</script>
<style scoped>
  .contWarp{
  margin-top: 10px;
  width: 100%;
}
.contWarp-fl{
  float: left;
  width: 870px;
}
.contWarp-fr{
  float: right;
  width: 293px;
  /* border: 1px solid #ddd; */
}
.paihang{
  border: 1px solid #ddd;
}
.rightTitle{
  float: left;
  font-size: 22px;
  line-height: 40px;
  font-weight: 600;
  text-align: left;

}
.toptitle{
  padding: 0px 15px;
  width: calc(100% - 30px);
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