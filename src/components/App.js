import React, { Component } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

class App extends Component {
  state = {
    items: itemData,
    isDarkMode: false
  };

  handleDarkModeClick = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode
    }));
  };

  render() {
    const appClass = this.state.isDarkMode ? "App dark" : "App light";

    return (
      <div className={appClass}>
        <header>
          <h2>Shopster</h2>
          <button onClick={this.handleDarkModeClick}>
            {this.state.isDarkMode ? "Dark" : "Light"} Mode
          </button>
        </header>
        <ShoppingList items={this.state.items} />
      </div>
    );
  }
}

export default App;
