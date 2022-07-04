import { useState } from "react";
import List from "./List";
import { InputAuth, TabStyle, Parag, ButtonStyled } from "../style/style";

const Tab = () => {
  const [tabs, setTabs] = useState([]);
  const [value, setValue] = useState("");

  //function changement etat + id aléatoire + titre qui prend la valeur de l'input
  function handleChange(e) {
    setTabs((prevstate) => [
      ...prevstate,
      { id: Math.floor(Math.random() * 100), title: value },
    ]);
    //remise à vide
    setValue("");
  }

  return (
    <>
      <InputAuth
        type="text"
        placeholder="Nouveau Tableau"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <ButtonStyled type="submit" onClick={(e) => handleChange(e)}>
        Créer un tableau
      </ButtonStyled>

      <TabStyle>
        {tabs.map((tab) => (
          <div key={tab.id}>
            <Parag>{tab.title}</Parag> <List />
          </div>
        ))}
      </TabStyle>
    </>
  );
};
export default Tab;
