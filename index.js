import React, { Component } from 'react';
import './index.css';

class MenuItem extends Component {

  render() {
    if (this.props.item) {
      var { text, items, callback } = this.props.item;
    }
    else
      var { text, items, callback } = this.props;
    //pass one object that contains all props ;)

    if (items) {
      const listItems = items.map((item, index) =>
        <a onClick={item.callback} key={index}>{item.text}</a>
      );

      var content = (
        <div className="dropdown">
          <a>{text}</a>
          <div className="dropdown-content">
            {listItems}
          </div>
        </div>
      );
    }
    else {
      var content = (<a onClick={callback}>{text}</a>);
    }
    return (
      <li>
        {content}
      </li>
    );
  }
}

export default class MinimalistToolbar extends Component {
  constructor(props) {
    super(props);
  }


  /* var menu = {
      model: {
        text: "Model",
        items: [
          {
            text: "New",
            callback: this.handleClick
          },
          {
            text: "Open",
            callback: this.handleClick
          },
          {
            text: "Import",
            callback: this.handleClick
          },
          {
            text: "Export",
            callback: this.handleClick
          }
        ]
      },
      edit: {
        text: "Edit",
        items: [
          {
            text: "Undo",
            callback: this.handleClick
          },
          {
            text: "Redo",
            callback: this.handleClick
          }
        ]
      },
      view: {
        text: "View ",
        items: [
          {
            text: "Objects",
            callback: this.handleClick
          },
          {
            text: "Time Bar",
            callback: this.handleClick
          },
          {
            text: "HDR Environemnt",
            callback: this.handleClick
          }
        ]
      }
    }*/
  render() {
    const { menu } = this.props;
    const menuItems = menu.map((item, index) =>
      <MenuItem
        key={index}
        text={item.text}
        items={item.items}
        callback={item.callback}
      />
    );
    return (
      <div className="top-bar">
        <ul>
          {menuItems}
        </ul>
      </div>
    );
  }
}