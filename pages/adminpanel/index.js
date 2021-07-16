import React from "react";
import Appdrawer from "../../components/appdrawer";

import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    display: "flex",
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,

    padding: theme.spacing(5),
  },
}));
const adminhome = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Appdrawer></Appdrawer>
    
      <Container className={classes.content}>
      <div className={classes.toolbar} />
        <h1>Hello</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          porro dolorum sequi, animi esse ipsum tempora temporibus modi ullam
          voluptatum perferendis harum! A impedit vero eum modi tempora
          accusamus non. Fuga commodi laborum, consequatur repellat qui quas
          similique exercitationem quasi corporis nam, adipisci eius molestiae
          iusto eligendi laboriosam, vero hic! Ratione officia doloremque sint
          saepe atque eveniet explicabo odio est? Est sequi iure vitae cumque
          tempora voluptates sint aspernatur itaque atque dignissimos delectus
          saepe, quaerat sapiente eum natus repudiandae facere fugit culpa
          quisquam magni? Amet repellat iure nostrum quod saepe. Culpa sapiente
          quasi, autem minima minus atque. Enim eos labore, tempore praesentium
          hic cum odio sed accusantium dignissimos alias? Rerum soluta pariatur
          obcaecati error iusto alias, debitis hic dignissimos nobis. Eligendi
          quo repellat laboriosam in odit vitae nesciunt perferendis odio. Cum,
          esse reprehenderit? Vero voluptatum, corrupti ut enim delectus
          ratione, rem iure corporis consequatur tempora perspiciatis
          voluptatibus sunt repellat voluptas! Sequi dignissimos facilis
          repellendus possimus autem aperiam minima velit, assumenda ea corporis
          eos temporibus tempora reprehenderit harum quia placeat nesciunt
          labore amet cupiditate, qui doloribus maiores. Ad dignissimos
          distinctio sapiente. Excepturi officiis voluptatum illum quis ad. Odio
          alias unde aliquid quia aut, molestiae assumenda, veritatis debitis
          vel sit atque nulla nihil quos commodi amet mollitia repudiandae
          eligendi cupiditate maiores exercitationem? Similique reprehenderit
          assumenda nulla voluptatum fugit veniam repudiandae minima at, unde
          iste debitis alias iure fugiat facere molestiae, quo et facilis. Quam
          tempore optio voluptatibus dicta, voluptate adipisci possimus dolorem.
          Exercitationem ipsum quod quia consequuntur repudiandae eaque
          voluptatem impedit minus pariatur inventore culpa dignissimos
          distinctio perspiciatis temporibus maxime quibusdam soluta, nisi et
          atque! Quo repudiandae id, perferendis nesciunt molestiae nihil?
          Dignissimos fugit exercitationem incidunt vero maiores soluta expedita
          ipsum repellendus earum nihil quia eius, officia quod fugiat provident
          nostrum animi et recusandae architecto voluptatem in ab eligendi?
          Aliquam, doloribus reiciendis! Possimus repellendus natus, deleniti,
          tempora maiores accusamus perferendis sequi eligendi praesentium nulla
          maxime excepturi autem ratione minima unde fugit odit sapiente magnam!
          Laboriosam architecto adipisci qui omnis perspiciatis explicabo earum?
          Molestias, ex omnis. Aperiam porro libero natus reprehenderit debitis
          enim sunt nostrum rem eum iure quae, provident ducimus voluptate
          dignissimos corrupti? Optio enim veritatis quam culpa ducimus hic
          officia tenetur. Minus quisquam alias mollitia illum aut voluptatum
          sit soluta, earum repellat molestiae quibusdam autem asperiores,
          deleniti voluptatem, porro nisi rem sapiente quaerat! Vitae quis
          blanditiis at asperiores doloremque omnis laboriosam?
        </p>
      </Container>
    </Container>
  );
};

export default adminhome;
