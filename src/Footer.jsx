// Simple footer at the bottom of the app


function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ 
      textAlign: "center", 
      padding: "15px", 
      backgroundColor: "#282c34", 
      color: "white",
      marginTop: "20px"
    }}>
      <p>© {year} My React App. All rights reserved.</p>
    </footer>
  );
}

export default Footer;