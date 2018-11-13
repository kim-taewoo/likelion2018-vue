<template>
<div class="review-header">
  <h1>리뷰s</h1>

  <div class="review-main">
    <router-link :to="{name: 'ReviewDetail', params: {id: review._id, review: review}}" tag="div" class="review" v-for="(review,index) in reviews" :key="index">
      <h3 class="review-title">{{review.title}}</h3>
      <div class="review-summary">{{review.summary}}</div>
      <div>
        <span class="review-tags" v-for="tag in review.tags"># {{tag}}</span>
      </div>
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      reviews: [
        {
          _id: 1,
          title: '오랜만에 품 갔다온 썰',
          summary: '예전엔 엄청 괜찮았던 것 같은데 최근엔 좀 아닌듯. 가격도 오르고..',
          tags: ['품', '그저그럼','추억']
        },
        {
          _id: 2,
          title: '맘스터치는 맘스터치',
          summary: '맘스터치는 실망시키지 않는다.',
          tags: ['킹갓존엄','싸이버거','존맛','맘스터치']
        },
        {
          _id: 3,
          title: '학식 볶음우동은 언제먹어도..',
          summary: '생각날 때마다 가는데 역시나 맛있다.',
          tags: ['가성비','매운맛도전','학식']
        }
      ]
    }
  }
}
</script>

<style>
.review-header {
  text-align: center;
}
.review {
  border: 2px solid skyblue;
  border-radius: 8px;
  box-shadow: 1px 1px 1px #ccc;
  margin: 15px 0;
  padding: 8px;
  cursor: pointer;
}
.review-title {
  font-weight: 800;
}
.review-summary {
  margin: 10px;
}
.review-tags {
  color: blue;
  margin: 5px;
}
</style>

