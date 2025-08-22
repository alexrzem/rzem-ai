import _ from 'lodash';
import fs from 'fs-extra';

const artists = fs.readJSONSync('src/pages/references/style/styles_artists2.json');

const process = async function () {
    let tags = [];

    for (const artist of artists) {
        console.log(artist);

        for (const tag of artist.tags) {
            tags.push(_.startCase(tag));
        }
    }

    tags = new Set(tags);
    tags = [...tags];
    tags = tags.sort();


    fs.writeFileSync('src/pages/references/style/tags.json', JSON.stringify(tags, null, '  '));
};

// axios
//     .post('http://localhost:7654/v1/chat/completions', request)
//     .then(function (response) {
//         const tagsResponse = _.get(response, 'data.choices[0].message.content');
//         const tags = _.get(JSON.parse(tagsResponse), 'tags', []);
//         console.log(tags);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });

process();
