interface Message {
  message_id: number;
  from: {
    id: number;
    is_bot: boolean;
    first_name: string;
    last_name: string;
    username: string;
    language_code: string;
  };
  chat: {
    id: number;
    first_name: string;
    last_name: string;
    username: string;
    type: string;
  };
  date: number;
  edit_date: number;
  text: string;
  reply: {
    text: Function;
    photo: Function;
    video: Function;
    videoNote: Function;
    file: Function;
    sticker: Function;
    audio: Function;
    voice: Function;
    game: Function;
    action: Function;
    location: Function;
    place: Function;
  };
}
