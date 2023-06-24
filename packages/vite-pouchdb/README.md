# ⚡ vite-pouchdb
> Adds a PouchDB server to Vite

# ℹ️ Overview

Vite server middleware plugin for a CouchDB REST service using [express-pouchdb](https://github.com/pouchdb/pouchdb-server/tree/master/packages/node_modules/express-pouchdb).
By default, the plugin mounts the PouchDB Server to `/db/*` on the development server. 

# 🎉 Get Started

## 📦 Prerequisites
- [node.js](https://nodejs.org/en/download) ^14.18.0 || >=16.0.0
- [vite project](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) ^4.3.2

## 🔨 Install

```shell
cd my-amazing-vite-project
npm install vite-pouchdb pouchdb events
```

## ⚙️ Usage

### 🔧 Configuration

#### vite.config.js

```javascript
import PouchDB from 'pouchdb'
import {pouchdb} from 'vite-pouchdb'
export default defineConfig({
  plugins: [pouchdb(
    PouchDB.defaults({prefix: './.data/'}),
  )],
});
```

#### index.html
> Patch `global` in the browser for legacy packages

```html
 <script>
    if(typeof global === 'undefined'){
      var global = global || window;
    }
  </script>

```

### 🚀 Running

#### Development Server
```bash
vite
```

### 🔀 PouchDB API

#### 🕸️ REST Endpoint
```bash
curl http://localhost:5173/db
```

```json
{
  "express-pouchdb": "Welcome!",
  "version": "4.2.0",
  "pouchdb-adapters": [
    "leveldb"
  ],
  "vendor": {
    "name": "PouchDB authors",
    "version": "4.2.0"
  },
  "uuid": "b8cdd23d-7e30-4223-97b7-7da53d3290e6"
}
```

#### 💄 Fauxton UI

- http://localhost:5173/db/_utils/
