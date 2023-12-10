import React from "react";
import Bill from "../Images/bill.png"
import mode from "../Images/mode.png"
import err from "../Images/err.png"
import profile from "../Images/profile.png"
const Headers=(page)=>{
  console.log(page)
    return(
        <div>
        <p style={{fontSize:14,color:"rgba(112, 126, 174, 1)",marginLeft: 15,}}>Pages / {page.page}</p>
          <div
            style={{
              width: "98%",
              display: "flex",
              justifyContent: "space-between",
              fontFamily: "DM Sans",
              position:"relative",
              bottom:15
            }}
          >
            <div>
              
              <p
                style={{
                  fontSize: 25,
                  fontWeight: "600",
                  color: "rgba(43, 54, 116, 1)",
                  marginLeft: 15,
                }}
              >
                Main {page.page}
              </p>
            </div>
            <div
              style={{
                height: 40,
                width: 350,
                backgroundColor: "rgba(255, 255, 255, 1",
                boxShadow: "2px 2px 2px 2px rgb(239,239,239)",
                borderRadius: 50,
              
              }}
            >
              <div style={{flexDirection:"row"}} >
                <input style={{
                  border:"none",
                  marginTop:5,
                  marginLeft:10,
                  backgroundColor:"rgba(244, 247, 254, 1)",
                  borderRadius:50,
                  paddingLeft:25,
                  width:150,
                  height:30,
                  fontSize:14
                }} placeholder="Search"></input>

                <img style={{marginLeft:20}} src={Bill}></img>
                <img style={{marginLeft:20}} src={mode}></img>
                <img style={{marginLeft:20}} src={err}></img>
               <img style={{marginLeft:20,height:30,width:30}} src={profile}></img>
                
               
              </div>
            </div>
          </div>
        </div>
    )
}

export default Headers;