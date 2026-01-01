import React from 'react'

const Project = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">


                    <article className="project-card">
                        <div className="project-info">
                            <h3>Hotel Room Booking System</h3>
                            <div className="tags">
                                <span>React.js</span><span>Spring Boot</span><span>MySQL</span>
                            </div>
                            <p>Built a Hotel Room Booking System using HTML, CSS, JavaScript for the frontend and Java for
                                the backend. Designed responsive UI pages and integrated them with RESTful APIs.</p>
                            {/* <!-- <a href="#" class="btn-link">View Details <i class="fas fa-arrow-right"></i></a> --> */}
                        </div>
                    </article>


                    <article className="project-card">
                        <div className="project-info">
                            <h3>Bike Dekho Compare App</h3>
                            <div className="tags">
                                <span>React.js</span><span>CSS</span>
                            </div>
                            <p>Built a responsive app to browse, search, and compare bikes. Added real-time price check,
                                advanced filtering, and a user-friendly UI. Features bike comparison and admin login.</p>
                            {/* <!-- <a href="#" class="btn-link">View Details <i class="fas fa-arrow-right"></i></a> --> */}
                        </div>
                    </article>


                    <article className="project-card">
                        <div className="project-info">
                            <h3>Airbnb Booking Analysis</h3>
                            <div className="tags">
                                <span>Python</span><span>Pandas</span><span>Matplotlib</span>
                            </div>
                            <p>Analyzed Airbnb booking data to identify trends in pricing, availability, and demand.
                                Utilized Python libraries for data cleaning, visualization, and statistical analysis.</p>
                            {/* <!-- <a href="#" class="btn-link">View Details <i class="fas fa-arrow-right"></i></a> --> */}
                        </div>
                    </article>

                </div>
            </div>
        </section>

    )
}

export default Project