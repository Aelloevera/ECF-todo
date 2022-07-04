//import { useState } from "react";
import {
  FormAuth,
  Title,
  LabelTop,
  InputAuth,
  Avatar,
  ButtonStyled,
} from "../style/style";
import Navbar from "../navigation/NavBar";

const Auth = () => {
  //etat de si connecté ou pas
  //const [isAuth, setIsAuth]=useState(false)

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <Navbar />
      <FormAuth onSubmit={() => handleSubmit()}>
        <Title>Me connecter</Title>
        <Avatar
          src="https://static.vecteezy.com/ti/vecteur-libre/t2/2608327-application-mobile-avatar-web-button-menu-digital-silhouette-style-icon-gratuit-vectoriel.jpg"
          alt="avatar"
        />
        <LabelTop>Adresse Mail</LabelTop>
        <InputAuth type="email" placeholder="kenny@cartman.usa" />
        <br />
        <LabelTop>Mot de passe</LabelTop>
        <InputAuth type="password" />
        <br />
        <ButtonStyled type="submit">Envoyer</ButtonStyled>
        <p>
          Mot de passe oublié ? <br />
          Pas mon problème
        </p>
      </FormAuth>
    </>
  );
};

export default Auth;
