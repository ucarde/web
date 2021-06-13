<template>
    <div class="flex justify-center cursor-pointer p-2 bg-indigo-600 text-white rounded-b-lg" 
        @click="$emit('click', $event)">
        <slot />
    </div>
</template>