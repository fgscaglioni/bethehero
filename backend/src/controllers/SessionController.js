const connection = require('../database/connection')
const table = connection('ongs')

module.exports = {
  async store(request, response) {
    const { id } = request.body;
    const ong = await table
      .where('id', id)
      .select('name')
      .first()

    if (!ong) {
      return response.status(400).json({ error: 'No ONG found with this ID' })
    }

    response.json(ong)
  },
}