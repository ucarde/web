<template>
    <div class="flex container min-h-screen min-w-full justify-center items-center bg-gray-900">
        <div class="flex w-1/4">
            <Card
                :key="card.id" 
                :description="card.description"
                :name="card.username"
                :fields="card.fields"
                :id="card.id"
                :isOwner="false" />
        </div>
    </div>
</template>

<script>
    export default {
        layout: 'empty',
        auth: false,

        async asyncData({ $axios, params }) {
            const card = await $axios.get("card/" + params.slug).then(res => res.data);

            if (card) {
                return {
                    card: card
                }
            } else {
                context.redirect('/');
            }
        }
    }
</script>