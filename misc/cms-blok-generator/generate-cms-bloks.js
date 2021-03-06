const fs = require('fs')
const path = require('path');
const { compile } = require('json-schema-to-typescript')
const { toSafeString } = require('json-schema-to-typescript/dist/src/utils')

const StoryblokClient = require('storyblok-js-client')

const SCHEMAS_DIR = 'src/app/storyblok/models/generated';

const FILE_BANNER = `/*
  !!! THIS FILE IS AUTOMATICALLY GENERATED! DO NOT MODIFY IT BY HAND !!!
  To update this file run the following command: "npm run cms:bloks"\n*/\n`;

const INCLUDES = `
import { BaseBlok } from '../base-blok';
`;

async function getComponentsFromApi() {
    const spaceId = process.env.STORYBLOK_SPACE_ID;
    const oauthToken = process.env.STORYBLOK_OAUTH_TOKEN;
    const storyblok = new StoryblokClient({ oauthToken: oauthToken });
    const result = await storyblok.get(`spaces/${spaceId}/components/`);
    return result.data.components;
}

async function generateCmsBloks(components) {
    const schemas = [];

    const allStorySchemaNames = components.map(component => toSafeString(`${component.name}-blok`));

    for (const component of components) {
        const schema = component.schema;

        const properties = {};
        const required = [];

        for (const fieldName in schema) {
            if (!schema.hasOwnProperty(fieldName)) {
                continue;
            }
            const field = schema[fieldName];

            const fieldDefinition = await walkField(field, allStorySchemaNames);

            if (fieldDefinition !== null) {
                properties[fieldName] = fieldDefinition;
            }

            //if (field.required) {
            required.push(fieldName);
            //}
        }

        schemas.push({
            title: `${component.name}-blok`,
            type: 'object',
            definitions: {
                'BaseBlok': {
                    type: 'object',
                },
            },
            extends: {
                '$ref': '#/definitions/BaseBlok',
            },
            description: component.display_name,
            properties: properties,
            additionalProperties: false,
            required: required,
        });

    }

    return schemas;
}

async function walkField(field, allStorySchemaNames) {
    const fieldDefinition = {
        type: mapToTsType(field.type),
    };

    if (field.type === 'bloks') {

        Object.assign(fieldDefinition, {
            items: {
                tsType: field.restrict_components ?
                    `(${field.component_whitelist.map(c => toSafeString(`${c}-blok`)).join('|')})` :
                    `(${allStorySchemaNames.join('|')})`,
            },
        });

    } else if (field.type === 'asset') {
        Object.assign(fieldDefinition, {
            properties: {
                id: {
                    type: 'number',
                },
                alt: {
                    type: 'string',
                },
                name: {
                    type: 'string',
                },
                title: {
                    type: 'string',
                },
                filename: {
                    type: 'string',
                },
                copyright: {
                    type: 'string',
                },
            },
            additionalProperties: false,
            required: ['id', 'alt', 'name', 'title', 'filename', 'copyright'],
        });
    } else if (field.type === 'multilink') {
        Object.assign(fieldDefinition, {
            properties: {
                id: {
                    type: 'string',
                },
                url: {
                    type: 'string',
                },
                linktype: {
                    tsType: `'story' | 'url'`,
                },
                cached_url: {
                    type: 'string',
                },
            },
            additionalProperties: false,
            required: ['id', 'url', 'linktype', 'cached_url'],
        });
    } else if (field.type === 'option') {
        if (field.options) {
            Object.assign(fieldDefinition, {
                enum: field.options.map(option => option.value),
                additionalProperties: false,
            });
        }
        if (field.source === 'internal_stories' && field.filter_content_type) {
            Object.assign(fieldDefinition, {
                tsType: toSafeString(`${field.filter_content_type}-blok`),
            });
        }
    } else if (field.type === 'options') {
        if (field.source === 'internal_stories' && field.filter_content_type) {
            Object.assign(fieldDefinition, {
                items: {
                    tsType: toSafeString(`${field.filter_content_type}-blok`),
                },
            });
        }
    } else if (field.type === 'richtext') {
        fieldDefinition.tsType = 'RichtextDocument';
    } else if (field.type === 'section') {
        // ignore section fields
        return null;
    }

    return fieldDefinition;
}

function mapToTsType(type) {
    switch (type) {
        case 'text':
        case 'option':
        case 'image':
        case 'textarea':
        case 'markdown':
            return 'string';
        case 'bloks':
        case 'options':
            return 'array';
        case 'asset':
            return 'object';
        case 'number':
            return 'number';
        case 'boolean':
            return 'boolean';
        default:
            return null;
    }
}

async function compileSchemas(schemas) {
    const tsFiles = [];

    for (const schema of schemas) {

        const tsFile = await compile(schema, schema.title, {
            bannerComment: '',
            style: {
                singleQuote: true,
            },
            declareExternallyReferenced: false,
        });

        tsFiles.push(tsFile);

    }

    return tsFiles;
}

async function writeSchemasFile(tsFiles) {
    const schemasFile = path.join(SCHEMAS_DIR, 'cms-bloks.d.ts');

    const data = `${FILE_BANNER}${INCLUDES}\n${tsFiles.join('\n')}`;

    fs.writeFileSync(schemasFile, data);

    return schemasFile;
}

async function main() {
    const components = await getComponentsFromApi();
    const schemas = await generateCmsBloks(components);
    const tsFiles = await compileSchemas(schemas);
    const schemasFile = await writeSchemasFile(tsFiles);
    console.log(`wrote ${schemas.length} schemas to ${schemasFile}`);
}

main().then();
