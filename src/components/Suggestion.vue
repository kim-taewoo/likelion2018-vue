<template>
  <div>
    <h3>오늘의 추천</h3>

    <div v-for="choice in choices">
      <span v-if="choice.selected == true">{{choice.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['choices'],
  data () {
    return {
    }
  }
}
</script>
