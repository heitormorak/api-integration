import express from "express";
import { SPOTIFY_CLIENT_ID } from "../tokens.js" 

var client_id = SPOTIFY_CLIENT_ID;
var redirect_uri = 'http://localhost:5500/';

//var app = express();

// export async function teste(){
//     app.get('/login', function(req, res) {
//         var state = generateRandomString(16);
//         var scope = 'user-read-private user-read-email';
      
//         console.log(res)
//         res.redirect('https://accounts.spotify.com/authorize?' +
//           querystring.stringify({
//             response_type: 'code',
//             client_id: client_id,
//             scope: scope,
//             redirect_uri: redirect_uri,
//             state: state
//           }));
//       });
// }

// app.get('/callback', function(req, res) {
//     var code = req.query.code || null;
//     var state = req.query.state || null;
  
//     if (state === null) {
//       res.redirect('/#' +
//         querystring.stringify({
//           error: 'state_mismatch'
//         }));
//     } else {
//       var authOptions = {
//         url: 'https://accounts.spotify.com/api/token',
//         form: {
//           code: code,
//           redirect_uri: redirect_uri,
//           grant_type: 'authorization_code'
//         },
//         headers: {
//           'content-type': 'application/x-www-form-urlencoded',
//           'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
//         },
//         json: true
//       };
//     }
// });