<template>
</template>

<script>
    export default {
        mounted: async function () {
            await this.$auth.logout();
            this.$auth.redirect('login');
        }
    }
</script>