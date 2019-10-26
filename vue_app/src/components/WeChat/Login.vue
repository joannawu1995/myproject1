<template>
    <div class="log_container">
        <h3>登录</h3>
        <el-form :model="ruleForm2" status-icon ref="ruleForm2" label-width="5em" size="small" class="demo-ruleForm">
        <p v-if="isLogin==false" class="log_error">账号或密码错误，请重新登录！</p>
        <el-form-item label="账号" prop="username">
            <el-input v-model="ruleForm2.username"></el-input>
        </el-form-item> 
        <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm2.userpwd" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
            <router-link to="/tab/reg" class="to_reg">前往注册</router-link>
        </el-form-item>
        </el-form>
    </div>
</template>

<script>
// IP
const IP = "http://127.0.0.1:3111/";

// 引入ajax
import axios from "axios";

export default {
  data() {
    return {
      ruleForm2: {
        userpwd: "",
        username: ""
      },
      isLogin: true
    };
  },
  props:['user'],
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let { username, userpwd } = this.ruleForm2;
          axios.post(IP + "login", { username, userpwd }).then(msg => {
            if (msg.data!='error') {
              this.$router.push("/tab/my");
              this.user.splice(0,1,msg.data)
              console.log(this.user)
            } else {
              this.isLogin = false;
            }
          });
        } else {
          return false;
        }
      });
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.log_container {
  padding: 0 2em;
}
.el-form {
  margin-top: 2em;
  margin-right: 1em;
}
.el-form-item {
  margin-bottom: 2em !important;
}
h3 {
  margin-top: 3em;
}
.to_reg {
  line-height: 1em;
  vertical-align: bottom;
  color: rgb(33, 174, 60);
  margin-left: 0.2em;
}
.log_error {
  margin-left: 5em;
  margin-bottom: 1em;
  font-size: 0.9em;
  color: red;
}
</style>
