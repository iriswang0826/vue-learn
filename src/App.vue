<template>
  <div id="app">
    <el-container>
      <el-header>
        <my-header></my-header>
      </el-header>
      <el-container>
        <transition name="el-zoom-in-center">
          <router-view/>
        </transition>
      </el-container>
      <el-footer>
        <my-footer></my-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import MyHeader from '@/components/public/Header'
import MyFooter from '@/components/public/Footer'
export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
