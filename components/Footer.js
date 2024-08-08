const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 Social Well-being. All rights reserved.</p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "#f0f8ff" /* Light blue footer */,
  color: "#333",
  textAlign: "center",
  padding: "1em 0",
  position: "relative",
  width: "100%",
  marginTop: "2em",
};

export default Footer;
