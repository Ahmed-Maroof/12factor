<template>
    <span>
        <v-toolbar app color="green darken-4" dark>
            <router-link to="/">
                <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
            </router-link>
        </v-toolbar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: '12 Agile Principles',
            drawer: false
        };
    },
    methods: {}
};
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}
</style>
