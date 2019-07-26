import React, { Component } from "react";
import PersonContactDetails from "../ContactInformationForm/PersonContactDetails"



class ContactDetails extends Component{

    render(){
        return(
            <PersonContactDetails onSubmit={this.showResults} />
        )
    }
}

export default ContactDetails;