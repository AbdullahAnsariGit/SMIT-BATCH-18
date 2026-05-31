import React from "react";
function MyFooter(props) {
  const { item } = props;
  console.log(props, "my props logs");
  return (
    <div>
      <h1>{item?.title}</h1>
      <h1>{item?.desc}</h1>
      <h1>{item?.subTitle}</h1>
      <h1>{item?.subTitleDesc}</h1>
    </div>
  );
}

export default MyFooter;
