import { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class List extends Component {

    constructor(props){
        super(props);
        this.state = {
            feed: this.props.data,
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.feed.name}</Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default List;