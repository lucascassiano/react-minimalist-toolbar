# react-minimalist-toolbar
A Minimalist toolbar react component
![Image of toolbar](https://raw.githubusercontent.com/lucascassiano/react-minimalist-toolbar/master/doc/example.png)

## Install
```
npm install --save react-minimalist-toolbar
```

## Example
```
import Toolbar from 'react-minimalist-toolbar'

...

newFile(){
    //open new file here
}
//implement all callback functions

...

render() {
    
    var menu = [
        {
            text: "file",
            items: [
            {
                text: "New",
                callback: this.newFile
            },
            {
                text: "Open",
                callback: this.openFile
            }
            ]
        },
        {
            text: "edit",
            items: [
            {
                text: "Undo",
                callback: this.undo
            },
            {
                text: "Redo",
                callback: this.redo
            }
            ]
        },
    ];
        

        return (
             <Toolbar menu={menu} logo={logo} brand="React-Minimalist-Toolbar"></Toolbar>


        );
        
}

```