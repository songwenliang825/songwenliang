<template>
  <div id="app">
    <div class="shoujishezhi">
      <div class="k1">
        <a class="xiaoxituisong">消息推送</a>
        <div class="s1">
          <div class="k11"><i class="el-icon-tickets"></i>     文章更新推送<a class="you" style="color:rgb(189, 183, 183);font-size:14px;">></a></div>
          <div class="xian"></div>
          <div class="k111"><i class="el-icon-star-off"></i>     新消息推送</div>
        </div>
      </div>
      <div class="k2">
        <a class="pianhaoshezhi">偏好设置</a>
        <div class="s2">
          <div class="k11"><i class="el-icon-user"></i>     个人资料<a class="you" style="color:rgb(189, 183, 183);font-size:14px;">></a></div>
          <div class="xian"></div>
          <div class="k111"><i class="el-icon-help"></i>     阅读字号<a class="you" style="font-size:12px;color:rgb(189, 183, 183)">中字号</a></div>
          <div class="xian"></div>
          <div class="k111"><i class="el-icon-set-up"></i>     默认编辑器<a class="you" style="font-size:12px;color:rgb(189, 183, 183)">富文本</a></div>
          <div class="xian"></div>
          <div class="k111"><i class="el-icon-chat-line-square"></i>     文章加图默认有图片描述<a class="you" style="font-size:14px;color:rgb(189, 183, 183)">
            <el-switch
              v-model="value"
              active-color="#ff4949"
              inactive-color="">
            </el-switch></a></div>
          <div class="xian"></div>
          <div class="k111"><i class="el-icon-picture-outline-round"></i>     移动网络下不下载图片<a class="you" style="font-size:14px;color:rgb(189, 183, 183)">
            <el-switch
              v-model="Value"
              active-color="#ff4949"
              inactive-color="">
            </el-switch>
            </a></div>
          <div class="xian"></div>
          <div class="k111"><i class="el-icon-circle-plus-outline"></i>     添加“写文章”到桌面<a class="you" style="font-size:14px;color:rgb(189, 183, 183)">></a></div>
        </div>
      </div>
      <div class="k3">
        <a class="qita">其他</a>
        <div class="s3">
        <div class="k11">回收站<a class="you" style="color:rgb(189, 183, 183);font-size:14px;">></a></div>
        <div class="xian"></div>
        <div class="k111">黑名单设置<a class="you" style="font-size:14px;color:rgb(189, 183, 183)">></a></div>
        <div class="xian"></div>
        <div class="k111">简述&Yhouse 品质生活卡<a class="you" style="font-size:14px;color:rgb(189, 183, 183)">></a></div>
        <div class="xian"></div>
        <div class="k111">FDAA授权<a class="you" style="font-size:14px;color:rgb(189, 183, 183)">></a></div>
        <div class="xian"></div>
        <div class="k111">清除缓存<a class="you" style="font-size:14px;color:rgb(189, 183, 183)">1.3MB</a></div>
        <div class="xian"></div>          
        <div class="k111">赞赏设置<a class="you" style="font-size:14px;color:rgb(189, 183, 183)">></a></div>
        <div class="xian"></div>
        <div class="k111">给简书评分<a class="you" style="font-size:14px;color:rgb(189, 183, 183)">></a></div>
        <div class="xian"></div>
        <div class="k111">分享简书App<a class="you" style="font-size:14px;color:rgb(189, 183, 183)">></a></div>
        <div class="xian"></div>
        <div class="k111">关于我们<a class="you" style="font-size:14px;color:rgb(189, 183, 183)">></a></div>
        </div>
      </div>
      <div class="k4">
        <a>退出当前账号</a>
      </div>
    </div>

  </div>
</template>
 
 <script>
  export default {
    data() {
      return {
        value: true,
        Value: false
      }
    }
  };
</script>
<style lang="css" scoped>
.shoujishezhi{
  padding: 0;
  margin: 0;
  width: 100%;
  height: 950px;
  background-color: #efefef;
}
.k1{
  width:100%;
  height: 108px;
  margin-top:20px;
  margin-bottom: 0px;
}
.xiaoxituisong{
  font-size: 13px;
  color: #525050;
}
.s1{
  width: 100%;
  height: 85px;
  background-color: white;
}
.k11{
  font-size: 14px;
  padding: 10px 0px 10px 0px;
}
.k111{
  margin-bottom: 10px;
  font-size: 14px;
}
.you{
  float: right;
}
.xian{
  width: 100%;
  border: 1px solid rgb(229, 226, 226);
  margin-bottom: 10px;
}
.k2{
width: 100%;
height: 285px;

}
.pianhaoshezhi{
  font-size: 13px;
  color: #525050;
}
.s2{
  width: 100%;
  height: 260px;
  background-color: white;
}
.k3{
width: 100%;
height: 415px;
margin-bottom: 20px;

}
.qita{
  font-size: 13px;
  color: #525050;
}
.s3{
  width: 100%;
  height: 390px;
  background-color: white;
}
.k4{
  width: 100%;
  height: 30px;
  background-color: white;
  color: red;
  text-align: center;
  line-height: 30px;
}
</style>
