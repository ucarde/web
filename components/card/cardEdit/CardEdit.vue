<template>
    <CardCustom>
        <template v-slot:avatar>
            <file-upload
                ref="upload"
                v-model="files"
                accept="image/*"
            >
                <AppUserAvatarUnknown />
            </file-upload>
        </template>

        <template v-slot:owner-name>
            <input type="text" v-model="card.username" class="placeholder-current mt-2 text-lg w-full outline-none text-center" placeholder="Ваше имя">
            <FormInputErrors :errors="errors" name="username" />
        </template>

        <template v-slot:owner-description>
            <input type="text" v-model="card.description" class="mt-2 text-sm text-gray-400 w-full outline-none text-center" placeholder="Описание карточки">
            <FormInputErrors :errors="errors" name="description" />
        </template>

        <template v-slot:fields>
            <CardField v-for="(field, fieldIndex) in card.fields" 
                :key="fieldIndex"
                :enableCodeGenerate="false">
                <template v-slot:icon>
                    <div class="relative inline-flex">
                        <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412 232"><path d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z" fill="#648299" fill-rule="nonzero"/></svg>
                        <select v-model="field.type" class="border border-gray-300 rounded-full text-gray-600 w-10 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                            <option selected disabled>Тип поля</option>
                            <option v-for="(type, index) in fieldTypes" :key="index" :value="type.value">
                                {{ type.title }}
                            </option>
                        </select>
                    </div>
                </template>

                <template v-slot:value>
                    <input type="text" v-model="field.value" class="ml-5 outline-none w-auto" placeholder="Значение">
                </template>

                <template v-slot:right>
                    <button v-if="!fieldsCountMin" class="rounded-lg p-1 bg-red-600 outline-none" @click="deleteField(fieldIndex)">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </template>

                <template v-slot:error>
                    <FormInputErrors :errors="errors" :name="`fields.${fieldIndex}.type`" />
                    <FormInputErrors :errors="errors" :name="`fields.${fieldIndex}.value`" />
                </template>
            </CardField>
        </template>

        <template v-slot:bottom>
            <CardButtonBottom @click="addField">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>

                Добавить поле
            </CardButtonBottom>
        </template>
    </CardCustom>
</template>

<script>
    export default {
        props: {
            cardFields: {
                type: Array,
                required: false,
                default: function () {
                    return [
                        {
                            type: "",
                            name: "test",
                            value: ""
                        }
                    ];
                }
            },

            cardUsername: {
                type: String,
                required: false,
                default: ""
            },

            cardDescription: {
                type: String,
                required: false,
                default: ""
            },

            cardTitle: {
                type: String,
                required: false,
                default: "test"
            },

            cardErrors: {
                type: Object,
                required: false,
                default: function () {
                    return {};
                }
            }
        },

        data: function () {
            return {
                card: {
                    fields: this.cardFields,
                    username: this.cardUsername,
                    description: this.cardDescription,
                    title: this.cardTitle,
                    errors: this.cardErrors
                },

                files: [],

                fieldTypes: [
                    {
                        title: "Текст",
                        value: "text"
                    },

                    {
                        title: "Телефон",
                        value: "phone"
                    },

                    {
                        title: "Email",
                        value: "email"
                    },

                    {
                        title: "Ссылка",
                        value: "url"
                    }
                ],

                errors: this.cardErrors
            };
        },

        methods: {
            addField: function () {
                if (this.fieldsCountMax) {
                    this.card.fields.push({
                        type: "",
                        name: "test",
                        value: ""
                    });
                }
            },

            deleteField: function (index) {
                if (!this.fieldsCountMin) {
                    this.card.fields.splice(index, 1);
                }
            },
        },

        computed: {
            fieldsCountMin: function () {
                return this.card.fields.length === 1;
            },

            fieldsCountMax: function () {
                return this.card.fields.length <= 6;
            }
        },

        watch: {
            card: {
                handler: function (newValue) {
                    console.log(newValue)
                    this.$emit('input', newValue);
                },

                deep: true
            },

            cardErrors: function (value) {
                console.log(value);
                this.errors = value;
            }
        }
    }
</script>