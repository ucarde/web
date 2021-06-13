<template>
    <CardField @generateFieldCode="emitGenerateCode" :value="value" :id="id" :enableCodeGenerate="enableCodeGenerate">
        <template v-slot:icon>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
        </template>
    </CardField>
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                required: true
            },

            id: {
                type: Number,
                required: false,
                default: 0
            },

            enableCodeGenerate: {
                type: Boolean,
                required: false,
                default: true
            }
        },

        methods: {
            emitGenerateCode: function (id) {
                this.$emit('generateFieldCode', id)
            }
        }
    }
</script>