import Message from "./message/Message";
import MessageSender from "./message-sender/MessageSender";
import s2 from "../../s1-main/App.module.css";
import FriendMessage from "./friend-message/FriendMessage";
import avatar from "./avatar.png";

/*
 * 
 * 
 * 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
 * 5 - сделать стили в соответствии с дизайном
 * */

export type UserType = {
  avatar: string;
  name: string;
};

export type MessageTextType = {
  text: string;
  time: string;
};

export type MessageType = {
  id: number;
  user: UserType;
  message: MessageTextType;
};

// структуру объекта не менять
export const message0: MessageType = {
  id: 0,
  user: {
    avatar: avatar, // можно менять
    name: "Brad Pitt", // можно менять
  },
  message: {
    text: "Hello, I'm Brad Pitt!", // можно менять
    time: "22:00", // можно менять
  },
};
export const friendMessage0: MessageType = {
  id: 100,
  user: {
    avatar: avatar, // можно менять
    name: "Brad Pitt", // можно менять
  },
  message: {
    text: "Hey, Tyler, but I'm Brad Pitt!", // можно менять
    time: "22:01", // можно менять
  },
};

const HW1 = () => {
  return (
    <div id={"hw1"}>
      <div className={s2.hwTitle}>Homework #1</div>
      <div className={s2.hw}>
        {/*проверка отображения (не менять)*/}
        <div>
          <Message message={message0} />
          <FriendMessage message={friendMessage0} />
        </div>

        {/*для автоматической проверки дз (не менять)*/}
        <MessageSender M={Message} />
      </div>
    </div>
  );
};

export default HW1;
