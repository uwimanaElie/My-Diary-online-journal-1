import { userEmail } from '../helpers/tokenGenerators'
class Entrymodel {
    constructor() {
        this.entries = [];
    }
    createEntry = (res, playload, token) => {
        const currentId = this.entries.length + 1;
        const { title, description } = playload;

        const userData = userEmail(token);
        const date = new Date();
        let newEntry = {
            EntryId: parseInt(currentId, 10),
            useremail: userData,
            createdOn: date,
            title: title,
            description: description
        }
        this.entries.push(newEntry);
        let result = {
            status: 200,
            message: 'Entry created successfully',
            data: newEntry
        }
        return result;

    }
    modifyEntry = (res, payload, id, token) => {
        const { title, description } = payload
        const anyEntry = this.entries.find(entry => entry.EntryId === parseInt(id, 10));
        if (!anyEntry) {
            return res.status(404).send({
                status: 404,
                error: 'This entry is not found',
            })
        }
        if (anyEntry.useremail !== userEmail(token)) {
            return res.status(403).send({
                status: 403,
                error: ' this entry is not yours'
            })
        }
        anyEntry.title = title;
        anyEntry.description = description;
        return anyEntry;
    }
}