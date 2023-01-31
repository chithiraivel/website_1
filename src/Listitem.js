
import  ListItemText  from "@mui/material/ListItemText";
import  Checkbox from "@mui/material/Checkbox";
import React, { useState } from "react";
import "./Product.css";
import  MenuItem  from "@mui/material/MenuItem";
import  CheckBox  from "@mui/icons-material/CheckBox";
import  Select  from "@mui/material/Select";
import  InputLabel  from "@mui/material/InputLabel";
import  FormControl  from "@mui/material/FormControl";
import  ListSubheader  from "@mui/material/ListSubheader";
import Box from '@mui/material/Box';



const Listitem = () => {
  const [name, setName] = useState([
    { name: "Adidas  (15)" },
    { name: "Allen Solly  (100)" },
    { name: "Black Berry  (453)" },
    { name: "Vivo (1000)" },
    { name: "Sony  (256)" },
    { name: "Oppo  (55)" },
    { name: "Apple  (86)" },
    { name: "Nokia  (873)" },
  ]);

  const [name1, setName1] = useState([
    {
      name: "Woakers",
      images: require("../src/Assets/1.jpg"),
      content: "Synthetic lather lace up mens casuval shoes",
      rate: "$944",
      strike: "$3443",
      offer: "70 OFF",
    },
    {
      name: "PUMA",
      images: require("../src/Assets/2.jpg"),
      content: "Synthetic lather lace up mens casuval shoes",
      rate: "$944",
      strike: "$3443",
      offer: "70 OFF",
    },
    {
      name: "Adidas",
      images: require("../src/Assets/3.jpg"),
      content: "Synthetic lather lace up mens casuval shoes",
      rate: "$944",
      strike: "$3443",
      offer: "70 OFF",
    },
    {
      name: "PUMA",
      images: require("../src/Assets/4.jpg"),
      content: "Synthetic lather lace up mens casuval shoes",
      rate: "$944",
      strike: "$3443",
      offer: "70 OFF",
    },
    {
      name: "Jack",
      images: require("../src/Assets/5.jpg"),
      content: "Synthetic lather lace up mens casuval shoes",
      rate: "$944",
      strike: "$3443",
      offer: "70 OFF",
    },
    {
      name: "PUMA",
      images: require("../src/Assets/6.jpg"),
      content: "Synthetic lather lace up mens casuval shoes",
      rate: "$944",
      strike: "$3443",
      offer: "70 OFF",
    },
    {
      name: "adidas",
      images: require("../src/Assets/5.jpg"),
      content: "Synthetic lather lace up mens casuval shoes",
      rate: "$944",
      strike: "$3443",
      offer: "70 OFF",
    },
    {
      name: "PUMA",
      images: require("../src/Assets/5.jpg"),
      content: "Synthetic lather lace up mens casuval shoes",
      rate: "$944",
      strike: "$3443",
      offer: "70 OFF",
    },
    {
      name: "PUMA",
      images: require("../src/Assets/6.jpg"),
      content: "Synthetic lather lace up mens casuval shoes",
      rate: "$944",
      strike: "$3443",
      offer: "70 OFF",
    },
    {
      name: "Jack and jones",
      images: require("../src/Assets/7.jpg"),
      content: "Synthetic lather lace up mens casuval shoes",
      rate: "$944",
      strike: "$3443",
      offer: "70 OFF",
    },
    {
      name: "PUMA",
      images: require("../src/Assets/8.jpg"),
      content: "Synthetic lather lace up mens casuval shoes",
      rate: "$944",
      strike: "$3443",
      offer: "70 OFF",
    },
    {
      name: "Lee Cooper",
      images: require("../src/Assets/9.jpg"),
      content: "Synthetic lather lace up mens casuval shoes",
      rate: "$944",
      strike: "$3443",
      offer: "70 OFF",
    },
    {
      name: "Woakers",
      images: require("../src/Assets/10.jpg"),
      content: "Synthetic lather lace up mens casuval shoes",
      rate: "$944",
      strike: "$3443",
      offer: "70 OFF",
    },
    {
      name: "Adidas",
      images: require("../src/Assets/11.jpg"),
      content: "Synthetic lather lace up mens casuval shoes",
      rate: "$944",
      strike: "$3443",
      offer: "70 OFF",
    },
    {
      name: "PUMA",
      images: require("../src/Assets/12.jpg"),
      content: "Synthetic lather lace up mens casuval shoes",
      rate: "$944",
      strike: "$3443",
      offer: "70 OFF",
    },
    {
      name: "PUMA",
      images: require("../src/Assets/13.jpg"),
      content: "Synthetic lather lace up mens casuval shoes",
      rate: "$944",
      strike: "$3443",
      offer: "70 OFF",
    },
  ]);
  const names = [
  'CATAGORIES',
  'BRANDS',
  'OFFERS',
  'PRODUCT TYPE',
  'SIZE',
  'COLORS',
  'DELIVERY TYPE',
  'PRICE',
];
const arr8=["Suits & Blazers","Casual Jackets","Ethnicwear","Kurtas","Kurta Sets","Nehru Jackets","Winterwear","All Winterwear","Sweatshirts", "Sweaters","Jackets","Mask","Personal Protection Equipment"]
const arr3=["Watches - Upto 70% Off","Westwear- Upto 70% Off","FootWears - Upto 70% Off","Oil Watches - Upto 70% Off","Giftset - Upto 70% Off","Soaps - Upto 70% Off","Hand & footcare - Upto 70% Off"]
const arr4=["Bath & Body (20)","Fragrence For All  (50)","Makeup  (10)","Hair care  (30)","Mens Crowing   (70)","Nails  (5)","Skin CAre   (100)","Tools & acceries   (34)"]    

const [isHover, setHover] = useState(true);
 const chithirai = () => {
    setHover(false);
 }
 const chithirai1 = () => {
  setHover(true);
}
const run = {
  display: isHover ? "none" : "block",
  
};

const [isHover2, setHover2] = useState(true);
 const chithirai2 = () => {
    setHover2(false);
 }
 const chithirai21 = () => {
  setHover2(true);
}
const run2 = {
  display: isHover2 ? "none" : "block",
  
};

const [isHover3, setHover3] = useState(true);
 const chithirai3 = () => {
    setHover3(false);
 }
 const chithirai31 = () => {
  setHover3(true);
}
const run3 = {
  display: isHover3 ? "none" : "block",
  
};

const [isHover4, setHover4] = useState(true);
 const chithirai4 = () => {
    setHover4(false);
 }
 const chithirai41 = () => {
  setHover4(true);
}
const run4 = {
  display: isHover4 ? "none" : "block",
  
};
  return (
    <div>
      
       {/* <div className="list">
           {names.map((data) => ( 
          <div>
            <hr className="two"></hr>
            <FormControl>
            <Select style={{width:'40vh',height:'10vh',borderColor:'lightcyan',border:'none'}} >
            <input type='search' placeholder="Search" ></input>
            <ListSubheader>{data}</ListSubheader>
              {names.map(variant => (
               
               <MenuItem key={variant} value={variant} >
                
               <Checkbox /><ListItemText primary={variant} style={{textAlign:'center'}}/>
               
            </MenuItem>))}
            </Select>
            </FormControl>
          </div>
          ))}
      </div>   */}

      <div className="list">
        <hr></hr>
      <div className=""><div style={{display:'flex',justifyContent:'space-between'}}><span style={{fontSize:'20px',fontWeight:'400'}}>CATACTERIES</span> <span><i class="fa fa-angle-down" onDoubleClick={() => chithirai1()} onClick={ () => chithirai() } style={{fontSize:'20px'}}></i></span></div>
         {arr4.map( (data) => <div> <span style={run} ><input type='checkbox'  style={{height:'20px',width:'20px'}}/>{"                "}{data}</span></div>)}
      </div>
      <hr></hr>
      <div className=""><div style={{display:'flex',justifyContent:'space-between'}}><span style={{fontSize:'20px',fontWeight:'400'}}>BRAND</span> <span><i class="fa fa-angle-down" onDoubleClick={() => chithirai21()} onClick={ () => chithirai2() } style={{fontSize:'20px'}}></i></span></div>
         {name.map( (data) => <div> <span style={run2} ><input type='checkbox'  style={{height:'20px',width:'20px'}}/>{"                "}{data.name}</span></div>)}
      </div>
      <hr></hr>
      <div className=""><div style={{display:'flex',justifyContent:'space-between'}}><span style={{fontSize:'20px',fontWeight:'400'}}>PRODUCT TYPE</span> <span><i class="fa fa-angle-down" onDoubleClick={() => chithirai31()} onClick={ () => chithirai3() } style={{fontSize:'20px'}}></i></span></div>
         {arr8.map( (data) => <div> <span style={run3} ><input type='checkbox'  style={{height:'20px',width:'20px'}}/>{"                "}{data}</span></div>)}
      </div>
      <hr></hr>
      <div className=""><div style={{display:'flex',justifyContent:'space-between'}}><span style={{fontSize:'20px',fontWeight:'400'}}>OFFERS</span> <span><i class="fa fa-angle-down" onDoubleClick={() => chithirai41()} onClick={ () => chithirai4() } style={{fontSize:'20px'}}></i></span></div>
         {arr3.map( (data) => <div> <span style={run4} ><input type='checkbox'  style={{height:'20px',width:'20px'}}/>{"                "}{data}</span></div>)}
      </div>
      <hr></hr>
      </div>
     
      <div>
        <div className='hello'>
          <div>
            <select>
              <option>TOP SHAPE</option>
            </select>
          </div>
          <div>
            <select>
              <option>SOLE MATERIAL</option>
            </select>
          </div>
          <div>
            <select>
              <option>FASTENNIG/PATTERN</option>
            </select>
          </div>
          <div>
            <h6>See More</h6>
          </div>
        </div>
        
        
        <div className="box">
          {name1.map((data) => (
            <div className="box3">
              <img src={data.images} />
              <h2>{data.name}</h2>
              <p>{data.content}</p>
              <span>
                {data.rate} {"  "}
              </span>
              <span>
                <s>{data.strike}</s> {"  "}
              </span>
              <span>{data.offer}</span>
              <p className="box4">
                <i class="fa fa-heart"></i>
              </p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Listitem;
