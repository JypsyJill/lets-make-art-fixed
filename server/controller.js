const gallery = require("./watercolor.json");
let kits = [];

module.exports = {
    displayAll: (req, res) => {
        const { search } = req.query;
        const resKits = [];
        console.log(gallery)
        if (search) {
            const myKits = gallery.filter(
                (watercolor) =>
                watercolor.tutorialTime()>(search())
            );
            for (let i = 0; i < 7; i++) {
                if (myKits[i] !== null) {
                    resKits.push(myKits[i]);
                }
            }
        } else {
            for (let i = 0; i < 7; i++) {
                resKits.push(gallery[i]);
            }
        }
        return res.status(200).send(resKits);
    },
    // getProjects: (req, res) => {
    //     res.status(200).send(kits);
    // },
    addToProj: (req, res) => {
        const { id } = req.params;
        const heresOne = gallery.find((watercolor) => watercolor.id === +id);

        heresOne.datePainted = "";

        kits.push(heresOne);

        res.status(200).send(kits);
    },
    editProj: (req, res) => {
        const { index } = req.params;
        const { datePainted } = req.body;

        kits[index].datePainted = datePainted;
        
        res.status(200).send(kits);
    },    

};