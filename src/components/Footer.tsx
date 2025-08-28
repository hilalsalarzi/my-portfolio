import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer style={{ 
      padding: "20px", 
      background: "#222", 
      color: "#fff",
      textAlign: "center",
      position: "relative",
      bottom: 0,
      width: "100%"
    }}>
      <div style={{ marginBottom: "15px" }}>
        <Link to="/" style={{ margin: "0 10px", color: "white" }}>Home</Link>
        <Link to="/about" style={{ margin: "0 10px", color: "white" }}>About</Link>
        <Link to="/contact" style={{ margin: "0 10px", color: "white" }}>Contact</Link>
      </div>
      <div style={{ fontSize: "0.8rem" }}>
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
