# react-minimalist-toolbar
A Minimalist toolbar react component

## Install
```
npm install --save react-minimalist-toolbar
```

## Example
```
import MinimalistToolbar from 'MinimalistToolbar'

...

newFile(){
    //open new file here
}

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
            <MinimalistToolbar menu = {menu} />

        );
        
}

```