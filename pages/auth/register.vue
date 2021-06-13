<template>
  <AppContainerCenter>
    <div class="container w-4/12 bg-white rounded p-8 shadow">
      <FormGroup label="ФИО">
        <FormInput v-model="data.name" />
        <FormInputErrors :errors="errors" name="name" />
      </FormGroup>

      <FormGroup label="Email">
        <FormInput v-model="data.email" />
        <FormInputErrors :errors="errors" name="email" />
      </FormGroup>

      <FormGroup label="Пароль">
        <FormInput v-model="data.password" type="password" />
        <FormInputErrors :errors="errors" name="password" />
      </FormGroup>

      <FormGroup label="Повторите пароль">
        <FormInput v-model="data.repeatedPassword" type="password" />
        <FormInputErrors :errors="errors" name="repeatedPassword" />
      </FormGroup>

      <FormButton value="Зарегистрироваться" @click="register"/>

      <div class="mt-2 text-center text-blue-400 text-sm">
        <NuxtLink to="/auth/login">Уже зарегистрированы?</NuxtLink>
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
                name: "",
                email: "",
                password: "",
                repeatedPassword: "",
            },
            errors: []
        }
    },

    methods: {
        async register() {
            await this.$axios.post('/auth/register', this.data).then((res) => {
                this.$auth.loginWith('local', {
                    data: {
                        email: this.data.email,
                        password: this.data.password
                    }
                }).then((response) => {
                    this.$router.push('/dashboard');
                });
            }).catch((error) => {
                let response = error.response;

                this.errors = response.data.errors;
            });
        }
    }
  }
</script>

<style scoped>
</style>
