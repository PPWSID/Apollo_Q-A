<template>
    <div class="dashboard">
      <div class="box">
        <h1>ข้อมูลส่วนตัว</h1>
  
        <form @submit.prevent="saveProfile">
          <label>ชื่อผู้ใช้</label>
          <input v-model="user.username" />
  
          <label>อีเมล</label>
          <input type="email" v-model="user.email" />
  
          <label>คำอธิบายโปรไฟล์</label>
          <textarea v-model="user.bio" rows="4" />
  
          <button type="submit">บันทึกข้อมูล</button>
        </form>
      </div>
    </div>
</template>
  
<script setup>
  import { reactive } from 'vue';
  
  const user = reactive({
    username: 'dev_john',
    email: 'john@example.com',
    bio: 'นักพัฒนา Vue ผู้หลงใหลในการแชร์ความรู้',
  });
  
  const saveProfile = () => {
    // mock save logic
    alert('บันทึกข้อมูลเรียบร้อยแล้ว');
  };
</script>
  
<style>

  .dashboard {
    background-color: #121212;
    color: white;
    min-height: 100vh;
    padding: 60px 24px;
    display: flex;
    justify-content: center;
  }
  .box {
    background-color: #1f1f1f;
    padding: 36px;
    border-radius: 12px;
    width: 100%;
    max-width: 600px;
  }
  h1 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #9b59b6;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    font-size: 14px;
    color: #ccc;
    margin-bottom: 6px;
  }
  input,
  textarea {
    padding: 10px;
    border-radius: 6px;
    border: none;
    background-color: #2a2a2a;
    color: white;
    margin-bottom: 20px;
  }
  button {
    background-color: #9b59b6;
    color: white;
    padding: 12px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: #8e44ad;
  }
</style>
  