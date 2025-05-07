<template>
    <div class="register-page">
      <div class="register-box">
        <h1>สมัครสมาชิก</h1>
        <p class="subtitle">กรุณากรอกข้อมูลเพื่อสร้างบัญชีใหม่</p>
  
        <form @submit.prevent="handleRegister">
          <label>ชื่อผู้ใช้</label>
          <input v-model="username" placeholder="ชื่อผู้ใช้" required />
  
          <label>อีเมล</label>
          <input type="email" v-model="email" placeholder="example@email.com" required />
  
          <label>รหัสผ่าน</label>
          <input type="password" v-model="password" placeholder="รหัสผ่าน" required />
  
          <label>ยืนยันรหัสผ่าน</label>
          <input
            type="password"
            v-model="confirmPassword"
            placeholder="ยืนยันรหัสผ่าน"
            required
          />
  
          <button type="submit">สมัครสมาชิก</button>
        </form>
  
        <p class="login-link">
          มีบัญชีอยู่แล้ว? <a href="#">เข้าสู่ระบบ</a>
        </p>
      </div>
    </div>
</template>
  
<script setup>
  import { ref } from 'vue';
  
  const username = ref('');
  const email = ref('');
  const password = ref('');
  const confirmPassword = ref('');
  
  const handleRegister = () => {
    if (password.value !== confirmPassword.value) {
      alert('รหัสผ่านไม่ตรงกัน');
      return;
    }
  
    // mock register logic
    alert(`สมัครสมาชิกสำเร็จ: ${username.value}`);
  };
</script>
  
<style>

  .register-page {
    background-color: #121212;
    color: white;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .register-box {
    background-color: #1f1f1f;
    padding: 40px;
    border-radius: 12px;
    width: 100%;
    max-width: 450px;
  }
  h1 {
    font-size: 26px;
    color: #9b59b6;
  }
  .subtitle {
    font-size: 14px;
    color: #bbb;
    margin-bottom: 24px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  label {
    margin-bottom: 6px;
    font-size: 14px;
    color: #ccc;
  }
  input {
    padding: 10px;
    border-radius: 6px;
    border: none;
    margin-bottom: 18px;
    background-color: #2c2c2c;
    color: white;
  }
  button {
    background-color: #9b59b6;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }
  button:hover {
    background-color: #8e44ad;
  }
  .login-link {
    text-align: center;
    margin-top: 20px;
    font-size: 14px;
  }
  .login-link a {
    color: #fff;
    text-decoration: underline;
  }
</style>
  