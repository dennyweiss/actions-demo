import {lineSeparator} from './issue-payload-factory.js'

const issuePayloadResolver = (issueComment = null, prefix) => {
    if (!issueComment) {
        return null
    }

    if (!issueComment?.body) {
        return null
    }

    const issueCommentBodyLines = issueComment.body.split(lineSeparator)

    return issueCommentBodyLines.find(
        line => line.indexOf(prefix) >= 0,
    ) ?? null
}

export default issuePayloadResolver