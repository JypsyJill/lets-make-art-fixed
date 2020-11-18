const express = require("express"),
    app = express(),
    ctrl = require("./controller.js"),
    port = 4040;

app.use(express.json());

app.get("/api/kits", ctrl.getAll)
app.post("/api/watercolor/:id", ctrl.addToProj);
app.put("/api/watercolor/:index", ctrl.editProj);
// app.delete("/api/projects/:index", ctrl.deleteProj);

app.listen(port, () => console.log(`It's working! Who knew??? I'm listening on port ${port}`)); 