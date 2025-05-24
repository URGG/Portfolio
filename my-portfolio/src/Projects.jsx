function Projects() {
  return (
    <section className="py-16" id="projects">
      <h2 className="text-3xl font-semibold mb-4">Projects</h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold">🔐 Password Manager</h3>
          <p className="text-gray-300">Java, SQLite, Swing</p>
          <p>A desktop app that stores generated passwords securely with site info.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold">🧠 Immigration Database</h3>
          <p className="text-gray-300">JavaScript, GPT-4 API, HTML/CSS</p>
          <p>A system built for a law firm to manage asylum applications using AI tools.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
