import { useState, useMemo, memo } from 'react';

const ExpensiveChart = memo(function ExpensiveChart({ data }) {
  console.log('ExpensiveChart rendered');
  return <div>Chart with {data.length} points</div>;
});

function Dashboard({ rawNumbers }) {
  const [counter, setCounter] = useState(0);

  // Without useMemo, chartData would be a brand-new array every
  // render, so ExpensiveChart would re-render even though the
  // underlying data didn't change.
  const chartData = useMemo(() => rawNumbers.map(n => n * 2), [rawNumbers]);

  return (
    <div>
      <button onClick={() => setCounter(c => c + 1)}>
        Clicked {counter} times
      </button>
      <ExpensiveChart data={chartData} />
    </div>
  );
}