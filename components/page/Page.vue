<template>
    <div :class="classObject">
        <slot />
    </div>
</template>

<script>
    export default {
        computed: {
            classObject: function () {
                return ["flex", "flex-col", "w-10/12"];
            }
        }
    }
</script>