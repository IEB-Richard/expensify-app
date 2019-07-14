const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':

      // filter solution 01: 
      // return state.filter((expense)=>{
      //   return expense.id !== action.id
      // });

      // filter solution 02:
      // return state.filter(({ id })=>{
      //   return id !== action.id
      // });

      // filter solution 03
      return state.filter(({ id }) => id !== action.id);

    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};