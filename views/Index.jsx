const React = require("react");
const pokemon = require("../models/pokemon");

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div style={styles.container}>
        <h1 style={styles.header}>See All The Pokemon!</h1>
        <ul style={styles.ulContainer}>
        {pokemon.map((pokemon, idx) => (
          <li style={styles.item}>
          This is <a href={`/pokemon/${pokemon.idx}`}>{cFirstLetter(pokemon.name)}</a>{" "}<img src={pokemon.img} />
            <br />
          </li>
        ))}


        </ul>
      </div>
    );
  }
}

function cFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const styles = {
  container: {
    backgroundColor: "royalblue",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    fontSize: "32px",
    color: "#fff",
  },
  ulContainer: {
    backgroundColor: "#fff",
    padding: "15px",
    fontFamily:'Be Vietnam Pro', 
  },
  createFruitBtn: {
    backgroundColor: "#fff",
    padding: "5px",
    borderRadius: "5px",
    textDecoration: "none",
  },
  item: {
    padding: "10px",
    listStyleType: "none",
  },
};

{/* <link rel="preconnect" href="https://fonts.googleapis.com"> 
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Be+Vietnam+Pro:wght@400;500;700&display=swap" rel="stylesheet"></link> */}

module.exports = Index;
