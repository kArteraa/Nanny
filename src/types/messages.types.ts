export type MessageType = "user" | "nanny";

export type ResponseMessage = {
    type: MessageType;
    message: string;
    date: string;
};

export type MappingMessagesMessage = {
    message: string;
    date: string;
};

export type MappingMessages = {
    id: number;
    type: "nanny" | "user";
    messages: MappingMessagesMessage[];
};
