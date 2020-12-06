export default class NavLC {

    static onSetWillFocus = (navigation, callback) => {
        return navigation.addListener(
            'willFocus',
            () => {
              callback();
            }
        );
    };

    static onSetDidFocus = (navigation, callback) => {
        return navigation.addListener(
            'didFocus',
            () => {
              callback();
            }
        );
    };

    static onSetWillBlur = (navigation, callback) => {
        return navigation.addListener(
            'willBlur',
            () => {
              callback();
            }
        );
    };

    static onSetDidBlur = (navigation, callback) => {
        return navigation.addListener(
            'didBlur',
            () => {
              callback();
            }
        );
    };
    
}

// Example Usage
// componentWillMount(){
//     this._willFocus = NavLC.onSetWillFocus(navigation, () => {

//     });
// }

// componentWillUnmount() {
//     if(this._willFocus) this._willFocus.remove();
// }