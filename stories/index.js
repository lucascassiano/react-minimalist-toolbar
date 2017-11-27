import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Toolbar from './../src';
import logo from './icon.svg';

var menu = [
  {
    text: "File",
    items: [
      {
        text: "New",
        callback: function () {alert('clicked')}
      },
      {
        text: "Open",
        callback: function () {alert('clicked')}
      }
    ]
  },
  {
    text: "Edit",
    items: [
      {
        text: "Undo",
        callback: function () {alert('clicked')}
      },
      {
        text: "Redo",
        callback: function () {alert('clicked')}
      }
    ]
  }
]

storiesOf('Toolbar', module)
  .add('With logo', () => (
    <Toolbar menu={menu} logo={logo} brand="minimalist toolbar"></Toolbar>    
  ))
  .add('without logo', () => (
    <Toolbar menu={menu}></Toolbar> 
  ));
