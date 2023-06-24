import { defineConfig } from 'vitest/config';
import {pouchdb} from './index'
import PouchDB from 'pouchdb'
export default defineConfig({
    plugins: [pouchdb(
        PouchDB.defaults({prefix: './.data/'}),
    )],
    // plugins: [pouchdb(TempPouchDB)],
    root: "example",
    test: {
        include: ['src/**/*.{test,spec}.{js,ts}']
    }
});
