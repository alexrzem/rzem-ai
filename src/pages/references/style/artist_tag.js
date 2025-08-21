import _ from 'lodash';
import axios from 'axios';
import fs from 'fs-extra';

const artists = fs.readJSONSync('src/pages/references/style/styles_artists.json');

const request = {
    model: 'qwen/qwen3-32b',
    messages: [
        {
            role: 'system',
            content: 'You are an art historian',
        },
        {
            role: 'user',
            content: '3 hashtags that describe the art style of Slim Aarons',
        },
    ],
    response_format: {
        type: 'json_schema',
        json_schema: {
            name: 'tag_response',
            strict: 'true',
            schema: {
                type: 'object',
                properties: {
                    tags: {
                        type: 'array',
                        items: {
                            type: 'string',
                        },
                    },
                },
                required: ['tags'],
            },
        },
    },
    temperature: 0.7,
    max_tokens: 50,
    stream: false,
};

const process = async function () {
    const updated_artists = [];

    for (const artist of artists) {
        console.log(artist);

        const req = _.cloneDeep(request);
        _.set(req, 'messages[1].content', `3 hashtags that describe the art style of ${artist.name}. The artists name must not for part of the tag.`);

        const response = await axios.post('http://localhost:7654/v1/chat/completions', req);
        const tagsResponse = _.get(response, 'data.choices[0].message.content');
        let tags = _.get(JSON.parse(tagsResponse), 'tags', []);
        console.log(tags);

        tags = _.map(tags, (item) => {
            return _.trimStart(item, '#');
        })

        _.set(artist, 'tags', tags);
        updated_artists.push(artist)
        
    }

    fs.writeFileSync('src/pages/references/style/styles_artists2.json', JSON.stringify(updated_artists, null, '  '));
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
