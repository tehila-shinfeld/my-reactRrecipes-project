const { GetRecipeDb, AddRecipyDB, EditRecipyDb, DeleteDb, GetRecipesDb } = require("../reposetory/recipe");

const GetAllRecipe = (_req, res) => {
    GetRecipesDb()
        .then(x => res.send(x))
        .catch(err => {
            if (err?.errors[0]) {
                return res.status(400).send(err?.errors[0]?.message)
            }
            return res.status(400).send(err)

        })
}

const GetRecipe = (req, res) => {
    const { Id } = req.params;
    GetRecipeDb(Id)
        .then(x => res.send(x))
        .catch(err => {
            if (err?.errors[0]) {
                return res.status(400).send(err?.errors[0]?.message)
            }
            return res.status(400).send(err)

        })
}

const AddRecipy = (req, res) => {
    const {
        Name, UserId, CategoryId, Img, Duration, Difficulty, Description,
        Ingridents, Instructions } = req.body;

    if (!Name || !UserId || !CategoryId || !Img || !Duration || !Difficulty || !Description || !Ingridents || !Instructions) {
        // לא נשלח מידע
        return res.status(400).send('המידע שנשלח לא תקין')
    };

    const newRecipe = {
        Name, UserId, CategoryId, Img, Duration, Difficulty, Description,
        Ingridents, Instructions
    };
    console.log("newRecipe", newRecipe);
    
    AddRecipyDB(newRecipe)
        .then(x => res.send(x))
        .catch(err => {
            if (err?.errors[0]) {
                return res.status(400).send(err?.errors[0]?.message)
            }
            return res.status(400).send(err)

        })

}

const EditRecipy = (req, res) => {
    const { Id,
        Name, UserId, CategoryId, Img, Duration, Difficulty, Description,
        Ingridents, Instructions } = req.body;

    console.log(Id,
        Name, UserId, CategoryId, Img, Duration, Difficulty, Description,
        Ingridents, Instructions);


    console.log(Id,
        Name, UserId, CategoryId, Img, Duration, Difficulty, Description,
        Ingridents, Instructions);


    if (!Id || !Name || !UserId || !CategoryId || !Img || !Duration || !Difficulty || !Description || !Ingridents || !Instructions) {
        // לא נשלח מידע
        return res.status(400).send('המידע שנשלח לא תקין')
    };
    // console.log("---------------updateRecipe-----------------");

    const updateRecipe = {
        Id, Name, CategoryId, Img, Duration, Difficulty,
        Description, Ingridents, Instructions
    };
    // console.log(updateRecipe);


    EditRecipyDb(updateRecipe)
        .then(x => res.send(x))
        .catch(err => {
            if (err?.errors[0]) {
                return res.status(400).send(err?.errors[0]?.message)
            }
            return res.status(400).send(err)

        })

}

const Delete = (req, res) => {
    const { Id } = req.params;
    DeleteDb(Id)
        .then(_ => res.send('ok'))
        .catch(err => {
            if (err?.errors[0]) {
                return res.status(400).send(err?.errors[0]?.message)
            }
            return res.status(400).send(err)

        })
}

module.exports = { Delete, EditRecipy, AddRecipy, GetAllRecipe, GetRecipe };