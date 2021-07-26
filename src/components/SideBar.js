import {  useContext } from "react";
import styled from "styled-components";
import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";
import { Context } from "../App";

export default (function () {
  
  const { patientTestPackages, handleMainContent } = useContext(Context);

  return (
    <>
      <fieldset>
        <legend>
          <h2>User Details</h2>
        </legend>
        <div>
          { /* logic unclear for using bind */}
          <div onClick={()=>handleMainContent("profile")}>Profile</div>
        </div>
      </fieldset>
      <fieldset>
        <legend>
          <h2>Tests</h2>
        </legend>
        <div>
          {patientTestPackages.map((test, index) => {
          
            return <div key={index.toString()} onClick={ ()=>handleMainContent(test)} >
          
              {test}
            </div>
          
          })}
        </div>
      </fieldset>
    </>
  );
});

// export default (function () {
//   const [listItemColor, setListItemColor] = useState("red");

//   const icons = {
//     Profile: { iconName: CgProfile, color: "yellow" },
//   };

//   const listItems = getListItems(icons, setListItemColor);

//   return (
//     <SideBar>
//       <SideBarList>{listItems}</SideBarList>
//     </SideBar>
//   );
// });

export const SideBarList = styled.ul`
  @import url("https://fonts.googleapis.com/css2?family=Handlee&display=swap");
  padding: 0%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: "Handlee", cursive;
`;

export const ListItem = styled.li`
  margin: 2px 0;
  height: 50px;
  width: 100%;
  background-color: #02020f81;
  display: flex;
  justify-content: flex-start;
`;

const SideBar = styled.aside`
  grid-column: 1 / span 2;
`;

const IconContainer = styled.div`
  margin-right: 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5%;
  color: ${(props) => props.color};
  font-size: large;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`;

function getListItems(icons, handleColorChange) {
  return Object.keys(icons).map(function (name) {
    let { iconName: Icon, color } = icons[name];
    //let color = icons[name]["color"];
    return (
      <ListItem key={name} onClick={handleColorChange}>
        <IconContainer color={color}>
          <Icon />
        </IconContainer>
        <TextContainer>{name}</TextContainer>
      </ListItem>
    );
  });
}
