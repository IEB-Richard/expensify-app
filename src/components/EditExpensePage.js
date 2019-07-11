import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      This is from my edit expense component of id {props.match.params.id}
      <ExpenseForm 
        expense={props.expense}
        onSubmit={(expense)=>{
          props.dispatch()
        }}
      />
    </div>
  );
};

export default connect()(EditExpensePage);