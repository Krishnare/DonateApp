import React, { Component } from "react";
import { Link } from "react-router-dom";
import Continue from "../Buttons/Continue";
import Goback from "../Buttons/Goback";
import thankYou from "../../assets/images/futuro-icons-278.svg";

const ThankYouComponent =() =>{
        let buttonVal={
            buttonVal:"Enter Another Donation",
            GobackVal:"Home"
        }
        return (
            <div className="thankYouContainer">
                <div className="thankYouImage">
                    <img src={thankYou} alt="Thank you"/>
                </div>
                <div className="description">
                    <h1>Thank You!</h1>
                    <div>Your donation details have been sent
                        to Restore. a member of the team will
                        be in touvh in the next 48 hours to
                        Confirm details of your pick up</div>
                </div>
                <div className="screenBtn">
          <Link className="linkRoute" to="/ThankYouComponent">
            <Continue buttonVal={buttonVal.buttonVal} />
          </Link>
          <Link className="linkRoute" to="/">
            <Goback buttonVal={buttonVal.GobackVal} />
          </Link>
        </div>
            </div>
        )
}

export default ThankYouComponent;