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
}