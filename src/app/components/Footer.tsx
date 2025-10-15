export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-row justify-end items-center pb-8 pt-16">
      <p className="text-sm font-light">© {year} Ashley Zhang 🍎</p>
    </footer>
  );
}
