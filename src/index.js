import { SafeAreaView } from "react-native"
import MenuChat from "./views/MenuChat"
import { useState } from "react"
import MessageChat from "./views/ChatMessage"


const Root =()=>{

    const [isMenu, setIsMenu] = useState(true);
    const [user, setUser] = useState({});

    if(isMenu){
        return(
            <MenuChat onOpenChat={(user)=>{
                setUser(user);
                setIsMenu(false);
            }}/>
        )
    }else{
        return(
            <MessageChat onBack={()=>setIsMenu(true)} user={user}/>
        )
    }
    
}

export default Root;

