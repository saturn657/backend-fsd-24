import http from "http";
import fs from "fs/promises";

const fileName = "students.json";

const server = http.createServer(async (req, res) => {

    if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
            <h1>Student Record</h1>
            <form method="POST" action="/add">
                Name: <input name="name" type="text"><br><br>
                Roll Number: <input name="roll" type="number"><br><br>
                Course: <input name="course" type="text"><br><br>
                Email: <input name="email" type="email"><br><br>
                <button>Add Student</button>
            </form>
            <br>
            <a href="/students">View Students</a>
        `);
  }


  else if (req.url === "/add" && req.method === "POST") {
    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", async () => {
      const form = new URLSearchParams(data);

      const student = {
        name: form.get("name"),
        roll: form.get("roll"),
        course: form.get("course"),
        email: form.get("email"),
      };

      let students = [];

      try {
        students = JSON.parse(await fs.readFile(fileName, "utf8"));
      } catch {
        students = [];
      }

      students.push(student);

      await fs.writeFile(fileName, JSON.stringify(students, null, 2));

      res.end("Student added successfully<br><a href='/'>Go Back</a>");
    });
  }

  else if (req.url === "/students" && req.method === "GET") {
    let students = [];

    try {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`
    <h3>Student added successfully</h3>
    <a href="/">Go Back</a>
`);
    } catch {
      students = [];
    }

    res.writeHead(200, { "Content-Type": "text/html" });

    let output = "<h1>Student Records</h1>";

    students.forEach((student) => {
      output += `
                Name: ${student.name}<br>
                Roll Number: ${student.roll}<br>
                Course: ${student.course}<br>
                Email: ${student.email}<hr>
            `;
    });

    res.end(output);
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
