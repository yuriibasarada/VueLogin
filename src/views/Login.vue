<template>
  <div class="login-page" :style="style">
    <div class="container">
      <div class="wrapper">
        <Input
            :label="form.email.label"
            v-model="form.email.value"
            :errors="form.email.errors"
        >
          <MailSvg/>
        </Input>
        <Button
            :title="'Login'"
            @click.native="login"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/core/Button";
import Input from "../components/form/Input";
import MailSvg from "../../public/img/mail.svg";

export default {
  name: "Login",
  components: {Button, Input, MailSvg},
  computed: {
    style() {
      return `background-image: url("${require('@/assets/img/BG.png')}")`
    }
  },
  data: () => ({
    form: {
      email: {
        value: '',
        label: 'Email',
        errors: {
          require: {
            hasError: false,
            message: 'Field is required.'
          },
          valid: {
            hasError: false,
            message: 'Field is invalid.'
          }
        }
      }
    }
  }),
  methods: {
    async login() {
      if (!this.form.email.value.length) {
        this.form.email.errors.require.hasError = true
        return;
      }

      if (!this.emailValidator(this.form.email.value)) {
        this.form.email.errors.valid.hasError = true
        return;
      }

      try {
        await this.$store.dispatch('login', this.form.email.value)
      } catch (e) {
        console.log(e)
      }

    },
    emailValidator(value) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(value).toLowerCase());
    }
  },
  async mounted() {
    await this.$store.dispatch('authEmailLink')
    await this.$router.push('/')
  },
  watch: {
    form: {
      handler({email}) {
        if (email.value.length && email.errors.require.hasError) {
          email.errors.require.hasError = false
        }
      },
      deep: true
    }
  }
}
</script>

<style scoped lang="scss">
.login-page {
  height: 100vh;
  background-color: #244BC5;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    .wrapper {
      min-width: 300px;

      .custom-button {
        margin-top: 40px;
      }
    }
  }
}
</style>