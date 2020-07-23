import React from "react";
import "./App.css";

import Clock from "./Clock";
import Form from "./Forms";
import List from "./List";
import Clocks from "./try";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      name: "",
      itemList: [],
    };
  }

  // handleChangeData = (event) => {
  //   this.setState({
  //     data: event,
  //   });
  // };
  // handleChangeName = (event) => {
  //   this.setState({
  //     name: event,
  //   });
  // };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

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

  clearData = { name: "", data: "" };

  addItem = () => {
    if (!this.state.data && !this.state.name) return;
    const findItem = this.state.itemList.find(
      (item) => item.data === this.state.data
    );

    if (findItem) {
      return this.editItem({ findItem });
    }
    const id = this.idGen();
    this.setState({
      itemList: [
        ...this.state.itemList,
        {
          id,
          data: this.state.data,
          name: this.state.name,
        },
      ],
      ...this.clearData,
    });
  };

  // now = moment().utc().add(7,'hours').format();

  render() {
    return (
      <div className="App">
        <div>
          <Form
            // ChangeData={this.handleChangeData}
            // ChangeName={this.handleChangeName}
            Add={this.addItem}
            handleChange={this.handleChange}
            data={this.state.data}
            name={this.state.name}
          />
          <List
            items={this.state.itemList}
            data={this.state.data}
            action={this.handelAction}
          />
          {/* <Clock /> */}
          {/* <Clocks /> */}
        </div>
      </div>
    );
  }
}

export default App;
