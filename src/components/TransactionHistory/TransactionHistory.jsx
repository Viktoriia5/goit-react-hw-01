import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  console.log(items);
  return (
    <table>
      <thead className={css["transactions-header"]}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr key={item.id} className={css["transactions-table"]}>
            <td className={css["first-letter-pseudo"]}>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
