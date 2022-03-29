export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Contacts: undefined;
  Messages: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type HomeScreenParamList = {
  HomeScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type unreadBubbleProps = {
  messagesCount: number;
};

export type renderItemProps = {
  item: {
    id: string;
    name: string;
    lastSeen?: string;
    status: string;
    isMe: boolean;
    isRead: boolean;
    isDelivered: boolean;
    unreadMessagesCount: number;
    imageUri: string;
  };
};
