const casual = require('casual').en_US
module.exports = () => {
    casual.define('user', function () {
        return {
            name: casual.first_name,
            surname: casual.last_name,
            address: casual.street,
            phone: casual.phone,
            email: casual.email,
            dob: casual.date(format = 'YYYY-MM-DD'),
            postalCode: casual.zip(5 | 9),
            city: casual.city,
            number: casual.building_number,
            id: casual.uuid,
        }
    })
    const data = {
        users: [],
    }
    // Create 100 users
    for (let i = 0; i < 5; i++) {
        data.users.push(casual.user)
    }
    return data
}