export type user = {
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

export type users = user[];
export const appUsers: users = [
  {
    id: "1",
    name: "Quinn",
    lastSeen: "",
    status: "You can’t ever outrun who you are.",
    isMe: false,
    isRead: false,
    isDelivered: false,
    unreadMessagesCount: 2,
    imageUri:
      "https://static.wikia.nocookie.net/intothebadlands/images/d/dd/ItB_S1_E2_0303.jpg/revision/latest/top-crop/width/300/height/300?cb=20180624130831",
  },
  {
    id: "2",
    name: "Sunny",
    status: "Nobody knows what is and ain’t true.",
    isMe: true,
    isRead: true,
    isDelivered: true,
    unreadMessagesCount: 0,
    imageUri:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJpYAc6HNsQt0tJs3l-giQWh29JM7EYTL_5Q&usqp=CAU",
  },
  {
    id: "3",
    name: "M.K.",
    status:
      "People don’t really want to be free. Besides, it’s an illusion. I mean, you take my birds, they just love flying free, but every night they fly on home to their cages where it’s safe and warm.",
    isMe: false,
    isRead: false,
    isDelivered: false,
    unreadMessagesCount: 1,
    imageUri:
      "https://static.wikia.nocookie.net/intothebadlands/images/b/bb/Mkeyes.jpg/revision/latest/top-crop/width/220/height/220?cb=20180527061355",
  },
  {
    id: "4",
    name: "Tilda",
    status:
      "I didn't come here to dwell on the past. I want to discuss the future.",
    isMe: true,
    isRead: true,
    isDelivered: true,
    unreadMessagesCount: 0,
    imageUri:
      "https://static.wikia.nocookie.net/intothebadlands/images/c/ce/Tilda_season_2.jpg/revision/latest/top-crop/width/220/height/220?cb=20190413133244",
  },
  {
    id: "5",
    name: "Minerva",
    status: "The appearance of weakness is the greatest advantage.",
    isMe: false,
    isRead: false,
    isDelivered: false,
    unreadMessagesCount: 4,
    imageUri:
      "https://static.wikia.nocookie.net/intothebadlands/images/e/e2/Minerva.png/revision/latest/smart/width/200/height/200?cb=20171010221959",
  },
  {
    id: "6",
    name: "Pilgrim",
    status: "Power is not inherited, it’s taken.",
    isMe: true,
    isRead: true,
    isDelivered: true,
    unreadMessagesCount: 0,
    imageUri:
      "https://static.wikia.nocookie.net/intothebadlands/images/b/b2/Pilgrim.png/revision/latest?cb=20180501223509",
  },
  {
    id: "7",
    name: "Baron Jacobee",
    status:
      "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.",
    isMe: true,
    isRead: true,
    isDelivered: true,
    unreadMessagesCount: 0,
    imageUri:
      "https://static.fusionmovies.to/images/character/cy1Cmps-KoVSL7sE6qlEVIwWbDgMw5CIdGuJaJl76CPtzrvJV5Ci0I0KDp4zbZ7NwY4k6Ll6hNMYoKnY3q_wh_7lxeE2d0RZCtbJRAHnqwWvo39fvjguV4wQM-DDzzRg.jpg?1",
  },
  {
    id: "8",
    name: "Dr. Linda Martin",
    status:
      "It is our choices, Harry, that show what we truly are, far more than our abilities.",
    isMe: true,
    isRead: true,
    isDelivered: true,
    unreadMessagesCount: 0,
    imageUri:
      "https://static.wikia.nocookie.net/lucifer/images/8/88/Linda_Martin_portrait.png/revision/latest?cb=20171026005237&path-prefix=es",
  },
  {
    id: "9",
    name: "Jade",
    status:
      "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
    isMe: true,
    isRead: true,
    isDelivered: true,
    unreadMessagesCount: 0,
    imageUri: "https://marrieddivorce.com/uploads/images/Sarah-Bolger.jpg",
  },
  {
    id: "10",
    name: "Ryder",
    status:
      "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.",
    isMe: true,
    isRead: true,
    isDelivered: true,
    unreadMessagesCount: 0,
    imageUri:
      "https://static.wikia.nocookie.net/intothebadlands/images/f/f4/Ryder.png/revision/latest/smart/width/200/height/200?cb=20171010210740",
  },
  {
    id: "11",
    name: "Lydia",
    status:
      "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.",
    isMe: true,
    isRead: true,
    isDelivered: true,
    unreadMessagesCount: 0,
    imageUri:
      "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/10/into-the-badlands-S3-cast-portrait-lydia-brady-800x600.jpg",
  },
  {
    id: "12",
    name: "Bajie",
    status: "Try not to become a man of success. Rather become a man of value.",
    isMe: true,
    isRead: true,
    isDelivered: true,
    unreadMessagesCount: 0,
    imageUri:
      "https://www.hypable.com/wp-content/uploads/2018/04/into-the-badlands-season-3-bio-bajie.jpg",
  },
  {
    id: "13",
    name: "Veil",
    status:
      "It is better to be hated for what you are than to be loved for what you are not.",
    isMe: true,
    isRead: true,
    isDelivered: true,
    unreadMessagesCount: 0,
    imageUri:
      "https://i2.wp.com/kingoftheflatscreen.com/wp-content/uploads/2015/12/MV5BNTEzNjQ4OTEwNl5BMl5BanBnXkFtZTgwODkxNzY4MzE@__V1__SX1364_SY661_2.jpg?fit=441%2C384",
  },
  {
    id: "14",
    name: "Nathaniel Moon",
    status: "I have not failed. I've just found 10,000 ways that won't work.",
    isMe: true,
    isRead: true,
    isDelivered: true,
    unreadMessagesCount: 0,
    imageUri:
      "https://images.squarespace-cdn.com/content/v1/5b69ea6c5417fcaf5e625955/1537392084539-AU65CE9FFGK3SX3T1CP7/ke17ZwdGBToddI8pDm48kPoswlzjSVMM-SxOp7CV59BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIeQMKeWYgwh6Mn73n2eZmZLHHpcPIxgL2SArp_rN2M_AKMshLAGzx4R3EDFOm1kBS/ITB21.jpg",
  },
  {
    id: "15",
    name: "Chau",
    status:
      "A woman is like a tea bag; you never know how strong it is until it's in hot water.",
    isMe: true,
    isRead: true,
    isDelivered: true,
    unreadMessagesCount: 0,
    imageUri:
      "https://static.tornadomovies.co/images/actor/Xtce-KGa7tjzeQIVBg8r-iCksOlFkaf2DT7DK70HlJ4gy8zCGfXC2eCVsTo2Q-IvPL5HhIYaRgbQG1976V6frfIjlr3OWSGmKYcO_LCYNt2nURNmR5qANr-YP3OsGDWS.jpg?1",
  },
  {
    id: "16",
    name: "The Master",
    status: "A day without sunshine is like, you know, night.",
    isMe: true,
    isRead: true,
    isDelivered: true,
    unreadMessagesCount: 0,
    imageUri:
      "https://1.bp.blogspot.com/-_7kdE2bvSXM/WR4lDF4rc5I/AAAAAAAAHAQ/qwj0rcwrBLYzCvHN8j2tanzpYXzm69j0ACLcB/s280/Into%2Bthe%2BBadlands%2B-%2BThe%2BMaster.png",
  },
  {
    id: "17",
    name: "Odessa",
    status:
      "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
    isMe: true,
    isRead: true,
    isDelivered: true,
    unreadMessagesCount: 0,
    imageUri:
      "https://lgbtfansdeservebetter.com/static/uploads/2017/04/Odessa-Maddison-Jaizani.png",
  },
  {
    id: "18",
    name: "River King",
    status:
      "If you can't explain it to a six year old, you don't understand it yourself.",
    isMe: true,
    isRead: true,
    isDelivered: true,
    unreadMessagesCount: 0,
    imageUri:
      "https://static.tvmaze.com/uploads/images/medium_portrait/35/89398.jpg",
  },
  {
    id: "19",
    name: "Waldo",
    status:
      "I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living",
    isMe: true,
    isRead: true,
    isDelivered: true,
    unreadMessagesCount: 0,
    imageUri:
      "https://i.pinimg.com/originals/1b/39/24/1b3924803ecfb9b3c6f5f4b2ad93751c.jpg",
  },
  {
    id: "20",
    name: "Ava",
    status:
      "I may not have gone where I intended to go, but I think I have ended up where I needed to be.",
    isMe: true,
    isRead: true,
    isDelivered: true,
    unreadMessagesCount: 0,
    imageUri:
      "https://static.wikia.nocookie.net/intothebadlands/images/d/df/Ava.png/revision/latest/smart/width/200/height/200?cb=20171010221554",
  },
  {
    id: "21",
    name: "Merlin",
    status: "The opposite of love is not hate, it's indifference.",
    isMe: true,
    isRead: true,
    isDelivered: true,
    unreadMessagesCount: 0,
    imageUri:
      "https://static.wikia.nocookie.net/gameofthronesfanon/images/5/53/William_Baratheon.jpg/revision/latest?cb=20170921212454",
  },
  {
    id: "22",
    name: "Arthur Pendragon",
    status:
      "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
    isMe: true,
    isRead: true,
    isDelivered: true,
    unreadMessagesCount: 0,
    imageUri:
      "https://pbs.twimg.com/profile_images/1171483447/Arthur-Pendragon-3-prince-arthur-15291792-800-840_400x400.jpg",
  },
  {
    id: "23",
    name: "Gaius",
    status:
      "Good friends, good books, and a sleepy conscience: this is the ideal life.",
    isMe: true,
    isRead: true,
    isDelivered: true,
    unreadMessagesCount: 0,
    imageUri:
      "https://static.wikia.nocookie.net/merlin1/images/f/fe/15b.jpg/revision/latest/top-crop/width/360/height/360?cb=20120912202439",
  },
  {
    id: "24",
    name: "Nimueh",
    status: "Life is what happens to us while we are making other plans.",
    isMe: true,
    isRead: true,
    isDelivered: true,
    unreadMessagesCount: 0,
    imageUri:
      "https://static.wikia.nocookie.net/merlin1/images/e/e0/Nimueh-2.jpg/revision/latest/top-crop/width/220/height/220?cb=20130327142357",
  },
  {
    id: "25",
    name: "Guinevere",
    status:
      "For every minute you are angry you lose sixty seconds of happiness.",
    isMe: true,
    isRead: true,
    isDelivered: true,
    unreadMessagesCount: 0,
    imageUri:
      "https://pbs.twimg.com/profile_images/1060299930349301760/Mz-KZdhZ_400x400.jpg",
  },
  {
    id: "26",
    name: "Uther Pendragon",
    status: "If you judge people, you have no time to love them.",
    isMe: true,
    isRead: true,
    isDelivered: true,
    unreadMessagesCount: 0,
    imageUri:
      "https://static.wikia.nocookie.net/merlin1/images/2/21/Uther_Pendragon-0.jpg/revision/latest/top-crop/width/360/height/360?cb=20200808135929",
  },
  {
    id: "27",
    name: "Morgause",
    status:
      "Today you are You, that is truer than true. There is no one alive who is Youer than You.",
    isMe: true,
    isRead: true,
    isDelivered: true,
    unreadMessagesCount: 0,
    imageUri:
      "https://ic.pics.livejournal.com/netgirl_y2k/1168460/6173/6173_320.png",
  },
  {
    id: "28",
    name: "The Great Dragon",
    status:
      "If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales.",
    isMe: true,
    isRead: true,
    isDelivered: true,
    unreadMessagesCount: 0,
    imageUri:
      "https://i.pinimg.com/originals/b8/7c/de/b87cdeeb1ba129f47fb52153f2dfccd5.jpg",
  },
];
