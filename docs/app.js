import Vue from 'vue';
import { TableColumn, TableComponent } from '../src';

new Vue({
    el: '#app',

    components: {
        TableColumn,
        TableComponent,
    },
    methods: {
        handleRowClick(row) {
            // eslint-disable-next-line
            console.log('ROW CLICKED', row)
        },
        handleRowVisible(row) {
            // eslint-disable-next-line
            console.log('ROW VISIBLE', row)
        },
        handleLastRowChanged(row) {
            // eslint-disable-next-line
            console.log('LAST ROW CHANGED', row)
        },
    },
});
