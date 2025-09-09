import type { IMessage } from "../types";

interface IDataProps {
    data: IMessage,
}

function Typing({ data }: IDataProps) {

    const { from, time } = data;

    return (
        <li className="clearfix">
            <div className="message-data align-right">
                <span className="message-data-time">{time}</span> &nbsp; &nbsp;
                <span className="message-data-name">{from.name}</span>
                <i className="fa fa-circle me"></i>
            </div>
        </li>
    )
}

export default Typing;