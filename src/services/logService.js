import Raven from 'raven-js';

function init() {
    Raven.config("https://7ce8f8f77c3e4a2386036c53ddff7847@o520697.ingest.sentry.io/5631410", {
        release: '1-0-0',
        environment: "development-test"
    }).install()
}

function log(error) {
    Raven.captureException(error)
}

export default {
    init,
    log
}