import Link from "next/link";

const Header = () => {
  return (
    <header style={headerStyle}>
      <nav>
        <ul style={navListStyle}>
          <li style={navItemStyle}>
            <Link href="/">Home</Link>
          </li>
          <li style={navItemStyle}>
            <Link href="/sleep">Sleep</Link>
          </li>
          <li style={navItemStyle}>
            <Link href="/mental-health">Mental Health</Link>
          </li>
          <li style={navItemStyle}>
            <Link href="/social-wellbeing">Social Well-being</Link>
          </li>
          <li style={navItemStyle}>
            <Link href="/mindfulness">Mindfulness</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyle = {
  backgroundColor: "#7d6198" /* Light blue header */,
  color: "white",
  padding: "1em 0",
  textAlign: "center",
};

const navListStyle = {
  listStyle: "none",
  padding: 0,
  margin: 0,
};

const navItemStyle = {
  display: "inline",
  margin: "0 1em",
};

export default Header;
