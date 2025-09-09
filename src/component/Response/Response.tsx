import type { IMessage } from "../types";

interface IDataProps {
    data: IMessage,
}

function Response({ data }: IDataProps) {

    const { from, time, text } = data;

    return (
        <li className="clearfix">
            <div className="message-data align-right">
                <span className="message-data-time">{time}</span> &nbsp; &nbsp;
                <span className="message-data-name">{from.name}</span>
                <i className="fa fa-circle me"></i>
            </div>
            <div className="message other-message float-right">
                {text}
            </div>
        </li>
    )
}

export default Response;