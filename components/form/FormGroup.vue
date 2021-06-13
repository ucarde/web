<template>
    <div class="mb-2">
        <FormLabel :value="label" />
        
        <slot />
    </div>
</template>

<script>
    export default {
        props: {
            label: {
                type: String,
                required: true
            }
        }
    }
</script>