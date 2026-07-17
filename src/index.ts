import { Plugin, PluginManager } from "../../../types.js" // importing from node plugins v2 root

const plugin: Plugin = {
    name: "example-plugin",
    version: "1.0",
    start(manager: PluginManager) {
        console.log("started successfully!");
    },
    stop() {
        console.log("stopped successfully!");
    }
}

export default plugin