<template>
  <div class="login-box">
    <div class="ms-title">
      <p class="ms-title1">手机登录</p>
    </div>
    <el-form ref="formValidate">
      <el-form-item>
        <el-input
          v-model="formItem.mobile"
          prefix-icon="el-icon-mobile"
          size="large"
          placeholder="请输入手机号"
          required>
        </el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          v-model="formItem.verifyCode"
          prefix-icon="el-icon-message"
          placeholder="输入短信验证码"
          @on-enter="handleSubmit('formValidate')">
        <span slot="append">
          <el-button :disabled="sendmsg.disabled" @click="handleMobile">{{ sendmsg.text }}</el-button>
        </span>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          class="login-btn"
          @click="handleSubmit('formValidate')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

  export default {
    name: 'LoginTel',

    data () {
      return {
        formItem: {
          mobile: '',
          verifyCode: ''
        },
        sendmsg: {
          time: 120,
          text: '发送验证码',
          disabled: false
        },
        loadingSubmit: false
      }
    },

    mounted () {
    },

    methods: {
      handleMobile () {
        var mobile = this.formItem.mobile
        if (mobile) {
          if (this.isPhoneNum(mobile)) {
            this.sendMsg()
          } else {
            this.$message.error('请输入正确的手机号码')
          }
        } else {
          this.$message.error('请输入手机号码')
        }
      },
      /**
       * 验证手机号码
       * @param str
       * @returns {boolean}
       */
      isPhoneNum (str) {
        var myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
        if (!myreg.test(str)) {
          return false
        } else {
          return true
        }
      },
      sendMsg () {
        let params = this.api.getParam('send2', {phone: this.formItem.mobile})
        this.api.postData(this, params).then((res) => {
          if (res.code === 0) {
            this.$message.success('短信验证码发送成功')
            this.countDown()
          } else {
            this.$message.error(res.msg)
          }
        }).catch((code) => {

        })
      },
      countDown () {
        this.sendmsg.time = this.sendmsg.time - 1
        this.sendmsg.disabled = true
        this.sendmsg.text = this.sendmsg.time + '秒'
        if (this.sendmsg.time === 0) {
          this.sendmsg.time = 120
          this.sendmsg.text = '重新发送'
          this.sendmsg.disabled = false
          return
        }
        setTimeout(() => {
          this.countDown()
        }, 1000)
      },
      handleSubmit () {
        if (!this.formItem.mobile) {
          this.$message.error('请输入手机号码'); return
        }

        if (!this.formItem.verifyCode) {
          this.$message.error('请输入短信验证码'); return
        }
        let params = this.api.getParam('send4', {phone: this.formItem.mobile, vcode: this.formItem.verifyCode})
        this.api.postData(this, params).then((response) => {
          if (response.code === 0) {
            this.$router.push('/index')
          } else {
            this.$message.error(response.msg)
          }
        })
      }
    }
  }
</script>

<style>
  .login-box {
    width: 500px;
    min-height: 450px;
    padding-top: 32px;
    overflow: auto;
    text-align: center;
    border: 1px solid #f0f0f0;
    border-radius: 8px;
    box-sizing: border-box;
    margin: 40px auto;
  }

  .login-box .ms-title {
    margin-bottom: 60px;
    width: 100%;
    text-align: center
  }

  .login-box .ms-title1 {
    color: #2d8cf0;
    font-size: 40px;
    font-weight: bold;
  }


  .login-box .el-form {
    margin: 0 35px
  }


  .login-box .el-input-group__append button.el-button.is-disabled {
    color: #C0C4CC;
    background-color: #FFF;
    border-color: #EBEEF5;
  }


 .login-btn {
   width: 100%;
 }

  /* 自定义iview样式 */
  .login-box .ivu-tabs-bar {
    border-bottom: none;
  }

  .login-box .ivu-tabs-nav {
    margin-left: 30px;
    text-align: center;
  }

  .login-box .ivu-tabs-nav {
    font-size: 16px;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    background: #f7f7f7;
    border-radius: 4px;
    overflow: hidden;
  }

  .login-box .ivu-tabs-nav .ivu-tabs-tab-active {
    color: #fff;
    background: #2d8cf0;
    font-size: 16px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
  }

  .login-box .ivu-tabs-ink-bar {
    height: 0;
  }

  .login-box .ivu-tabs-nav-prev,
  .login-box .ivu-tabs-nav-next {
    display: none;
  }

  .login-box .imageCode .ivu-input-group-append {
    padding: 0 !important;
  }

  .login-box .ivu-tabs-nav .ivu-tabs-tab {
    width: 200px;
    height: 48px;
    line-height: 29px;
    margin-right: 0;
    transition: none;
  }

  .login-box .ivu-tabs-nav .ivu-tabs-tab-active:hover {
    color: #fff;
  }

  .login-box input.ivu-input {
    height: 48px;
  }

  .login-box .ivu-input-prefix {
    top: 7px
  }

  .login-box input.el-input__inner,
  .login-box .el-input-group__append button.el-button,
  .login-box .el-input-group__append {
    background: #f7f7f7;
    border: 1px solid #f7f7f7;
  }

  .login-box .ivu-input:focus {
    box-shadow: none;
  }

  .login-box .ivu-btn {
    height: 48px;
    font-size: 14px;
  }

</style>
