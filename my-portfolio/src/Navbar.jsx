function Navbar() {
  return (
    <nav className="bg-black text-white py-4 border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-between px-4">
        <h1 className="text-xl font-semibold">George Urgiles</h1>
        <ul className="flex space-x-6 text-sm">
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#experience" className="hover:underline">Experience</a></li>
          <li><a href="#education" className="hover:underline">Education</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
