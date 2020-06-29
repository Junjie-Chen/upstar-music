# Upstar Music

_Manipulate the artists collection by searching, setting, creating, finding, editing and deleting an artist using MongoDB and Mongoose_

## Steps

1. Fork and clone this repository: `git clone https://github.com/Your-Username/upstar-music.git`
2. Move into the root directory: `cd upstar-music`
3. Install all packages: `npm install`
4. Open MongoDB shell: `mongo`
5. Switch the database: `use upstar_music`
6. Add text index: `db.artists.createIndex({ name: "text" })`
7. Run the application: `npm start`
