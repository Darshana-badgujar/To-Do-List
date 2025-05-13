import React from 'react';

export default function About() {
	return (
		<div className="text-center">
			<h1>About</h1>
			<p className="mt-3" style={{ maxWidth: "800px", margin: "0 auto", lineHeight: "1.6" }}>
        This ToDo List application is designed to help users manage their daily tasks efficiently and stay organized.
        Users can add new tasks, mark them as completed, update existing tasks, and delete tasks they no longer need.
        It is ideal for students, professionals, or anyone looking to boost productivity by keeping track of their goals and responsibilities.
        <br /><br />
        The application is built using <strong>React</strong> for the frontend and <strong>Spring Boot</strong> with an embedded <strong>H2 Database</strong> for the backend,
        ensuring a smooth, responsive, and reliable user experience without external database setup.
        <br /><br />
        This project was created as a hands-on learning experience to understand full-stack web development, covering CRUD operations,
        RESTful APIs, in-memory database interactions, and UI design.
      </p>
		</div>
	)
}