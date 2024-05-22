import React,{useEffect,useState} from 'react'
import './Sidebar.css'
import {db} from './firebase'
import {collection,getDocs, onSnapshot} from 'firebase/firestore'

import Man from './Img/User.png'
import Sidebarchats from './Sidebarchats'
export default function Sidebar() {
const [group,setGroup]=useState([]);


  const getGroups = async () => {
const getData = onSnapshot(collection(db,'groups'),(snapshot)=>{
  let list =[]
snapshot.docs.forEach((doc)=>{
  list.push({
    id:doc.id,
    ...doc.data()
  })
});
setGroup(list);
});
  };

useEffect(()=>{
getGroups();
},[]);

  return (
    <div className='sidebar'>
      {/* -----------------Header--------------------- */}
      <div className='sidebarHeader'>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" alt=''/></div>
        <div className='sidbarHeaderRight'>
          <button style={{border:'none'}}><span className="material-symbols-outlined">
app_badging
</span></button>
<button style={{border:'none'}}><span className="material-symbols-outlined">
more_vert
</span></button>
<button style={{border:'none'}}><span className="material-symbols-outlined">
chat
</span></button>

        </div>
      </div>
    {/* -------------------SideBar Search---------------- */}
    <div className='sidebarSearch'>
      <div className='sidebarSearchContainer'>
      <span className="material-symbols-outlined">
search
</span>
<input type='text' placeholder='Search Contact'></input>
      </div>
    </div>
    {/* ----------------Sidebar------------------- */}
    <div className='sidebarChats'>
      <Sidebarchats addNewChat/>
      {group.map((group)=>{
        return <Sidebarchats key={group.id} name={group.name} id={group.id}/>
      })}
    </div>
    </div>
  )
}
