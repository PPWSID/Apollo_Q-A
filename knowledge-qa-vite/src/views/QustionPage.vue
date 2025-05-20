<template>
    <div class="home">
      <header class="header">
        <h1> QA Knowledge  </h1>
        <nav>
          <a href="#">หน้าแรก</a>
          <a href="#">หมวดหมู่</a>
          <a href="#">ถามคำถาม</a>
          <a href="#">user</a>
        </nav>
      </header>
  
      <input
        class="search"
        type="text"
        placeholder="ค้นหาคำถามหรือคำตอบ..."
      />
  
      <div class="tags">
        <button>ทั้งหมด</button>
        <button>#frontend</button>
        <button>#backend</button>
        <button>#react</button>
      </div>
  
      <QuestionCard
        v-for="(item, index) in questions"
        :key="index"
        :question="item"
      />
  
      <button class="fab">+ ถามคำถาม</button>
    </div>
</template>
  
<script setup>
  import QuestionCard from '../components/QuestionCard.vue';
  
  const questions = [
    {
      title: 'title 1',
      user: '@user123',
      time: '2 ชั่วโมงที่แล้ว',
      answers: 5,
      likes: 10,
    },
    {
      title: 'title 2',
      user: 'aiusar456',
      time: '5 ชั่วโมงที่แล้ว',
      answers: 2,
      likes: 3,
    },
    {
      title: 'title 3',
      user: 'auser789',
      time: '1 วันที่ผ่านมา',
      answers: 8,
      likes: 15,
    },
    {
      title: 'title 4',
      user: '',
      time: '',
      answers: null,
      likes: undefined,
    },
  ];
</script>
  
<style>
  .home {
    background-color: #000000;
    color: #fff;
    padding: 24px;
    min-height: 100vh;
    font-family: 'Segoe UI', sans-serif;
    box-shadow: none;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header nav a {
    margin-left: 16px;
    margin-right : 16px;
    color: #fff;
    text-decoration: none;
  }
  .header nav a:hover {
    color: #fff;
  }
  .search {
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    margin: 20px 0;
    background-color: #1f1f1f;
    border: none;
    color: white;
  }
  .tags {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  .tags button {
    background-color: #2c2c2c;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 14px;
    cursor: pointer;
  }
  .fab {
    position: fixed;
    bottom: 24px;
    right: 24px;
    background-color: #34495e ;
    color: white;
    border: none;
    padding: 16px;
    border-radius: 10px;
    font-size: 16px;
    cursor: pointer;
  }
  .fab:hover {
    background-color: #34495e ;
  }
</style>
  