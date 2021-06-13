<template>
    <div :class="classObject">
        <SidebarGroupTitle :title="title" />

        <slot />
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            }
        },

        computed: {
            classObject: function () {
                return ["mt-4", "text-sm", "text-gray-500"];
            }
        }
    }
</script>