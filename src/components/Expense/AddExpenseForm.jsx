import React, { useState } from "react";
import Input from "../Inputs/Input";
import EmojiPickerPopup from "../EmojiPickerPopup";

const AddExpenseForm = ({onAddExpense}) => {
    const [income, setIncome] = useState({
        category: "",
        amount: "",
        date: "",
        icon: "",
    });
    const handleChange = (key, value) => {
        setIncome({ ...income, [key]: value });
    }
    return <div>
        <EmojiPickerPopup
            icon={income.icon} onSelect={(selectedIcon) => handleChange("icon",selectedIcon)} />
            <Input 
            value={income.category} onChange={({target}) => handleChange("category",target.value)} placeholder="Rent, Groceries, etc" label="Category" type="text" />
            <Input
            value={income.amount} onChange={({target}) => handleChange("amount",target.value)} placeholder="Amount" label="Amount" type="number" />
            <Input
            value={income.date} onChange={({target}) => handleChange("date",target.value)} placeholder="" label="Date" type="date" />
            <div className="flex justify-end mt-6">
                <button type="button" className="add-btn add-btn-fill" onClick={() => onAddExpense(income)}>Add Expense</button></div>
    </div>;
};

export default AddExpenseForm;