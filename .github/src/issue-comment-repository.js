export default class IssueCommentRepository {
    #github
    #config

    constructor(github, config) {
        this.#github = github
        this.#config = config
    }

    async all(issueNumber, prefixFilter) {
        const comments = await this.#github.rest.issues.listComments({
            owner: this.#config.owner,
            repo: this.#config.repo,
            issue_number: parseInt(issueNumber),
            per_page: 1000,
        })

        let commentsList = comments.data
        
        if (prefixFilter) {
            commentsList = commentsList.filter(
                (comment) => comment.body.indexOf(prefixFilter) >= 0,
            )
        }

        if (!commentsList || !Array.isArray(commentsList)) {
            throw new Error('No comments found')
        }

        return commentsList
    }

    async last(issueNumber, prefixFilter) {
        const allComments = await this.all(issueNumber, prefixFilter)
        if (allComments.length <= 0) {
            return null
        }

        return allComments[allComments.length - 1]
    }

    async create(issueNumber, data) {

        await this.#github.rest.issues.createComment({
            owner: this.#config.owner,
            repo: this.#config.repo,
            issue_number: parseInt(issueNumber),
            body: data,
        })

    }

}
