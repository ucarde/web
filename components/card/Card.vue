<template>
    <CardCustom>
        <template v-slot:avatar>
            <AppUserAvatarUnknown />
        </template>

        <template v-slot:owner-name>
            <CardOwnerName :text="name" />
        </template>

        <template v-slot:owner-description>
            <CardOwnerDescription :text="description" />
        </template>

        <template v-slot:fields>
            <component v-for="(field, index) in fields"
                :key="index"
                :is="getComponentFieldName(field.type)"
                :value="field.value"
                :id="field.id"
                :enableCodeGenerate="isOwner"
                @generateFieldCode="emitGenerateCode"
                />
        </template>

        <template v-slot:bottom>
            <CardButtonBottom v-if="isOwner" @click="$emit('generate-card-code')">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
            </CardButtonBottom>
        </template>
    </CardCustom>
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true
            },

            description: {
                type: String,
                required: true
            },

            fields: {
                type: Array,
                required: true
            },

            isOwner: {
                type: Boolean,
                required: false,
                default: true
            }
        },

        methods: {
            getComponentFieldName: function (type) {
                return "CardField" + type[0].toUpperCase() + type.slice(1);
            },

            emitGenerateCode: function (id) {
                this.$emit('generate-field-code', id)
            }
        }
    }
</script>