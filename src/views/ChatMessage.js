import { useEffect, useRef, useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { StyleSheet, View, Text, BackHandler, Image, TouchableOpacity, TextInput, Pressable, ScrollView } from "react-native"
import messages from "../database/chat"
import Message from "../components/message"


const MessageChat = ({ user, onBack }) => {

    const [input, setInput] = useState('');
    const [chatMessages, setChatMessages] = useState(messages);

    const scrollViewRef = useRef();

    const scrollToBottom = () => {
        scrollViewRef.current.scrollToEnd({ animated: false });
    };

    useEffect(()=>{
        scrollToBottom();
    },[]);

    const fakeResponse =()=>{
            chatMessages.push({
                isMine: false,
                message: stringTamanhoAleatorio()
            })
            setChatMessages(chatMessages);
    }

    const onContentSizeChange = (contentWidth, contentHeight) => {
          scrollToBottom();
      };


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
                    <View style={{ backgroundColor: '#27EB62', width: 15, height: 15, position: 'absolute', top: 5, right: 2, borderRadius: 15, borderWidth: 2, borderColor: '#fff' }} />
                </View>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
                <ScrollView overScrollMode="never" showsVerticalScrollIndicator={false} ref={scrollViewRef} onContentSizeChange={onContentSizeChange}>
                    {
                        chatMessages.map((item) => {
                            return (
                                <Message key={Math.floor(Math.random() * 1000000000)} data={item} />
                            )
                        })
                    }
                </ScrollView>
            </View>
            <View style={style.containerMessage}>
                <TextInput value={input} onChangeText={(e) => setInput(e)} style={{ flex: 1, fontSize: 20 }} placeholder="Escrever messagem ..." multiline={true} />
                <Pressable onPress={() => {
                    chatMessages.push({
                        isMine: true,
                        message: input
                    })
                    setChatMessages(chatMessages);
                    setInput('');
                    fakeResponse();
                }}>
                    <Image style={{ width: 60, height: 60, borderRadius: 60 }} source={require('./../../assets/icon_send.png')} />
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDEDEB'
    },
    header: {
        height: 70,
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 15
    },
    containerMessage: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        maxHeight: 100
    }
})

function stringTamanhoAleatorio() {
    // Definir um array de palavras para gerar a string
    const palavras = [
      "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur",
      "adipiscing", "elit", "sed", "do", "eiusmod", "tempor",
      "incididunt", "ut", "labore", "et", "dolore", "magna",
      "aliqua", "Ut", "enim", "ad", "minim", "veniam", "quis",
      "nostrud", "exercitation", "ullamco", "laboris", "nisi",
      "ut", "aliquip", "ex", "ea", "commodo", "consequat", "Duis",
      "aute", "irure", "dolor", "in", "reprehenderit", "in",
      "voluptate", "velit", "esse", "cillum", "dolore", "eu",
      "fugiat", "nulla", "pariatur", "Excepteur", "sint",
      "occaecat", "cupidatat", "non", "proident", "sunt", "in",
      "culpa", "qui", "officia", "deserunt", "mollit", "anim",
      "id", "est", "laborum"
    ];
  
    // Gerar um número aleatório entre 1 e 20 para determinar o número de palavras na string
    const tamanho = Math.floor(Math.random() * 20) + 1;
  
    // Construir a string com base no número de palavras aleatório
    let string = '';
    for (let i = 0; i < tamanho; i++) {
      // Selecionar uma palavra aleatória do array
      const palavraAleatoria = palavras[Math.floor(Math.random() * palavras.length)];
      // Adicionar a palavra à string, juntamente com um espaço
      string += palavraAleatoria + ' ';
    }
  
    // Remover o espaço extra no final da string e retorná-la
    return string.trim();
  }

export default MessageChat;