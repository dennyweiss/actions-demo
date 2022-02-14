import issuePayloadConfig from './issue-payload-config.js'
const config = issuePayloadConfig
export default class IssuePayloadTransformer {

    toString(data) {
        const jsonData = JSON.stringify(data)
        const encodedData = Buffer.from(jsonData).toString('base64')
        const dataComponents = []

        dataComponents.push(config.prefix)
        dataComponents.push(encodedData)

        const payload = dataComponents.join(config.separator)

        return encodeURIComponent(payload)
    }

    toData(stringifiedData) {
        if (!stringifiedData) {
            return null
        }

        const decodedString = decodeURIComponent(stringifiedData)
        const dataComponents = decodedString.split(config.separator)

        if (dataComponents[0] !== config.prefixString) {
            throw new Error('Prefix not supported')
        }

        if (dataComponents[1] !== config.encodingType) {
            throw new Error('Encoding not supported')
        }

        if (!dataComponents[2]) {
            throw new Error('Data component is missing')
        }

        const jsonData = Buffer.from(dataComponents[2], 'base64').toString()

        return JSON.parse(jsonData)
    }
}