import React, { useState } from 'react';

import {
    FlatList,
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    StatusBar, TouchableOpacity
} from 'react-native';

const DATA = [
    {
        id: "1",
        title: "Toàn bộ TS",
    },
    {
        id: "2",
        title: "TS chưa sử dụng",
    },
    {
        id: "3",
        title: "TS đang sử dụng",
    },
    {
        id: "4",
        title: "TS sửa chữa/bảo dưỡng",
    },
    {
        id: "5",
        title: "TS mất",
    },
    {
        id: "6",
        title: "TS hỏng",
    },
    {
        id: "7",
        title: "TS hủy",
    },
    {
        id: "8",
        title: "Báo hỏng/mất TS",
    },

];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
);
const ToanBoTaiSan = () => {

    const [selectedId, setSelectedId] = useState(DATA);
    const ItemView = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#03467d" : "#aae1e6";
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    //   const setSelectedId = (item) => {
    //     //Function for click on an item
    //     alert('Id: ' + item.id + ' Value: ' + item.title);
    //   };

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.areaView} >
                <FlatList
                    data={DATA}
                    numColumns='3'
                    renderItem={ItemView}
                    keyExtractor={(item, index) => index.toString()}
                    extraData={selectedId}
                />
            </SafeAreaView>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    areaView: {
        height: '25%',
        backgroundColor: "#eeeee4",
    },
    item: {
        width: "30%",
        height: 50,

        borderRadius: 15,
        alignItems: 'center',
        justifyContent: "center",
        marginVertical: 4,
        marginHorizontal: 6,
    },
    title: {
        fontSize: 16,
        alignItems: 'center',
        color: "black",
        justifyContent: "center",
    },
});

export default ToanBoTaiSan;