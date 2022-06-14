import PropTypes from 'prop-types';

const ExpenseFilter = props => {
    return (
        <select className="form-control" 
            value={props.selectedYear} 
            onChange={(event) => props.onFilterYear(event.target.value)}>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
        </select>
    )
}

ExpenseFilter.propTypes = {
    selectedYear : PropTypes.string.isRequired,
    onFilterYear : PropTypes.func.isRequired
}
export default ExpenseFilter;