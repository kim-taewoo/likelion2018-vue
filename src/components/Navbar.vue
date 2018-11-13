<template>
  <div class="navbar">
    <ul>
      <router-link tag="li" :to="{name: 'Home'}">홈</router-link>
      <router-link tag="li" :to="{name: 'Review'}">리뷰</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
.navbar {
  padding: 10px;
  color: white;
  font-size: 20px;
  background-color: skyblue;
}

ul {
  list-style: none;
  text-align: center;
}

ul li {
  display: inline-block;
  margin-right: 15px;
  cursor: pointer;
}

</style>



