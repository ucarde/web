<template>
    <div class="font-extrabold mb-2">
        {{ title }}
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            }
        }
    }
</script>