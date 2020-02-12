import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import {InputFormContainer} from "./containerComponents/InputFormContainer/InputFormContainer";
import {CardContainer} from "./containerComponents/CardContainer/CardContainer";
import {PageContainer} from "./containerComponents/PageContainer/PageContainer";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div style={{backgroundColor: "grey", height: "800px", paddingTop: "10px"}}>
          <InputFormContainer/>
          <CardContainer />
          <PageContainer/>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

