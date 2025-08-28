import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav style={{ padding: "10px", background: "#222", color: "#fff" }}>
      <NavLink 
        to="/home" 
        style={({ isActive }) => ({ 
          margin: "0 10px", 
          color: isActive ? "#61dafb" : "white",
          fontWeight: isActive ? "bold" : "normal"
        })}
      >
        Home
      </NavLink>
      <NavLink 
        to="/about" 
        style={({ isActive }) => ({ 
          margin: "0 10px", 
          color: isActive ? "#61dafb" : "white",
          fontWeight: isActive ? "bold" : "normal"
        })}
      >
        About
      </NavLink>
      <NavLink 
        to="/contact" 
        style={({ isActive }) => ({ 
          margin: "0 10px", 
          color: isActive ? "#61dafb" : "white",
          fontWeight: isActive ? "bold" : "normal"
        })}
      >
        Contact
      </NavLink>
      <NavLink 
        to="/login" 
        style={({ isActive }) => ({ 
          margin: "0 10px", 
          color: isActive ? "#61dafb" : "white",
          fontWeight: isActive ? "bold" : "normal"
        })}
      >
        Login
      </NavLink>
    </nav>
  );
};

export default Navbar;
