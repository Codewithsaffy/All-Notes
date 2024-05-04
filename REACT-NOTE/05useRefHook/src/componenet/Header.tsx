interface LiProps {
  home: string;
  about: string;
  contactUs: string;
}
function Header({ home, about, contactUs }: LiProps) {
  return (
    <ul>
      <li>{home}</li>
      <li>{about}</li>
      <li>{contactUs}</li>
    </ul>
  );
}

export default Header;
