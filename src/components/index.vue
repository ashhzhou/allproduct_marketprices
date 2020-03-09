<template>
    <el-container style="height: 100%; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1']" router>
      <el-submenu index="1">
          <template slot="title"><i class="el-icon-menu"></i></template>
        <el-submenu v-for="(item, index) in $router.options.routes" :key='index' :index="index+' '">
          <template slot="title" >{{item.name}}</template>
          <el-menu-item v-for="(item2,index2) in item.children" :key='index2' :index="item2.path" :class="$route.path==item2.path?'is-active':''">{{item2.name}}</el-menu-item>
        </el-submenu>
        </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
        <el-header>
          <el-menu
            router
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            >
            <el-menu-item index='date'>每日数据</el-menu-item>  
            <el-menu-item index='month'>月度数据</el-menu-item>
            <el-menu-item index='monthly'>年度数据</el-menu-item>
          </el-menu>
        </el-header>

    
    <el-main>
        <router-view :key='appKey'></router-view>
    </el-main>
  </el-container>
</el-container>
</template>


<style>
  .el-header {
    background-color: #545c64;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
    height:'100%';
  }

  .el-main {
    background-color: #eee
  }
  .el-container{
    height: '100%';
  }
</style>

<script>
  export default {
    data(){
      return{
        appKey:1,
      }
    },
        watch:{
        '$route' (to,from){
            this.appKey = new Date().getTime();
            }
        },
  }
</script>