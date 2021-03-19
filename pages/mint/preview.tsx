import { useState } from "react";
import { faChevronRight, faChevronLeft, faRedo} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Preview() {

  let [linkName, setLinkName] = useState("");
  let [claimType, setClaimType] = useState("");

  const generateLink = () =>{
    console.log("Generating Link!");
  }

  return (
    <div>
      <h1 style={{padding: 30, fontWeight: 400, textAlign: "center", margin: "0 auto", fontSize: "60px"}}>
        Create Your Token Link
      </h1>
      <div style={{textAlign: "center", display: "block", margin: "20px auto", fontSize: "30px"}}>
        <label htmlFor="claimType">Choose a Form Type:</label>
        <select style={{marginLeft: "10px", fontSize: "30px"}} onChange={(e) => setClaimType(e.target.value)} name="claimType" id="claimType">
            <option value="free">Free</option>
            <option value="donation">Donation</option>
            <option value="shop">Shop</option>
          </select>
      </div>

      <div style={{textAlign: "center", display: "block", margin: "20px auto", fontSize: "30px"}}>
        <label htmlFor="tokenName">Token Link Name:</label>
        <input id="tokenName"style={{ marginLeft: "10px", fontSize: "30px"}} onChange={(e) => {setLinkName(e.target.value)}} placeholder="Name" />
      </div>

      <h1 style={{padding: 30, fontWeight: 400, textAlign: "center", margin: "140px auto 0 auto", fontSize: "40px"}}>
        Browser Preview
      </h1>

      <div style={{margin: "0 10%", border: "1px solid gray"}}>
        <FontAwesomeIcon style={{fontSize: "25px", display: "inline-block", margin: "0 20px"}} icon={faChevronLeft} />
        <FontAwesomeIcon style={{fontSize: "25px", display: "inline-block", margin: "0 20px"}} icon={faChevronRight} />
        <FontAwesomeIcon style={{fontSize: "25px", display: "inline-block", margin: "0 75px 0 20px"}} icon={faRedo} />
        <p style={{display: "inline-block", padding: 15,  margin: "0 auto", fontSize: "30px"}}>https://mintprint.io/{linkName}</p>
        <hr/>
      </div>
      <input style={{display: "block", margin: "20px auto", fontSize: "30px"}} onClick={() => {generateLink}} type="button" value="Mint & Print"/>
    </div>
  )
}