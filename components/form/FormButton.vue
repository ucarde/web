<template>
    <button @click="$emit('click', $event)" :class="classObject">
        {{ value }}
    </button>
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                required: true
            }
        },

        computed: {
            classObject: function () {
                return [
                    "block",
                    "w-full", 
                    "py-3", 
                    "font-bold", 
                    "text-sm", 
                    "bg-indigo-600", 
                    "hover:bg-indigo-600", 
                    "rounded", 
                    "text-white"
                ];
            }
        }
    }
</script>