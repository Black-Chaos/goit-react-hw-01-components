import PropTypes from 'prop-types';
import {
  Table,
  TableHead,
  HeadData,
  TableBody,
  TableRow,
  TableData,
} from './TransactionHistory.styled';

export function TransactionHistory({ tx=[] }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <HeadData>Type</HeadData>
          <HeadData>Amount</HeadData>
          <HeadData>Currency</HeadData>
        </TableRow>
      </TableHead>
      <TableBody>
        {tx.map(({
          id,
          type,
          amount,
          currency,
        }) => (
            <TableRow key={id}>
                <TableData>{ type}</TableData>
                <TableData>{ amount}</TableData>
                <TableData>{ currency}</TableData>
            </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  tx: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};