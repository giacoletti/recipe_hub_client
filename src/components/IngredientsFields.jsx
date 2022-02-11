import React, { useState } from "react";

const IngredientsFields = () => {

  const ingredients = [
    {id: 1, name: 'Sugar'},
    {id: 2, name: 'Water'},
    {id: 3, name: 'Rice'},
    {id: 4, name: 'Milk'},
  ]
  const fields = { ingredientId: "", unit: "", amount: "" };
  const [inputList, setInputList] = useState([fields]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, fields]);
  };

  return (
    <>
      {inputList.map((item, i) => {
        return (
          <>
            <input
              name="ingredientId"
              placeholder="Enter ID"
              value={item.ingredientId}
              onChange={(event) => handleInputChange(event, i)}
            />
            <input
              name="unit"
              placeholder="Unit"
              value={item.unit}
              onChange={(event) => handleInputChange(event, i)}
            />
            <input
              name="amount"
              placeholder="Amount"
              value={item.amount}
              onChange={(event) => handleInputChange(event, i)}
            />
            {inputList.length !== 1 && (
              <button className="mr10" onClick={() => handleRemoveClick(i)}>
                -
              </button>
            )}
            <div>
              {inputList.length - 1 === i && (
                <button onClick={handleAddClick}>Add another...</button>
              )}
            </div>
          </>
        );
      })}
      <div>{JSON.stringify(inputList)}</div>
    </>
  );
};

export default IngredientsFields;
