class issuePayloadConfig {
    #prefixString = 'DATA'
    #encodingType = '01'
    #separator = ':'

    get prefix() {
        return [this.#prefixString, this.#encodingType].join(this.#separator)
    }

    get prefixString() {
        return this.#prefixString
    }

    get encodingType() {
        return this.#encodingType
    }

    get separator() {
        return this.#separator
    }

    get prefixEncoded() {
        return encodeURIComponent(this.prefix)
    }
}

export default (new issuePayloadConfig)