<template>
<div>


  <div class="main">
    <AllChoices :choices="choices" @delete="deleteAChoice" />
    <Suggestion :choices="choices" />
  </div>

</div>
</template>

<script>
import AllChoices from './AllChoices'
import Suggestion from './Suggestion'

export default {
  name: 'Home',
  components: {
    AllChoices,
    Suggestion
  },
  data () {
    return {
      choices: [
        {name: '청춘직화', selected: true},
        {name: '품', selected: false},
        {name: '재즈앤라멘', selected: false},
        {name: '쇼타돈부리', selected: true},
        {name: '더닭', selected: false},
        {name: '600주년 학식', selected: true},        
      ]
    }
  },
  methods: {
    deleteAChoice(payload) {
      this.choices = this.choices.filter(choice => {
        return choice.name !== payload.name
      })
    }
  }
}
</script>

<style>
  .header {
    text-align: center;
  }
  .main {
    margin: 0 40px;
  }
  .subtitle {
    color: gray;
  }
  .main {
    margin-top: 50px;
    text-align: center;
  }
</style>
