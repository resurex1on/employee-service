import { Avatar, Button, TextareaAutosize, TextField, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import './ChatPage.css';
import userImg from '../../assets/images/user.jpg';
import EmailIcon from '@mui/icons-material/Email';
import io from 'socket.io-client'
import { getUser, getUsers } from '../../helpers/back.helper';
import NotFound from '../../components/NotFound/NotFound';

const ChatPage = () => {
    const [receivedMessages, setReceivedMessages] = useState(null);
    const [sentMessages, setSentMessages] = useState(null);
    const [chats, setChats] = useState([]);
    const [activeChat, setActiveChat] = useState(null);
    const [currentChatMessages, setCurrentChatMessages] = useState([])
    const currentUserId = useRef(1);
    const [userData, setUserData] = useState(null);
    const [userList, setUserList] = useState([]);
    const [messageText, setMessageText] = useState('');
    const [socket, setSocket] = useState(io('https://215b-46-53-244-171.eu.ngrok.io'));

    useEffect(() => {
        getUser(JSON.parse(localStorage.getItem('userData')).id).then((data) => {
            setUserData(data);
            setReceivedMessages(data.receivedMessages);
            setSentMessages(data.sentMessages);
        });

        getUsers().then(data => {
            setUserList(data)
        });
    }, []);

    useEffect(() => {
        if (userData) {
            setReceivedMessages(userData.receivedMessages);
            setSentMessages(userData.sentMessages);

            connectToSocket();

            return () => {
                socket.off('connect');
                socket.off(`outMessage/${userData.id}`)
            }
        }
    }, [userData]);

    useEffect(() => {
        if (userData && sentMessages && receivedMessages) {
            getChats();

            if (activeChat) {
                getCurrentChatMessages();
            }

        }
    }, [activeChat, userData, receivedMessages, sentMessages]);



    const getChats = () => {
        const receivedPartners = receivedMessages.map((message) => {
            return { partner: message.userFromId }
        });

        const sentPartners = sentMessages.map((message) => {
            return { partner: message.userToId }
        });



        setChats(() => {
            return [...sentPartners, ...receivedPartners].reduce((prev, current) => {
                if (!prev.find(el => el.partner == current.partner)) {
                    prev.push(current);
                }
                return prev;
            }, [])
        })
    }

    const getCurrentChatMessages = () => {
        const currentReceivedMessages = receivedMessages.filter((message) => {
            return (message.userFromId === activeChat && message.userToId === userData.id)
        });

        const currentSentMessages = sentMessages.filter((message) => {
            return (message.userFromId === userData.id && message.userToId === activeChat)
        });

        setCurrentChatMessages([...currentReceivedMessages, ...currentSentMessages].sort((a, b) => {
            const aDate = new Date(a.createdAt).getTime();
            const bDate = new Date(b.createdAt).getTime();
            return aDate - bDate
        }))
    };

    const connectToSocket = () => {
        socket.on('connect', () => {
            console.log('connected!')
        });

        socket.on(`outMessage/${userData.id}`, (message) => {
            console.log(message)
            if (message.userFromId === userData.id) {
                setSentMessages((prev) => {
                    return [...prev, message]
                })
            } else {
                setReceivedMessages((prev) => {
                    return [...prev, message]
                })
            }
        });
    };

    const renderChat = () => {
        return <div className='chatPage-chat'>
            {(activeChat) ?
                <div className='chatPage-chat-container'>
                    {(currentChatMessages.length === 0) ?
                        <div className='no-messages-block'>
                            <p>There is no messages yet.</p>
                            <p>Send your first message here!</p>
                        </div> :
                        <></>
                    }
                    {currentChatMessages.map((message) => {
                        return <div className={`chatPage-chat-message ${(message.userFromId === userData.id) ? 'reverse' : ''}`}>
                            <Avatar className='chatPage-chat-message-avatar' alt="Travis Howard" src={userImg} />
                            <div className="chatPage-chat-message-user">

                                <p className="chatPage-chat-message-user-name">{userList.find(el => el.id === message.userFromId).name}</p>
                                <Typography className='chatPage-chat-message-content' variant="body1" gutterBottom>
                                    {message.message}
                                </Typography>
                            </div>
                        </div>
                    }
                    )}
                </div>
                : <div className='chatPage-chat-no-active-chat'>
                    <NotFound content={'Choose chat!'} />
                </div>}
        </div>
    }

    return (
        <>{
            (userData && userData.length !== 0 && userList && userList.length > 0) ? <section className='chatPage'>
                <div className="chatPage-container">
                    <TextField id="standard-basic" label="Looking for your companion" variant="standard" type="text" name='taskTitle' className='chatPage-input' />
                    <div className="chatPage-list">
                        {userList.map((user) => {
                            return <div className={`chatPage-item ${(activeChat === user.id) ? 'active' : ''}`} onClick={() => {
                                setActiveChat(user.id);
                            }}>
                                <Avatar src={userImg} />
                                <div className="chatPage-item-name">
                                    <p className='chatPage-item-name-text'>{userList.find(el => el.id === user.id).name}</p>
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
                                    <p className='chatPage-item-name-text'>{userList.find(el => el.id === chat.partner).name}</p>
                                </div>

                                <EmailIcon />
                            </div>
                        })}
                    </div>

                    <div className="chatPage-block">
                        {renderChat()}
                        {(activeChat) ? <div className="chatPage-message">
                            <TextField id="standard-basic" label="Message" variant="standard" type="text" name='taskTitle' className='chatPage-message-field' onChange={(event) => {
                                setMessageText(event.target.value)
                            }} />
                            <Button variant="outlined" onClick={() => {
                                socket.emit('inputMessage', {
                                    userFromId: userData.id,
                                    message: messageText,
                                    userToId: activeChat
                                })
                            }}>Send</Button>
                        </div> : <div className="chatPage-message"> </div>}

                    </div>
                </div>
            </section> : <> </>
        }

        </>
    );
}

export default ChatPage;
