<template>
    <label class="block text-gray-700 text-sm font-medium mb-2" for="username">
        {{ value }}
    </label>
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                required: true
            }
        }
    }
</script>