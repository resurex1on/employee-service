import { Avatar, TextField, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import './ChatPage.css';
import userImg from '../../assets/images/user.jpg';
import EmailIcon from '@mui/icons-material/Email';
import notFoundImage from '../../assets/images/browser.png'
import io from 'socket.io-client'

const socket = io('https://16c6-193-16-224-10.eu.ngrok.io');

const chatMock = {
    users: [
        {
            id: 1,
            name: 'Vlad Leonchik'
        },
        {
            id: 2,
            name: 'Vitaly Zhuk'
        },
        {
            id: 3,
            name: 'Alina Drozd'
        },
        {
            id: 4,
            name: 'Roman Zhuk'
        },
        {
            id: 5,
            name: 'Alex Drozd'
        },

    ]
}

const ChatPage = () => {
    const [recievedMessages, setRecievedMessages] = useState([
        {
            message: 'First Message',
            read: false,
            createdAt: '1',
            userFromId: 3,
            userToId: 1

        },
        {
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elitQuos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam',
            read: false,
            createdAt: '2',
            userFromId: 2,
            userToId: 1

        },
        {
            message: 'First Message',
            read: false,
            createdAt: '1',
            userFromId: 4,
            userToId: 1

        },
        {
            message: 'Second Message',
            read: false,
            createdAt: '2',
            userFromId: 5,
            userToId: 1

        },


    ]);
    const [sentMessages, setSentMessages] = useState([
        {
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elitQuos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam',
            read: false,
            createdAt: '1',
            userFromId: 1,
            userToId: 2

        },
        {
            message: 'Second Message',
            read: false,
            createdAt: '2',
            userFromId: 1,
            userToId: 3

        },
        {
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elitQuos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam',
            read: false,
            createdAt: '1',
            userFromId: 1,
            userToId: 2

        },
        {
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elitQuos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam',
            read: false,
            createdAt: '3',
            userFromId: 1,
            userToId: 2

        },
        {
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elitQuos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam',
            read: false,
            createdAt: '4',
            userFromId: 1,
            userToId: 2

        },
        {
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elitQuos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam',
            read: false,
            createdAt: '5',
            userFromId: 1,
            userToId: 2

        },
    ]);
    const [chats, setChats] = useState([]);
    const [activeChat, setActiveChat] = useState(null);
    const [currentChatMessages, setCurrentChatMessages] = useState([])
    const currentUserId = useRef(1);
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        setUserData(() => {
          return JSON.parse(localStorage.getItem('userData'))
        })
      }, []);
    

    useEffect(() => {
        if(userData) {
            socket.on('connect', () => {
                console.log('connected!')
            });
    
            socket.on(`outMessage/${userData.id}`, (message) => {
                console.log(message)
            });
        }
    }, [userData])

    useEffect(() => {
        setChats(() => {
            return recievedMessages.map((message) => {
                return {
                    partner: message.userFromId
                }
            })
        })

        setChats((currentChats) => {
            const newChats = sentMessages.map((message) => {
                return {
                    partner: message.userToId
                }
            })

            const filteredChats = [...currentChats, ...newChats].reduce((prev, current) => {
                if (!prev.find(message => message.partner === current.partner)) {
                    prev.push(current)
                }

                return prev
            }, [])

            return filteredChats
        })


    }, [recievedMessages, sentMessages]);

    useEffect(() => {
        setCurrentChatMessages(() => {
            const currentRecievedMessages = recievedMessages.filter((message) => {
                return message.userFromId === activeChat
            });

            const currentSentMessages = sentMessages.filter((message) => {
                return message.userToId === activeChat
            });

            const allCurrentMessages = [...currentRecievedMessages, ...currentSentMessages].sort((a, b) => {
                return b.date - a.date
            });

            return allCurrentMessages
        })
    }, [activeChat]);

    const renderChat = () => {
        return <div className='chatPage-chat'>
            {(activeChat) ? currentChatMessages.map((message) => {
                return <div className={`chatPage-chat-message ${(message.userFromId === currentUserId.current) ? 'reverse' : ''}`}>
                    <Avatar alt="Travis Howard" src={userImg} />
                    <div className="chatPage-chat-message-user">

                        <p className="chatPage-chat-message-user-name">{chatMock.users.find(el => el.id === message.userFromId).name}</p>
                        <Typography className='chatPage-chat-message-content' variant="body1" gutterBottom>
                            {message.message}
                        </Typography>
                    </div>
                </div>
            }) : <div className='chatPage-chat-no-active-chat'>
                <img className='chatPage-chat-no-active-chat-image' src={notFoundImage}/>
                Choose chat!
            </div>}
        </div>
    }

    return (
        <section className='chatPage'>
            <div className="chatPage-container">
                <TextField id="standard-basic" label="Looking for your companion" variant="standard" type="text" name='taskTitle' className='chatPage-input' />
                <div className="chatPage-list">
                    {chats.map((chat) => {
                        return <div className={`chatPage-item ${(activeChat === chat.partner) ? 'active' : ''}`}  onClick={() => {
                            setActiveChat(chat.partner);
                        }}>
                            <Avatar src={userImg} />
                            <div className="chatPage-item-name">
                                <p className='chatPage-item-name-text'>{chatMock.users.find(el => el.id === chat.partner).name}</p>
                            </div>

                            <EmailIcon />
                        </div>
                    })}
                </div>

                <p className='chatPage-label'>Recently messaged</p>
                <div className="chatPage-list">
                    {chats.map((chat) => {
                        return <div className='chatPage-item'>
                            <Avatar alt="Travis Howard" src={userImg} />
                            <div className="chatPage-item-name">
                                <p className='chatPage-item-name-text'>{chatMock.users.find(el => el.id === chat.partner).name}</p>
                            </div>

                            <EmailIcon />
                        </div>
                    })}
                </div>

                {renderChat()}
            </div>
        </section>
    );
}

export default ChatPage;
