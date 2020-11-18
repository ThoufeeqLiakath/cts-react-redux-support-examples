import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Add from './components/Add';
import Dashboard from './components/Dashboard';
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Add />
        <Dashboard />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
