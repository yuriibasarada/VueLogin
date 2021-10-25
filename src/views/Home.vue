<template>
  <div class="home-page" :style="style">
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

import Input from "../components/form/Input";
import MailSvg from '/public/img/mail.svg'
import Button from "../components/core/Button";

export default {
  name: 'Home',
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

      await this.$store.dispatch('login', this.form.email.value)

    },
    emailValidator(value) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(value).toLowerCase());
    }
  },
  async mounted() {
    await this.$store.dispatch('authEmailLink')
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
.home-page {
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
