<template>
    <Page>
        <PageHeader title="Редактирование профиля" />

        <PageContainer>
            <div class="flex justify-center">
                <div class="w-3/5">
                    <div class="flex flex-col items-center rounded-lg bg-white p-5">
                        <file-upload
                            ref="upload"
                            v-model="files"
                            accept="image/*"
                        >
                            <AppUserAvatarUnknown />
                        </file-upload>

                        <div class="w-full">
                            <FormGroup label="ФИО">
                                <FormInput v-model="name" />
                                <FormInputErrors :errors="errors" name="name" />
                            </FormGroup>

                            <FormGroup label="Email">
                                <FormInput v-model="email" />
                                <FormInputErrors :errors="errors" name="email" />
                            </FormGroup>

                            <FormButton value="Сохранить" @click="save"/>
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    </Page>
</template>

<script>
    export default {
        data: function () {
            return {
                name: this.$auth.user.name,
                email: this.$auth.user.email,
                errors: {}
            };
        },

        methods: {
            save: function () {
                this.$axios.put('/user/settings/save', {
                    name: this.name,
                    email: this.email
                }).then(response => {
                    this.errors = {};

                    this.$auth.fetchUser();
                }).catch(error => {
                    let response = error.response;

                    if (response) {
                        this.errors = response.data.errors;
                    }
                });
            }
        }
    }
</script>