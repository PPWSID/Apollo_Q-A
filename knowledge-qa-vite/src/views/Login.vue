<template>
    <div class="login-page">
      <div class="login-box">
        <h1>เข้าสู่ระบบ</h1>
        <p class="subtitle">กรุณากรอกชื่อผู้ใช้และรหัสผ่านของคุณ</p>
  
        <form @submit.prevent="handleLogin">
          <label for="username">ชื่อผู้ใช้</label>
          <input
            type="text"
            id="username"
            v-model="username"
            placeholder="กรอกชื่อผู้ใช้"
            required
          />
  
          <label for="password">รหัสผ่าน</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="กรอกรหัสผ่าน"
            required
          />
  
          <button type="submit">เข้าสู่ระบบ</button>
        </form>
  
        <p class="register-link">
          <!-- <a href="#" @click="gotoRegis"> ลืมรหัสผ่าน ?</a> -->
          <a href="#"  @click="goToRegister">สมัครสมาชิก</a>
        </p>
      </div>
    </div>
</template>
  
<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const username = ref('');
  const password = ref('');
  

  function goToRegister() {
    router.push('/register')
  }

  
  const handleLogin = () => {
    if (!username.value || !password.value) {
      alert('กรุณากรอกข้อมูลให้ครบถ้วน');
      return;
    }
  
    // mock login logic
    alert(`กำลังเข้าสู่ระบบด้วยชื่อผู้ใช้: ${username.value}`);
  };
</script>
  
<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  .login-page {
    background-color: #121212;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .login-box {
    background-color: #1e1e1e;
    padding: 40px 32px;
    border-radius: 12px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  }
  h1 {
    margin-bottom: 8px;
    font-size: 28px;
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
    margin-bottom: 4px;
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
    color: #fff;
    border: none;
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: background 0.3s;
  }
  button:hover {
    background-color: #8e44ad;
  }
  .register-link {
    margin-top: 20px;
    font-size: 14px;
    text-align: center;
    color: #aaa;
  }
  .register-link a {
    color: #fff;
    /* padding-right: 10px; */
    text-decoration: underline;
  }


</style>
  