import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <form
        style={styles.form}
      >
        <h3 style={styles.header}>Sign Up</h3>
        <input style={styles.input} placeholder="Username" />
        <input style={styles.input} placeholder="Email" />
        <input style={styles.input} placeholder="Password" />
        <div style={styles.buttonDiv}>
          <button style={styles.button}>
            Cancel
          </button>
          <button style={styles.button}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

const styles = {
  form: {
    width: "60%",
    margin: "50px auto",
    display: "flex",
    flexDirection: "column",
    gap: 20

  },
  header:{
    fontSize: "2rem",
    letterSpacing: 2 
  },

  input:{
    padding: 10 
  },

  buttonDiv:{
    display: "flex",
    justifyContent: "center",
    gap: 20
  },

  button:{
    outline: "none",
    paddingBlock: 5,
    width: 100,
    backgroundColor: "red",
    color: "white",
    cursor: "pointer"
  }


}
