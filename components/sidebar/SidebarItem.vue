<template>
    <NuxtLink :to="to" :class="classObject" exact-active-class="bg-indigo-600 text-gray-100">
        <slot />

        {{ text }}
    </NuxtLink>
</template>

<script>
    export default {
        props: {
            text: {
                type: String,
                required: true
            },

            to: {
                type: String,
                required: true
            }
        },

        computed: {
            classObject: function () {
                return [
                    'flex',
                    'items-center',
                    'mt-1',
                    'p-2',
                    'rounded-lg',
                    'hover:bg-indigo-600',
                    'hover:text-gray-100',
                    'hover:cursor-pointer'
                ];
            }
        }
    }
</script>