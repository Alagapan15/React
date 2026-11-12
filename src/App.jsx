const A='/image.png';
const variablename=["Priya","Baanu","Shoba"];
function App(){
  return(
    <div>
      <Student array={variablename} />
      <Student name="Alagappan" age={32} img={A} Available={true} />
    </div>
  )
}
function Student({name,age,Available,array,img}){
  return(
    <div>
      {name && <h1>{name},{age},{Available ? "Available":"Not Available"}</h1>}
      <img src={img} alt="Image" width="350"/>
      {array && array.map((element,index)=>{
return <p key={index}>{element}</p>;
})}
    </div>
  )
}
export default App;