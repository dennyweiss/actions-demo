import IssuePayloadTransformer from './issue-payload-transformer.js'

const payloadIntro = '////////////////////////////////////////////////////////////'
const lineSeparator = '\r\n'

const issuePayloadFactory = (data) => {
    const stringifiedData = (new IssuePayloadTransformer().toString(data))
    return `${payloadIntro}${lineSeparator}${stringifiedData}`
}

export {payloadIntro, lineSeparator}

export default issuePayloadFactory