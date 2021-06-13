<template>
    <Page>
        <Modal :show="showModalWithCode" @modal-hide="showModalWithCode = false">
            <template v-slot:title>
                Код был успешно сгенерирован!
            </template>

            <template v-slot:body>
                <div class="text-sm" v-html="code"></div>
            </template>

            <template v-slot:bottom>
                <button class="min-w-full text-white p-3 bg-green-500 rounded-lg">
                    ОК
                </button>
            </template>
        </Modal>

        <PageHeader title="Мои карточки">
            <template v-slot:header-right>
                <template v-if="isNotEmptyCards">
                    <div @click="editMode = true" class="flex flex-row items-center p-2 bg-indigo-600 text-white rounded-lg cursor-pointer hover:bg-indigo-700" v-if="!editMode">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        
                        Редактировать
                    </div>
                    <div @click="save" class="flex flex-row items-center p-2 bg-indigo-600 text-white rounded-lg cursor-pointer hover:bg-indigo-700" v-else>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                        </svg>

                        Сохранить
                    </div>
                </template>
            </template>
        </PageHeader>

        <PageContainer>
            <div class="grid grid-cols-3 gap-5" v-if="isNotEmptyCards">
                <template v-if="editMode">
                    <CardEdit 
                        v-for="(card, index) in cards" 
                        :key="index"
                        :card-description="card.description"
                        :card-username="card.username"
                        :card-fields="card.fields"
                        @input="handleCardUpdate(index, $event)"
                        />
                </template>
                <template v-else>
                    <Card v-for="(card, index) in cards" :key="index" 
                        :description="card.description"
                        :name="card.username"
                        :fields="card.fields"
                        @generate-card-code="generateCardCode(card.id)"
                        @generate-field-code="generateFieldCode"
                    />
                </template>
            </div>
            <div v-else class="text-center text-2xl">
                К сожалению, у вас нет карточек ;(
            </div>
        </PageContainer>
    </Page>
</template>

<script>
    export default {
        data: function () {
            return {
                cards: [],
                showModalWithCode: false,
                code: null,
                editMode: false
            };
        },

        async fetch() {
            this.$axios.get('user/cards').then(res => {
                this.cards = res.data
            }).catch(error => {
                console.log(error);
            })
        },

        methods: {
            generateCardCode: function (id) {
                this.$axios.get('qrCode/card/' + id + '').then((response) => {
                    if (response.data) {
                        this.code = response.data;
                        this.showModalWithCode = true;
                    }
                })
            },

            generateFieldCode: function (id) {
                this.$axios.get('qrCode/field/' + id + '').then((response) => {
                    if (response.data) {
                        this.code = response.data;
                        this.showModalWithCode = true;
                    }
                })
            },

            save: function () {
                this.$axios.post('/user/cards/save', this.cards).then(response => {
                    this.editMode = false;
                }).catch(error => {
                    console.log(error)
                });
            },

            handleCardUpdate: function (index, event) {
                this.cards[index].title = event.title;
                this.cards[index].description = event.description;
                this.cards[index].username = event.username;
            }
        },

        computed: {
            isNotEmptyCards: function () {
                return this.cards.length > 0;
            }
        }
    }
</script>

<style>

</style>