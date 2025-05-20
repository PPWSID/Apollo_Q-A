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
          <a href="#" @click="gotoLogin">เข้าสู่ระบบ</a>
        </p>
      </div>
    </div>
</template>
  
<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router'

  const router = useRouter()
  
  const username = ref('');
  const email = ref('');
  const password = ref('');
  const confirmPassword = ref('');
  
  function gotoLogin() {
    router.push('/login')
  }

  const handleRegister = () => {
    if (password.value !== confirmPassword.value) {
      alert('รหัสผ่านไม่ตรงกัน');
      return;
    }
  
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
    background-color: #1e1e1e;
    padding: 40px;
    border-radius: 12px;
    width: 100%;
    max-width: 450px;
  }
  .subtitle {
    font-size: 14px;
    color: #bbb;
    margin-bottom: 24px;
  }
  form {
    display: flex;
    flex-direction: column;
    /* color: white; */
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
    margin-bottom: 20px;
    background-color: #2a2a2a;
    color: white;
  }
  input::placeholder {
    color: #888;
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
  