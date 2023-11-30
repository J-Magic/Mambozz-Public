export enum ContactStatus {
  REGISTEREDACTIVE = 'REGISTEREDACTIVE',
  REGISTEREDDORMANT = 'REGISTEREDDORMANT',
  NOTREGISTERED = 'NOTREGISTERED',
}

export enum AttachmentType {
  IMAGE = 'IMAGE',
  AUDIO = 'AUDIO',
  VIDEO = 'VIDEO',
  DOCUMENT = 'DOCUMENT',
  LOCATION = 'LOCATION',
  MONEY = 'MONEY',
}
export enum MessageStatus {
  SENT = 'SENT',
  DELIVERED = 'DELIVERED',
  READ = 'READ',
}
export type Contact = {
  id: string;
  userId: string;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber: string;
  status?: ContactStatus | null;
  createdAt: string;
  updatedAt: string;
};
export type ChatAttachment = {
  id: string;
  chatMessageID?: string | null;
  chatRoomID?: string | null;
  storageKey: string;
  type: AttachmentType;
  width?: number | null;
  height?: number | null;
  duration?: number | null;
  createdAt: string;
  updatedAt: string;
};
export type ChatMessage = {
  id: string;
  createdAt: string;
  text?: string | null;
  userId: string;
  chatRoomId: string;
  chatAttachments?: ChatAttachment | null;
  status?: MessageStatus | null;
  replyToMessageID?: string | null;
  forUserId?: string | null;
  updatedAt: string;
};
export type User = {
  id: string;
  username: string;
  phoneNumber?: string | null;
  email: string;
  chatStatus?: string | null;
  chatImage?: string | null;
  contacts?: Contact | null;
  chatMessages?: ChatMessage | null;
  chatRooms?: ChatRoomUsers | null;
  lastOnlineAt?: number | null;
  adminRightsId?: string | null;
  publicKey?: string | null;
  createdAt: string;
  updatedAt: string;
};
export type ChatRoomUsers = {
  id: string;
  userId: string;
  chatRoomId: string;
  user: User;
  chatRoom: ChatRoom;
  createdAt: string;
  updatedAt: string;
};

export type ChatRoom = {
  id: string;
  adminRightsId?: string | null;
  name?: string | null;
  image?: string | null;
  users?: ChatRoomUsers | null;
  chatMessages?: ChatMessage | null;
  newMessages?: number | null;
  lastMessage?: ChatMessage | null;
  chatAttachments?: ChatAttachment | null;
  createdAt: string;
  updatedAt: string;
  chatRoomLastMessageId?: string | null;
};
export interface UserInterface {
  id: string;
  username: string;
  phoneNumber?: string | null;
  email: string;
  chatStatus?: string | null;
  chatImage?: string | null;
  contacts?: Contact | null;
  chatMessages?: ChatMessage | null;
  chatRooms?: ChatRoom | null;
  lastOnlineAt?: number | null;
  adminRightsId?: string | null;
  publicKey?: string | null;
  createdAt: string;
  updatedAt: string;
}
