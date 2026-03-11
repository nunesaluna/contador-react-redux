import React from "react";
import { createStore } from "redux";
import { Provider, useSelector, useDispatch } from "react-redux";
import "./App.css"; 

const initialState = { count: 0 };
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });
const reset = () => ({ type: RESET });

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: return { ...state, count: state.count + 1 };
    case DECREMENT: return { ...state, count: state.count - 1 };
    case RESET: return { ...state, count: 0 };
    default: return state;
  }
};

const store = createStore(counterReducer);

const Contador = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  // LÓGICA DE CLASSE EM VEZ DE COR DIRETA
  let classeCor = "zero";
  if (count > 0) classeCor = "positivo";
  if (count < 0) classeCor = "negativo";

  return (
    <div className="container">
      <h1>Meu Contador</h1>
      
      {/*USANDO className COM A VARIÁVEL */}
      <p className={`contador-texto ${classeCor}`}>
        {count}
      </p>

      <div className="button-group">
        <button className="btn" onClick={() => dispatch(decrement())}>- Decrementar</button>
        <button className="btn btn-reset" onClick={() => dispatch(reset())}>Resetar</button>
        <button className="btn" onClick={() => dispatch(increment())}>+ Incrementar</button>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <Contador />
    </Provider>
  );
}