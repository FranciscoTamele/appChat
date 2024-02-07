import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatNav, { MENU } from "../components/chatnav";
import users from "../database/user";
import UserItem from "../components/useritem";
import { useState } from "react";
import usersFamily from "../database/userFamily";

const MenuChat = ({onOpenChat}) => {

    const [selectedMenu, setSelectedMenu] = useState(MENU.ALL);

    return (
        <SafeAreaView style={style.container}>
            <View style={style.header}>
                <Text style={{ fontSize: 35, fontWeight: 'bold', color: '#fff' }}>
                    Chats
                </Text>
            </View>
            <View style={style.body}>
                <ChatNav selected={selectedMenu} onChange={setSelectedMenu} />
                <View style={style.contacts}>
                    { switchMenu(selectedMenu, onOpenChat)}
                </View>
            </View>
        </SafeAreaView>
    )
}

const switchMenu = (menuSelected, onOpenChat) => {
    if (menuSelected === MENU.ALL) {
        return (
            <FlatList
                data={users}
                renderItem={({ item }) => {
                    return (
                        <UserItem onPress={()=>{
                            onOpenChat(item);
                        }} data={item} />
                    )
                }}
                ItemSeparatorComponent={() => {
                    return (
                        <View style={{ height: 20 }} />
                    )
                }}
            />
        )
    } else if (menuSelected === MENU.FAMILY) {
        return (
            <FlatList
            data={usersFamily}
            renderItem={({ item }) => {
                return (
                    <UserItem onPress={()=>{
                        onOpenChat(item);
                    }} data={item} />
                )
            }}
            ItemSeparatorComponent={() => {
                return (
                    <View style={{ height: 20 }} />
                )
            }}
        />
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EB2562'
    },
    header: {
        height: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    body: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 30,
        paddingHorizontal: 25
    },
    contacts: {
        flex: 1,
        paddingTop: 20
    }
})

export default MenuChat;