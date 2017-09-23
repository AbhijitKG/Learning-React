"use strict";
// index.android.js - place code in here for ios
Object.defineProperty(exports, "__esModule", { value: true });
// Import a library to help create a component
const React = require("react");
const react_native_1 = require("react-native");
const styles = react_native_1.StyleSheet.create({
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        height: 64,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});
class AppTest extends React.Component {
    render() {
        return (<react_native_1.View style={styles.viewStyle}>
        <react_native_1.Text style={styles.textStyle}> Hello, HI  </react_native_1.Text>
        </react_native_1.View>);
    }
}
exports.default = AppTest;
//# sourceMappingURL=index.ios.js.map