const locationSchema = require('../model/LocationSchema');
const axios = require('axios');


const getUserLocation = async (req, res) => {

    try {
        const ipAddress = req.ip;
        const response = await axios.get(`http://ipinfo.io/${ipAddress}/json`);
        console.log("response...",response);
        console.log(response.data);
        const location = response.data;
        const [lat, long] = location.loc.split(',');
        console.log(lat,long);
        res.json(location);
        const location1 = new locationSchema({
            name:location.city,
            lat:lat,
            long:long
        })
        const result = await location1.save();
        console.log(result);

      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Something went wrong' });
      }

}
const postLocation = async (req, res) => {
    try {
        const {name,lat,long} = req.body;
        console.log(name,lat,long);
        const location = new locationSchema({
            name:name,
            lat:lat,
            long:long
        })
        const result = await location.save();
        console.log(result);
        res.json(result);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Something went wrong' });
    }
}
module.exports = {getUserLocation,postLocation}