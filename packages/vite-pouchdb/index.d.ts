/**
 * @typedef {Object} ExpressConfiguration Optional. These options are supported:
 * @property {string} [configPath='./config.json'] a path to the configuration file to use. Defaults to './config.json'.
 * @property {string} [logPath='./log.txt'] a path to the log file to use. Defaults to './log.txt'.
 * @property {boolean} [inMemoryConfig=false] true if all configuration should be in-memory. Defaults to false.
 * @property {string} [mode='fullCouchDB'] determines which parts of the HTTP API express-pouchdb offers are enabled. There are three values:
 *   'fullCouchDB': enables every part of the HTTP API, which makes express-pouchdb very close to a full CouchDB replacement. This is the default.
 *   'minimumForPouchDB': just exposes parts of the HTTP API that map 1-1 to the PouchDB api. This is the minimum required to make the PouchDB test suite run, and a nice start when you just need an HTTP API to replicate with.
 *   'custom': no parts of the HTTP API are enabled. You can add parts yourself using the opts.overrideMode discussed below.
 * @property {Object} [overrideMode] Sometimes the preprogrammed modes are insufficient for your needs, or you chose the 'custom' mode. In that case, you can set this to an object. This object can have the following properties:
 * @property {Array<string>} [overrideMode.include] a javascript array that specifies parts to include on top of the ones specified by opts.mode. Optional.
 * @property {Array<string>} [overrideMode.exclude] a javascript array that specifies parts to exclude from the ones specified by opts.mode. Optional.
 */
/**
 * Vite PouchDB Plugin
 *
 * @param {Object} PouchDB PouchDB interface
 * @param {string} [route='/db'] Url path for the database
 * @param {ExpressConfiguration} [options] Express PouchDB options
 * @returns {{configureServer(*): void, name: string}} Returns a Vite Plugin
 */
export function pouchdb(PouchDB: any, route?: string, options?: ExpressConfiguration): {
    configureServer(): void;
    name: string;
};
/**
 * Optional. These options are supported:
 */
export type ExpressConfiguration = {
    /**
     * a path to the configuration file to use. Defaults to './config.json'.
     */
    configPath?: string;
    /**
     * a path to the log file to use. Defaults to './log.txt'.
     */
    logPath?: string;
    /**
     * true if all configuration should be in-memory. Defaults to false.
     */
    inMemoryConfig?: boolean;
    /**
     * determines which parts of the HTTP API express-pouchdb offers are enabled. There are three values:
     * 'fullCouchDB': enables every part of the HTTP API, which makes express-pouchdb very close to a full CouchDB replacement. This is the default.
     * 'minimumForPouchDB': just exposes parts of the HTTP API that map 1-1 to the PouchDB api. This is the minimum required to make the PouchDB test suite run, and a nice start when you just need an HTTP API to replicate with.
     * 'custom': no parts of the HTTP API are enabled. You can add parts yourself using the opts.overrideMode discussed below.
     */
    mode?: string;
    /**
     * Sometimes the preprogrammed modes are insufficient for your needs, or you chose the 'custom' mode. In that case, you can set this to an object. This object can have the following properties:
     */
    overrideMode?: {
        include?: Array<string>;
        exclude?: Array<string>;
    };
};
