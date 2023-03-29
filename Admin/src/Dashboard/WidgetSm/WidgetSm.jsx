import React,{useEffect,useState} from 'react';
import  './WidgetSm.css';
import { Visibility } from "@material-ui/icons";
import { userRequest } from '../../requestMethods';
const WidgetSm = () => {
  const [users,setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      console.log('user details being fetched');
      try {
        const res = await userRequest.get("/user/getUser/?new=true");
        console.log(res.data,'users regestered are')
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);
  console.log(users)
  return (
    <div className="widgetSm">
    <span className="widgetSmTitle">New Join Members</span>
    <ul className="widgetSmList">
    {users.map((user) => (
          <li className="widgetSmListItem" key={user._id}>
            <img
              src={
                user.img ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.email}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
    </ul>
  </div>
  )
}

export default WidgetSm
