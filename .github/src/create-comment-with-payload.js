import issuePayloadFactory from './issue-payload-factory.js'
import {lineSeparator} from './issue-payload-factory.js'
import IssueCommentRepository from './issue-comment-repository.js'

const createCommentWithPayload = async (
    context = {github: {}, config: {owner: null, repo: null}},
    issueNumber,
    commentMessage,
    data,
) => {
    const issueCommentRepository = new IssueCommentRepository(context.github, context.config)

    const commentBody = []
    commentBody.push(commentMessage)
    commentBody.push(lineSeparator)
    commentBody.push(issuePayloadFactory(data))

    await issueCommentRepository.create(
        issueNumber,
        commentBody.join(lineSeparator),
    )

}

export default createCommentWithPayload