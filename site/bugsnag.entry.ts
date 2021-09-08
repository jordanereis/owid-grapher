import Bugsnag from "@bugsnag/js"
import BugsnagPluginReact from "@bugsnag/plugin-react"

import { BUGSNAG_API_KEY } from "../settings/clientSettings"

if (BUGSNAG_API_KEY) {
    try {
        Bugsnag.start({
            apiKey: BUGSNAG_API_KEY,
            plugins: [new BugsnagPluginReact()],
        })
    } catch (error) {
        console.error("Failed to initialize Bugsnag")
    }
}
