const React = require("react");
const Pokemons = require("../models/pokemon");

class Index extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <div style={styles.container}>
        <h1 style={styles.header}>See All The Pokemon!</h1>
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

module.exports = Index;
