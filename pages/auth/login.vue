<template>
  <AppContainerCenter>
    <div class="container w-4/12 bg-white rounded p-8 shadow">
      <FormInputErrors :errors="errors" name="message" />

      <FormGroup label="Email">
        <FormInput v-model="data.email" />
        <FormInputErrors :errors="errors" name="email" />
      </FormGroup>

      <FormGroup label="Пароль">
        <FormInput v-model="data.password" type="password" />
        <FormInputErrors :errors="errors" name="password" />
      </FormGroup>

      <FormButton value="Войти" @click="login"/>

      <div class="mt-2 text-center text-blue-400 text-sm">
        <NuxtLink to="/auth/register">Еще не зарегистрировались?</NuxtLink>
      </div>
    </div>
  </AppContainerCenter>
</template>

<script>
  export default {
    layout: 'empty',
    auth: 'guest',

    data: function() {
        return {
            data: {
                email: "",
                password: "",
            },
            errors: {}
        }
    },

    methods: {
        async login() {
            await this.$auth.loginWith('local', {
                data: this.data
            }).then((response) => {
              this.$router.push('/dashboard');
            }).catch((error) => {
                let response = error.response;

                if (response) {
                  this.errors = response.data.errors;
                }
            })
        }
    }
  }
</script>

<style scoped>
</style>
