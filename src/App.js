import React from "react";
import "./App.css";

import Form from "./Forms";
import List from "./List";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [],
    };
  }

  

  handelAction = ({ actionType, data }) => {
    console.log(actionType, data);

    return this.setState((prevState) => ({
      itemList: prevState.itemList?.filter((item) => item.id !== data.id),
    }));
  };

  idGen = () => {
    if (!this.state.itemList.length) return 1;
    const sortItems = this.state.itemList.sort((a, b) =>
      a.id < b.id ? 1 : -1
    );
    const lastId = sortItems[0].id;
    console.log(sortItems, lastId);
    return lastId + 1;
  };


  addItem = (newItem) => {
    this.setState({
      itemList: [
        ...this.state.itemList,
        newItem,
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          <Form
            add={this.addItem}
            id = {this.idGen()}
          
          />
          <List
            items={this.state.itemList}
            data={this.state.data}
            action={this.handelAction}
          />
        </div>
      </div>
    );
  }
}

export default App;
