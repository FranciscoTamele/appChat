import { View, Text } from "react-native"
import { Dimensions } from "react-native";

const Message = ({ data }) => {

    const { width } = Dimensions.get('window')

    return (
        <View style={{ display:'flex', flexDirection: 'row', marginBottom: 10, justifyContent:(data.isMine?'flex-end':'flex-start') }}>
            <View style={{
                maxWidth: (width - 100),
                backgroundColor: (data.isMine ? '#EB2762' : '#fff'), padding: 7, borderRadius: 10
            }}>
                <Text style={{ fontSize: 18, color: (data.isMine ? '#fff' : '#000'), paddingHorizontal: 10 }}>
                    {data.message}
                </Text>
            </View>
        </View>
    )
}

export default Message;