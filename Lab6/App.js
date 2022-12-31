import React, { useEffect, useState } from 'react'
import './App.css';
import Chart from './components/Chart';
import Sidebar from './components/Sidebar';
import Pusher from 'pusher-js'
import axios from './components/axios'
import Login from './components/Login';
import { useStateValue } from './components/StateProvider';

function App() {
    const [messages, setMessages ] = useState ([])
    const [{ user }, dispatch] = useStateValue()

    useEffect(() => {
        axios.get("/message/sync").then(res => {
            setMessages(res.data)
        })
    }, [])
    
    useEffect (() => {
        const pusher = new Pusher('9e297c1b3f7413a26cce', {
            cluster: 'ap2'
        });

        const channel = pusher.subscribe('messages');
        channel.bind('inserted', (data) => {
            setMessages([...messages, data])
        });

        return () => {
            channel.unbind_all()
            channel.unsubscribe()
        }
    }, [messages])

    console.log(messages)
    return (
        <div className="app">
            { !user ? <Login /> : (
                <div className="app_body">
                  <Sidebar messages={messages} />
                  <Chat messages={messages} />  
                </div>
            )}
        </div>
    );
}
export default App;

