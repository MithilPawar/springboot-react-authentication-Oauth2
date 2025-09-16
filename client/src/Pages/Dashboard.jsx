export default function Dashboard() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2 text-blue-700">Welcome to my Project Dashboard</h3>
        <p className="text-gray-700 mb-4">
          This dashboard provides a snapshot of technologies and progress regarding your project using <strong>Spring Boot</strong> and <strong>React</strong>. Explore the sections below to learn more about the key components and resources.
        </p>
      </section>

      <section className="mb-8 bg-blue-50 p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-3 text-blue-800">Spring Boot Backend</h3>
        <p className="text-gray-700">
          - Developed with Spring Boot for rapid backend development using inversion of control, dependency injection, and REST API endpoints.<br />
          - Seamless data persistence with JPA and Hibernate.<br />
          - Security with Spring Security framework, managing authentication and authorization.<br />
          - Learn more on the <a href="https://spring.io/projects/spring-boot" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">official Spring Boot site</a>.
        </p>
      </section>

      <section className="mb-8 bg-green-50 p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-3 text-green-800">React Frontend</h3>
        <p className="text-gray-700">
          - Built with React 18 leveraging hooks, functional components, and context API.<br />
          - Routing and protected pages implemented using React Router 6.<br />
          - UI styled with Tailwind CSS for scalable and responsive design.<br />
          - Real-time updates and state management for seamless user experience.<br />
          - Check out <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="text-green-600 underline">React official documentation</a>.
        </p>
      </section>

      <section className="mb-8 bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-3 text-gray-800">Project Highlights</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Implemented secure login and registration with JWT authentication.</li>
          <li>Designed reusable layout components facilitating clean routing and protected content.</li>
          <li>Integrated backend APIs smoothly with frontend using Axios.</li>
          <li>Focused on accessibility with ARIA roles, focus management, and keyboard navigation.</li>
          <li>Optimized performance with React.memo, useCallback, and useMemo hooks.</li>
        </ul>
      </section>

      <section className="text-center text-gray-600 mt-12">
        <p>Keep exploring and building smart, scalable apps with Spring and React!</p>
      </section>
    </div>
  );
}
