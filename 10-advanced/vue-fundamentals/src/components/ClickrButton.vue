<template>
    <button @click="incrementCount">
        {{ clicks }} clicks so far
    </button>
</template>

<style scoped>
button {
    background-color: pink;
    box-shadow: 0 0 25px limegreen;
}
</style>

<script>
export default {
    name: 'ClickrButton',
    // the data method should return your initial data object:
    data: function () {
        return {
            clicks: 0
        };
    },
    methods: {
        incrementCount: function () {
            this.clicks++;
        }
    }
}
</script>