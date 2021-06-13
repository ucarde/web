<template>
    <div :class="headerClassObject">
        <h1 :class="titleClassObject">{{ title }}</h1>

        <div class="flex flex-row items-center">
            <slot name="header-right" />
        </div>
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
            headerClassObject: function () {
                return [
                    "flex",
                    "flex-row",
                    "items-center",
                    "p-5",
                    "pl-10",
                    "border-b",
                    "border-gray-300",
                    "justify-between"
                ];
            },

            titleClassObject: function () {
                return ["text-xl", "text-gray-800"];
            }
        }
    }
</script>