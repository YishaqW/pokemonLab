const React = require("react")
const pokemon = require("../models/pokemon");


class Show extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div style={styles.container}>
        <h1 style={styles.header}>Gotta Catch 'Em Al!</h1>

        <h2>{pokemon.name.charAt(0).toUpperCase()  + pokemon.name.slice(1)}</h2>

        <img src={pokemon.img} alt={pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)} />
        
        <a href="/pokemon"><button>Home</button></a>


       
      </div>
      
    );
  }
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



module.exports = Show