import path from 'node:path';
import { pipeline } from 'node:stream/promises';
import { globSync } from 'node:fs';
import fs from 'fs-extra';
import _ from 'lodash';

const artists = fs.readJSONSync('src/pages/references/style/artists.json');

let new_artists = [];
for (const artist of artists) {
    const parts = _.split(artist[0], ' ')
    new_artists.push({
        name: artist[0],
        firstname: _.first(parts),
        lastname: _.last(parts),
        code: artist[1],
    });
}

fs.writeJsonSync('src/pages/references/style/styles_artists.json', new_artists);
