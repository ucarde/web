<template>
    <input :type="type" :value="value" @input="$emit('input', $event.target.value)" :class="classObject">
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                required: false,
                default: 'text'
            },

            value: {
                type: String
            }
        },

        computed: {
            classObject: function () {
                return [
                    "appearance-none",
                    "border", 
                    "rounded", 
                    "w-full", 
                    "py-2", 
                    "px-3", 
                    "text-gray-700", 
                    "leading-tight", 
                    "focus:outline-none", 
                    "focus:shadow-outline"
                ];
            }
        }
    }
</script>