<template>
    <img class="w-28 h-28 rounded-full" :src="src">
</template>

<script>
    export default {
        props: {
            src: {
                type: String,
                required: true
            }
        }
    }
</script>