import PropTypes from "prop-types";
import StatItem from "../StatItem/StatItem";
import css from "../Stats/Statistics.module.css";

const Statistics = (title, statistics) => {
  return (
    <section className={css.statistics}>
      {title} && <h2 className={css.title}>{title}</h2>

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

export default Statistics;
