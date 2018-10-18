<template>
    <tr
      @click="$emit('rowClick', row)"
      v-observe-visibility="(isVisible, entry) => visibilityChangedHandler(isVisible, entry, row)">
      <table-cell v-for="column in visibleColumns" :row="row" :column="column" :key="column.id" :show-cell-tooltips="cellTooltips"/>
    </tr>
</template>

<script>
    import Vue from 'vue'
    import TableCell from './TableCell';

    import VueObserveVisibility from '../directives/observe-visibility/index'
    Vue.use(VueObserveVisibility)


    export default {
        props: ['columns', 'row', 'cellTooltips'],

        components: {
            TableCell,
        },
        methods: {
            visibilityChangedHandler(isVisible, entry, row) {
                this.$emit('rowVisible', {row: row.data, isVisible})
            },
            cellValue (row = {}, column = {}) {
                if (column.template) {
                    return column.template(props.row.data)
                }
                return row.data[column.show]
            }
        },
        computed: {
            visibleColumns() {
                return this.columns.filter(column => ! column.hidden);
            },
        }
    };
</script>

<style lang="stylus">
.tooltip-info
    background #424242
    color white
    padding 0.5em
    border-radius 5px
</style>
