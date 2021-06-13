<template>
    <div v-if="show" @click="hide" class="flex justify-center items-center fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-60">
        <div class="flex flex-col items-center w-4/12 bg-white p-8 rounded-lg duration-75">
            <div class="text-xl text-center">
                <slot name="title" />
            </div>

            <div class="mt-5">
                <slot name="body" />
            </div>

            <div class="w-full mt-3">
                <slot name="bottom" />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            show: {
                type: Boolean,
                required: false,
                default: false
            }
        },

        methods: {
            hide: function () {
                this.$emit('modal-hide');
            }
        }
    }
</script>