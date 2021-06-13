<template>
    <p class="mt-2 text-sm text-gray-400 text-center">
        {{ text }}
    </p>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                required: true
            }
        }
    }
</script>