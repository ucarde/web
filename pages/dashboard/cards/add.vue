<template>
    <Page>
        <PageHeader title="Добавление карточки">
            <template v-slot:header-right>
                <button @click="saveCard" class="flex flex-row items-center p-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 hover:text-gray-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6h5a2 2 0 012 2v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h5v5.586l-1.293-1.293zM9 4a1 1 0 012 0v2H9V4z" />
                    </svg>

                    Сохранить
                </button>
            </template>
        </PageHeader>

        <PageContainer>
            <div class="flex justify-center">
                <div class="w-2/5">
                    <CardEdit v-model="card" :card-errors="errors" />
                </div>
            </div>
        </PageContainer>
    </Page>
</template>

<script>
    export default {
        data: function () {
            return {
                card: {},
                errors: {}
            }
        },

        methods: {
            saveCard: function() {
                this.$axios.post('user/cards', this.card).then((response) => {
                    this.$router.push('/dashboard')
                }).catch((error) => {
                    let response = error.response;

                    if (response) {
                        if (typeof response.data.errors !== 'undefined') {
                            this.errors = response.data.errors
                        } else {
                            const message = response.data.message;

                            this.errors = JSON.parse(message);
                        }
                    }
                });
            }
        }
    }
</script>