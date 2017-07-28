import React, { Component } from 'react';
import logo from './logo.svg';

class App extends Component {
  constructor(props){
    super(props)
    this.state={submitted: false}
    this.submit = this.submit.bind(this);
    this.refresh = this.refresh.bind(this);
  }

  submit(){
    this.setState({submitted: true});
  }

  showValidbname(){


    const show = this.state.submitted && !this.bname.value
    ? 'invalidemail' : 'validemail'
    return show;
  }

  showValidEmail(){
    const show = this.state.submitted && (!this.email.value || !/\S+@\S+\.\S+/.test(this.email.value)
  )  ? 'invalidemail' : 'validemail'
    return show;
  }

  refresh(){
    this.setState({'some': ''});
}

  showValidUsername(){
    const show = this.state.submitted && (!this.Username.value )  ? 'invalidemail' : 'validemail'
    return show;
  }


  showValidpolicy(){
    const show = this.state.submitted && (!this.policy.checked)  ? 'invalidemail' : 'validemail'
    return show;
  }


  showValidterms(){
    const show = this.state.submitted && (!this.terms.checked)  ? 'invalidemail' : 'validemail'
    return show;
  }

  showValidPassword(){
    let correct = true;

    if (this.Password && this.Password.value){
      let val = this.Password.value;

      correct = val.length > 5
          && [...val].some((ch)=>ch.charCodeAt(0) > 47 && ch.charCodeAt(0) < 59)
          && [...val].some((ch)=>ch.charCodeAt(0) > 64 && ch.charCodeAt(0) < 91)
          && [...val].some((ch)=>ch.charCodeAt(0) > 96 && ch.charCodeAt(0) < 123)


    }

    const show = this.state.submitted && (!this.Password.value || !correct)  ? 'invalidemail' : 'validemail'
    return show;
  }

  render() {
    return (
      <div>

        <img src="simplr.png" className="logo" />

        <div className="col-sm-6 content ">
          <div className="text-center">
            <h2>LET'S GET STARTED</h2>
          </div>

          <div  className="block form text-left">
            <div>Business Name</div>
            <input type="text"  onChange={this.refresh.bind(this)}  ref={(bname)=>this.bname=bname} />
            <small className={this.showValidbname(this)}>Cannot be empty</small>
          </div>

          <div  className="block form text-left">
            <div>Business Email</div>
            <input type="text"  onChange={this.refresh.bind(this)}   ref={(email)=>this.email=email}/>
            <small className={this.showValidEmail(this)}>Please enter a valid email address</small>
          </div>

          <div  className="block form text-left">
            <div>Create a Username</div>
            <input type="text" onChange={this.refresh.bind(this)}  ref={(Username)=>this.Username=Username} />
            <small className={this.showValidUsername(this)}>Username cannot be empty</small>

          </div>

          <div  className="block form text-left">
            <div>Password <small>(6 characters | 1 uppercase | 1 lowercase | 1 digit)</small></div>
            <input type="text" onChange={this.refresh.bind(this)}  ref={(Password)=>this.Password=Password}  />

            <small  className={this.showValidPassword(this)} >Enter valid password</small>

          </div>

          <div  className="block form text-left">
            <div>Website <small>(Optional)</small></div>
            <input type="text"  ref={(Website)=>this.Website=Website}  />
          </div>

          <div  className="block form text-left">
            <div>Type of business</div>
            <select defaultValue="n">
              <option value="n" disabled >Select your business</option>
              <option value="LLC" >LLC</option>
            </select>
          </div>

          <div  className="block form text-left">
            <div> <small><b>Terms of service </b><span  className={this.showValidterms(this)} >Please accept</span></small></div>
            <input type="checkbox" name="checkbox"  onClick={this.refresh.bind(this)}  ref={(terms)=>this.terms=terms} value="value" />


          </div>

          <div  className="block form text-left">
            <div> <small>Privacy policy </small><small  className={this.showValidpolicy(this)} >Please accept</small></div>
            <input type="checkbox" ref={(policy)=>this.policy=policy}  onClick={this.refresh.bind(this)} />

          </div>

          <div >
            <div className="button content" onClick={this.submit.bind(this)}>
              <div className="contenttext text-center">REGISTER</div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
