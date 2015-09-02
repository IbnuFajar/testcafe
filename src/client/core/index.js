import $ from './deps/jquery';
import * as SETTINGS from './settings';
import CROSS_DOMAIN_MESSAGES from './cross-domain-messages';
import SERVICE_COMMANDS from './service-msg-cmd';
import * as ERRORS from './errors';
import CONST from './const';
import * as transport from './transport';
import * as jQuerySelectorExtensions from './jquery-extensions/custom-selectors';
import * as jQueryDataMethodProxy from './jquery-extensions/data-proxy';
import * as jsExecutor from './javascript-executor';

import * as serviceUtils from './util/service';
import * as domUtils from './util/dom';
import * as contentEditable from './util/content-editable';
import * as positionUtils from './util/position';
import * as styleUtils from './util/style';
import * as keyCharUtils from './util/key-char';
import * as eventUtils from './util/event';
import * as textSelection from './util/text-selection';

exports.$                        = $;
exports.SETTINGS                 = SETTINGS;
exports.CROSS_DOMAIN_MESSAGES    = CROSS_DOMAIN_MESSAGES;
exports.SERVICE_COMMANDS         = SERVICE_COMMANDS;
exports.ERRORS                   = ERRORS;
exports.CONST                    = CONST;
exports.jQuerySelectorExtensions = jQuerySelectorExtensions;
exports.jQueryDataMethodProxy    = jQueryDataMethodProxy;
exports.jsExecutor               = jsExecutor;
exports.transport                = transport;

exports.serviceUtils    = serviceUtils;
exports.domUtils        = domUtils;
exports.contentEditable = contentEditable;
exports.positionUtils   = positionUtils;
exports.styleUtils      = styleUtils;
exports.keyCharUtils    = keyCharUtils;
exports.eventUtils      = eventUtils;
exports.textSelection   = textSelection;

exports.get = require;

Object.defineProperty(window, '%testCafeCore%', {
    enumerable:   false,
    configurable: false,
    writable:     false,
    value:        exports
});
