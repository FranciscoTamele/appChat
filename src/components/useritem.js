import { Image, Text, View, StyleSheet, Pressable } from "react-native"

const UserItem = ({ data, onPress }) => {

    return (
        <Pressable onPress={onPress} style={style.container}>
            <View>
                <Image style={{width:60, height:60, borderRadius:60}} source={data.photo}/>
            </View>
            <View style={{flexDirection:'column',gap:5}}>
                <Text style={{fontSize:20,fontWeight:'bold',color:'#000'}}>
                    {data.name}
                </Text>
                <Text style={{fontSize:15,color:'#707070'}}>
                    {data.nickname}
                </Text>
            </View>
        </Pressable>
    )
}

const style = StyleSheet.create({
    container:{
        flexDirection:'row',
        gap:15,
        alignItems:'center'
    }
})

export default UserItem;