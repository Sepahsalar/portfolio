export function About() {
  return (
    <section
      id="about"
      className="prose prose-slate dark:prose-invert max-w-none"
    >
      <h2 className="text-2xl font-bold tracking-tight">About Me</h2>

      <p className="leading-relaxed">
        I'm Alireza Sohrabizadeh — a software engineer focused on building clean,
        user-friendly web applications with <strong>React</strong> and
        <strong> TypeScript</strong>. I enjoy implementing well-structured UI
        components, building responsive layouts, and turning complex logic into
        intuitive interfaces.
      </p>

      <p className="leading-relaxed">
        I’m currently applying for the{" "}
        <strong>Wolt Software Engineering Internship (Frontend)</strong>.
        My goal is to join a high-impact engineering team where I can learn,
        collaborate, and ship meaningful real-world product features.
      </p>

      <h3 className="text-xl font-semibold mt-6">What I’m good at</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Clean, accessible, mobile-first UI development</li>
        <li>React + TypeScript component architecture</li>
        <li>State management patterns (hooks, context)</li>
        <li>API integration and async logic</li>
        <li>Writing maintainable, readable code</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6">What I’m learning</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Advanced frontend patterns & optimization</li>
        <li>Design systems and component libraries</li>
        <li>Improving UX consistency in large apps</li>
      </ul>
    </section>
  );
}
