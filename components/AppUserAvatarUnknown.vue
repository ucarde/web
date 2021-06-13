<template>
    <div :class="classObject">
        <svg xmlns="http://www.w3.org/2000/svg" :class="classObjectSize" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
    </div>
</template>

<script>
    export default {
        props: {
            width: {
                type: Number,
                required: false,
                default: 28
            },

            height: {
                type: Number,
                required: false,
                default: 28
            }
        },

        computed: {
            classObject: function () {
                return [
                    "flex", 
                    "items-center", 
                    "cursor-pointer", 
                    "hover:bg-gray-700", 
                    "justify-center", 
                    "rounded-full", 
                    "bg-gray-400", 
                    "text-gray-300",
                    `w-${this.width}`, 
                    `h-${this.height}`
                ];
            },

            classObjectSize: function () {
                return [
                    `w-${this.width - 8}`, 
                    `h-${this.height - 8}`
                ];
            }
        }
    }
</script>