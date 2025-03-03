import { Button, ButtonGroup, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { GenreObject } from "./Hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<GenreObject | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem
        paddingX={5}
        area="aside"
        display={{ base: "none", lg: "block" }}
      >
        <GenreList
        selectedGenre={selectedGenre}
          onSelectGenre={(genre) => {
            console.log(genre);
            setSelectedGenre(genre)}}
        />
      </GridItem>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
