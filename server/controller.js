const kits = require("./watercolor.json");
let completedProjects = []

module.exports = {
    getAll: (req, res) => {
        console.log(kits)
        res.status(200).send({kits: kits, completedProjects: completedProjects})
    },
    // displayAll: (req, res) => {
    //     const { search } = req.query;
    //     const resKits = [];
    //     if (search) {
    //         const myKits = gallery.filter(
    //             (watercolor) =>
    //             watercolor.tutorialTime()>(search())
    //         );
    //         for (let i = 0; i < 8; i++) {
    //             if (myKits[i] !== null) {
    //                 resKits.push(myKits[i]);
    //             }
    //         }
    //     } else {
    //         for (let i = 0; i < 8; i++) {
    //             resKits.push(gallery[i]);
    //         }
    //     }
    //     return res.status(200).send(resKits);
    // },
    addToProj: (req, res) => {
        const { id } = req.params;
        const { date } = req.body
        const projectFound = kits.find(project => project.id === +id)
        const projectIndex = kits.findIndex(project => project.id === +id)

        projectFound.datePainted = date;
        completedProjects.push(projectFound);

        kits.splice(projectIndex, 1)
        res.status(200).send({kits: kits, completedProjects: completedProjects});
    },
    editProj: (req, res) => {
        const { id } = req.params
        const { datePainted, img } = req.body
        const projectIndex = completedProjects.findIndex(project => project.id === +id)
        
        completedProjects[projectIndex].datePainted = datePainted
        completedProjects[projectIndex].img = img
        
        res.status(200).send(completedProjects);
    },    

};