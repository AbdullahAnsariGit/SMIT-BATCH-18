import React from "react";
import MyHeader from "./component/Header";
import MyFooter from "./component/Footer";

function App() {
  const data = {
    title: "Home Footer",
    desc: "Hello Desc",
    subTitle: "Sub Title Desc",
    subTitleDesc: "Home Sub title Desc",
  };
  return (
    <div>
      <MyHeader title={"Contact Us"} className="header" desc={"abc"} />
      <MyHeader title={"Home"} />
      <MyHeader title={"About Us"} />
      <MyHeader title={"Product"} />
      <h1>Hello</h1>
      {/* <MyFooter
        title={"Footer Home"}
        desc={"No desc"}
        subTitle={"abc"}
        address={"lkdfjhdf"}
        country={"pak"}
      
      /> */}
      <MyFooter item={data} />
    </div>
  );
}

export default App;
