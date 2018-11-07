<template>
  <div>
    <h3>모든 선택지</h3>

    <div v-for="choice in choices">
      <span @click="removeAChoice(choice.name)">{{choice.name}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:['choices'],
  data () {
    return {
      
    }
  },
  methods: {
    removeAChoice(name) {
      this.$emit('delete', {name})
    }
  }
}
</script>
