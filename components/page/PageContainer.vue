<template>
    <div :class="classObject">
        <slot />
    </div>
</template>

<script>
    export default {
        computed: {
            classObject: function () {
                return [
                    "container",
                    "p-10",
                ];
            }
        }
    }
</script>