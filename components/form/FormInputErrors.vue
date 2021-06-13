<template>
    <span class="mt-2 text-red-500 text-sm" v-if="typeof errors[name] !== 'undefined'">
        {{ errors[name][0] }}
    </span>
</template>

<script>
    export default {
        props: {
            errors: {
                type: Object,
                required: false
            },

            name: {
                type: String,
                required: true
            }
        }
    }
</script>>