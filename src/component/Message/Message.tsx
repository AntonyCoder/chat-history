import type { IMessage } from "../types";

interface IDataProps {
    data: IMessage,
}

function Message({ data }: IDataProps) {

    const { from, time, text } = data;

    return (
        <li className="clearfix">
            <div className="message-data">
                <span className="message-data-name"><i className="fa fa-circle online"></i>{from.name}</span>
                <span className="message-data-time">{time}</span>
            </div>
            <div className="message my-message">
                {text}
            </div>
        </li>
    )
}

export default Message;