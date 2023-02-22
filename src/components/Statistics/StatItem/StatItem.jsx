import PropTypes from "prop-types";
import css from "../StatItem/StatItem.module.css";

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};



const StatItem = ({ id, label, percentage }) => {

    return (<li className={css.item} key={id} style={{ backgroundColor: getRandomHexColor() }}>
        <span className={css.statisticsLabel}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
    </li>);
};


StatItem.propTypes = {
    statistic: PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    })
};

export default StatItem;
