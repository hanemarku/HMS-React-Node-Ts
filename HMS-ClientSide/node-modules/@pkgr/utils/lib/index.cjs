'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var node_child_process = require('node:child_process');
var path = require('node:path');
var node_url = require('node:url');
var spawn = require('cross-spawn');
var open = require('open');
var picocolors = require('picocolors');
var node_module = require('node:module');
var fs = require('node:fs');
var isGlob = require('is-glob');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var path__default = /*#__PURE__*/_interopDefaultLegacy(path);
var spawn__default = /*#__PURE__*/_interopDefaultLegacy(spawn);
var open__default = /*#__PURE__*/_interopDefaultLegacy(open);
var picocolors__default = /*#__PURE__*/_interopDefaultLegacy(picocolors);
var fs__default = /*#__PURE__*/_interopDefaultLegacy(fs);
var isGlob__default = /*#__PURE__*/_interopDefaultLegacy(isGlob);

const import_meta$1 = {};
const OSX_CHROME = "google chrome";
function getBrowserEnv() {
  const value = process.env.BROWSER;
  const args = process.env.BROWSER_ARGS ? process.env.BROWSER_ARGS.split(" ") : [];
  let action;
  if (!value) {
    action = 1 /* BROWSER */;
  } else if (value.toLowerCase().endsWith(".js")) {
    action = 2 /* SCRIPT */;
  } else if (value.toLowerCase() === "none") {
    action = 0 /* NONE */;
  } else {
    action = 1 /* BROWSER */;
  }
  return { action, value, args };
}
function executeNodeScript(scriptPath, url) {
  const extraArgs = process.argv.slice(2);
  const child = spawn__default["default"](process.execPath, [scriptPath, ...extraArgs, url], {
    stdio: "inherit"
  });
  child.on("close", (code) => {
    if (code !== 0) {
      console.log();
      console.log(
        picocolors__default["default"].red(
          "The script specified as BROWSER environment variable failed."
        )
      );
      console.log(`${picocolors__default["default"].cyan(scriptPath)} exited with code ${code}`);
      console.log();
    }
  });
  return true;
}
function startBrowserProcess(browser, url, args) {
  const shouldTryOpenChromiumWithAppleScript = process.platform === "darwin" && (typeof browser !== "string" || browser === OSX_CHROME);
  if (shouldTryOpenChromiumWithAppleScript) {
    const supportedChromiumBrowsers = [
      "Google Chrome Canary",
      "Google Chrome",
      "Microsoft Edge",
      "Brave Browser",
      "Vivaldi",
      "Chromium"
    ];
    const _dirname = typeof __dirname === "undefined" ? path__default["default"].dirname(node_url.fileURLToPath(import_meta$1.url)) : __dirname;
    for (const chromiumBrowser of supportedChromiumBrowsers) {
      try {
        node_child_process.execSync('ps cax | grep "' + chromiumBrowser + '"');
        node_child_process.execSync(
          'osascript ../openChrome.applescript "' + encodeURI(url) + '" "' + chromiumBrowser + '"',
          {
            cwd: _dirname,
            stdio: "ignore"
          }
        );
        return true;
      } catch (e) {
      }
    }
  }
  if (process.platform === "darwin" && browser === "open") {
    browser = void 0;
  }
  try {
    open__default["default"](url, {
      app: browser ? {
        name: browser,
        arguments: args
      } : void 0,
      wait: false
    }).catch(() => {
    });
    return true;
  } catch (e) {
    return false;
  }
}
function openBrowser(url) {
  const { action, value, args } = getBrowserEnv();
  switch (action) {
    case 0 /* NONE */:
      return false;
    case 2 /* SCRIPT */:
      return executeNodeScript(value, url);
    case 1 /* BROWSER */:
      return startBrowserProcess(value, url, args);
    default:
      throw new Error("Not implemented.");
  }
}

const import_meta = {};
var _a$1;
const DEV = "development";
const PROD = "production";
const NODE_ENV = (_a$1 = process.env.NODE_ENV) != null ? _a$1 : DEV;
const __DEV__ = NODE_ENV === DEV;
const __PROD__ = NODE_ENV === PROD;
const NODE_MODULES_REG = /[/\\]node_modules[/\\]/;
const CWD = process.cwd();
const cjsRequire = typeof require === "undefined" ? node_module.createRequire(import_meta.url) : require;
const EXTENSIONS = [".ts", ".tsx", ...Object.keys(cjsRequire.extensions)];
const SCRIPT_RUNNERS = {
  npm: "npx",
  pnpm: "pnpm",
  yarn: "yarn"
};
const SCRIPT_EXECUTORS = {
  npm: "npx",
  pnpm: "pnpx",
  yarn: "yarn dlx"
};

const tryPkg = (pkg) => {
  try {
    return cjsRequire.resolve(pkg);
  } catch (e) {
  }
};
const tryRequirePkg = (pkg) => {
  try {
    return cjsRequire(pkg);
  } catch (e) {
  }
};
const isPkgAvailable = (pkg) => !!tryPkg(pkg);
const isTsAvailable = isPkgAvailable("typescript");
const isAngularAvailable = isPkgAvailable("@angular/core/package.json");
const isMdxAvailable = isPkgAvailable("@mdx-js/mdx/package.json") || isPkgAvailable("@mdx-js/react/package.json");
const isReactAvailable = isPkgAvailable("react");
const isSvelteAvailable = isPkgAvailable("svelte");
const isVueAvailable = isPkgAvailable("vue");
const tryFile = (filePath, includeDir = false) => {
  if (typeof filePath === "string") {
    return fs__default["default"].existsSync(filePath) && (includeDir || fs__default["default"].statSync(filePath).isFile()) ? filePath : "";
  }
  for (const file of filePath != null ? filePath : []) {
    if (tryFile(file, includeDir)) {
      return file;
    }
  }
  return "";
};
const tryExtensions = (filepath, extensions = EXTENSIONS) => {
  const ext = [...extensions, ""].find((ext2) => tryFile(filepath + ext2));
  return ext == null ? "" : filepath + ext;
};
const tryGlob = (paths, options = {}) => {
  const { absolute = true, baseDir = CWD } = typeof options === "string" ? { baseDir: options } : options;
  return paths.reduce(
    (acc, pkg) => [
      ...acc,
      ...isGlob__default["default"](pkg) ? tryRequirePkg("tiny-glob/sync")(
        pkg,
        {
          absolute,
          cwd: baseDir
        }
      ) : [tryFile(path__default["default"].resolve(baseDir, pkg), true)]
    ].filter(Boolean),
    []
  );
};
const identify = (_) => !!_;
const findUp = (searchEntry, searchFile = "package.json") => {
  console.assert(path__default["default"].isAbsolute(searchEntry));
  if (!tryFile(searchEntry, true) || searchEntry !== CWD && !searchEntry.startsWith(CWD + path__default["default"].sep)) {
    return "";
  }
  searchEntry = path__default["default"].resolve(
    fs__default["default"].statSync(searchEntry).isDirectory() ? searchEntry : path__default["default"].resolve(searchEntry, "..")
  );
  do {
    const searched = tryFile(path__default["default"].resolve(searchEntry, searchFile));
    if (searched) {
      return searched;
    }
    searchEntry = path__default["default"].resolve(searchEntry, "..");
  } while (searchEntry === CWD || searchEntry.startsWith(CWD + path__default["default"].sep));
  return "";
};
const arrayify = (...args) => args.reduce((arr, curr) => {
  arr.push(...Array.isArray(curr) ? curr : curr == null ? [] : [curr]);
  return arr;
}, []);
const getPackageManager = () => {
  const execPath = process.env.npm_execpath;
  if (!execPath) {
    return;
  }
  if (/\byarn\b/.test(execPath)) {
    return "yarn";
  }
  if (/\bpnpm\b/.test(execPath)) {
    return "pnpm";
  }
  if (/\bnpm\b/.test(execPath)) {
    return "npm";
  }
  console.warn("unknown package manager:", execPath);
};
const getScriptRunner = () => {
  const pm = getPackageManager();
  if (!pm) {
    return;
  }
  return SCRIPT_RUNNERS[pm];
};
const getScriptExecutor = () => {
  const pm = getPackageManager();
  if (!pm) {
    return;
  }
  return SCRIPT_EXECUTORS[pm];
};

var _a, _b, _c, _d;
const pkg = (_a = tryRequirePkg(path__default["default"].resolve("package.json"))) != null ? _a : {};
const lernaConfig = (_b = tryRequirePkg(path__default["default"].resolve("lerna.json"))) != null ? _b : {};
const pkgsPath = (_d = (_c = lernaConfig.packages) != null ? _c : pkg.workspaces) != null ? _d : [];
const isMonorepo = Array.isArray(pkgsPath) && pkgsPath.length > 0;
const monorepoPkgs = isMonorepo ? tryGlob(pkgsPath) : [];

exports.CWD = CWD;
exports.DEV = DEV;
exports.EXTENSIONS = EXTENSIONS;
exports.NODE_ENV = NODE_ENV;
exports.NODE_MODULES_REG = NODE_MODULES_REG;
exports.PROD = PROD;
exports.SCRIPT_EXECUTORS = SCRIPT_EXECUTORS;
exports.SCRIPT_RUNNERS = SCRIPT_RUNNERS;
exports.__DEV__ = __DEV__;
exports.__PROD__ = __PROD__;
exports.arrayify = arrayify;
exports.cjsRequire = cjsRequire;
exports.findUp = findUp;
exports.getPackageManager = getPackageManager;
exports.getScriptExecutor = getScriptExecutor;
exports.getScriptRunner = getScriptRunner;
exports.identify = identify;
exports.isAngularAvailable = isAngularAvailable;
exports.isMdxAvailable = isMdxAvailable;
exports.isMonorepo = isMonorepo;
exports.isPkgAvailable = isPkgAvailable;
exports.isReactAvailable = isReactAvailable;
exports.isSvelteAvailable = isSvelteAvailable;
exports.isTsAvailable = isTsAvailable;
exports.isVueAvailable = isVueAvailable;
exports.monorepoPkgs = monorepoPkgs;
exports.openBrowser = openBrowser;
exports.tryExtensions = tryExtensions;
exports.tryFile = tryFile;
exports.tryGlob = tryGlob;
exports.tryPkg = tryPkg;
exports.tryRequirePkg = tryRequirePkg;
