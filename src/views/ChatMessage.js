import { useEffect } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet, View, Text, BackHandler, Image, TouchableOpacity } from "react-native"

const MessageChat = ({ user, onBack }) => {

    console.log("-----------")
    console.log(user)
    console.log("-----------")

    function handleBackButtonClick() {
        onBack();

        return true;
    }

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
        };
    }, []);

    return (
        <SafeAreaView style={style.container}>
            <View style={style.header}>
                <View style={{ width: 60, height: 60 }}>
                    <TouchableOpacity onPress={() => onBack()}>
                        <Image style={{ width: 50, height: 50 }} source={require('./../../assets/icon_back.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1, height: 70, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{user.name}</Text>
                    <Text>Online</Text>
                </View>
                <View style={{ width: 60, height: 60, position: 'relative' }}>
                    <Image style={{ width: 60, height: 60, borderRadius: 60 }} source={user.photo} />
                    <View style={{backgroundColor:'#27EB62',width:15,height:15,position:'absolute',top:5,right:2,borderRadius:15,borderWidth:2,borderColor:'#fff'}} />
                </View>
            </View>
            <View>

            </View>
            <View style={style.containerMessage}>
                
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        height: 70,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 15
    },
    containerMessage:{

    }
})

export default MessageChat;