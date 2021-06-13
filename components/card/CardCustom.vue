<template>
    <div :class="classObject">
        <CardContainer>
            <slot name="avatar" />

            <slot name="owner-name" />

            <slot name="owner-description" />

            <div class="mt-3 w-full">
                <slot name="fields" />
            </div>
        </CardContainer>

        <slot name="bottom" />
    </div>
</template>

<script>
    export default {
        computed: {
            classObject: function () {
                return [
                    "flex",
                    "flex-col",
                    "bg-white",
                    "rounded-lg",
                    "self-start",
                    "w-full"
                ];
            }
        }
    }
</script>