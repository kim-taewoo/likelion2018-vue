<template>
  <div>
    <div class="header">
      <h1>성점추</h1>
      <h3 class="subtitle">성대생을 위한 점심 추천 서비스</h3>

    </div>
    <Navbar />
    <div class="app-main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: {
    Navbar
  }
  
}
</script>

<style>
.header {
  text-align: center;
}
html, body {
  padding: 0;
  margin: 0;
}
.app-main {
  max-width: 980px;
  margin: 0 auto;
}
</style>


