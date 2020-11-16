const express = require("express"),
    app = express(),
    ctrl = require("./controller.js"),
    port = 4040;

app.use(express.json());

app.get("/api/watercolor", ctrl.displayAll);
// app.get("/api/watercolor/:id", ctrl.getProjects);
app.post("/api/projects/:id", ctrl.addToProj);
app.put("/api/projects/:index", ctrl.editProj);
// app.delete("/api/projects/:index", ctrl.deleteProj);

app.listen(port, () => console.log(`It's working! Who knew??? I'm listening on port ${port}`));