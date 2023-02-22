import PropTypes from "prop-types";
import StatItem from "../StatItem/StatItem";
import css from "../Stats/Statistics.module.css";

export const Statistics = ({statistics}) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>

      <ul className = {css.statisticsList} >
        {statistics.map(statistic => (
          <StatItem id = {statistic.id} label = {statistic.label} percentage = {statistic.percentage} /> 
        ))}
      </ul>
    </section>
  )
};

Statistics.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.number.isRequired,
      percentage: PropTypes.number.isRequired,
    },),
  ),
};


