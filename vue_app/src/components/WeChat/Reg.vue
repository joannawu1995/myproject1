<template>
    <div class="reg_container">
        <h3>注册</h3>
        <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="5em" size="small" class="demo-ruleForm">
            <el-form-item label="昵称" prop="name">
                <el-input v-model="ruleForm2.name"  auto-complete="off"></el-input>
            </el-form-item> 
            <el-form-item label="账号" prop="username">
                <el-input v-model="ruleForm2.username"></el-input>
            </el-form-item> 
            <el-form-item label="密码" prop="userpwd">
                <el-input type="password" v-model="ruleForm2.userpwd" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
                <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>
                <router-link to="/tab/login" class="to_login">前往登录</router-link>
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
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("昵称不能为空"));
      } else {
        return callback();
      }
    };
    var checkUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("账号不能为空"));
      } else {
        axios.post(IP + "isExist", { username: value }).then(msg => {
          if (msg.data == "isExisted") {
            return callback("账号已存在");
          } else {
            return callback();
          }
        });
      }
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.userpwd) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm2: {
        userpwd: "",
        name: "",
        username: "",
        checkPass: ""
      },
      rules2: {
        name: [{ validator: checkName, trigger: "blur" }],
        userpwd: [{ validator: validatePass, trigger: "blur" }],
        username: [{ validator: checkUsername, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      },
      isLogin: true
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let { username, userpwd, name } = this.ruleForm2;
          axios.post(IP + "reg", {username,userpwd,name}).then(msg => {
              this.$router.push('/tab/login')
          });
        } else {
          return false;
        }
      });
    }
  },
  created() {
    function loginError() {
      if (location.hash.indexOf("isLogin=false") >= 0) {
        this.isLogin = false;
      }
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.reg_container{
    padding: 0 3em;
}
.el-form {
  margin-top: 2em;
  margin: 2em auto;
}
.el-form-item {
  margin-bottom: 2em !important;
}
h3 {
  margin-top: 2em;
}
.to_login {
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
