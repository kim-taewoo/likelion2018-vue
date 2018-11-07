<template>
  <div>
    <p>{{date}} 의 날씨는 {{weather}} 입니다.</p>
    <hr>
    <button @click="changeWeather">날씨 업데이트</button>
  </div>
</template>

<script>
  export default {
    props: ['weather','date'],
    data () {
      return {
        
      }
    },
    methods: {
      // 여기도 ES6 축약형으로 함수 작성 가능
      changeWeather () {
        this.weather = '흐림'
      }
    }
  }
</script>

<style>
</style>