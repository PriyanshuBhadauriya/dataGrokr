import React, {Component,setItem} from "react";

class App extends Component{
       constructor()
       {
        super();
        this.state={
          fname:"",
          lname:"",
          phone:"",
          emailid:"",
          pincode:"",
          mailError:"",
          pinError:"",
          database:""
        }
       }
       valid(){
        if(!this.state.emailid.includes("@") && this.state.pincode.length!==6)
        {
          this.setState({mailError:"Inavalid Email Id" , pinError:"pincode  length should be 6"})
        }
       
       else if(!this.state.emailid.includes("@"))
        {
          this.setState({mailError:"Inavalid Email Id"})
        }
       
       else if(this.state.pincode.length!==6)
        {
          this.setState({ pinError:"pincode  length should be 6"})
        }
       
       else
       {
        return true;
       }
     }
     localfile(){
     // const obj={fname:(this.state.name),  lname:(this.state.lname),phone:(this.state.phone),email:(this.state.emailid),pincode:(this.state.pincode)}
     }        // localStorage=setItem("myData",JSON.stringify(obj));
       submit()
       {
        
        if(this.localfile()){
          console.log("data submit")
        }
        this.setState({mailError:"" , pinError:""})
        if(this.valid())
        {
          alert("form is successfully Submitted")
        }
       }
  
  

  render(){
    return (
      <div>
      <h1>Personal Details</h1>
      <form >
      First Name:<input type="text" placeholder="first name"  required/><br /><br />
      Last Name:<input type="text" placeholder="last name" required /><br /> <br/>
      Phone No:<input type="number" placeholder="phone number" required /><br /><br />
      Email Id:<input type="email" onChange={(event)=>{this.setState({emailid:event.target.value})}} placeholder="email"required />
      <p style={{color:"red"}} >{this.state.mailError} </p>
      Pincode:<input type="number" placeholder="pincode" onChange={(event)=>{this.setState({pincode:event.target.value})}} required/>
      <p style={{color:"red"}}>{this.state.pinError}</p>
      Address:<br /><textarea><input type="text" placeholder="address"  required/></textarea><br /><br/>
      Storage Medium:<select onChange={(event)=>{this.setState({database:event.target.value})}}><option value="select database">Select Database</option>
      <option value="database" >Database</option>
      <option value="local file" >Local file</option></select><br /><br />
      <button type="submit" onClick={()=>this.submit()}>SUBMIT</button>
      </form>
      </div>

      );
  }
}
export default App;
