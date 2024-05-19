

function Classes() {
    const classes = [
        {shortname: "EECS 203", name: "Discrete Mathematics", url: "https://ece.engin.umich.edu/academics/course-information/course-descriptions/eecs-203/"},
        {shortname: "EECS 280", name: "Programming and Introductory Data Structures", url: "https://eecs280staff.github.io/eecs280.org/"},
        {shortname: "EECS 281", name: "Data Structures and Algorithms", url: "https://eecs281staff.github.io/eecs281.org/"},
        {shortname: "EECS 370", name: "Introduction to Computer Organization", url: "https://eecs370.github.io/"},
        {shortname: "EECS 376", name: "Foundations of Computer Science", url: "https://eecs376.org/"},
        {shortname: "EECS 445", name: "Machine Learning", url: "https://eecs445-f16.github.io/"},
        {shortname: "EECS 485", name: "Web Systems", url: "https://eecs485staff.github.io/eecs485.org/"},
        {shortname: "EECS 492", name: "Artificial Intelligence", url: "https://laura-burdick.github.io/papers/SyllabusEECS492Winter2023.pdf"},
        {shortname: "EECS 493", name: "User Interface Development", url: "https://www.coursicle.com/umich/courses/EECS/493/"},
        {shortname: "EECS 497", name: "Major Design Projects", url: "https://www.coursicle.com/umich/courses/EECS/497/"},
    ];
    
    return (
        <section id="classes" className="container text-center my-5">
            <h2 className="mb-4">Classes Taken</h2>
            <hr />
            <p className="lead">Here are some of the classes I have taken at the University of Michigan (Click on class to learn more):</p>
            <div className="classes-grid">
                {classes.map(classItem => (
                    <div key={classItem.shortname} className="class-item">
                        <a href={classItem.url} target="_blank" className="link-primary">{classItem.shortname}</a>
                        <span className="full-name">{classItem.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Classes;
