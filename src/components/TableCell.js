export default {
  functional: true,

  props: ['column', 'row', 'showCellTooltips'],

  render (createElement, { props }) {
    const data = {}
    data.attrs = {
      title: props.showCellTooltips
        ? typeof(props.showCellTooltips) === 'string'
          ? props.showCellTooltips
          : typeof(props.showCellTooltips) === 'function'
            ? props.showCellTooltips({row: props.row, column: props.column})
            : props.column.label
        : undefined
    }

    if (props.column.cellClass) {
      data.class = `${data.class} ${props.column.cellClass}`
    }

    if (props.column.template) {
      return createElement('td', data, props.column.template(props.row.data))
    }

    data.domProps = {}
    data.domProps.innerHTML = props.column.formatter(
      props.row.getValue(props.column.show),
      props.row.data
    )

    return createElement('td', data)
  }
}
