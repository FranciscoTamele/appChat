import { View, StyleSheet, TouchableOpacity, Text } from "react-native"

export const MENU = {
    ALL:'ALL',
    FAMILY:'FAMILY'
}

const ChatNav = ({selected, onChange})=>{

    return(
        <View style={style.container}>
            <Item onPress={()=>onChange(MENU.ALL)} value={'All'} isSelected={selected===MENU.ALL}></Item>
            <Item onPress={()=>onChange(MENU.FAMILY)} value={'Family'} isSelected={selected===MENU.FAMILY}></Item>
        </View>
    )
}

const Item =({value, onPress, isSelected})=>{
    return(
        <TouchableOpacity onPress={onPress}>
            <Text style={{fontSize:25, color:(isSelected?'#EB2762':'#000')}}>{value}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container:{
        flexDirection:'row',
        gap:20
    },
    item:{

    }
})

export default ChatNav;