<template>
  <el-row class="header">
    <!-- 左边logo -->
    <el-col :span="4" class="logo">
      <img @click="tohome" src="../../assets/logo.png" alt="">
    </el-col>
    <!-- 中间导航区域 -->
    <el-col class="main" :span="16">
      <el-menu
        :default-active="$route.path"
        class="menu"
        router
        mode="horizontal"
        @select="handleSelect"
        active-text-color="#ffd04b"
      >
        <!-- 循环路由 -->
        <template
          v-for="route in $router.options.routes"
          v-if="!route.hidden"
        >
          <!-- 循环没有children的路由 -->
          <el-menu-item
            v-if="!route.hasChild"
            :key="route.path"
            :index="route.path"
          >
            <i :class="route.class"></i>
            {{ route.name }}
          </el-menu-item>
          <!-- 循环有children的路由 -->
          <el-submenu v-else :index="route.path" :key="route.path">
            <template slot="title">
              {{ route.name }}
            </template>
            <el-menu-item
              v-for="child in route.children"
              :index="child.path"
              :key="child.path"
            >
              {{ child.name }}
            </el-menu-item>
          </el-submenu>
        </template>
      </el-menu>
    </el-col>
    <!-- 右边用户信息以及登陆注册 -->
    <!-- 根据logined值的真假来判断是显示登录按钮还是用户信息 以后根据登录状态来改变 -->
    <el-button-group v-if="!logined">
      <el-button class="button" @click.native="tologin" type="danger" size="small" round >login</el-button>
      <el-button class="button" @click.native="toregin" type="success" size="small" round >regin</el-button>
    </el-button-group>
    <div v-else>
      <el-dropdown>
        <img class="avatar" src="../../assets/avatar.jpg" alt="">
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>憶雨宝宝</el-dropdown-item>
          <el-dropdown-item>我的工作台</el-dropdown-item>
          <el-dropdown-item divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-row>
</template>

<script>
export default {
  name: 'MyHeader',
  data () {
    return {
      logined: true
    }
  },
  methods: {
    handleSelect () {
      console.log('菜单选择之后的回调操作')
    },
    tohome () {
      this.$router.push('/')
      console.log('home')
    },
    tologin () {
      this.$router.push('/login')
    },
    toregin () {
      this.$router.push('/regin')
    }
  }
}
</script>

<style scoped>
.header {
  width: 100%;
  height: 60px;
  margin: 0;
  background: #fff;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  box-shadow: 0 0 25px #666;
}
.logo img {
  width:60px;
  height: 60px;
  cursor: pointer;
}
.button {
  margin: 15px 0;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  margin: 10px 0;
  cursor: pointer;
}
</style>
