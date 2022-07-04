import Navbar from "../navigation/NavBar";
import { Title, WelcomeParag } from "../style/style";

//page d'accueil
const Home = () => {
  return (
    <>
      <Navbar />
      <Title>Bienvenue !</Title>

      <WelcomeParag>
        <h2>Qu'est ce qu'une Todolist ? </h2>
        C'est une liste personnalisée de tâches à réaliser sur une journée, une
        semaine, un mois...
        <br />
        Bref comme vous voulez, c'est vous qui décidez. <br />
        Une fois la tâche accomplie (bravo!), vous pouvez la cocher afin de la
        barrer de votre liste. <br />
        Vous pouvez également décider de la supprimer. La création de tableau
        permet de ranger vos listes par thématiques.
      </WelcomeParag>
    </>
  );
};

export default Home;
