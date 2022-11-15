import Expenses from "./components/Expenses/Expenses";

function App() {
    const expenses = [
        {
            id: "e1",
            title: "Groceries",
            amount: 94.12,
            date: new Date(2022, 7, 14),
        },
        {
            id: "e2",
            title: "Huawei Tablet",
            amount: 799.49,
            date: new Date(2022, 2, 12),
        },
        {
            id: "e3",
            title: "Health Insurance",
            amount: 294.67,
            date: new Date(2022, 2, 28),
        },
        {
            id: "e4",
            title: "Working Desk",
            amount: 450,
            date: new Date(2022, 5, 12),
        },
    ];
    return (
        <div>
            <h2>Let's get started!</h2>
            <Expenses expenses={expenses} />
        </div>
    );
}

export default App;
