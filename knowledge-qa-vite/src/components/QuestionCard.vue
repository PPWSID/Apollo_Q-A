<template>

    <div class="question-card">
      <div class="card-header">
        <div class="icon">?</div>
        <h2>{{ question.title }}</h2>
      </div>
      <div class="meta">
        <p>{{ question.time }} </p>
        <p>โดย {{ question.user }} </p>
      </div>
      <div class="stats">
        <div>💬 {{ question.answers }}</div>
        <div>👍 {{ question.likes }}</div>
      </div>
    </div>

</template>
  
<script setup>

  defineProps({
    question: Object,
  });

</script>
  
<style scoped>

  .question-card {
    background-color: #1f1f1f;
    padding: 16px;
    border-radius: 12px;
    margin-bottom: 16px;
    color: #fff;
    transition: box-shadow 0.3s;
    box-shadow: none;
  }

  .question-card:hover {
    box-shadow: 0 0 12px rgba(255, 255, 255, 0.1);
  }

  .card-header {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .icon {
    background-color: #e74c3c;
    color: white;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .meta {
    font-size: 13px;
    /* color: #bbb; */
    margin-top: 4px;
  }

  .meta p {
    margin: 0;
    display: inline-block;
    padding-right : 2px;
  }

  .stats {
    display: flex;
    gap: 12px;
    font-size: 14px;
    margin-top: 8px;
    /* color: #ccc; */
  }

  .stats div {
    display: flex;
    /* align-items: center; */
    gap: 4px;
  }

</style>
  