<template>
    <span class="mt-2 text-lg">
        {{ text }}
    </span>
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