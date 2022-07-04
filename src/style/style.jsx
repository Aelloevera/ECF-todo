import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    background-image:url("https://img.freepik.com/free-photo/white-grey-marble-texture-background-natural-pattern-with-high-resolution-tiles-luxury-stone-floor-seamless-glitter-interior-exterior_38607-418.jpg?w=2000")
}
`;
//Style des titres
export const Title = styled.h1`
  color: #b39500;
`;

//Style du formulaire d'authentification
export const FormAuth = styled.form`
img:url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNt3e0TmgB0m_bvZIJzGvmyo9uVZhiWHjkgQ&usqp=CAU")
  border: 2px solid #b39500;
  margin: 0 auto;
  width: 500px;
  height: 500px;
  background-color: #ffffff;
  border-radius: 7px;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
`;

//Style des labels
export const LabelTop = styled.label`
  display: block;
`;

//style des input
export const InputAuth = styled.input`
  width: 200px;
`;
//Style de l'image avatar
export const Avatar = styled.img`
  width: 100px;
  height: 100px;
`;

//Style de la barre de nav
export const Onglet = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: row;
  align-item: center;
  justify-content: space-around;
  width: 600px;
  margin: 0 auto;
`;

//Style paragraphe
export const Parag = styled.p`
  text-decoration: underline;
  color: #b39500;
`;

//Style des tableaux.
export const TabStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ListStyle = styled.div`
  border: 2px solid #998000;
  background-color: #ffffff;
  border-radius: 24px;
  margin: 5px 0 0 0;
`;
export const ToDoStyle = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  margin: 10px;
  font-size: medium;
`;

export const WelcomeParag = styled.p`
  border: 2px solid #998000;
  background-color: #ffffff;
  border-radius: 24px;
  margin: 50px auto;
  width: 50%;
  font-size: large;
  padding: 10px 50px;
`;

export const ButtonStyled = styled.button`
  background: white;
  border: 2px solid #998000;
  border-radius: 8px;
  &:hover {
    background: lightgrey;
  }
`;
