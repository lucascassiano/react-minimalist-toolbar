import React, { Component } from 'react';
import './Toolbar.css';


class ToolbarItem extends Component {

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

class Toolbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleClick(e) {
    e.preventDefault();
    console.log("Single Click");

  }

  render() {
    var menu, items;

    if (this.props.menu) {
      menu = this.props.menu;
      items = menu.map((item, index) =>
      <ToolbarItem text={item.text} items={item.items} callback={this.handleClick} />
    );
    }

    const { brand } = this.props;
    var logo;
    if (this.props.logo) {
      logo = (
        <img src={this.props.logo} className="logo"></img>
      );
    }
    
    

    return (
      <div className="toolbar">
        <ul>
          <li className="brand"><a>{logo}{brand}</a></li>
          {items}
        </ul>
      </div>
    );
  }
}

export default Toolbar;
