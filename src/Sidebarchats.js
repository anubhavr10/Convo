import React,{useState,useEffect} from 'react'
import { onSnapshot } from 'firebase/firestore';
import './Sidebarchats.css'
import { Link } from 'react-router-dom';
import { collection, addDoc,orderBy,query } from "firebase/firestore"; 
import {db} from './firebase';
export default function Sidebarchats({addNewChat,name,id}) {
  // console.log(name,id);
  const [msg,setMsg] = useState("");
  useEffect(()=>{
    if(id){
      const q = query(collection(db,'groups',id,'messages'),orderBy('timeStamp','asc'));
      const getMessage = onSnapshot(q,(snapshot)=>{
        snapshot.docs.forEach((doc) => { setMsg(doc.data())});        
        });
        }
  },[id]);

  const createChat= async()=>{
    const group = prompt("Please enter your Group Name");
    if(group){
    try {
  const docRef = await addDoc(collection(db, "groups"), {
    name:group,
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
  }
}
  return (
    !addNewChat?(
    <Link to={`group/${id}`}><div className='sidebarchats'>
        <img src='https://cdn-icons-png.flaticon.com/128/3135/3135715.png' alt=''/>
        <div className='sidebarChatInfo'>
            <h2>{name}</h2>
            <p>{msg.message}</p>
        </div>
    </div>
    </Link>):
    (
        <div onClick={createChat} className='sidebarChat'>
            <h3>Add New Chat</h3>
        </div>
    )
  )
}
