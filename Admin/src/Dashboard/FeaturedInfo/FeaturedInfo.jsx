import React,{useState,useEffect} from 'react';
import "./FeaturedInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { userRequest } from '../../requestMethods';
const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);
  const [petrostation,setPetrostation] = useState([]);
  const [user,setUser] = useState([]);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("/petrostation/getPetro");
        const userDt = await userRequest.get('/user/getUser');
        console.log(res.data)
        console.log(userDt.data)
        setUser(userDt.data)
        setPetrostation(res.data)
        // setIncome(res.data);
        // setPerc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch {}
    };
    getIncome();
  }, []);
  console.log(income)
  return (
<div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Users Registered</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{user.length}</span>
        </div>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Petrostation Registered</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{petrostation.length}</span>
        </div>
        <span className="featuredSub"></span>
      </div>
    </div>
  )
}

export default FeaturedInfo
