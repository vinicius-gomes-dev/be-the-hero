const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');

        return response.json(ongs);
    },
    
    async create(request, reponse) {
        const id = generateUniqueId();

        const { name, email, whatsapp, city, uf } = request.body;

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });

        return reponse.json({ id });
    }

    
};