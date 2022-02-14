import IssueCommentRepository from './issue-comment-repository.js'
import issuePayloadConfig from './issue-payload-config.js'
import issuePayloadResolver from './issue-payload-resolver.js'
import IssuePayloadTransformer from './issue-payload-transformer.js'

export const resolveLastCommentsData = async (
    context = {github: {}, config: {owner: null, repo: null}},
    issueNumber,
) => {
    const issueCommentRepository = new IssueCommentRepository(context.github, context.config)

    const lastComment = await issueCommentRepository.last(
        issueNumber,
        issuePayloadConfig.prefixEncoded,
    )

    const resolvedIssuePayload = issuePayloadResolver(
        lastComment,
        issuePayloadConfig.prefixEncoded,
    )

    return (new IssuePayloadTransformer).toData(resolvedIssuePayload)
}