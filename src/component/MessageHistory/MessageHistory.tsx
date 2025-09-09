import type { IMessage } from "../types";
import Message from "../Message/Message";
import Response from "../Response/Response";
import Typing from "../Typing/Typing";

interface IMessageProps {
    list: IMessage[]
}

function MessageHistory({ list }: IMessageProps) {
    return (
        <ul>
            {list.map(message => (
                message.type === 'response' ? (<Response key={message.id} data={message} />) :
                    message.type === 'message' ? (<Message key={message.id} data={message} />) :
                        (<Typing key={message.id} data={message} />)
            ))}
        </ul>
    )
}

export default MessageHistory;