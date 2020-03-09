<template>
    <v-layout row>
        <v-flex md2 />
        <v-flex ml-2 md8 xs12>
            <v-layout column v-for="factor of factorList" :key="factor.name">
                <v-expansion-panel accordion focusable>
                    <v-expansion-panel-content>
                        <template v-slot:header>
                            <span class="headerName"> {{ factor.name }}</span>
                        </template>
                        <div class="content">{{ factor.description }}</div>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-layout>
        </v-flex>
        <v-flex md2 />
    </v-layout>
</template>

<script>
export default {
    name: 'HomeComponent',
    data() {
        return {
            factorList: []
        };
    },
    methods: {
        loadData() {
            this.factorList = require('./data.json');
        }
    },
    created() {
        this.loadData();
    }
};
</script>

<style scoped>
@import './index.scss';
</style>
