import React,{Component} from "react";
import "./App.css";
export default class App extends React.Component{
constructor(props){
  super(props);
  this.state={
    title:"REACTJS CRUD APPLICATION",
    act:0,
    index:'',
    datas:[]
  }

}
componentDidMount(){
  this.refs.name.focus();
}
fSubmit=(e)=>{
  e.preventDefault();
  console.log('try');
  let datas=this.state.datas;
  let name=this.refs.name.value;
  let address=this.refs.address.value;
  if(this.state.act===0){
    let data={
      name,address
    }
    datas.push(data); 

  }else{
    let index=this.state.index;
    datas[index].name=name;
    datas[index].address=address;


  }
  
  this.setState({datas:datas,act:0});
  this.refs.myform.reset();
  this.refs.name.focus();

}
fRemove=(i)=>{
  let datas=this.state.datas;
  datas.splice(i,1);
  this.setState({datas:datas});
  this.refs.myform.reset();
  this.refs.myform.focus();

}
fEdit=(i)=>{
  let data=this.state.datas[i];
  this.refs.name.value=data.name;
  this.refs.address.value=data.address;
  this.setState({act:1,index:i});
  this.refs.name.focus();
}



render(){
  let datas=this.state.datas;
  return(
    <div className="App">
      <h1>{this.state.title}</h1>
      <form ref="myform" className="myform">
        <input type="text" ref="name" placeholder="enter your name" className="formfield"/>
          <input type="text" ref="address" placeholder="enter address" className="formfield"/>
            <button className="mybutton" onClick={(e)=>this.fSubmit(e)}>Submit</button>

      </form>
      <pre>
        {datas.map((data,i)=>
      
          <li key={i} className="mylist">
            {i+1}.{data.name},{data.address}
            <button className="mylistbutton" onClick={()=>this.fRemove(i)}>Remove</button>

            <button className="mylistbutton" onClick={()=>this.fEdit(i)}>edit</button>


          </li>
        )}
      </pre>

    </div>

  );
}
};