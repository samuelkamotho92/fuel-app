import React,{useState,useEffect} from 'react';
import './WidgetLg.css';
import { userRequest } from '../../requestMethods';
import {format} from 'timeago.js';
const WidgetLg = () => {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
      };
      const [claims,setClaims] = useState([]);

      useEffect(() => {
        const getclaims = async () => {
          try {
            const res = await userRequest.get("/claim/getApproved/?paid=true");
            let {myApproved} = res.data.data;
            const data = myApproved;
            console.log(data);
            setClaims(data);
          } catch {}
        };
        getclaims();
      }, []);
      console.log(claims)
  return (
<div className="widgetLg">
      <h3 className="widgetLgTitle">Paid order</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {
        claims.map((claim)=>(
          <tr className="widgetLgTr" id={claim._id}>
          <td className="widgetLgUser">
            <span className="widgetLgName">{claim.carOwner}</span>
          </td>
          <td className="widgetLgDate">{format(claim.dateSubmitted)}</td>
          <td className="widgetLgAmount">{claim.amount}</td>
          <td className="widgetLgStatus">
            <Button type={claim.status}/>
          </td>
        </tr>
        ))
        }
      </table>
    </div>
  )
}

export default WidgetLg
