<template>
<div>
  <div class="header">
    <h1>성점추</h1>
    <h3 class="subtitle">성대생을 위한 점심 추천 서비스</h3>

    <Navbar />
  </div>

  <div class="main">
    <AllChoices :choices="choices" @delete="deleteAChoice" />
    <Suggestion :choices="choices" />
  </div>

</div>
</template>

<script>
import AllChoices from './components/AllChoices'
import Suggestion from './components/Suggestion'

export default {
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
      // this.choices = this.choices.filter(choice => {
      //   return choice.name !== payload.name
      // })


      // for(var i =0; i< this.choices.length-1; i++) {
      //   if (this.choices[i].name == payload.name) {
      //     this.choices.splice(i,1)
      //   }
      // } 

    }
  }
}
</script>

<style>
  .header {
    text-align: center;
  }
  .subtitle {
    color: gray;
  }
  .main {
    margin-top: 50px;
    text-align: center;
  }
</style>
