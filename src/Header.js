import React, { useState } from "react";
import a from "../src/Assets/mac.webp";
import b from "../src/Assets/versace.webp";
import c from "../src/Assets/bargain.webp"
import d from "../src/Assets/stop.webp"
import e from "../src/Assets/karrot.webp"
const Header = () => {
  const [isHover, setHover] = useState(false);
  const [isHover1, setHover1] = useState(false);
  const [isHover3, setHover3] = useState(false);
  const [isHover4, setHover4] = useState(false);
  const [isHover5, setHover5] = useState(false);
  const [isHover6, setHover6] = useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseEnter1 = () => {
    setHover1(true);
  };
  const handleMouseEnter3 = () => {
    setHover3(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  const handleMouseLeave1 = () => {
    setHover1(false);
  };
  const handleMouseLeave3 = () => {
    setHover3(false);
  };
  const top_hover1 = {
    height: "600px",
    display: isHover ? "block" : "none",
  };
  const top_hover2 = {
    height: "600px",
     display: isHover1 ? "block" : "none",
  };
  const top_hover3 = {
    height: "600px",
    marginTop:'10vh',
     display: isHover3 ? "block" : "none",
  };
  const myDiv = {
    color: "orange",
    display: isHover ? "inline-block" : "",
  };
  const myDiv2 = {

    display: isHover1 ? "inline-block" : "",
  }
  const myDiv3 = {
   
    display: isHover3 ? "inline-block" : "",
  }
  const handleMouseEnter4 = () => {
    setHover4(true);
  };
  const handleMouseLeave4 = () => {
    setHover4(false);
  };
  const top_hover4 = {
    height: "400px",
     display: isHover4 ? "block" : "none",
  };
  const myDiv4 = {
   
    display: isHover4 ? "inline-block" : "",
  }
  const handleMouseEnter5 = () => {
    setHover5(true);
  };
  const handleMouseLeave5 = () => {
    setHover5(false);
  };
  const top_hover5 = {
    height: "600px",

     display: isHover5 ? "block" : "none",
  };
  const myDiv5 = {
   
    display: isHover5 ? "inline-block" : "",
  }
    const handleMouseEnter6 = () => {
    setHover6(true);
  };
  const handleMouseLeave6 = () => {
    setHover6(false);
  };
  const top_hover6 = {
    height: "600px",

     display: isHover6 ? "block" : "none",
  };
  const myDiv6 = {
   
    display: isHover6 ? "inline-block" : "",
  }
  const arr1=[{"id":"Navigator","first_name":"Philbert","last_name":"covino","email":"pcovino0@hexun.com","gender":"Non-binary","ip_address":"154.126.126.188"},
  {"id":"Mighty Max Macro","first_name":"Rees","last_name":"Bottelstone","email":"rbottelstone1@aboutads.info","gender":"Male","ip_address":"247.252.252.54"},
  {"id":"Sierra 1500","first_name":"Laure","last_name":"Barrows","email":"lbarrows2@umn.edu","gender":"Female","ip_address":"95.121.213.13"},
  {"id":"Firebird","first_name":"Milty","last_name":"Gayler","email":"mgayler3@printfriendly.com","gender":"Male","ip_address":"249.140.94.212"},
  {"id":"1500","first_name":"Annelise","last_name":"Gibling","email":"agibling4@blogger.com","gender":"Female","ip_address":"119.8.77.168"},
  {"id":"Corolla","first_name":"Hashim","last_name":"Blown","email":"hblown5@cnn.com","gender":"Male","ip_address":"243.94.137.92"},
  {"id":"RX-7","first_name":"Rutherford","last_name":"Demeter","email":"rdemeter6@craigslist.org","gender":"Polygender","ip_address":"66.147.199.76"},
  {"id":"Taurus","first_name":"Dennie","last_name":"Stollenbecker","email":"dstollenbecker7@nps.gov","gender":"Male","ip_address":"47.73.8.3"},
  {"id":"Cultus","first_name":"Harley","last_name":"Le Sieur","email":"hlesieur8@japanpost.jp","gender":"Male","ip_address":"159.130.102.75"},
  {"id":"Supra","first_name":"Evelyn","last_name":"Capron","email":"ecapron9@smh.com.au","gender":"Female","ip_address":"237.102.198.129"},
  {"id":"Colt","first_name":"Mattias","last_name":"Chopin","email":"mchopina@noaa.gov","gender":"Male","ip_address":"108.55.113.200"},
  {"id":"Z4 M","first_name":"Camala","last_name":"Schimoni","email":"cschimonib@desdev.cn","gender":"Female","ip_address":"236.25.65.31"},
  {"id":"Savana 3500","first_name":"Esra","last_name":"Riditch","email":"eriditchc@w3.org","gender":"Male","ip_address":"30.46.52.155"},
  {"id":"Tahoe","first_name":"Genni","last_name":"Lauga","email":"glaugad@cdc.gov","gender":"Female","ip_address":"179.151.159.223"},
  {"id":"Grand Cherokee","first_name":"Margy","last_name":"Breakwell","email":"mbreakwelle@tuttocitta.it","gender":"Female","ip_address":"32.48.190.91"},
  {"id":"Bronco","first_name":"Bernita","last_name":"Cockayme","email":"bcockaymef@tripadvisor.com","gender":"Bigender","ip_address":"218.144.58.240"},
  {"id":"Grand Cherokee","first_name":"Jared","last_name":"Jenken","email":"jjenkeng@thetimes.co.uk","gender":"Male","ip_address":"255.30.71.45"},
  {"id":"Endeavor","first_name":"Florette","last_name":"Colpus","email":"fcolpush@creativecommons.org","gender":"Female","ip_address":"21.241.221.250"},
  {"id":"Endeavor","first_name":"Ron","last_name":"Ruckhard","email":"rruckhardi@creativecommons.org","gender":"Bigender","ip_address":"116.177.70.114"},
  {"id":"E-Class","first_name":"Taddeo","last_name":"Tupie","email":"ttupiej@over-blog.com","gender":"Male","ip_address":"1.66.53.244"}]
  const arr2=["Women","Men","Kids","Beauty","Home Offers","All Offer Products"]
  const arr3=["Watches - Upto 70% Off","Westwear- Upto 70% Off","FootWears - Upto 70% Off","Oil Watches - Upto 70% Off","Giftset - Upto 70% Off","Soaps - Upto 70% Off","Hand & footcare - Upto 70% Off"]
  const arr4=["Bath & Body","Fragrence For All","Makeup","Hair care","Mens Crowing","Nails","Skin CAre","Tools & acceries"]    
  const arr5=["All Bath & Body","Body Lotions","Body Scrup","Essential Oil","Gift set","Soaps","Hand & footcare"]
  const arr6=["Clothing","FoothWear","Watches","Fragrance","Grooming For Men","Sunglass & Frame","Accessories","Jewellary"]
  const arr7=["All Clothing","T-Shirts & Polos","Shirts","All Shirts","Casual","Formal","Jeans","Trousers","All Trousers","Casual","Formal","Shorts","Sports & Activewear","All Sports & Activewear","Tshirts","Joggers & Track pants"]
  const arr8=["Suits & Blazers","Casual Jackets","Ethnicwear","Kurtas","Kurta Sets","Nehru Jackets","Winterwear","All Winterwear","Sweatshirts", "Sweaters","Jackets","Mask","Personal Protection Equipment"]
  const arr9=["Accessories","All Accessories","Ties Cufflinks & Pocket Squares","Caps & Hats","Socks","Handkerchief","Innerwear & Nightwear","All Innerwear & Nightwear","Briefs & Trunks","Boxers","Vests","Nightwear & Loungewear","Thermals"]
  const arr10=["Indian Wear","Western Wear","Lingerie & Night Wear","Footwear","Watches","Fragrances","Bags & Wallets","Sunglasses & Frames","Jewellery","Travel"]
  const arr11=["All Indian Wear","Kurtas, Kurtis & Tops","Kurtas","Kurtis & Tops","Indianwear Dresses","Bottom Wear","All Bottom wear","Leggings & Churidars","Palazzo & Salwars","Pants","Skirts","Indianwear Sets","Sarees & Blouses","All Sarees & Blouses","Blouses","Sarees"]
  const arr12=["Dupattas","Scarf & Stoles","Mask & PPE kits"]
  const arr13=["Make Up","All Make Up","Face","All Face","BB & CC Cream","Blush","Bronzer","Compact","Concealer","Foundations","Make Up Remover","Primers","Kits","Eyes"]
  const arr14=["All Eyes","Eyebrows","Kohls & Kajal","Eye Shadow","Eyeliner","Mascara","Lips","All Lips","Lip Balm","Lip Gloss","Lip Liners","Lipstick","Liquid Lipstick"]
  const arr15=["Skincare","Bath & Body","Nails","Haircare","Tools & Accessories","Women's Fragrances","Men's Fragrances","Grooming For Men","Personal Hygiene"]


  return (
    <div>
      <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary top1">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button">
            <div style={{ display: "flex", margin: "-20px 10px" }}>
              <div>
                <span class="navbar-toggler-icon"></span>
              </div>
              <div>
                <h3>SHOPPERS STOP</h3>
              </div>
            </div>
          </button>

          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <div className="left1">
              <span>CATACTERIES</span>
              <span style={myDiv}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>LUXE</span>
              <span style={myDiv2} onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>BARGAINS</span>
            </div>
            <div>
              <h3 style={{ fontFamily: "Metropolis,Serif,Sans-Serif" }}>
                SHOPPERS STOP
              </h3>
            </div>
            <div className="center1">
              <span><input type="text" placeholder="Search Products & Brand" style={{ border: "none" }}></input></span>
              <span>
                <i class="fa fa-search"></i>
              </span>
              <span>
                <i class="fa fa-heart-o"></i>
              </span>
              <span>
                <i class="fa fa-shopping-bag"></i>
              </span>
              <span>
                <i class="fa fa-user"></i>
              </span>
            </div>
          </div>
        </div>
      </nav>
      <hr></hr>
      </div>
      <div style={top_hover1}>
        <div className="top-hover">
          <div className="hover1">
            {arr4.map( (data) => <h5>{data}</h5>)}
          </div>
          <div>
           {arr5.map( (data) => <h5>{data}</h5>)}
          </div>
          <div>
            <img src={a} />
            <p>
              <button>Shop Now</button>
            </p>
          </div>
          <div>
            <img src={b} />
            <p>
              <button>Shop Now</button>
            </p>
          </div>
        </div>
      </div>
      
      <div style={top_hover2}>
        <div className="top-hover">
        <div className="hover1">
          {arr2.map( (data) => 
              <h5>{data}</h5>
          )}
          </div>
          <div>
            {arr3.map( (data) => 
              <h5>{data}</h5>
            )}
          </div>
          <div>
            <img src={c} />
            <p>
              <button>Shop Now</button>
            </p>
          </div>
        </div>
      </div>   
      <div style={top_hover3}>
      <div className="top-hover">
         <div >{arr6.map( (data) => <h4>{data}</h4>)}</div>
         <div>{arr7.map( (data) => <h5>{data}</h5>)}</div>
         <div>{arr8.map( (data) => <h5>{data}</h5>)}</div>
         <div>{arr9.map( (data) => <h5>{data}</h5>)}</div>
      </div>
      </div>
      <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            
                <div className="three">
                  <span style={myDiv3} onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>Home</span>
                  <span style={myDiv4} onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}>WOMEN</span>
                  <span style={myDiv5} onMouseEnter={handleMouseEnter5} onMouseLeave={handleMouseLeave5}>BEAUTY</span>
                  <span style={myDiv6} onMouseEnter={handleMouseEnter6} onMouseLeave={handleMouseLeave6}>KIDS</span>
                  <span style={myDiv3} onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>HOMESTOPS</span>
                  <span>GIFTS</span>
                  <span>BRANDS</span>
                </div>
           
          </div>
        </div>
      </nav>
      </div>

      <div style={top_hover3}>
      <div className="top-hover">
         <div >{arr6.map( (data) => <h4>{data}</h4>)}</div>
         <div>{arr7.map( (data) => <h5>{data}</h5>)}</div>
         <div>{arr8.map( (data) => <h5>{data}</h5>)}</div>
         <div>{arr9.map( (data) => <h5>{data}</h5>)}</div>
      </div>
      </div>

      <div style={top_hover4}>
      <div className="top-hover">
         <div >{arr1.map( (data) => <h4>{data.first_name}</h4>)}</div>
         <div>{arr11.map( (data) => <h5>{data}</h5>)}</div>
         <div>{arr12.map( (data) => <h5>{data}</h5>)}</div>
         <div><img src={d} /><p><button>Shop Now</button></p></div>
         </div>
      </div>

      <div style={top_hover5}>
      <div className="top-hover">
         <div >{arr13.map( (data) => <h4>{data}</h4>)}</div>
         <div>{arr14.map( (data) => <h5>{data}</h5>)}</div>
         <div>{arr15.map( (data) => <h5>{data}</h5>)}</div>
         <div><img src={a} /><p><button>Shop Now</button></p></div>
         </div>
      </div>

      <div style={top_hover6}>
      <div className="top-hover">
         <div >{arr13.map( (data) => <h4>{data}</h4>)}</div>
         <div>{arr14.map( (data) => <h5>{data}</h5>)}</div>
         <div>{arr15.map( (data) => <h5>{data}</h5>)}</div>
         <div><img src={e} /><p><button>Shop Now</button></p></div>
         </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary foot1">
        <div class="container-fluid">
          <p
            class="navbar-toggler"
            type="button"
          >
            1787 products
          </p>
          <div class="collapse navbar-collapse down1">
            <span style={{ marginLeft: "80px", marginBottom: "50px",color:'lightgrey'}}>
              Home/FootWears/Men
            </span>
            <div className="foot">
              <span style={{ fontSize: "20px" }}>
                FootWears<a>1787 products</a>
              </span>
              <span>
                <select>
                  <option>SORT BY : POPULAR</option>
                </select>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
