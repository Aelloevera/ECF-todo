import { useState } from "react";
import ToDo from "./ToDo";
import { InputAuth, Parag, ListStyle, ButtonStyled } from "../style/style";

const List = () => {
  //tableau de listes
  const [lists, setLists] = useState([]);
  //valeur liée au input
  const [valeur, setValeur] = useState("");

  //fonction pour changer l'état
  function handleOnClick(e) {
    e.preventDefault();
    //prevstate pour ne pas écraser ce qui précède, math random pour un id aléatoire et le title qui prend la value du input.
    setLists((prevstate) => [
      ...prevstate,
      { id: Math.floor(Math.random() * 100), title: valeur },
    ]);
    //permet de remettre le input à vide
    setValeur(" ");
  }

  function deleteList(id) {
    let deleted = lists.filter((list) => list.id !== id);
    setLists(deleted);
  }

  return (
    <>
      {/*tout mis dans un form pour pouvoir ajouter les listes + rapidement avec la touche entrée*/}
      <form onSubmit={(e) => handleOnClick(e)}>
        {/*input qui change de valeur quand on écrit dedans*/}
        <InputAuth
          type="text"
          placeholder="Nouvelle liste"
          value={valeur}
          onChange={(e) => setValeur(e.target.value)}
        />
        {/* button qui renvoi à la fonction à chaque click*/}
        <ButtonStyled type="submit">Ajouter liste</ButtonStyled>
      </form>

      {lists.map((list) => (
        <ListStyle key={list.id}>
          <ButtonStyled onClick={() => deleteList(list.id)}>
            Supprimer la liste
          </ButtonStyled>
          <Parag>{list.title}</Parag>

          <ToDo />
        </ListStyle>
      ))}
    </>
  );
};

export default List;
