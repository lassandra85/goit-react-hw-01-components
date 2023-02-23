import PropTypes from 'prop-types';
import {
  Transations,
  TableHeader,
  HeaderRow,
  HeaderTitle,
  TableBody,
  BodyRow,
  BodyValue,
} from './TransationsHistory';

export const TransationsHistory = ({ items }) => {
  return (
    <Transations>
      <TableHeader>
        <HeaderRow>
          <HeaderTitle>Type</HeaderTitle>
          <HeaderTitle>Amount</HeaderTitle>
          <HeaderTitle>Currency</HeaderTitle>
        </HeaderRow>
      </TableHeader>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <BodyRow key={id}>
              <BodyValue>{type}</BodyValue>
              <BodyValue>{amount}</BodyValue>
              <BodyValue>{currency}</BodyValue>
            </BodyRow>
          );
        })}
      </TableBody>
    </Transations>
  );
};

TransationsHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};