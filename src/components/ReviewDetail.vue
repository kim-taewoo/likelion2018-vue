<template>
<div>
  <div class="review-detail-main">
    <h2>Review Detail 페이지 for Review ID: {{$route.params.id}}</h2>
    <div>
      <h3 class="review-title">{{review.title}}</h3>
      <div class="review-summary">{{review.summary}}</div>
      <div>
        <span class="review-tags" v-for="tag in review.tags"># {{tag}}</span>
      </div>
    </div>
  </div>
  <div style="text-align: right;">
    <button class="backBtn" @click="$router.go(-1)">목록으로</button>
  </div>
</div>
</template>

<script>
export default {
  props: ['review']
}
</script>

<style>
.review-detail-main {
  text-align: center;
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
.backBtn {
  background-color: transparent;
  border: none;
  border-radius: 3px;
  box-shadow: 1px 1px 1px #cccccc;
  cursor: pointer;
  padding: 8px;
  background: skyblue;
  color: white;
}
</style>


