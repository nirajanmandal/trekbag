export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer>
      <small>&copy; {currentYear} Copyright by Nirajan Mandal</small>
      <p>
        version <b>1.0</b>
      </p>
    </footer>
  );
}
