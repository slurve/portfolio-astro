import { performance } from 'node:perf_hooks';
import { ByteLengthQueuingStrategy, CountQueuingStrategy, ReadableByteStreamController, ReadableStream as ReadableStream$1, ReadableStreamBYOBReader, ReadableStreamBYOBRequest, ReadableStreamDefaultController, ReadableStreamDefaultReader, TransformStream, WritableStream, WritableStreamDefaultController, WritableStreamDefaultWriter } from 'node:stream/web';
import { File, FormData, Headers as Headers$1, Request as Request$1, Response as Response$1, fetch as fetch$1 } from 'undici';
import { setTimeout as setTimeout$1, clearTimeout as clearTimeout$1 } from 'node:timers';
import { builder } from '@netlify/functions';
import mime from 'mime';
import { serialize as serialize$1, parse } from 'cookie';
import { escape } from 'html-escaper';
import { bold, yellow, dim, cyan, red, reset } from 'kleur/colors';
import 'string-width';
import npath from 'path-browserify';
/* empty css                                    *//* empty css                                 *//* empty css                                    *//* empty css                                *//* empty css                                    */import { compile } from 'path-to-regexp';

/** Returns the function bound to the given object. */
const __function_bind = Function.bind.bind(Function.call);
/** Returns whether the object prototype exists in another object. */
const __object_isPrototypeOf = Function.call.bind(Object.prototype.isPrototypeOf);
/** Current high resolution millisecond timestamp. */
const __performance_now = performance.now;
// @ts-expect-error
const INTERNALS = new WeakMap();
const internalsOf = (target, className, propName) => {
    const internals = INTERNALS.get(target);
    if (!internals)
        throw new TypeError(`${className}.${propName} can only be used on instances of ${className}`);
    return internals;
};
const allowStringTag = (value) => (value.prototype[Symbol.toStringTag] = value.name);

class DOMException extends Error {
    constructor(message = '', name = 'Error') {
        super(message);
        this.code = 0;
        this.name = name;
    }
}
DOMException.INDEX_SIZE_ERR = 1;
DOMException.DOMSTRING_SIZE_ERR = 2;
DOMException.HIERARCHY_REQUEST_ERR = 3;
DOMException.WRONG_DOCUMENT_ERR = 4;
DOMException.INVALID_CHARACTER_ERR = 5;
DOMException.NO_DATA_ALLOWED_ERR = 6;
DOMException.NO_MODIFICATION_ALLOWED_ERR = 7;
DOMException.NOT_FOUND_ERR = 8;
DOMException.NOT_SUPPORTED_ERR = 9;
DOMException.INUSE_ATTRIBUTE_ERR = 10;
DOMException.INVALID_STATE_ERR = 11;
DOMException.SYNTAX_ERR = 12;
DOMException.INVALID_MODIFICATION_ERR = 13;
DOMException.NAMESPACE_ERR = 14;
DOMException.INVALID_ACCESS_ERR = 15;
DOMException.VALIDATION_ERR = 16;
DOMException.TYPE_MISMATCH_ERR = 17;
DOMException.SECURITY_ERR = 18;
DOMException.NETWORK_ERR = 19;
DOMException.ABORT_ERR = 20;
DOMException.URL_MISMATCH_ERR = 21;
DOMException.QUOTA_EXCEEDED_ERR = 22;
DOMException.TIMEOUT_ERR = 23;
DOMException.INVALID_NODE_TYPE_ERR = 24;
DOMException.DATA_CLONE_ERR = 25;
allowStringTag(DOMException);

/**
 * Assert a condition.
 * @param condition The condition that it should satisfy.
 * @param message The error message.
 * @param args The arguments for replacing placeholders in the message.
 */
function assertType(condition, message, ...args) {
    if (!condition) {
        throw new TypeError(format(message, args));
    }
}
/**
 * Convert a text and arguments to one string.
 * @param message The formating text
 * @param args The arguments.
 */
function format(message, args) {
    let i = 0;
    return message.replace(/%[os]/gu, () => anyToString(args[i++]));
}
/**
 * Convert a value to a string representation.
 * @param x The value to get the string representation.
 */
function anyToString(x) {
    if (typeof x !== "object" || x === null) {
        return String(x);
    }
    return Object.prototype.toString.call(x);
}

let currentErrorHandler;
/**
 * Print a error message.
 * @param maybeError The error object.
 */
function reportError(maybeError) {
    try {
        const error = maybeError instanceof Error
            ? maybeError
            : new Error(anyToString(maybeError));
        // Call the user-defined error handler if exists.
        if (currentErrorHandler) ;
        // Dispatch an `error` event if this is on a browser.
        if (typeof dispatchEvent === "function" &&
            typeof ErrorEvent === "function") {
            dispatchEvent(new ErrorEvent("error", { error, message: error.message }));
        }
        // Emit an `uncaughtException` event if this is on Node.js.
        //istanbul ignore else
        else if (typeof process !== "undefined" &&
            typeof process.emit === "function") {
            process.emit("uncaughtException", error);
            return;
        }
        // Otherwise, print the error.
        console.error(error);
    }
    catch (_a) {
        // ignore.
    }
}

let currentWarnHandler;
/**
 * The warning information.
 */
class Warning {
    constructor(code, message) {
        this.code = code;
        this.message = message;
    }
    /**
     * Report this warning.
     * @param args The arguments of the warning.
     */
    warn(...args) {
        var _a;
        try {
            // Call the user-defined warning handler if exists.
            if (currentWarnHandler) ;
            // Otherwise, print the warning.
            const stack = ((_a = new Error().stack) !== null && _a !== void 0 ? _a : "").replace(/^(?:.+?\n){2}/gu, "\n");
            console.warn(this.message, ...args, stack);
        }
        catch (_b) {
            // Ignore.
        }
    }
}

const InitEventWasCalledWhileDispatching = new Warning("W01", "Unable to initialize event under dispatching.");
const FalsyWasAssignedToCancelBubble = new Warning("W02", "Assigning any falsy value to 'cancelBubble' property has no effect.");
const TruthyWasAssignedToReturnValue = new Warning("W03", "Assigning any truthy value to 'returnValue' property has no effect.");
const NonCancelableEventWasCanceled = new Warning("W04", "Unable to preventDefault on non-cancelable events.");
const CanceledInPassiveListener = new Warning("W05", "Unable to preventDefault inside passive event listener invocation.");
const EventListenerWasDuplicated = new Warning("W06", "An event listener wasn't added because it has been added already: %o, %o");
const OptionWasIgnored = new Warning("W07", "The %o option value was abandoned because the event listener wasn't added as duplicated.");
const InvalidEventListener = new Warning("W08", "The 'callback' argument must be a function or an object that has 'handleEvent' method: %o");
new Warning("W09", "Event attribute handler must be a function: %o");

/*eslint-disable class-methods-use-this */
/**
 * An implementation of `Event` interface, that wraps a given event object.
 * `EventTarget` shim can control the internal state of this `Event` objects.
 * @see https://dom.spec.whatwg.org/#event
 */
class Event {
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-none
     */
    static get NONE() {
        return NONE;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-capturing_phase
     */
    static get CAPTURING_PHASE() {
        return CAPTURING_PHASE;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-at_target
     */
    static get AT_TARGET() {
        return AT_TARGET;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-bubbling_phase
     */
    static get BUBBLING_PHASE() {
        return BUBBLING_PHASE;
    }
    /**
     * Initialize this event instance.
     * @param type The type of this event.
     * @param eventInitDict Options to initialize.
     * @see https://dom.spec.whatwg.org/#dom-event-event
     */
    constructor(type, eventInitDict) {
        Object.defineProperty(this, "isTrusted", {
            value: false,
            enumerable: true,
        });
        const opts = eventInitDict !== null && eventInitDict !== void 0 ? eventInitDict : {};
        internalDataMap.set(this, {
            type: String(type),
            bubbles: Boolean(opts.bubbles),
            cancelable: Boolean(opts.cancelable),
            composed: Boolean(opts.composed),
            target: null,
            currentTarget: null,
            stopPropagationFlag: false,
            stopImmediatePropagationFlag: false,
            canceledFlag: false,
            inPassiveListenerFlag: false,
            dispatchFlag: false,
            timeStamp: Date.now(),
        });
    }
    /**
     * The type of this event.
     * @see https://dom.spec.whatwg.org/#dom-event-type
     */
    get type() {
        return $(this).type;
    }
    /**
     * The event target of the current dispatching.
     * @see https://dom.spec.whatwg.org/#dom-event-target
     */
    get target() {
        return $(this).target;
    }
    /**
     * The event target of the current dispatching.
     * @deprecated Use the `target` property instead.
     * @see https://dom.spec.whatwg.org/#dom-event-srcelement
     */
    get srcElement() {
        return $(this).target;
    }
    /**
     * The event target of the current dispatching.
     * @see https://dom.spec.whatwg.org/#dom-event-currenttarget
     */
    get currentTarget() {
        return $(this).currentTarget;
    }
    /**
     * The event target of the current dispatching.
     * This doesn't support node tree.
     * @see https://dom.spec.whatwg.org/#dom-event-composedpath
     */
    composedPath() {
        const currentTarget = $(this).currentTarget;
        if (currentTarget) {
            return [currentTarget];
        }
        return [];
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-none
     */
    get NONE() {
        return NONE;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-capturing_phase
     */
    get CAPTURING_PHASE() {
        return CAPTURING_PHASE;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-at_target
     */
    get AT_TARGET() {
        return AT_TARGET;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-bubbling_phase
     */
    get BUBBLING_PHASE() {
        return BUBBLING_PHASE;
    }
    /**
     * The current event phase.
     * @see https://dom.spec.whatwg.org/#dom-event-eventphase
     */
    get eventPhase() {
        return $(this).dispatchFlag ? 2 : 0;
    }
    /**
     * Stop event bubbling.
     * Because this shim doesn't support node tree, this merely changes the `cancelBubble` property value.
     * @see https://dom.spec.whatwg.org/#dom-event-stoppropagation
     */
    stopPropagation() {
        $(this).stopPropagationFlag = true;
    }
    /**
     * `true` if event bubbling was stopped.
     * @deprecated
     * @see https://dom.spec.whatwg.org/#dom-event-cancelbubble
     */
    get cancelBubble() {
        return $(this).stopPropagationFlag;
    }
    /**
     * Stop event bubbling if `true` is set.
     * @deprecated Use the `stopPropagation()` method instead.
     * @see https://dom.spec.whatwg.org/#dom-event-cancelbubble
     */
    set cancelBubble(value) {
        if (value) {
            $(this).stopPropagationFlag = true;
        }
        else {
            FalsyWasAssignedToCancelBubble.warn();
        }
    }
    /**
     * Stop event bubbling and subsequent event listener callings.
     * @see https://dom.spec.whatwg.org/#dom-event-stopimmediatepropagation
     */
    stopImmediatePropagation() {
        const data = $(this);
        data.stopPropagationFlag = data.stopImmediatePropagationFlag = true;
    }
    /**
     * `true` if this event will bubble.
     * @see https://dom.spec.whatwg.org/#dom-event-bubbles
     */
    get bubbles() {
        return $(this).bubbles;
    }
    /**
     * `true` if this event can be canceled by the `preventDefault()` method.
     * @see https://dom.spec.whatwg.org/#dom-event-cancelable
     */
    get cancelable() {
        return $(this).cancelable;
    }
    /**
     * `true` if the default behavior will act.
     * @deprecated Use the `defaultPrevented` proeprty instead.
     * @see https://dom.spec.whatwg.org/#dom-event-returnvalue
     */
    get returnValue() {
        return !$(this).canceledFlag;
    }
    /**
     * Cancel the default behavior if `false` is set.
     * @deprecated Use the `preventDefault()` method instead.
     * @see https://dom.spec.whatwg.org/#dom-event-returnvalue
     */
    set returnValue(value) {
        if (!value) {
            setCancelFlag($(this));
        }
        else {
            TruthyWasAssignedToReturnValue.warn();
        }
    }
    /**
     * Cancel the default behavior.
     * @see https://dom.spec.whatwg.org/#dom-event-preventdefault
     */
    preventDefault() {
        setCancelFlag($(this));
    }
    /**
     * `true` if the default behavior was canceled.
     * @see https://dom.spec.whatwg.org/#dom-event-defaultprevented
     */
    get defaultPrevented() {
        return $(this).canceledFlag;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-composed
     */
    get composed() {
        return $(this).composed;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-istrusted
     */
    //istanbul ignore next
    get isTrusted() {
        return false;
    }
    /**
     * @see https://dom.spec.whatwg.org/#dom-event-timestamp
     */
    get timeStamp() {
        return $(this).timeStamp;
    }
    /**
     * @deprecated Don't use this method. The constructor did initialization.
     */
    initEvent(type, bubbles = false, cancelable = false) {
        const data = $(this);
        if (data.dispatchFlag) {
            InitEventWasCalledWhileDispatching.warn();
            return;
        }
        internalDataMap.set(this, {
            ...data,
            type: String(type),
            bubbles: Boolean(bubbles),
            cancelable: Boolean(cancelable),
            target: null,
            currentTarget: null,
            stopPropagationFlag: false,
            stopImmediatePropagationFlag: false,
            canceledFlag: false,
        });
    }
}
//------------------------------------------------------------------------------
// Helpers
//------------------------------------------------------------------------------
const NONE = 0;
const CAPTURING_PHASE = 1;
const AT_TARGET = 2;
const BUBBLING_PHASE = 3;
/**
 * Private data for event wrappers.
 */
const internalDataMap = new WeakMap();
/**
 * Get private data.
 * @param event The event object to get private data.
 * @param name The variable name to report.
 * @returns The private data of the event.
 */
function $(event, name = "this") {
    const retv = internalDataMap.get(event);
    assertType(retv != null, "'%s' must be an object that Event constructor created, but got another one: %o", name, event);
    return retv;
}
/**
 * https://dom.spec.whatwg.org/#set-the-canceled-flag
 * @param data private data.
 */
function setCancelFlag(data) {
    if (data.inPassiveListenerFlag) {
        CanceledInPassiveListener.warn();
        return;
    }
    if (!data.cancelable) {
        NonCancelableEventWasCanceled.warn();
        return;
    }
    data.canceledFlag = true;
}
// Set enumerable
Object.defineProperty(Event, "NONE", { enumerable: true });
Object.defineProperty(Event, "CAPTURING_PHASE", { enumerable: true });
Object.defineProperty(Event, "AT_TARGET", { enumerable: true });
Object.defineProperty(Event, "BUBBLING_PHASE", { enumerable: true });
const keys$1 = Object.getOwnPropertyNames(Event.prototype);
for (let i = 0; i < keys$1.length; ++i) {
    if (keys$1[i] === "constructor") {
        continue;
    }
    Object.defineProperty(Event.prototype, keys$1[i], { enumerable: true });
}

/**
 * An implementation of `Event` interface, that wraps a given event object.
 * This class controls the internal state of `Event`.
 * @see https://dom.spec.whatwg.org/#interface-event
 */
class EventWrapper extends Event {
    /**
     * Wrap a given event object to control states.
     * @param event The event-like object to wrap.
     */
    static wrap(event) {
        return new (getWrapperClassOf(event))(event);
    }
    constructor(event) {
        super(event.type, {
            bubbles: event.bubbles,
            cancelable: event.cancelable,
            composed: event.composed,
        });
        if (event.cancelBubble) {
            super.stopPropagation();
        }
        if (event.defaultPrevented) {
            super.preventDefault();
        }
        internalDataMap$1.set(this, { original: event });
        // Define accessors
        const keys = Object.keys(event);
        for (let i = 0; i < keys.length; ++i) {
            const key = keys[i];
            if (!(key in this)) {
                Object.defineProperty(this, key, defineRedirectDescriptor(event, key));
            }
        }
    }
    stopPropagation() {
        super.stopPropagation();
        const { original } = $$1(this);
        if ("stopPropagation" in original) {
            original.stopPropagation();
        }
    }
    get cancelBubble() {
        return super.cancelBubble;
    }
    set cancelBubble(value) {
        super.cancelBubble = value;
        const { original } = $$1(this);
        if ("cancelBubble" in original) {
            original.cancelBubble = value;
        }
    }
    stopImmediatePropagation() {
        super.stopImmediatePropagation();
        const { original } = $$1(this);
        if ("stopImmediatePropagation" in original) {
            original.stopImmediatePropagation();
        }
    }
    get returnValue() {
        return super.returnValue;
    }
    set returnValue(value) {
        super.returnValue = value;
        const { original } = $$1(this);
        if ("returnValue" in original) {
            original.returnValue = value;
        }
    }
    preventDefault() {
        super.preventDefault();
        const { original } = $$1(this);
        if ("preventDefault" in original) {
            original.preventDefault();
        }
    }
    get timeStamp() {
        const { original } = $$1(this);
        if ("timeStamp" in original) {
            return original.timeStamp;
        }
        return super.timeStamp;
    }
}
/**
 * Private data for event wrappers.
 */
const internalDataMap$1 = new WeakMap();
/**
 * Get private data.
 * @param event The event object to get private data.
 * @returns The private data of the event.
 */
function $$1(event) {
    const retv = internalDataMap$1.get(event);
    assertType(retv != null, "'this' is expected an Event object, but got", event);
    return retv;
}
/**
 * Cache for wrapper classes.
 * @type {WeakMap<Object, Function>}
 * @private
 */
const wrapperClassCache = new WeakMap();
// Make association for wrappers.
wrapperClassCache.set(Object.prototype, EventWrapper);
/**
 * Get the wrapper class of a given prototype.
 * @param originalEvent The event object to wrap.
 */
function getWrapperClassOf(originalEvent) {
    const prototype = Object.getPrototypeOf(originalEvent);
    if (prototype == null) {
        return EventWrapper;
    }
    let wrapper = wrapperClassCache.get(prototype);
    if (wrapper == null) {
        wrapper = defineWrapper(getWrapperClassOf(prototype), prototype);
        wrapperClassCache.set(prototype, wrapper);
    }
    return wrapper;
}
/**
 * Define new wrapper class.
 * @param BaseEventWrapper The base wrapper class.
 * @param originalPrototype The prototype of the original event.
 */
function defineWrapper(BaseEventWrapper, originalPrototype) {
    class CustomEventWrapper extends BaseEventWrapper {
    }
    const keys = Object.keys(originalPrototype);
    for (let i = 0; i < keys.length; ++i) {
        Object.defineProperty(CustomEventWrapper.prototype, keys[i], defineRedirectDescriptor(originalPrototype, keys[i]));
    }
    return CustomEventWrapper;
}
/**
 * Get the property descriptor to redirect a given property.
 */
function defineRedirectDescriptor(obj, key) {
    const d = Object.getOwnPropertyDescriptor(obj, key);
    return {
        get() {
            const original = $$1(this).original;
            const value = original[key];
            if (typeof value === "function") {
                return value.bind(original);
            }
            return value;
        },
        set(value) {
            const original = $$1(this).original;
            original[key] = value;
        },
        configurable: d.configurable,
        enumerable: d.enumerable,
    };
}

/**
 * Create a new listener.
 * @param callback The callback function.
 * @param capture The capture flag.
 * @param passive The passive flag.
 * @param once The once flag.
 * @param signal The abort signal.
 * @param signalListener The abort event listener for the abort signal.
 */
function createListener(callback, capture, passive, once, signal, signalListener) {
    return {
        callback,
        flags: (capture ? 1 /* Capture */ : 0) |
            (passive ? 2 /* Passive */ : 0) |
            (once ? 4 /* Once */ : 0),
        signal,
        signalListener,
    };
}
/**
 * Set the `removed` flag to the given listener.
 * @param listener The listener to check.
 */
function setRemoved(listener) {
    listener.flags |= 8 /* Removed */;
}
/**
 * Check if the given listener has the `capture` flag or not.
 * @param listener The listener to check.
 */
function isCapture(listener) {
    return (listener.flags & 1 /* Capture */) === 1 /* Capture */;
}
/**
 * Check if the given listener has the `passive` flag or not.
 * @param listener The listener to check.
 */
function isPassive(listener) {
    return (listener.flags & 2 /* Passive */) === 2 /* Passive */;
}
/**
 * Check if the given listener has the `once` flag or not.
 * @param listener The listener to check.
 */
function isOnce(listener) {
    return (listener.flags & 4 /* Once */) === 4 /* Once */;
}
/**
 * Check if the given listener has the `removed` flag or not.
 * @param listener The listener to check.
 */
function isRemoved(listener) {
    return (listener.flags & 8 /* Removed */) === 8 /* Removed */;
}
/**
 * Call an event listener.
 * @param listener The listener to call.
 * @param target The event target object for `thisArg`.
 * @param event The event object for the first argument.
 * @param attribute `true` if this callback is an event attribute handler.
 */
function invokeCallback({ callback }, target, event) {
    try {
        if (typeof callback === "function") {
            callback.call(target, event);
        }
        else if (typeof callback.handleEvent === "function") {
            callback.handleEvent(event);
        }
    }
    catch (thrownError) {
        reportError(thrownError);
    }
}

/**
 * Find the index of given listener.
 * This returns `-1` if not found.
 * @param list The listener list.
 * @param callback The callback function to find.
 * @param capture The capture flag to find.
 */
function findIndexOfListener({ listeners }, callback, capture) {
    for (let i = 0; i < listeners.length; ++i) {
        if (listeners[i].callback === callback &&
            isCapture(listeners[i]) === capture) {
            return i;
        }
    }
    return -1;
}
/**
 * Add the given listener.
 * Does copy-on-write if needed.
 * @param list The listener list.
 * @param callback The callback function.
 * @param capture The capture flag.
 * @param passive The passive flag.
 * @param once The once flag.
 * @param signal The abort signal.
 */
function addListener(list, callback, capture, passive, once, signal) {
    let signalListener;
    if (signal) {
        signalListener = removeListener.bind(null, list, callback, capture);
        signal.addEventListener("abort", signalListener);
    }
    const listener = createListener(callback, capture, passive, once, signal, signalListener);
    if (list.cow) {
        list.cow = false;
        list.listeners = [...list.listeners, listener];
    }
    else {
        list.listeners.push(listener);
    }
    return listener;
}
/**
 * Remove a listener.
 * @param list The listener list.
 * @param callback The callback function to find.
 * @param capture The capture flag to find.
 * @returns `true` if it mutated the list directly.
 */
function removeListener(list, callback, capture) {
    const index = findIndexOfListener(list, callback, capture);
    if (index !== -1) {
        return removeListenerAt(list, index);
    }
    return false;
}
/**
 * Remove a listener.
 * @param list The listener list.
 * @param index The index of the target listener.
 * @param disableCow Disable copy-on-write if true.
 * @returns `true` if it mutated the `listeners` array directly.
 */
function removeListenerAt(list, index, disableCow = false) {
    const listener = list.listeners[index];
    // Set the removed flag.
    setRemoved(listener);
    // Dispose the abort signal listener if exists.
    if (listener.signal) {
        listener.signal.removeEventListener("abort", listener.signalListener);
    }
    // Remove it from the array.
    if (list.cow && !disableCow) {
        list.cow = false;
        list.listeners = list.listeners.filter((_, i) => i !== index);
        return false;
    }
    list.listeners.splice(index, 1);
    return true;
}

/**
 * Create a new `ListenerListMap` object.
 */
function createListenerListMap() {
    return Object.create(null);
}
/**
 * Get the listener list of the given type.
 * If the listener list has not been initialized, initialize and return it.
 * @param listenerMap The listener list map.
 * @param type The event type to get.
 */
function ensureListenerList(listenerMap, type) {
    var _a;
    return ((_a = listenerMap[type]) !== null && _a !== void 0 ? _a : (listenerMap[type] = {
        attrCallback: undefined,
        attrListener: undefined,
        cow: false,
        listeners: [],
    }));
}

/**
 * An implementation of the `EventTarget` interface.
 * @see https://dom.spec.whatwg.org/#eventtarget
 */
class EventTarget {
    /**
     * Initialize this instance.
     */
    constructor() {
        internalDataMap$2.set(this, createListenerListMap());
    }
    // Implementation
    addEventListener(type0, callback0, options0) {
        const listenerMap = $$2(this);
        const { callback, capture, once, passive, signal, type, } = normalizeAddOptions(type0, callback0, options0);
        if (callback == null || (signal === null || signal === void 0 ? void 0 : signal.aborted)) {
            return;
        }
        const list = ensureListenerList(listenerMap, type);
        // Find existing listener.
        const i = findIndexOfListener(list, callback, capture);
        if (i !== -1) {
            warnDuplicate(list.listeners[i], passive, once, signal);
            return;
        }
        // Add the new listener.
        addListener(list, callback, capture, passive, once, signal);
    }
    // Implementation
    removeEventListener(type0, callback0, options0) {
        const listenerMap = $$2(this);
        const { callback, capture, type } = normalizeOptions(type0, callback0, options0);
        const list = listenerMap[type];
        if (callback != null && list) {
            removeListener(list, callback, capture);
        }
    }
    // Implementation
    dispatchEvent(e) {
        const list = $$2(this)[String(e.type)];
        if (list == null) {
            return true;
        }
        const event = e instanceof Event ? e : EventWrapper.wrap(e);
        const eventData = $(event, "event");
        if (eventData.dispatchFlag) {
           throw new DOMException("This event has been in dispatching.");
        }
        eventData.dispatchFlag = true;
        eventData.target = eventData.currentTarget = this;
        if (!eventData.stopPropagationFlag) {
            const { cow, listeners } = list;
            // Set copy-on-write flag.
            list.cow = true;
            // Call listeners.
            for (let i = 0; i < listeners.length; ++i) {
                const listener = listeners[i];
                // Skip if removed.
                if (isRemoved(listener)) {
                    continue;
                }
                // Remove this listener if has the `once` flag.
                if (isOnce(listener) && removeListenerAt(list, i, !cow)) {
                    // Because this listener was removed, the next index is the
                    // same as the current value.
                    i -= 1;
                }
                // Call this listener with the `passive` flag.
                eventData.inPassiveListenerFlag = isPassive(listener);
                invokeCallback(listener, this, event);
                eventData.inPassiveListenerFlag = false;
                // Stop if the `event.stopImmediatePropagation()` method was called.
                if (eventData.stopImmediatePropagationFlag) {
                    break;
                }
            }
            // Restore copy-on-write flag.
            if (!cow) {
                list.cow = false;
            }
        }
        eventData.target = null;
        eventData.currentTarget = null;
        eventData.stopImmediatePropagationFlag = false;
        eventData.stopPropagationFlag = false;
        eventData.dispatchFlag = false;
        return !eventData.canceledFlag;
    }
}
/**
 * Internal data.
 */
const internalDataMap$2 = new WeakMap();
/**
 * Get private data.
 * @param target The event target object to get private data.
 * @param name The variable name to report.
 * @returns The private data of the event.
 */
function $$2(target, name = "this") {
    const retv = internalDataMap$2.get(target);
    assertType(retv != null, "'%s' must be an object that EventTarget constructor created, but got another one: %o", name, target);
    return retv;
}
/**
 * Normalize options.
 * @param options The options to normalize.
 */
function normalizeAddOptions(type, callback, options) {
    var _a;
    assertCallback(callback);
    if (typeof options === "object" && options !== null) {
        return {
            type: String(type),
            callback: callback !== null && callback !== void 0 ? callback : undefined,
            capture: Boolean(options.capture),
            passive: Boolean(options.passive),
            once: Boolean(options.once),
            signal: (_a = options.signal) !== null && _a !== void 0 ? _a : undefined,
        };
    }
    return {
        type: String(type),
        callback: callback !== null && callback !== void 0 ? callback : undefined,
        capture: Boolean(options),
        passive: false,
        once: false,
        signal: undefined,
    };
}
/**
 * Normalize options.
 * @param options The options to normalize.
 */
function normalizeOptions(type, callback, options) {
    assertCallback(callback);
    if (typeof options === "object" && options !== null) {
        return {
            type: String(type),
            callback: callback !== null && callback !== void 0 ? callback : undefined,
            capture: Boolean(options.capture),
        };
    }
    return {
        type: String(type),
        callback: callback !== null && callback !== void 0 ? callback : undefined,
        capture: Boolean(options),
    };
}
/**
 * Assert the type of 'callback' argument.
 * @param callback The callback to check.
 */
function assertCallback(callback) {
    if (typeof callback === "function" ||
        (typeof callback === "object" &&
            callback !== null &&
            typeof callback.handleEvent === "function")) {
        return;
    }
    if (callback == null || typeof callback === "object") {
        InvalidEventListener.warn(callback);
        return;
    }
    throw new TypeError(format(InvalidEventListener.message, [callback]));
}
/**
 * Print warning for duplicated.
 * @param listener The current listener that is duplicated.
 * @param passive The passive flag of the new duplicated listener.
 * @param once The once flag of the new duplicated listener.
 * @param signal The signal object of the new duplicated listener.
 */
function warnDuplicate(listener, passive, once, signal) {
    EventListenerWasDuplicated.warn(isCapture(listener) ? "capture" : "bubble", listener.callback);
    if (isPassive(listener) !== passive) {
        OptionWasIgnored.warn("passive");
    }
    if (isOnce(listener) !== once) {
        OptionWasIgnored.warn("once");
    }
    if (listener.signal !== signal) {
        OptionWasIgnored.warn("signal");
    }
}
// Set enumerable
const keys$1$1 = Object.getOwnPropertyNames(EventTarget.prototype);
for (let i = 0; i < keys$1$1.length; ++i) {
    if (keys$1$1[i] === "constructor") {
        continue;
    }
    Object.defineProperty(EventTarget.prototype, keys$1$1[i], { enumerable: true });
}

function u(u,D){for(var t=0;t<D.length;t++){var F=D[t];F.enumerable=F.enumerable||!1,F.configurable=!0,"value"in F&&(F.writable=!0),Object.defineProperty(u,F.key,F);}}function D(D,t,F){return t&&u(D.prototype,t),F&&u(D,F),D}function t(u,D){(null==D||D>u.length)&&(D=u.length);for(var t=0,F=new Array(D);t<D;t++)F[t]=u[t];return F}function F(u,D){var F="undefined"!=typeof Symbol&&u[Symbol.iterator]||u["@@iterator"];if(F)return (F=F.call(u)).next.bind(F);if(Array.isArray(u)||(F=function(u,D){if(u){if("string"==typeof u)return t(u,D);var F=Object.prototype.toString.call(u).slice(8,-1);return "Object"===F&&u.constructor&&(F=u.constructor.name),"Map"===F||"Set"===F?Array.from(u):"Arguments"===F||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(F)?t(u,D):void 0}}(u))||D&&u&&"number"==typeof u.length){F&&(u=F);var e=0;return function(){return e>=u.length?{done:!0}:{done:!1,value:u[e++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var e=/(?:[\$A-Z_a-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/,C=/(?:[\$0-9A-Z_a-z\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u08D3-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1ABF\u1AC0\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA827\uA82C\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF50\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E-\uDC61\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD43\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFE4\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]|\uDB40[\uDD00-\uDDEF])/;function A(u,D){return (D?/^[\x00-\xFF]*$/:/^[\x00-\x7F]*$/).test(u)}function E(u,D){void 0===D&&(D=!1);for(var t=[],F=0;F<u.length;){var E=u[F],n=function(e){if(!D)throw new TypeError(e);t.push({type:"INVALID_CHAR",index:F,value:u[F++]});};if("*"!==E)if("+"!==E&&"?"!==E)if("\\"!==E)if("{"!==E)if("}"!==E)if(":"!==E)if("("!==E)t.push({type:"CHAR",index:F,value:u[F++]});else {var r=1,i="",s=F+1,a=!1;if("?"===u[s]){n('Pattern cannot start with "?" at '+s);continue}for(;s<u.length;){if(!A(u[s],!1)){n("Invalid character '"+u[s]+"' at "+s+"."),a=!0;break}if("\\"!==u[s]){if(")"===u[s]){if(0==--r){s++;break}}else if("("===u[s]&&(r++,"?"!==u[s+1])){n("Capturing groups are not allowed at "+s),a=!0;break}i+=u[s++];}else i+=u[s++]+u[s++];}if(a)continue;if(r){n("Unbalanced pattern at "+F);continue}if(!i){n("Missing pattern at "+F);continue}t.push({type:"PATTERN",index:F,value:i}),F=s;}else {for(var B="",o=F+1;o<u.length;){var h=u.substr(o,1);if(!(o===F+1&&e.test(h)||o!==F+1&&C.test(h)))break;B+=u[o++];}if(!B){n("Missing parameter name at "+F);continue}t.push({type:"NAME",index:F,value:B}),F=o;}else t.push({type:"CLOSE",index:F,value:u[F++]});else t.push({type:"OPEN",index:F,value:u[F++]});else t.push({type:"ESCAPED_CHAR",index:F++,value:u[F++]});else t.push({type:"MODIFIER",index:F,value:u[F++]});else t.push({type:"ASTERISK",index:F,value:u[F++]});}return t.push({type:"END",index:F,value:""}),t}function n(u,D){void 0===D&&(D={});for(var t=E(u),F=D.prefixes,e=void 0===F?"./":F,C="[^"+r(D.delimiter||"/#?")+"]+?",A=[],n=0,i=0,s="",a=new Set,B=function(u){if(i<t.length&&t[i].type===u)return t[i++].value},o=function(){return B("MODIFIER")||B("ASTERISK")},h=function(u){var D=B(u);if(void 0!==D)return D;var F=t[i];throw new TypeError("Unexpected "+F.type+" at "+F.index+", expected "+u)},p=function(){for(var u,D="";u=B("CHAR")||B("ESCAPED_CHAR");)D+=u;return D},c=D.encodePart||function(u){return u};i<t.length;){var f=B("CHAR"),l=B("NAME"),m=B("PATTERN");if(l||m||!B("ASTERISK")||(m=".*"),l||m){var d=f||"";-1===e.indexOf(d)&&(s+=d,d=""),s&&(A.push(c(s)),s="");var g=l||n++;if(a.has(g))throw new TypeError("Duplicate name '"+g+"'.");a.add(g),A.push({name:g,prefix:c(d),suffix:"",pattern:m||C,modifier:o()||""});}else {var x=f||B("ESCAPED_CHAR");if(x)s+=x;else if(B("OPEN")){var S=p(),v=B("NAME")||"",y=B("PATTERN")||"";v||y||!B("ASTERISK")||(y=".*");var R=p();h("CLOSE");var k=o()||"";if(!v&&!y&&!k){s+=S;continue}if(!v&&!y&&!S)continue;s&&(A.push(c(s)),s=""),A.push({name:v||(y?n++:""),pattern:v&&!y?C:y,prefix:c(S),suffix:c(R),modifier:k});}else s&&(A.push(c(s)),s=""),h("END");}}return A}function r(u){return u.replace(/([.+*?^${}()[\]|/\\])/g,"\\$1")}function i(u){return u&&u.sensitive?"u":"ui"}function s(u,D,t){void 0===t&&(t={});for(var e,C=t.strict,A=void 0!==C&&C,E=t.start,n=void 0===E||E,s=t.end,a=void 0===s||s,B=t.encode,o=void 0===B?function(u){return u}:B,h="["+r(t.endsWith||"")+"]|$",p="["+r(t.delimiter||"/#?")+"]",c=n?"^":"",f=F(u);!(e=f()).done;){var l=e.value;if("string"==typeof l)c+=r(o(l));else {var m=r(o(l.prefix)),d=r(o(l.suffix));l.pattern?(D&&D.push(l),c+=m||d?"+"===l.modifier||"*"===l.modifier?"(?:"+m+"((?:"+l.pattern+")(?:"+d+m+"(?:"+l.pattern+"))*)"+d+")"+("*"===l.modifier?"?":""):"(?:"+m+"("+l.pattern+")"+d+")"+l.modifier:"+"===l.modifier||"*"===l.modifier?"((?:"+l.pattern+")"+l.modifier+")":"("+l.pattern+")"+l.modifier):c+="(?:"+m+d+")"+l.modifier;}}if(a)A||(c+=p+"?"),c+=t.endsWith?"(?="+h+")":"$";else {var g=u[u.length-1],x="string"==typeof g?p.indexOf(g[g.length-1])>-1:void 0===g;A||(c+="(?:"+p+"(?="+h+"))?"),x||(c+="(?="+p+"|"+h+")");}return new RegExp(c,i(t))}function a(u,D,t){return u instanceof RegExp?function(u,D){if(!D)return u;for(var t=/\((?:\?<(.*?)>)?(?!\?)/g,F=0,e=t.exec(u.source);e;)D.push({name:e[1]||F++,prefix:"",suffix:"",modifier:"",pattern:""}),e=t.exec(u.source);return u}(u,D):Array.isArray(u)?function(u,D,t){var F=u.map(function(u){return a(u,D,t).source});return new RegExp("(?:"+F.join("|")+")",i(t))}(u,D,t):function(u,D,t){return s(n(u,t),D,t)}(u,D,t)}var B={delimiter:"",prefixes:"",sensitive:!0,strict:!0},o={delimiter:".",prefixes:"",sensitive:!0,strict:!0},h={delimiter:"/",prefixes:"/",sensitive:!0,strict:!0};function p(u,D){return u.startsWith(D)?u.substring(D.length,u.length):u}function c(u){return !(!u||u.length<2||"["!==u[0]&&("\\"!==u[0]&&"{"!==u[0]||"["!==u[1]))}var f,l=["ftp","file","http","https","ws","wss"];function m(u){if(!u)return !0;for(var D,t=F(l);!(D=t()).done;)if(u.test(D.value))return !0;return !1}function d(u){switch(u){case"ws":case"http":return "80";case"wws":case"https":return "443";case"ftp":return "21";default:return ""}}function g(u){if(""===u)return u;if(/^[-+.A-Za-z0-9]*$/.test(u))return u.toLowerCase();throw new TypeError("Invalid protocol '"+u+"'.")}function x(u){if(""===u)return u;var D=new URL("https://example.com");return D.username=u,D.username}function S(u){if(""===u)return u;var D=new URL("https://example.com");return D.password=u,D.password}function v(u){if(""===u)return u;if(/[\t\n\r #%/:<>?@[\]^\\|]/g.test(u))throw new TypeError("Invalid hostname '"+u+"'");var D=new URL("https://example.com");return D.hostname=u,D.hostname}function y(u){if(""===u)return u;if(/[^0-9a-fA-F[\]:]/g.test(u))throw new TypeError("Invalid IPv6 hostname '"+u+"'");return u.toLowerCase()}function R(u){if(""===u)return u;if(/^[0-9]*$/.test(u)&&parseInt(u)<=65535)return u;throw new TypeError("Invalid port '"+u+"'.")}function k(u){if(""===u)return u;var D=new URL("https://example.com");return D.pathname="/"!==u[0]?"/-"+u:u,"/"!==u[0]?D.pathname.substring(2,D.pathname.length):D.pathname}function w(u){return ""===u?u:new URL("data:"+u).pathname}function P(u){if(""===u)return u;var D=new URL("https://example.com");return D.search=u,D.search.substring(1,D.search.length)}function T(u){if(""===u)return u;var D=new URL("https://example.com");return D.hash=u,D.hash.substring(1,D.hash.length)}!function(u){u[u.INIT=0]="INIT",u[u.PROTOCOL=1]="PROTOCOL",u[u.AUTHORITY=2]="AUTHORITY",u[u.USERNAME=3]="USERNAME",u[u.PASSWORD=4]="PASSWORD",u[u.HOSTNAME=5]="HOSTNAME",u[u.PORT=6]="PORT",u[u.PATHNAME=7]="PATHNAME",u[u.SEARCH=8]="SEARCH",u[u.HASH=9]="HASH",u[u.DONE=10]="DONE";}(f||(f={}));var b=function(){function u(u){this.input=void 0,this.tokenList=[],this.internalResult={},this.tokenIndex=0,this.tokenIncrement=1,this.componentStart=0,this.state=f.INIT,this.groupDepth=0,this.hostnameIPv6BracketDepth=0,this.shouldTreatAsStandardURL=!1,this.input=u;}var t=u.prototype;return t.parse=function(){for(this.tokenList=E(this.input,!0);this.tokenIndex<this.tokenList.length;this.tokenIndex+=this.tokenIncrement){if(this.tokenIncrement=1,"END"===this.tokenList[this.tokenIndex].type){if(this.state===f.INIT){this.rewind(),this.isHashPrefix()?this.changeState(f.HASH,1):this.isSearchPrefix()?(this.changeState(f.SEARCH,1),this.internalResult.hash=""):(this.changeState(f.PATHNAME,0),this.internalResult.search="",this.internalResult.hash="");continue}if(this.state===f.AUTHORITY){this.rewindAndSetState(f.HOSTNAME);continue}this.changeState(f.DONE,0);break}if(this.groupDepth>0){if(!this.isGroupClose())continue;this.groupDepth-=1;}if(this.isGroupOpen())this.groupDepth+=1;else switch(this.state){case f.INIT:this.isProtocolSuffix()&&(this.internalResult.username="",this.internalResult.password="",this.internalResult.hostname="",this.internalResult.port="",this.internalResult.pathname="",this.internalResult.search="",this.internalResult.hash="",this.rewindAndSetState(f.PROTOCOL));break;case f.PROTOCOL:if(this.isProtocolSuffix()){this.computeShouldTreatAsStandardURL();var u=f.PATHNAME,D=1;this.shouldTreatAsStandardURL&&(this.internalResult.pathname="/"),this.nextIsAuthoritySlashes()?(u=f.AUTHORITY,D=3):this.shouldTreatAsStandardURL&&(u=f.AUTHORITY),this.changeState(u,D);}break;case f.AUTHORITY:this.isIdentityTerminator()?this.rewindAndSetState(f.USERNAME):(this.isPathnameStart()||this.isSearchPrefix()||this.isHashPrefix())&&this.rewindAndSetState(f.HOSTNAME);break;case f.USERNAME:this.isPasswordPrefix()?this.changeState(f.PASSWORD,1):this.isIdentityTerminator()&&this.changeState(f.HOSTNAME,1);break;case f.PASSWORD:this.isIdentityTerminator()&&this.changeState(f.HOSTNAME,1);break;case f.HOSTNAME:this.isIPv6Open()?this.hostnameIPv6BracketDepth+=1:this.isIPv6Close()&&(this.hostnameIPv6BracketDepth-=1),this.isPortPrefix()&&!this.hostnameIPv6BracketDepth?this.changeState(f.PORT,1):this.isPathnameStart()?this.changeState(f.PATHNAME,0):this.isSearchPrefix()?this.changeState(f.SEARCH,1):this.isHashPrefix()&&this.changeState(f.HASH,1);break;case f.PORT:this.isPathnameStart()?this.changeState(f.PATHNAME,0):this.isSearchPrefix()?this.changeState(f.SEARCH,1):this.isHashPrefix()&&this.changeState(f.HASH,1);break;case f.PATHNAME:this.isSearchPrefix()?this.changeState(f.SEARCH,1):this.isHashPrefix()&&this.changeState(f.HASH,1);break;case f.SEARCH:this.isHashPrefix()&&this.changeState(f.HASH,1);}}},t.changeState=function(u,D){switch(this.state){case f.INIT:break;case f.PROTOCOL:this.internalResult.protocol=this.makeComponentString();break;case f.AUTHORITY:break;case f.USERNAME:this.internalResult.username=this.makeComponentString();break;case f.PASSWORD:this.internalResult.password=this.makeComponentString();break;case f.HOSTNAME:this.internalResult.hostname=this.makeComponentString();break;case f.PORT:this.internalResult.port=this.makeComponentString();break;case f.PATHNAME:this.internalResult.pathname=this.makeComponentString();break;case f.SEARCH:this.internalResult.search=this.makeComponentString();break;case f.HASH:this.internalResult.hash=this.makeComponentString();}this.changeStateWithoutSettingComponent(u,D);},t.changeStateWithoutSettingComponent=function(u,D){this.state=u,this.componentStart=this.tokenIndex+D,this.tokenIndex+=D,this.tokenIncrement=0;},t.rewind=function(){this.tokenIndex=this.componentStart,this.tokenIncrement=0;},t.rewindAndSetState=function(u){this.rewind(),this.state=u;},t.safeToken=function(u){return u<0&&(u=this.tokenList.length-u),u<this.tokenList.length?this.tokenList[u]:this.tokenList[this.tokenList.length-1]},t.isNonSpecialPatternChar=function(u,D){var t=this.safeToken(u);return t.value===D&&("CHAR"===t.type||"ESCAPED_CHAR"===t.type||"INVALID_CHAR"===t.type)},t.isProtocolSuffix=function(){return this.isNonSpecialPatternChar(this.tokenIndex,":")},t.nextIsAuthoritySlashes=function(){return this.isNonSpecialPatternChar(this.tokenIndex+1,"/")&&this.isNonSpecialPatternChar(this.tokenIndex+2,"/")},t.isIdentityTerminator=function(){return this.isNonSpecialPatternChar(this.tokenIndex,"@")},t.isPasswordPrefix=function(){return this.isNonSpecialPatternChar(this.tokenIndex,":")},t.isPortPrefix=function(){return this.isNonSpecialPatternChar(this.tokenIndex,":")},t.isPathnameStart=function(){return this.isNonSpecialPatternChar(this.tokenIndex,"/")},t.isSearchPrefix=function(){if(this.isNonSpecialPatternChar(this.tokenIndex,"?"))return !0;if("?"!==this.tokenList[this.tokenIndex].value)return !1;var u=this.safeToken(this.tokenIndex-1);return "NAME"!==u.type&&"PATTERN"!==u.type&&"CLOSE"!==u.type&&"ASTERISK"!==u.type},t.isHashPrefix=function(){return this.isNonSpecialPatternChar(this.tokenIndex,"#")},t.isGroupOpen=function(){return "OPEN"==this.tokenList[this.tokenIndex].type},t.isGroupClose=function(){return "CLOSE"==this.tokenList[this.tokenIndex].type},t.isIPv6Open=function(){return this.isNonSpecialPatternChar(this.tokenIndex,"[")},t.isIPv6Close=function(){return this.isNonSpecialPatternChar(this.tokenIndex,"]")},t.makeComponentString=function(){var u=this.tokenList[this.tokenIndex],D=this.safeToken(this.componentStart).index;return this.input.substring(D,u.index)},t.computeShouldTreatAsStandardURL=function(){var u={};Object.assign(u,B),u.encodePart=g;var D=a(this.makeComponentString(),void 0,u);this.shouldTreatAsStandardURL=m(D);},D(u,[{key:"result",get:function(){return this.internalResult}}]),u}(),I=["protocol","username","password","hostname","port","pathname","search","hash"];function O(u,D){if("string"!=typeof u)throw new TypeError("parameter 1 is not of type 'string'.");var t=new URL(u,D);return {protocol:t.protocol.substring(0,t.protocol.length-1),username:t.username,password:t.password,hostname:t.hostname,port:t.port,pathname:t.pathname,search:""!=t.search?t.search.substring(1,t.search.length):void 0,hash:""!=t.hash?t.hash.substring(1,t.hash.length):void 0}}function H(u,D,t){var F;if("string"==typeof D.baseURL)try{F=new URL(D.baseURL),u.protocol=F.protocol?F.protocol.substring(0,F.protocol.length-1):"",u.username=F.username,u.password=F.password,u.hostname=F.hostname,u.port=F.port,u.pathname=F.pathname,u.search=F.search?F.search.substring(1,F.search.length):"",u.hash=F.hash?F.hash.substring(1,F.hash.length):"";}catch(u){throw new TypeError("invalid baseURL '"+D.baseURL+"'.")}if("string"==typeof D.protocol&&(u.protocol=function(u,D){var t;return u=(t=u).endsWith(":")?t.substr(0,t.length-":".length):t,D||""===u?u:g(u)}(D.protocol,t)),"string"==typeof D.username&&(u.username=function(u,D){if(D||""===u)return u;var t=new URL("https://example.com");return t.username=u,t.username}(D.username,t)),"string"==typeof D.password&&(u.password=function(u,D){if(D||""===u)return u;var t=new URL("https://example.com");return t.password=u,t.password}(D.password,t)),"string"==typeof D.hostname&&(u.hostname=function(u,D){return D||""===u?u:c(u)?y(u):v(u)}(D.hostname,t)),"string"==typeof D.port&&(u.port=function(u,D,t){return d(D)===u&&(u=""),t||""===u?u:R(u)}(D.port,u.protocol,t)),"string"==typeof D.pathname){if(u.pathname=D.pathname,F&&!function(u,D){return !(!u.length||"/"!==u[0]&&(!D||u.length<2||"\\"!=u[0]&&"{"!=u[0]||"/"!=u[1]))}(u.pathname,t)){var e=F.pathname.lastIndexOf("/");e>=0&&(u.pathname=F.pathname.substring(0,e+1)+u.pathname);}u.pathname=function(u,D,t){if(t||""===u)return u;if(D&&!l.includes(D))return new URL(D+":"+u).pathname;var F="/"==u[0];return u=new URL(F?u:"/-"+u,"https://example.com").pathname,F||(u=u.substring(2,u.length)),u}(u.pathname,u.protocol,t);}return "string"==typeof D.search&&(u.search=function(u,D){if(u=p(u,"?"),D||""===u)return u;var t=new URL("https://example.com");return t.search=u,t.search?t.search.substring(1,t.search.length):""}(D.search,t)),"string"==typeof D.hash&&(u.hash=function(u,D){if(u=p(u,"#"),D||""===u)return u;var t=new URL("https://example.com");return t.hash=u,t.hash?t.hash.substring(1,t.hash.length):""}(D.hash,t)),u}function N(u){return u.replace(/([+*?:{}()\\])/g,"\\$1")}function L(u,D){for(var t="[^"+(D.delimiter||"/#?").replace(/([.+*?^${}()[\]|/\\])/g,"\\$1")+"]+?",F=/(?:[\$0-9A-Z_a-z\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u08D3-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D81-\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1ABF\u1AC0\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA827\uA82C\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDE80-\uDEA9\uDEAB\uDEAC\uDEB0\uDEB1\uDF00-\uDF1C\uDF27\uDF30-\uDF50\uDFB0-\uDFC4\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD47\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDCE-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E-\uDC61\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD35\uDD37\uDD38\uDD3B-\uDD43\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6\uDFB0]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3\uDFE4\uDFF0\uDFF1]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A]|\uDB40[\uDD00-\uDDEF])/,e="",C=0;C<u.length;++C){var A=u[C],E=C>0?u[C-1]:null,n=C<u.length-1?u[C+1]:null;if("string"!=typeof A)if(""!==A.pattern){var r="number"!=typeof A.name,i=void 0!==D.prefixes?D.prefixes:"./",s=""!==A.suffix||""!==A.prefix&&(1!==A.prefix.length||!i.includes(A.prefix));s||!r||A.pattern!==t||""!==A.modifier||!n||n.prefix||n.suffix||(s="string"==typeof n?F.test(n.length>0?n[0]:""):"number"==typeof n.name),!s&&""===A.prefix&&E&&"string"==typeof E&&E.length>0&&(s=i.includes(E[E.length-1])),s&&(e+="{"),e+=N(A.prefix),r&&(e+=":"+A.name),".*"===A.pattern?e+=r||E&&"string"!=typeof E&&!E.modifier&&!s&&""===A.prefix?"(.*)":"*":A.pattern===t?r||(e+="("+t+")"):e+="("+A.pattern+")",A.pattern===t&&r&&""!==A.suffix&&F.test(A.suffix[0])&&(e+="\\"),e+=N(A.suffix),s&&(e+="}"),e+=A.modifier;}else {if(""===A.modifier){e+=N(A.prefix);continue}e+="{"+N(A.prefix)+"}"+A.modifier;}else e+=N(A);}return e}var U=function(){function u(u,D){void 0===u&&(u={}),this.pattern=void 0,this.regexp={},this.keys={},this.component_pattern={};try{if("string"==typeof u){var t=new b(u);if(t.parse(),u=t.result,D){if("string"!=typeof D)throw new TypeError("'baseURL' parameter is not of type 'string'.");u.baseURL=D;}else if("string"!=typeof u.protocol)throw new TypeError("A base URL must be provided for a relative constructor string.")}else if(D)throw new TypeError("parameter 1 is not of type 'string'.");if(!u||"object"!=typeof u)throw new TypeError("parameter 1 is not of type 'string' and cannot convert to dictionary.");var e;this.pattern=H({pathname:"*",protocol:"*",username:"*",password:"*",hostname:"*",port:"*",search:"*",hash:"*"},u,!0),d(this.pattern.protocol)===this.pattern.port&&(this.pattern.port="");for(var C,A=F(I);!(C=A()).done;)if((e=C.value)in this.pattern){var E={},r=this.pattern[e];switch(this.keys[e]=[],e){case"protocol":Object.assign(E,B),E.encodePart=g;break;case"username":Object.assign(E,B),E.encodePart=x;break;case"password":Object.assign(E,B),E.encodePart=S;break;case"hostname":Object.assign(E,o),E.encodePart=c(r)?y:v;break;case"port":Object.assign(E,B),E.encodePart=R;break;case"pathname":m(this.regexp.protocol)?(Object.assign(E,h),E.encodePart=k):(Object.assign(E,B),E.encodePart=w);break;case"search":Object.assign(E,B),E.encodePart=P;break;case"hash":Object.assign(E,B),E.encodePart=T;}try{var i=n(r,E);this.regexp[e]=s(i,this.keys[e],E),this.component_pattern[e]=L(i,E);}catch(u){throw new TypeError("invalid "+e+" pattern '"+this.pattern[e]+"'.")}}}catch(u){throw new TypeError("Failed to construct 'URLPattern': "+u.message)}}var t=u.prototype;return t.test=function(u,D){void 0===u&&(u={});var t,F={pathname:"",protocol:"",username:"",password:"",hostname:"",port:"",search:"",hash:""};if("string"!=typeof u&&D)throw new TypeError("parameter 1 is not of type 'string'.");if(void 0===u)return !1;try{F=H(F,"object"==typeof u?u:O(u,D),!1);}catch(u){return !1}for(t in this.pattern)if(!this.regexp[t].exec(F[t]))return !1;return !0},t.exec=function(u,D){void 0===u&&(u={});var t={pathname:"",protocol:"",username:"",password:"",hostname:"",port:"",search:"",hash:""};if("string"!=typeof u&&D)throw new TypeError("parameter 1 is not of type 'string'.");if(void 0!==u){try{t=H(t,"object"==typeof u?u:O(u,D),!1);}catch(u){return null}var e,C={};for(e in C.inputs=D?[u,D]:[u],this.pattern){var A=this.regexp[e].exec(t[e]);if(!A)return null;for(var E,n={},r=F(this.keys[e].entries());!(E=r()).done;){var i=E.value,s=i[1];"string"!=typeof s.name&&"number"!=typeof s.name||(n[s.name]=A[i[0]+1]||"");}C[e]={input:t[e]||"",groups:n};}return C}},D(u,[{key:"protocol",get:function(){return this.component_pattern.protocol}},{key:"username",get:function(){return this.component_pattern.username}},{key:"password",get:function(){return this.component_pattern.password}},{key:"hostname",get:function(){return this.component_pattern.hostname}},{key:"port",get:function(){return this.component_pattern.port}},{key:"pathname",get:function(){return this.component_pattern.pathname}},{key:"search",get:function(){return this.component_pattern.search}},{key:"hash",get:function(){return this.component_pattern.hash}}]),u}();

const INTERNAL$2 = { tick: 0, pool: new Map() };
function requestAnimationFrame(callback) {
    if (!INTERNAL$2.pool.size) {
        setTimeout$1(() => {
            const next = __performance_now();
            for (const func of INTERNAL$2.pool.values()) {
                func(next);
            }
            INTERNAL$2.pool.clear();
        }, 1000 / 16);
    }
    const func = __function_bind(callback, undefined);
    const tick = ++INTERNAL$2.tick;
    INTERNAL$2.pool.set(tick, func);
    return tick;
}
function cancelAnimationFrame(requestId) {
    const timeout = INTERNAL$2.pool.get(requestId);
    if (timeout) {
        clearTimeout$1(timeout);
        INTERNAL$2.pool.delete(requestId);
    }
}

class Node extends EventTarget {
    append(...nodesOrDOMStrings) {
    }
    appendChild(childNode) {
        return childNode;
    }
    after(...nodesOrDOMStrings) {
    }
    before(...nodesOrDOMStrings) {
    }
    prepend(...nodesOrDOMStrings) {
    }
    replaceChild(newChild, oldChild) {
        return oldChild;
    }
    removeChild(childNode) {
        return childNode;
    }
    get attributes() {
        return {};
    }
    get childNodes() {
        return [];
    }
    get children() {
        return [];
    }
    get ownerDocument() {
        return null;
    }
    get nodeValue() {
        return '';
    }
    set nodeValue(value) {
    }
    get textContent() {
        return '';
    }
    set textContent(value) {
    }
    get previousElementSibling() {
        return null;
    }
    get nextElementSibling() {
        return null;
    }
    [Symbol.for('nodejs.util.inspect.custom')](depth, options) {
        return `${this.constructor.name}`;
    }
}
class DocumentFragment extends Node {
}
class ShadowRoot extends DocumentFragment {
    get innerHTML() {
        return '';
    }
    set innerHTML(value) {
    }
}
const NodeFilter$1 = Object.assign({
    NodeFilter() {
        throw new TypeError('Illegal constructor');
    },
}.NodeFilter, {
    FILTER_ACCEPT: 1,
    FILTER_REJECT: 2,
    FILTER_SKIP: 3,
    SHOW_ALL: 4294967295,
    SHOW_ELEMENT: 1,
    SHOW_ATTRIBUTE: 2,
    SHOW_TEXT: 4,
    SHOW_CDATA_SECTION: 8,
    SHOW_ENTITY_REFERENCE: 16,
    SHOW_ENTITY: 32,
    SHOW_PROCESSING_INSTRUCTION: 64,
    SHOW_COMMENT: 128,
    SHOW_DOCUMENT: 256,
    SHOW_DOCUMENT_TYPE: 512,
    SHOW_DOCUMENT_FRAGMENT: 1024,
    SHOW_NOTATION: 2048,
});
class NodeIterator$1 {
    nextNode() {
        return null;
    }
    previousNode() {
        return null;
    }
    get filter() {
        const internals = internalsOf(this, 'NodeIterator', 'filter');
        return internals.filter;
    }
    get pointerBeforeReferenceNode() {
        const internals = internalsOf(this, 'NodeIterator', 'pointerBeforeReferenceNode');
        return internals.pointerBeforeReferenceNode;
    }
    get referenceNode() {
        const internals = internalsOf(this, 'NodeIterator', 'referenceNode');
        return internals.referenceNode;
    }
    get root() {
        const internals = internalsOf(this, 'NodeIterator', 'root');
        return internals.root;
    }
    get whatToShow() {
        const internals = internalsOf(this, 'NodeIterator', 'whatToShow');
        return internals.whatToShow;
    }
}
allowStringTag(Node);
allowStringTag(NodeIterator$1);
allowStringTag(DocumentFragment);
allowStringTag(ShadowRoot);

class CharacterData extends Node {
    constructor(data) {
        INTERNALS.set(super(), {
            data: String(data),
        });
    }
    get data() {
        return internalsOf(this, 'CharacterData', 'data')
            .data;
    }
    get textContent() {
        return internalsOf(this, 'CharacterData', 'textContent').data;
    }
}
class Comment extends CharacterData {
}
class Text extends CharacterData {
    get assignedSlot() {
        return null;
    }
    get wholeText() {
        return internalsOf(this, 'CharacterData', 'textContent').data;
    }
}
allowStringTag(CharacterData);
allowStringTag(Text);
allowStringTag(Comment);

class CustomEvent extends Event {
    constructor(type, params) {
        params = Object(params);
        super(type, params);
        if ('detail' in params)
            this.detail = params.detail;
    }
}
allowStringTag(CustomEvent);

const INTERNAL$1 = { tick: 0, pool: new Map() };
function requestIdleCallback(callback) {
    if (!INTERNAL$1.pool.size) {
        setTimeout$1(() => {
            const next = __performance_now();
            for (const func of INTERNAL$1.pool.values()) {
                func(next);
            }
            INTERNAL$1.pool.clear();
        }, 1000 / 16);
    }
    const func = __function_bind(callback, undefined);
    const tick = ++INTERNAL$1.tick;
    INTERNAL$1.pool.set(tick, func);
    return tick;
}
function cancelIdleCallback(requestId) {
    const timeout = INTERNAL$1.pool.get(requestId);
    if (timeout) {
        clearTimeout$1(timeout);
        INTERNAL$1.pool.delete(requestId);
    }
}

const PRIMITIVE  = 0;
const ARRAY      = 1;
const OBJECT     = 2;
const DATE       = 3;
const REGEXP     = 4;
const MAP        = 5;
const SET        = 6;
const ERROR      = 7;
const BIGINT     = 8;
// export const SYMBOL = 9;

const env = typeof self === 'object' ? self : globalThis;

const deserializer = ($, _) => {
  const as = (out, index) => {
    $.set(index, out);
    return out;
  };

  const unpair = index => {
    if ($.has(index))
      return $.get(index);

    const [type, value] = _[index];
    switch (type) {
      case PRIMITIVE:
        return as(value, index);
      case ARRAY: {
        const arr = as([], index);
        for (const index of value)
          arr.push(unpair(index));
        return arr;
      }
      case OBJECT: {
        const object = as({}, index);
        for (const [key, index] of value)
          object[unpair(key)] = unpair(index);
        return object;
      }
      case DATE:
        return as(new Date(value), index);
      case REGEXP: {
        const {source, flags} = value;
        return as(new RegExp(source, flags), index);
      }
      case MAP: {
        const map = as(new Map, index);
        for (const [key, index] of value)
          map.set(unpair(key), unpair(index));
        return map;
      }
      case SET: {
        const set = as(new Set, index);
        for (const index of value)
          set.add(unpair(index));
        return set;
      }
      case ERROR: {
        const {name, message} = value;
        return as(new env[name](message), index);
      }
      case BIGINT:
        return as(BigInt(value), index);
      case 'BigInt':
        return as(Object(BigInt(value)), index);
    }
    return as(new env[type](value), index);
  };

  return unpair;
};

/**
 * @typedef {Array<string,any>} Record a type representation
 */

/**
 * Returns a deserialized value from a serialized array of Records.
 * @param {Record[]} serialized a previously serialized value.
 * @returns {any}
 */
const deserialize = serialized => deserializer(new Map, serialized)(0);

const EMPTY = '';

const {toString} = {};
const {keys} = Object;

const typeOf = value => {
  const type = typeof value;
  if (type !== 'object' || !value)
    return [PRIMITIVE, type];

  const asString = toString.call(value).slice(8, -1);
  switch (asString) {
    case 'Array':
      return [ARRAY, EMPTY];
    case 'Object':
      return [OBJECT, EMPTY];
    case 'Date':
      return [DATE, EMPTY];
    case 'RegExp':
      return [REGEXP, EMPTY];
    case 'Map':
      return [MAP, EMPTY];
    case 'Set':
      return [SET, EMPTY];
  }

  if (asString.includes('Array'))
    return [ARRAY, asString];

  if (asString.includes('Error'))
    return [ERROR, asString];

  return [OBJECT, asString];
};

const shouldSkip = ([TYPE, type]) => (
  TYPE === PRIMITIVE &&
  (type === 'function' || type === 'symbol')
);

const serializer = (strict, json, $, _) => {

  const as = (out, value) => {
    const index = _.push(out) - 1;
    $.set(value, index);
    return index;
  };

  const pair = value => {
    if ($.has(value))
      return $.get(value);

    let [TYPE, type] = typeOf(value);
    switch (TYPE) {
      case PRIMITIVE: {
        let entry = value;
        switch (type) {
          case 'bigint':
            TYPE = BIGINT;
            entry = value.toString();
            break;
          case 'function':
          case 'symbol':
            if (strict)
              throw new TypeError('unable to serialize ' + type);
            entry = null;
            break;
        }
        return as([TYPE, entry], value);
      }
      case ARRAY: {
        if (type)
          return as([type, [...value]], value);
  
        const arr = [];
        const index = as([TYPE, arr], value);
        for (const entry of value)
          arr.push(pair(entry));
        return index;
      }
      case OBJECT: {
        if (type) {
          switch (type) {
            case 'BigInt':
              return as([type, value.toString()], value);
            case 'Boolean':
            case 'Number':
            case 'String':
              return as([type, value.valueOf()], value);
          }
        }

        if (json && ('toJSON' in value))
          return pair(value.toJSON());

        const entries = [];
        const index = as([TYPE, entries], value);
        for (const key of keys(value)) {
          if (strict || !shouldSkip(typeOf(value[key])))
            entries.push([pair(key), pair(value[key])]);
        }
        return index;
      }
      case DATE:
        return as([TYPE, value.toISOString()], value);
      case REGEXP: {
        const {source, flags} = value;
        return as([TYPE, {source, flags}], value);
      }
      case MAP: {
        const entries = [];
        const index = as([TYPE, entries], value);
        for (const [key, entry] of value) {
          if (strict || !(shouldSkip(typeOf(key)) || shouldSkip(typeOf(entry))))
            entries.push([pair(key), pair(entry)]);
        }
        return index;
      }
      case SET: {
        const entries = [];
        const index = as([TYPE, entries], value);
        for (const entry of value) {
          if (strict || !shouldSkip(typeOf(entry)))
            entries.push(pair(entry));
        }
        return index;
      }
    }

    const {message} = value;
    return as([TYPE, {name: type, message}], value);
  };

  return pair;
};

/**
 * @typedef {Array<string,any>} Record a type representation
 */

/**
 * Returns an array of serialized Records.
 * @param {any} value a serializable value.
 * @param {{lossy?: boolean}?} options an object with a `lossy` property that,
 *  if `true`, will not throw errors on incompatible types, and behave more
 *  like JSON stringify would behave. Symbol and Function will be discarded.
 * @returns {Record[]}
 */
 const serialize = (value, {json, lossy} = {}) => {
  const _ = [];
  return serializer(!(json || lossy), !!json, new Map, _)(value), _;
};

var structuredClone = (any, options) => deserialize(serialize(any, options));

const INTERNAL = { tick: 0, pool: new Map() };
function setTimeout(callback, delay = 0, ...args) {
    const func = __function_bind(callback, globalThis);
    const tick = ++INTERNAL.tick;
    const timeout = setTimeout$1(func, delay, ...args);
    INTERNAL.pool.set(tick, timeout);
    return tick;
}
function clearTimeout(timeoutId) {
    const timeout = INTERNAL.pool.get(timeoutId);
    if (timeout) {
        clearTimeout$1(timeout);
        INTERNAL.pool.delete(timeoutId);
    }
}

class TreeWalker {
    parentNode() {
        return null;
    }
    firstChild() {
        return null;
    }
    lastChild() {
        return null;
    }
    previousSibling() {
        return null;
    }
    nextSibling() {
        return null;
    }
    previousNode() {
        return null;
    }
    nextNode() {
        return null;
    }
    get currentNode() {
        const internals = internalsOf(this, 'TreeWalker', 'currentNode');
        return internals.currentNode;
    }
    get root() {
        const internals = internalsOf(this, 'TreeWalker', 'root');
        return internals.root;
    }
    get whatToShow() {
        const internals = internalsOf(this, 'TreeWalker', 'whatToShow');
        return internals.whatToShow;
    }
}
allowStringTag(TreeWalker);

class ImageData {
    constructor(arg0, arg1, ...args) {
        if (arguments.length < 2)
            throw new TypeError(`Failed to construct 'ImageData': 2 arguments required.`);
        /** Whether Uint8ClampedArray data is provided. */
        const hasData = __object_isPrototypeOf(Uint8ClampedArray.prototype, arg0);
        /** Image data, either provided or calculated. */
        const d = hasData
            ? arg0
            : new Uint8ClampedArray(asNumber(arg0, 'width') * asNumber(arg1, 'height') * 4);
        /** Image width. */
        const w = asNumber(hasData ? arg1 : arg0, 'width');
        /** Image height. */
        const h = d.length / w / 4;
        /** Image color space. */
        const c = String(Object(hasData ? args[1] : args[0]).colorSpace || 'srgb');
        // throw if a provided height does not match the calculated height
        if (args.length && asNumber(args[0], 'height') !== h)
            throw new DOMException('height is not equal to (4 * width * height)', 'IndexSizeError');
        // throw if a provided colorspace does not match a known colorspace
        if (c !== 'srgb' && c !== 'rec2020' && c !== 'display-p3')
            throw new TypeError('colorSpace is not known value');
        Object.defineProperty(this, 'data', {
            configurable: true,
            enumerable: true,
            value: d,
        });
        INTERNALS.set(this, {
            width: w,
            height: h,
            colorSpace: c,
        });
    }
    get data() {
        internalsOf(this, 'ImageData', 'data');
        return Object.getOwnPropertyDescriptor(this, 'data').value;
    }
    get width() {
        return internalsOf(this, 'ImageData', 'width').width;
    }
    get height() {
        return internalsOf(this, 'ImageData', 'height').height;
    }
}
allowStringTag(ImageData);
/** Returns a coerced number, optionally throwing if the number is zero-ish. */
const asNumber = (value, axis) => {
    value = Number(value) || 0;
    if (value === 0)
        throw new TypeError(`The source ${axis} is zero or not a number.`);
    return value;
};

class CanvasRenderingContext2D {
    get canvas() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'canvas').canvas;
    }
    get direction() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'direction')
            .direction;
    }
    get fillStyle() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'fillStyle')
            .fillStyle;
    }
    get filter() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'filter').filter;
    }
    get globalAlpha() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'globalAlpha')
            .globalAlpha;
    }
    get globalCompositeOperation() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'globalCompositeOperation').globalCompositeOperation;
    }
    get font() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'font').font;
    }
    get imageSmoothingEnabled() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'imageSmoothingEnabled').imageSmoothingEnabled;
    }
    get imageSmoothingQuality() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'imageSmoothingQuality').imageSmoothingQuality;
    }
    get lineCap() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'lineCap').lineCap;
    }
    get lineDashOffset() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'lineDashOffset')
            .lineDashOffset;
    }
    get lineJoin() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'lineJoin').lineJoin;
    }
    get lineWidth() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'lineWidth')
            .lineWidth;
    }
    get miterLimit() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'miterLimit')
            .miterLimit;
    }
    get strokeStyle() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'strokeStyle')
            .strokeStyle;
    }
    get shadowOffsetX() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'shadowOffsetX')
            .shadowOffsetX;
    }
    get shadowOffsetY() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'shadowOffsetY')
            .shadowOffsetY;
    }
    get shadowBlur() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'shadowBlur')
            .shadowBlur;
    }
    get shadowColor() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'shadowColor')
            .shadowColor;
    }
    get textAlign() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'textAlign')
            .textAlign;
    }
    get textBaseline() {
        return internalsOf(this, 'CanvasRenderingContext2D', 'textBaseline')
            .textBaseline;
    }
    arc() { }
    arcTo() { }
    beginPath() { }
    bezierCurveTo() { }
    clearRect() { }
    clip() { }
    closePath() { }
    createImageData(arg0, arg1) {
        /** Whether ImageData is provided. */
        const hasData = __object_isPrototypeOf(ImageData.prototype, arg0);
        const w = hasData ? arg0.width : arg0;
        const h = hasData ? arg0.height : arg1;
        const d = hasData
            ? arg0.data
            : new Uint8ClampedArray(w * h * 4);
        return new ImageData(d, w, h);
    }
    createLinearGradient() { }
    createPattern() { }
    createRadialGradient() { }
    drawFocusIfNeeded() { }
    drawImage() { }
    ellipse() { }
    fill() { }
    fillRect() { }
    fillText() { }
    getContextAttributes() { }
    getImageData() { }
    getLineDash() { }
    getTransform() { }
    isPointInPath() { }
    isPointInStroke() { }
    lineTo() { }
    measureText() { }
    moveTo() { }
    putImageData() { }
    quadraticCurveTo() { }
    rect() { }
    resetTransform() { }
    restore() { }
    rotate() { }
    save() { }
    scale() { }
    setLineDash() { }
    setTransform() { }
    stroke() { }
    strokeRect() { }
    strokeText() { }
    transform() { }
    translate() { }
}
allowStringTag(CanvasRenderingContext2D);
const __createCanvasRenderingContext2D = (canvas) => {
    const renderingContext2D = Object.create(CanvasRenderingContext2D.prototype);
    INTERNALS.set(renderingContext2D, {
        canvas,
        direction: 'inherit',
        fillStyle: '#000',
        filter: 'none',
        font: '10px sans-serif',
        globalAlpha: 0,
        globalCompositeOperation: 'source-over',
        imageSmoothingEnabled: false,
        imageSmoothingQuality: 'high',
        lineCap: 'butt',
        lineDashOffset: 0.0,
        lineJoin: 'miter',
        lineWidth: 1.0,
        miterLimit: 10.0,
        shadowBlur: 0,
        shadowColor: '#000',
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        strokeStyle: '#000',
        textAlign: 'start',
        textBaseline: 'alphabetic',
    });
    return renderingContext2D;
};

class CustomElementRegistry {
    /** Defines a new custom element using the given tag name and HTMLElement constructor. */
    define(name, constructor, options) {
        const internals = internalsOf(this, 'CustomElementRegistry', 'define');
        name = String(name);
        if (/[A-Z]/.test(name))
            throw new SyntaxError('Custom element name cannot contain an uppercase ASCII letter');
        if (!/^[a-z]/.test(name))
            throw new SyntaxError('Custom element name must have a lowercase ASCII letter as its first character');
        if (!/-/.test(name))
            throw new SyntaxError('Custom element name must contain a hyphen');
        INTERNALS.set(constructor, {
            attributes: {},
            localName: name,
        });
        internals.constructorByName.set(name, constructor);
        internals.nameByConstructor.set(constructor, name);
    }
    /** Returns the constructor associated with the given tag name. */
    get(name) {
        const internals = internalsOf(this, 'CustomElementRegistry', 'get');
        name = String(name).toLowerCase();
        return internals.constructorByName.get(name);
    }
    getName(constructor) {
        const internals = internalsOf(this, 'CustomElementRegistry', 'getName');
        return internals.nameByConstructor.get(constructor);
    }
}
allowStringTag(CustomElementRegistry);
const initCustomElementRegistry = (target, exclude) => {
    if (exclude.has('customElements'))
        return;
    const CustomElementRegistry = target.CustomElementRegistry || globalThis.CustomElementRegistry;
    const customElements = target.customElements ||
        (target.customElements = new CustomElementRegistry());
    INTERNALS.set(customElements, {
        constructorByName: new Map(),
        nameByConstructor: new Map(),
    });
};

class Element extends Node {
    constructor() {
        super();
        if (INTERNALS.has(new.target)) {
            const internals = internalsOf(new.target, 'Element', 'localName');
            INTERNALS.set(this, {
                attributes: {},
                localName: internals.localName,
                ownerDocument: this.ownerDocument,
                shadowInit: null,
                shadowRoot: null,
            });
        }
    }
    hasAttribute(name) {
        return false;
    }
    getAttribute(name) {
        return null;
    }
    setAttribute(name, value) {
    }
    removeAttribute(name) {
    }
    attachShadow(init) {
        if (arguments.length < 1)
            throw new TypeError(`Failed to execute 'attachShadow' on 'Element': 1 argument required, but only 0 present.`);
        if (init !== Object(init))
            throw new TypeError(`Failed to execute 'attachShadow' on 'Element': The provided value is not of type 'ShadowRootInit'.`);
        if (init.mode !== 'open' && init.mode !== 'closed')
            throw new TypeError(`Failed to execute 'attachShadow' on 'Element': Failed to read the 'mode' property from 'ShadowRootInit': The provided value '${init.mode}' is not a valid enum value of type ShadowRootMode.`);
        const internals = internalsOf(this, 'Element', 'attachShadow');
        if (internals.shadowRoot)
            throw new Error('The operation is not supported.');
        internals.shadowInit = internals.shadowInit || {
            mode: init.mode,
            delegatesFocus: Boolean(init.delegatesFocus),
        };
        internals.shadowRoot =
            internals.shadowRoot ||
                (/^open$/.test(internals.shadowInit.mode)
                    ? Object.setPrototypeOf(new EventTarget(), ShadowRoot.prototype)
                    : null);
        return internals.shadowRoot;
    }
    get assignedSlot() {
        return null;
    }
    get innerHTML() {
        internalsOf(this, 'Element', 'innerHTML');
        return '';
    }
    set innerHTML(value) {
        internalsOf(this, 'Element', 'innerHTML');
    }
    get shadowRoot() {
        const internals = internalsOf(this, 'Element', 'shadowRoot');
        return Object(internals.shadowInit).mode === 'open'
            ? internals.shadowRoot
            : null;
    }
    get localName() {
        return internalsOf(this, 'Element', 'localName')
            .localName;
    }
    get nodeName() {
        return internalsOf(this, 'Element', 'nodeName')
            .localName.toUpperCase();
    }
    get tagName() {
        return internalsOf(this, 'Element', 'tagName')
            .localName.toUpperCase();
    }
}
class HTMLElement$1 extends Element {
}
class HTMLBodyElement extends HTMLElement$1 {
}
class HTMLDivElement extends HTMLElement$1 {
}
class HTMLHeadElement extends HTMLElement$1 {
}
class HTMLHtmlElement extends HTMLElement$1 {
}
class HTMLSpanElement extends HTMLElement$1 {
}
class HTMLStyleElement extends HTMLElement$1 {
}
class HTMLTemplateElement extends HTMLElement$1 {
}
class HTMLUnknownElement extends HTMLElement$1 {
}
allowStringTag(Element);
allowStringTag(HTMLElement$1);
allowStringTag(HTMLBodyElement);
allowStringTag(HTMLDivElement);
allowStringTag(HTMLHeadElement);
allowStringTag(HTMLHtmlElement);
allowStringTag(HTMLSpanElement);
allowStringTag(HTMLStyleElement);
allowStringTag(HTMLTemplateElement);
allowStringTag(HTMLUnknownElement);

class Document extends Node {
    createElement(name) {
        const internals = internalsOf(this, 'Document', 'createElement');
        const customElementInternals = INTERNALS.get(internals.target.customElements);
        name = String(name).toLowerCase();
        const TypeOfHTMLElement = internals.constructorByName.get(name) ||
            (customElementInternals &&
                customElementInternals.constructorByName.get(name)) ||
            HTMLUnknownElement;
        const element = Object.setPrototypeOf(new EventTarget(), TypeOfHTMLElement.prototype);
        INTERNALS.set(element, {
            attributes: {},
            localName: name,
            ownerDocument: this,
            shadowInit: null,
            shadowRoot: null,
        });
        return element;
    }
    createNodeIterator(root, whatToShow = NodeFilter.SHOW_ALL, filter) {
        const target = Object.create(NodeIterator.prototype);
        INTERNALS.set(target, {
            filter,
            pointerBeforeReferenceNode: false,
            referenceNode: root,
            root,
            whatToShow,
        });
        return target;
    }
    createTextNode(data) {
        return new Text(data);
    }
    createTreeWalker(root, whatToShow = NodeFilter.SHOW_ALL, filter, expandEntityReferences) {
        const target = Object.create(TreeWalker.prototype);
        INTERNALS.set(target, {
            filter,
            currentNode: root,
            root,
            whatToShow,
        });
        return target;
    }
    get adoptedStyleSheets() {
        return [];
    }
    get styleSheets() {
        return [];
    }
}
class HTMLDocument extends Document {
}
allowStringTag(Document);
allowStringTag(HTMLDocument);
const initDocument = (target, exclude) => {
    if (exclude.has('document'))
        return;
    const EventTarget = target.EventTarget || globalThis.EventTarget;
    const HTMLDocument = target.HTMLDocument || globalThis.HTMLDocument;
    const document = (target.document = Object.setPrototypeOf(new EventTarget(), HTMLDocument.prototype));
    INTERNALS.set(document, {
        target,
        constructorByName: new Map([
            ['body', target.HTMLBodyElement],
            ['canvas', target.HTMLCanvasElement],
            ['div', target.HTMLDivElement],
            ['head', target.HTMLHeadElement],
            ['html', target.HTMLHtmlElement],
            ['img', target.HTMLImageElement],
            ['span', target.HTMLSpanElement],
            ['style', target.HTMLStyleElement],
        ]),
        nameByConstructor: new Map(),
    });
    const initElement = (name, Class) => {
        const target = Object.setPrototypeOf(new EventTarget(), Class.prototype);
        INTERNALS.set(target, {
            attributes: {},
            localName: name,
            ownerDocument: document,
            shadowRoot: null,
            shadowInit: null,
        });
        return target;
    };
    document.body = initElement('body', target.HTMLBodyElement);
    document.head = initElement('head', target.HTMLHeadElement);
    document.documentElement = initElement('html', target.HTMLHtmlElement);
};

class HTMLCanvasElement extends HTMLElement$1 {
    get height() {
        return internalsOf(this, 'HTMLCanvasElement', 'height').height;
    }
    set height(value) {
        internalsOf(this, 'HTMLCanvasElement', 'height').height =
            Number(value) || 0;
    }
    get width() {
        return internalsOf(this, 'HTMLCanvasElement', 'width').width;
    }
    set width(value) {
        internalsOf(this, 'HTMLCanvasElement', 'width').width = Number(value) || 0;
    }
    captureStream() {
        return null;
    }
    getContext(contextType) {
        const internals = internalsOf(this, 'HTMLCanvasElement', 'getContext');
        switch (contextType) {
            case '2d':
                if (internals.renderingContext2D)
                    return internals.renderingContext2D;
                internals.renderingContext2D = __createCanvasRenderingContext2D(this);
                return internals.renderingContext2D;
            default:
                return null;
        }
    }
    toBlob() { }
    toDataURL() { }
    transferControlToOffscreen() { }
}
allowStringTag(HTMLCanvasElement);

class HTMLImageElement extends HTMLElement$1 {
    get src() {
        return internalsOf(this, 'HTMLImageElement', 'src').src;
    }
    set src(value) {
        const internals = internalsOf(this, 'HTMLImageElement', 'src');
        internals.src = String(value);
    }
}
allowStringTag(HTMLImageElement);

function Image() {
    // @ts-expect-error
    INTERNALS.set(this, {
        attributes: {},
        localName: 'img',
        innerHTML: '',
        shadowRoot: null,
        shadowInit: null,
    });
}
Image.prototype = HTMLImageElement.prototype;

class MediaQueryList extends EventTarget {
    get matches() {
        return internalsOf(this, 'MediaQueryList', 'matches').matches;
    }
    get media() {
        return internalsOf(this, 'MediaQueryList', 'media').media;
    }
}
allowStringTag(MediaQueryList);
const initMediaQueryList = (target, exclude) => {
    if (exclude.has('MediaQueryList') || exclude.has('matchMedia'))
        return;
    const EventTarget = target.EventTarget || globalThis.EventTarget;
    const MediaQueryList = target.MediaQueryList || globalThis.MediaQueryList;
    target.matchMedia = function matchMedia(media) {
        const mql = Object.setPrototypeOf(new EventTarget(), MediaQueryList.prototype);
        INTERNALS.set(mql, {
            matches: false,
            media,
        });
        return mql;
    };
};

class IntersectionObserver {
    disconnect() { }
    observe() { }
    takeRecords() {
        return [];
    }
    unobserve() { }
}
class MutationObserver {
    disconnect() { }
    observe() { }
    takeRecords() {
        return [];
    }
    unobserve() { }
}
class ResizeObserver {
    disconnect() { }
    observe() { }
    takeRecords() {
        return [];
    }
    unobserve() { }
}
allowStringTag(MutationObserver);
allowStringTag(IntersectionObserver);
allowStringTag(ResizeObserver);

class OffscreenCanvas extends EventTarget {
    constructor(width, height) {
        super();
        if (arguments.length < 2)
            throw new TypeError(`Failed to construct 'OffscreenCanvas': 2 arguments required.`);
        width = Number(width) || 0;
        height = Number(height) || 0;
        INTERNALS.set(this, { width, height });
    }
    get height() {
        return internalsOf(this, 'OffscreenCanvas', 'height').height;
    }
    set height(value) {
        internalsOf(this, 'OffscreenCanvas', 'height').height = Number(value) || 0;
    }
    get width() {
        return internalsOf(this, 'OffscreenCanvas', 'width').width;
    }
    set width(value) {
        internalsOf(this, 'OffscreenCanvas', 'width').width = Number(value) || 0;
    }
    getContext(contextType) {
        const internals = internalsOf(this, 'HTMLCanvasElement', 'getContext');
        switch (contextType) {
            case '2d':
                if (internals.renderingContext2D)
                    return internals.renderingContext2D;
                internals.renderingContext2D = __createCanvasRenderingContext2D(this);
                return internals.renderingContext2D;
            default:
                return null;
        }
    }
    convertToBlob(options) {
        options = Object(options);
        Number(options.quality) || 0;
        const type = getImageType(String(options.type).trim().toLowerCase());
        return Promise.resolve(new Blob([], { type }));
    }
}
allowStringTag(OffscreenCanvas);
const getImageType = (type) => type === 'image/avif' ||
    type === 'image/jpeg' ||
    type === 'image/png' ||
    type === 'image/webp'
    ? type
    : 'image/png';

class Storage {
    clear() {
        internalsOf(this, 'Storage', 'clear').storage.clear();
    }
    getItem(key) {
        return getStringOrNull(internalsOf(this, 'Storage', 'getItem').storage.get(String(key)));
    }
    key(index) {
        return getStringOrNull([
            ...internalsOf(this, 'Storage', 'key').storage.keys(),
        ][Number(index) || 0]);
    }
    removeItem(key) {
        internalsOf(this, 'Storage', 'getItem').storage.delete(String(key));
    }
    setItem(key, value) {
        internalsOf(this, 'Storage', 'getItem').storage.set(String(key), String(value));
    }
    get length() {
        return internalsOf(this, 'Storage', 'size').storage.size;
    }
}
const getStringOrNull = (value) => typeof value === 'string' ? value : null;
const initStorage = (target, exclude) => {
    if (exclude.has('Storage') || exclude.has('localStorage'))
        return;
    target.localStorage = Object.create(Storage.prototype);
    const storageInternals = new Map();
    INTERNALS.set(target.localStorage, {
        storage: storageInternals,
    });
};

class StyleSheet {
}
class CSSStyleSheet extends StyleSheet {
    async replace(text) {
        return new CSSStyleSheet();
    }
    replaceSync(text) {
        return new CSSStyleSheet();
    }
    get cssRules() {
        return [];
    }
}
allowStringTag(StyleSheet);
allowStringTag(CSSStyleSheet);

class Window extends EventTarget {
    get self() {
        return this;
    }
    get top() {
        return this;
    }
    get window() {
        return this;
    }
    get innerHeight() {
        return 0;
    }
    get innerWidth() {
        return 0;
    }
    get scrollX() {
        return 0;
    }
    get scrollY() {
        return 0;
    }
}
allowStringTag(Window);
const initWindow = (target, exclude) => {
    if (exclude.has('Window') || exclude.has('window'))
        return;
    target.window = target;
};

function alert(...messages) {
    console.log(...messages);
}

const exclusionsForHTMLElement = [
    'CustomElementsRegistry',
    'HTMLElement',
    'HTMLBodyElement',
    'HTMLCanvasElement',
    'HTMLDivElement',
    'HTMLHeadElement',
    'HTMLHtmlElement',
    'HTMLImageElement',
    'HTMLStyleElement',
    'HTMLTemplateElement',
    'HTMLUnknownElement',
    'Image',
];
const exclusionsForElement = ['Element', ...exclusionsForHTMLElement];
const exclusionsForDocument = [
    'CustomElementsRegistry',
    'Document',
    'HTMLDocument',
    'document',
    'customElements',
];
const exclusionsForNode = [
    'Node',
    'DocumentFragment',
    'ShadowRoot',
    ...exclusionsForDocument,
    ...exclusionsForElement,
];
const exclusionsForEventTarget = [
    'Event',
    'CustomEvent',
    'EventTarget',
    'OffscreenCanvas',
    'MediaQueryList',
    'Window',
    ...exclusionsForNode,
];
const exclusionsForEvent = [
    'Event',
    'CustomEvent',
    'EventTarget',
    'MediaQueryList',
    'OffscreenCanvas',
    'Window',
    ...exclusionsForNode,
];
const exclusions = {
    'Document+': exclusionsForDocument,
    'Element+': exclusionsForElement,
    'Event+': exclusionsForEvent,
    'EventTarget+': exclusionsForEventTarget,
    'HTMLElement+': exclusionsForHTMLElement,
    'Node+': exclusionsForNode,
    'StyleSheet+': ['StyleSheet', 'CSSStyleSheet'],
};

const inheritance = {
    CSSStyleSheet: 'StyleSheet',
    CustomEvent: 'Event',
    DOMException: 'Error',
    Document: 'Node',
    DocumentFragment: 'Node',
    Element: 'Node',
    HTMLDocument: 'Document',
    HTMLElement: 'Element',
    HTMLBodyElement: 'HTMLElement',
    HTMLCanvasElement: 'HTMLElement',
    HTMLDivElement: 'HTMLElement',
    HTMLHeadElement: 'HTMLElement',
    HTMLHtmlElement: 'HTMLElement',
    HTMLImageElement: 'HTMLElement',
    HTMLSpanElement: 'HTMLElement',
    HTMLStyleElement: 'HTMLElement',
    HTMLTemplateElement: 'HTMLElement',
    HTMLUnknownElement: 'HTMLElement',
    Image: 'HTMLElement',
    MediaQueryList: 'EventTarget',
    Node: 'EventTarget',
    OffscreenCanvas: 'EventTarget',
    ShadowRoot: 'DocumentFragment',
    Window: 'EventTarget',
};

const polyfill = (target, options) => {
    const webAPIs = {
        ByteLengthQueuingStrategy,
        CanvasRenderingContext2D,
        CharacterData,
        Comment,
        CountQueuingStrategy,
        CSSStyleSheet,
        CustomElementRegistry,
        CustomEvent,
        Document,
        DocumentFragment,
        DOMException,
        Element,
        Event,
        EventTarget,
        File,
        FormData,
        HTMLDocument,
        HTMLElement: HTMLElement$1,
        HTMLBodyElement,
        HTMLCanvasElement,
        HTMLDivElement,
        HTMLHeadElement,
        HTMLHtmlElement,
        HTMLImageElement,
        HTMLSpanElement,
        HTMLStyleElement,
        HTMLTemplateElement,
        HTMLUnknownElement,
        Headers: Headers$1,
        IntersectionObserver,
        Image,
        ImageData,
        MediaQueryList,
        MutationObserver,
        Node,
        NodeFilter: NodeFilter$1,
        NodeIterator: NodeIterator$1,
        OffscreenCanvas,
        ReadableByteStreamController,
        ReadableStream: ReadableStream$1,
        ReadableStreamBYOBReader,
        ReadableStreamBYOBRequest,
        ReadableStreamDefaultController,
        ReadableStreamDefaultReader,
        Request: Request$1,
        ResizeObserver,
        Response: Response$1,
        ShadowRoot,
        Storage,
        StyleSheet,
        Text,
        TransformStream,
        TreeWalker,
        URLPattern: U,
        WritableStream,
        WritableStreamDefaultController,
        WritableStreamDefaultWriter,
        Window,
        alert,
        cancelAnimationFrame,
        cancelIdleCallback,
        clearTimeout,
        fetch: fetch$1,
        requestAnimationFrame,
        requestIdleCallback,
        setTimeout,
        structuredClone,
    };
    // initialize exclude options
    const excludeOptions = new Set(typeof Object(options).exclude === 'string'
        ? String(Object(options).exclude).trim().split(/\s+/)
        : Array.isArray(Object(options).exclude)
            ? Object(options).exclude.reduce((array, entry) => array.splice(array.length, 0, ...(typeof entry === 'string' ? entry.trim().split(/\s+/) : [])) && array, [])
            : []);
    // expand exclude options using exclusion shorthands
    for (const excludeOption of excludeOptions) {
        if (excludeOption in exclusions) {
            for (const exclusion of exclusions[excludeOption]) {
                excludeOptions.add(exclusion);
            }
        }
    }
    // apply each WebAPI
    for (const name of Object.keys(webAPIs)) {
        // skip WebAPIs that are excluded
        if (excludeOptions.has(name))
            continue;
        // skip WebAPIs that are built-in
        if (Object.hasOwnProperty.call(target, name))
            continue;
        // define WebAPIs on the target
        Object.defineProperty(target, name, {
            configurable: true,
            enumerable: true,
            writable: true,
            value: webAPIs[name],
        });
    }
    // ensure WebAPIs correctly inherit other WebAPIs
    for (const name of Object.keys(webAPIs)) {
        // skip WebAPIs that are excluded
        if (excludeOptions.has(name))
            continue;
        // skip WebAPIs that do not extend other WebAPIs
        if (!Object.hasOwnProperty.call(inheritance, name))
            continue;
        const Class = target[name];
        const Super = target[inheritance[name]];
        // skip WebAPIs that are not available
        if (!Class || !Super)
            continue;
        // skip WebAPIs that are already inherited correctly
        if (Object.getPrototypeOf(Class.prototype) === Super.prototype)
            continue;
        // define WebAPIs inheritance
        Object.setPrototypeOf(Class.prototype, Super.prototype);
    }
    if (!excludeOptions.has('HTMLDocument') &&
        !excludeOptions.has('HTMLElement')) {
        initDocument(target, excludeOptions);
        if (!excludeOptions.has('CustomElementRegistry')) {
            initCustomElementRegistry(target, excludeOptions);
        }
    }
    initMediaQueryList(target, excludeOptions);
    initStorage(target, excludeOptions);
    initWindow(target, excludeOptions);
    return target;
};
polyfill.internals = (target, name) => {
    const init = {
        CustomElementRegistry: initCustomElementRegistry,
        Document: initDocument,
        MediaQueryList: initMediaQueryList,
        Storage: initStorage,
        Window: initWindow,
    };
    init[name](target, new Set());
    return target;
};

var __accessCheck$3 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$3 = (obj, member, getter) => {
  __accessCheck$3(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$3 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$3 = (obj, member, value, setter) => {
  __accessCheck$3(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod$1 = (obj, member, method) => {
  __accessCheck$3(obj, member, "access private method");
  return method;
};
var _request, _requestValues, _outgoing, _ensureParsed, ensureParsed_fn, _ensureOutgoingMap, ensureOutgoingMap_fn, _parse, parse_fn;
const DELETED_EXPIRATION = new Date(0);
const DELETED_VALUE = "deleted";
class AstroCookie {
  constructor(value) {
    this.value = value;
  }
  json() {
    if (this.value === void 0) {
      throw new Error(`Cannot convert undefined to an object.`);
    }
    return JSON.parse(this.value);
  }
  number() {
    return Number(this.value);
  }
  boolean() {
    if (this.value === "false")
      return false;
    if (this.value === "0")
      return false;
    return Boolean(this.value);
  }
}
class AstroCookies {
  constructor(request) {
    __privateAdd$3(this, _ensureParsed);
    __privateAdd$3(this, _ensureOutgoingMap);
    __privateAdd$3(this, _parse);
    __privateAdd$3(this, _request, void 0);
    __privateAdd$3(this, _requestValues, void 0);
    __privateAdd$3(this, _outgoing, void 0);
    __privateSet$3(this, _request, request);
    __privateSet$3(this, _requestValues, null);
    __privateSet$3(this, _outgoing, null);
  }
  delete(key, options) {
    const serializeOptions = {
      expires: DELETED_EXPIRATION
    };
    if (options == null ? void 0 : options.domain) {
      serializeOptions.domain = options.domain;
    }
    if (options == null ? void 0 : options.path) {
      serializeOptions.path = options.path;
    }
    __privateMethod$1(this, _ensureOutgoingMap, ensureOutgoingMap_fn).call(this).set(key, [
      DELETED_VALUE,
      serialize$1(key, DELETED_VALUE, serializeOptions),
      false
    ]);
  }
  get(key) {
    if (__privateGet$3(this, _outgoing) !== null && __privateGet$3(this, _outgoing).has(key)) {
      let [serializedValue, , isSetValue] = __privateGet$3(this, _outgoing).get(key);
      if (isSetValue) {
        return new AstroCookie(serializedValue);
      } else {
        return new AstroCookie(void 0);
      }
    }
    const values = __privateMethod$1(this, _ensureParsed, ensureParsed_fn).call(this);
    const value = values[key];
    return new AstroCookie(value);
  }
  has(key) {
    if (__privateGet$3(this, _outgoing) !== null && __privateGet$3(this, _outgoing).has(key)) {
      let [, , isSetValue] = __privateGet$3(this, _outgoing).get(key);
      return isSetValue;
    }
    const values = __privateMethod$1(this, _ensureParsed, ensureParsed_fn).call(this);
    return !!values[key];
  }
  set(key, value, options) {
    let serializedValue;
    if (typeof value === "string") {
      serializedValue = value;
    } else {
      let toStringValue = value.toString();
      if (toStringValue === Object.prototype.toString.call(value)) {
        serializedValue = JSON.stringify(value);
      } else {
        serializedValue = toStringValue;
      }
    }
    const serializeOptions = {};
    if (options) {
      Object.assign(serializeOptions, options);
    }
    __privateMethod$1(this, _ensureOutgoingMap, ensureOutgoingMap_fn).call(this).set(key, [
      serializedValue,
      serialize$1(key, serializedValue, serializeOptions),
      true
    ]);
  }
  *headers() {
    if (__privateGet$3(this, _outgoing) == null)
      return;
    for (const [, value] of __privateGet$3(this, _outgoing)) {
      yield value[1];
    }
  }
}
_request = new WeakMap();
_requestValues = new WeakMap();
_outgoing = new WeakMap();
_ensureParsed = new WeakSet();
ensureParsed_fn = function() {
  if (!__privateGet$3(this, _requestValues)) {
    __privateMethod$1(this, _parse, parse_fn).call(this);
  }
  if (!__privateGet$3(this, _requestValues)) {
    __privateSet$3(this, _requestValues, {});
  }
  return __privateGet$3(this, _requestValues);
};
_ensureOutgoingMap = new WeakSet();
ensureOutgoingMap_fn = function() {
  if (!__privateGet$3(this, _outgoing)) {
    __privateSet$3(this, _outgoing, /* @__PURE__ */ new Map());
  }
  return __privateGet$3(this, _outgoing);
};
_parse = new WeakSet();
parse_fn = function() {
  const raw = __privateGet$3(this, _request).headers.get("cookie");
  if (!raw) {
    return;
  }
  __privateSet$3(this, _requestValues, parse(raw));
};

const astroCookiesSymbol = Symbol.for("astro.cookies");
function attachToResponse(response, cookies) {
  Reflect.set(response, astroCookiesSymbol, cookies);
}
function getFromResponse(response) {
  let cookies = Reflect.get(response, astroCookiesSymbol);
  if (cookies != null) {
    return cookies;
  } else {
    return void 0;
  }
}
function* getSetCookiesFromResponse(response) {
  const cookies = getFromResponse(response);
  if (!cookies) {
    return;
  }
  for (const headerValue of cookies.headers()) {
    yield headerValue;
  }
}

function baseCreateComponent(cb, moduleId) {
  cb.isAstroComponentFactory = true;
  cb.moduleId = moduleId;
  return cb;
}
function createComponentWithOptions(opts) {
  const cb = baseCreateComponent(opts.factory, opts.moduleId);
  cb.propagation = opts.propagation;
  return cb;
}
function createComponent(arg1, moduleId) {
  if (typeof arg1 === "function") {
    return baseCreateComponent(arg1, moduleId);
  } else {
    return createComponentWithOptions(arg1);
  }
}

const ASTRO_VERSION = "1.9.2";

function createDeprecatedFetchContentFn() {
  return () => {
    throw new Error("Deprecated: Astro.fetchContent() has been replaced with Astro.glob().");
  };
}
function createAstroGlobFn() {
  const globHandler = (importMetaGlobResult, globValue) => {
    let allEntries = [...Object.values(importMetaGlobResult)];
    if (allEntries.length === 0) {
      throw new Error(`Astro.glob(${JSON.stringify(globValue())}) - no matches found.`);
    }
    return Promise.all(allEntries.map((fn) => fn()));
  };
  return globHandler;
}
function createAstro(filePathname, _site, projectRootStr) {
  const site = _site ? new URL(_site) : void 0;
  const referenceURL = new URL(filePathname, `http://localhost`);
  const projectRoot = new URL(projectRootStr);
  return {
    site,
    generator: `Astro v${ASTRO_VERSION}`,
    fetchContent: createDeprecatedFetchContentFn(),
    glob: createAstroGlobFn(),
    resolve(...segments) {
      let resolved = segments.reduce((u, segment) => new URL(segment, u), referenceURL).pathname;
      if (resolved.startsWith(projectRoot.pathname)) {
        resolved = "/" + resolved.slice(projectRoot.pathname.length);
      }
      return resolved;
    }
  };
}

function getHandlerFromModule(mod, method) {
  if (mod[method]) {
    return mod[method];
  }
  if (method === "delete" && mod["del"]) {
    return mod["del"];
  }
  if (mod["all"]) {
    return mod["all"];
  }
  return void 0;
}
async function renderEndpoint(mod, context, ssr) {
  var _a;
  const { request, params } = context;
  const chosenMethod = (_a = request.method) == null ? void 0 : _a.toLowerCase();
  const handler = getHandlerFromModule(mod, chosenMethod);
  if (!ssr && ssr === false && chosenMethod && chosenMethod !== "get") {
    console.warn(`
${chosenMethod} requests are not available when building a static site. Update your config to output: 'server' to handle ${chosenMethod} requests.`);
  }
  if (!handler || typeof handler !== "function") {
    let response = new Response(null, {
      status: 404,
      headers: {
        "X-Astro-Response": "Not-Found"
      }
    });
    return response;
  }
  if (handler.length > 1) {
    console.warn(`
API routes with 2 arguments have been deprecated. Instead they take a single argument in the form of:

export function get({ params, request }) {
	//...
}

Update your code to remove this warning.`);
  }
  const proxy = new Proxy(context, {
    get(target, prop) {
      if (prop in target) {
        return Reflect.get(target, prop);
      } else if (prop in params) {
        console.warn(`
API routes no longer pass params as the first argument. Instead an object containing a params property is provided in the form of:

export function get({ params }) {
	// ...
}

Update your code to remove this warning.`);
        return Reflect.get(params, prop);
      } else {
        return void 0;
      }
    }
  });
  return handler.call(mod, proxy, request);
}

const escapeHTML = escape;
class HTMLBytes extends Uint8Array {
}
Object.defineProperty(HTMLBytes.prototype, Symbol.toStringTag, {
  get() {
    return "HTMLBytes";
  }
});
class HTMLString extends String {
  get [Symbol.toStringTag]() {
    return "HTMLString";
  }
}
const markHTMLString = (value) => {
  if (value instanceof HTMLString) {
    return value;
  }
  if (typeof value === "string") {
    return new HTMLString(value);
  }
  return value;
};
function isHTMLString(value) {
  return Object.prototype.toString.call(value) === "[object HTMLString]";
}
function markHTMLBytes(bytes) {
  return new HTMLBytes(bytes);
}
async function* unescapeChunksAsync(iterable) {
  for await (const chunk of iterable) {
    yield unescapeHTML(chunk);
  }
}
function* unescapeChunks(iterable) {
  for (const chunk of iterable) {
    yield unescapeHTML(chunk);
  }
}
function unescapeHTML(str) {
  if (!!str && typeof str === "object") {
    if (str instanceof Uint8Array) {
      return markHTMLBytes(str);
    } else if (str instanceof Response && str.body) {
      const body = str.body;
      return unescapeChunksAsync(body);
    } else if (typeof str.then === "function") {
      return Promise.resolve(str).then((value) => {
        return unescapeHTML(value);
      });
    } else if (Symbol.iterator in str) {
      return unescapeChunks(str);
    } else if (Symbol.asyncIterator in str) {
      return unescapeChunksAsync(str);
    }
  }
  return markHTMLString(str);
}

const AstroJSX = "astro:jsx";
const Empty = Symbol("empty");
const toSlotName = (slotAttr) => slotAttr;
function isVNode(vnode) {
  return vnode && typeof vnode === "object" && vnode[AstroJSX];
}
function transformSlots(vnode) {
  if (typeof vnode.type === "string")
    return vnode;
  const slots = {};
  if (isVNode(vnode.props.children)) {
    const child = vnode.props.children;
    if (!isVNode(child))
      return;
    if (!("slot" in child.props))
      return;
    const name = toSlotName(child.props.slot);
    slots[name] = [child];
    slots[name]["$$slot"] = true;
    delete child.props.slot;
    delete vnode.props.children;
  }
  if (Array.isArray(vnode.props.children)) {
    vnode.props.children = vnode.props.children.map((child) => {
      if (!isVNode(child))
        return child;
      if (!("slot" in child.props))
        return child;
      const name = toSlotName(child.props.slot);
      if (Array.isArray(slots[name])) {
        slots[name].push(child);
      } else {
        slots[name] = [child];
        slots[name]["$$slot"] = true;
      }
      delete child.props.slot;
      return Empty;
    }).filter((v) => v !== Empty);
  }
  Object.assign(vnode.props, slots);
}
function markRawChildren(child) {
  if (typeof child === "string")
    return markHTMLString(child);
  if (Array.isArray(child))
    return child.map((c) => markRawChildren(c));
  return child;
}
function transformSetDirectives(vnode) {
  if (!("set:html" in vnode.props || "set:text" in vnode.props))
    return;
  if ("set:html" in vnode.props) {
    const children = markRawChildren(vnode.props["set:html"]);
    delete vnode.props["set:html"];
    Object.assign(vnode.props, { children });
    return;
  }
  if ("set:text" in vnode.props) {
    const children = vnode.props["set:text"];
    delete vnode.props["set:text"];
    Object.assign(vnode.props, { children });
    return;
  }
}
function createVNode(type, props) {
  const vnode = {
    [Renderer]: "astro:jsx",
    [AstroJSX]: true,
    type,
    props: props ?? {}
  };
  transformSetDirectives(vnode);
  transformSlots(vnode);
  return vnode;
}

var idle_prebuilt_default = `(self.Astro=self.Astro||{}).idle=t=>{const e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)},window.dispatchEvent(new Event("astro:idle"));`;

var load_prebuilt_default = `(self.Astro=self.Astro||{}).load=a=>{(async()=>await(await a())())()},window.dispatchEvent(new Event("astro:load"));`;

var media_prebuilt_default = `(self.Astro=self.Astro||{}).media=(s,a)=>{const t=async()=>{await(await s())()};if(a.value){const e=matchMedia(a.value);e.matches?t():e.addEventListener("change",t,{once:!0})}},window.dispatchEvent(new Event("astro:media"));`;

var only_prebuilt_default = `(self.Astro=self.Astro||{}).only=t=>{(async()=>await(await t())())()},window.dispatchEvent(new Event("astro:only"));`;

var visible_prebuilt_default = `(self.Astro=self.Astro||{}).visible=(s,c,n)=>{const r=async()=>{await(await s())()};let i=new IntersectionObserver(e=>{for(const t of e)if(!!t.isIntersecting){i.disconnect(),r();break}});for(let e=0;e<n.children.length;e++){const t=n.children[e];i.observe(t)}},window.dispatchEvent(new Event("astro:visible"));`;

var astro_island_prebuilt_default = `var l;{const c={0:t=>t,1:t=>JSON.parse(t,o),2:t=>new RegExp(t),3:t=>new Date(t),4:t=>new Map(JSON.parse(t,o)),5:t=>new Set(JSON.parse(t,o)),6:t=>BigInt(t),7:t=>new URL(t),8:t=>new Uint8Array(JSON.parse(t)),9:t=>new Uint16Array(JSON.parse(t)),10:t=>new Uint32Array(JSON.parse(t))},o=(t,s)=>{if(t===""||!Array.isArray(s))return s;const[e,n]=s;return e in c?c[e](n):void 0};customElements.get("astro-island")||customElements.define("astro-island",(l=class extends HTMLElement{constructor(){super(...arguments);this.hydrate=()=>{if(!this.hydrator||this.parentElement&&this.parentElement.closest("astro-island[ssr]"))return;const s=this.querySelectorAll("astro-slot"),e={},n=this.querySelectorAll("template[data-astro-template]");for(const r of n){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("data-astro-template")||"default"]=r.innerHTML,r.remove())}for(const r of s){const i=r.closest(this.tagName);!i||!i.isSameNode(this)||(e[r.getAttribute("name")||"default"]=r.innerHTML)}const a=this.hasAttribute("props")?JSON.parse(this.getAttribute("props"),o):{};this.hydrator(this)(this.Component,a,e,{client:this.getAttribute("client")}),this.removeAttribute("ssr"),window.removeEventListener("astro:hydrate",this.hydrate),window.dispatchEvent(new CustomEvent("astro:hydrate"))}}connectedCallback(){!this.hasAttribute("await-children")||this.firstChild?this.childrenConnectedCallback():new MutationObserver((s,e)=>{e.disconnect(),this.childrenConnectedCallback()}).observe(this,{childList:!0})}async childrenConnectedCallback(){window.addEventListener("astro:hydrate",this.hydrate);let s=this.getAttribute("before-hydration-url");s&&await import(s),this.start()}start(){const s=JSON.parse(this.getAttribute("opts")),e=this.getAttribute("client");if(Astro[e]===void 0){window.addEventListener(\`astro:\${e}\`,()=>this.start(),{once:!0});return}Astro[e](async()=>{const n=this.getAttribute("renderer-url"),[a,{default:r}]=await Promise.all([import(this.getAttribute("component-url")),n?import(n):()=>()=>{}]),i=this.getAttribute("component-export")||"default";if(!i.includes("."))this.Component=a[i];else{this.Component=a;for(const d of i.split("."))this.Component=this.Component[d]}return this.hydrator=r,this.hydrate},s,this)}attributeChangedCallback(){this.hydrator&&this.hydrate()}},l.observedAttributes=["props"],l))}`;

function determineIfNeedsHydrationScript(result) {
  if (result._metadata.hasHydrationScript) {
    return false;
  }
  return result._metadata.hasHydrationScript = true;
}
const hydrationScripts = {
  idle: idle_prebuilt_default,
  load: load_prebuilt_default,
  only: only_prebuilt_default,
  media: media_prebuilt_default,
  visible: visible_prebuilt_default
};
function determinesIfNeedsDirectiveScript(result, directive) {
  if (result._metadata.hasDirectives.has(directive)) {
    return false;
  }
  result._metadata.hasDirectives.add(directive);
  return true;
}
function getDirectiveScriptText(directive) {
  if (!(directive in hydrationScripts)) {
    throw new Error(`Unknown directive: ${directive}`);
  }
  const directiveScriptText = hydrationScripts[directive];
  return directiveScriptText;
}
function getPrescripts(type, directive) {
  switch (type) {
    case "both":
      return `<style>astro-island,astro-slot{display:contents}</style><script>${getDirectiveScriptText(directive) + astro_island_prebuilt_default}<\/script>`;
    case "directive":
      return `<script>${getDirectiveScriptText(directive)}<\/script>`;
  }
  return "";
}

const headAndContentSym = Symbol.for("astro.headAndContent");
function isHeadAndContent(obj) {
  return typeof obj === "object" && !!obj[headAndContentSym];
}

function serializeListValue(value) {
  const hash = {};
  push(value);
  return Object.keys(hash).join(" ");
  function push(item) {
    if (item && typeof item.forEach === "function")
      item.forEach(push);
    else if (item === Object(item))
      Object.keys(item).forEach((name) => {
        if (item[name])
          push(name);
      });
    else {
      item = item === false || item == null ? "" : String(item).trim();
      if (item) {
        item.split(/\s+/).forEach((name) => {
          hash[name] = true;
        });
      }
    }
  }
}
function isPromise(value) {
  return !!value && typeof value === "object" && typeof value.then === "function";
}

var _a$1;
const renderTemplateResultSym = Symbol.for("astro.renderTemplateResult");
class RenderTemplateResult {
  constructor(htmlParts, expressions) {
    this[_a$1] = true;
    this.htmlParts = htmlParts;
    this.error = void 0;
    this.expressions = expressions.map((expression) => {
      if (isPromise(expression)) {
        return Promise.resolve(expression).catch((err) => {
          if (!this.error) {
            this.error = err;
            throw err;
          }
        });
      }
      return expression;
    });
  }
  get [(_a$1 = renderTemplateResultSym, Symbol.toStringTag)]() {
    return "AstroComponent";
  }
  async *[Symbol.asyncIterator]() {
    const { htmlParts, expressions } = this;
    for (let i = 0; i < htmlParts.length; i++) {
      const html = htmlParts[i];
      const expression = expressions[i];
      yield markHTMLString(html);
      yield* renderChild(expression);
    }
  }
}
function isRenderTemplateResult(obj) {
  return typeof obj === "object" && !!obj[renderTemplateResultSym];
}
async function* renderAstroTemplateResult(component) {
  for await (const value of component) {
    if (value || value === 0) {
      for await (const chunk of renderChild(value)) {
        switch (chunk.type) {
          case "directive": {
            yield chunk;
            break;
          }
          default: {
            yield markHTMLString(chunk);
            break;
          }
        }
      }
    }
  }
}
function renderTemplate(htmlParts, ...expressions) {
  return new RenderTemplateResult(htmlParts, expressions);
}

function isAstroComponentFactory(obj) {
  return obj == null ? false : obj.isAstroComponentFactory === true;
}
async function renderToString(result, componentFactory, props, children) {
  const factoryResult = await componentFactory(result, props, children);
  if (factoryResult instanceof Response) {
    const response = factoryResult;
    throw response;
  }
  let parts = new HTMLParts();
  const templateResult = isHeadAndContent(factoryResult) ? factoryResult.content : factoryResult;
  for await (const chunk of renderAstroTemplateResult(templateResult)) {
    parts.append(chunk, result);
  }
  return parts.toString();
}
function isAPropagatingComponent(result, factory) {
  let hint = factory.propagation || "none";
  if (factory.moduleId && result.propagation.has(factory.moduleId) && hint === "none") {
    hint = result.propagation.get(factory.moduleId);
  }
  return hint === "in-tree" || hint === "self";
}

const defineErrors = (errs) => errs;
const AstroErrorData = defineErrors({
  UnknownCompilerError: {
    title: "Unknown compiler error.",
    code: 1e3
  },
  StaticRedirectNotAvailable: {
    title: "`Astro.redirect` is not available in static mode.",
    code: 3001,
    message: "Redirects are only available when using `output: 'server'`. Update your Astro config if you need SSR features.",
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project for more information on how to enable SSR."
  },
  ClientAddressNotAvailable: {
    title: "`Astro.clientAddress` is not available in current adapter.",
    code: 3002,
    message: (adapterName) => `\`Astro.clientAddress\` is not available in the \`${adapterName}\` adapter. File an issue with the adapter to add support.`
  },
  StaticClientAddressNotAvailable: {
    title: "`Astro.clientAddress` is not available in static mode.",
    code: 3003,
    message: "`Astro.clientAddress` is only available when using `output: 'server'`. Update your Astro config if you need SSR features.",
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/#enabling-ssr-in-your-project for more information on how to enable SSR."
  },
  NoMatchingStaticPathFound: {
    title: "No static path found for requested path.",
    code: 3004,
    message: (pathName) => `A \`getStaticPaths()\` route pattern was matched, but no matching static path was found for requested path \`${pathName}\`.`,
    hint: (possibleRoutes) => `Possible dynamic routes being matched: ${possibleRoutes.join(", ")}.`
  },
  OnlyResponseCanBeReturned: {
    title: "Invalid type returned by Astro page.",
    code: 3005,
    message: (route, returnedValue) => `Route \`${route ? route : ""}\` returned a \`${returnedValue}\`. Only a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) can be returned from Astro files.`,
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/#response for more information."
  },
  MissingMediaQueryDirective: {
    title: "Missing value for `client:media` directive.",
    code: 3006,
    message: 'Media query not provided for `client:media` directive. A media query similar to `client:media="(max-width: 600px)"` must be provided'
  },
  NoMatchingRenderer: {
    title: "No matching renderer found.",
    code: 3007,
    message: (componentName, componentExtension, plural, validRenderersCount) => `Unable to render \`${componentName}\`.

${validRenderersCount > 0 ? `There ${plural ? "are." : "is."} ${validRenderersCount} renderer${plural ? "s." : ""} configured in your \`astro.config.mjs\` file,
but ${plural ? "none were." : "it was not."} able to server-side render \`${componentName}\`.` : `No valid renderer was found ${componentExtension ? `for the \`.${componentExtension}\` file extension.` : `for this file extension.`}`}`,
    hint: (probableRenderers) => `Did you mean to enable the ${probableRenderers} integration?

See https://docs.astro.build/en/core-concepts/framework-components/ for more information on how to install and configure integrations.`
  },
  NoClientEntrypoint: {
    title: "No client entrypoint specified in renderer.",
    code: 3008,
    message: (componentName, clientDirective, rendererName) => `\`${componentName}\` component has a \`client:${clientDirective}\` directive, but no client entrypoint was provided by \`${rendererName}\`.`,
    hint: "See https://docs.astro.build/en/reference/integrations-reference/#addrenderer-option for more information on how to configure your renderer."
  },
  NoClientOnlyHint: {
    title: "Missing hint on client:only directive.",
    code: 3009,
    message: (componentName) => `Unable to render \`${componentName}\`. When using the \`client:only\` hydration strategy, Astro needs a hint to use the correct renderer.`,
    hint: (probableRenderers) => `Did you mean to pass \`client:only="${probableRenderers}"\`? See https://docs.astro.build/en/reference/directives-reference/#clientonly for more information on client:only`
  },
  InvalidGetStaticPathParam: {
    title: "Invalid value returned by a `getStaticPaths` path.",
    code: 3010,
    message: (paramType) => `Invalid params given to \`getStaticPaths\` path. Expected an \`object\`, got \`${paramType}\``,
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  InvalidGetStaticPathsReturn: {
    title: "Invalid value returned by getStaticPaths.",
    code: 3011,
    message: (returnType) => `Invalid type returned by \`getStaticPaths\`. Expected an \`array\`, got \`${returnType}\``,
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  GetStaticPathsRemovedRSSHelper: {
    title: "getStaticPaths RSS helper is not available anymore.",
    code: 3012,
    message: "The RSS helper has been removed from `getStaticPaths`. Try the new @astrojs/rss package instead.",
    hint: "See https://docs.astro.build/en/guides/rss/ for more information."
  },
  GetStaticPathsExpectedParams: {
    title: "Missing params property on `getStaticPaths` route.",
    code: 3013,
    message: "Missing or empty required `params` property on `getStaticPaths` route.",
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  GetStaticPathsInvalidRouteParam: {
    title: "Invalid value for `getStaticPaths` route parameter.",
    code: 3014,
    message: (key, value, valueType) => `Invalid getStaticPaths route parameter for \`${key}\`. Expected undefined, a string or a number, received \`${valueType}\` (\`${value}\`)`,
    hint: "See https://docs.astro.build/en/reference/api-reference/#getstaticpaths for more information on getStaticPaths."
  },
  GetStaticPathsRequired: {
    title: "`getStaticPaths()` function required for dynamic routes.",
    code: 3015,
    message: "`getStaticPaths()` function is required for dynamic routes. Make sure that you `export` a `getStaticPaths` function from your dynamic route.",
    hint: `See https://docs.astro.build/en/core-concepts/routing/#dynamic-routes for more information on dynamic routes.

Alternatively, set \`output: "server"\` in your Astro config file to switch to a non-static server build.
See https://docs.astro.build/en/guides/server-side-rendering/ for more information on non-static rendering.`
  },
  ReservedSlotName: {
    title: "Invalid slot name.",
    code: 3016,
    message: (slotName) => `Unable to create a slot named \`${slotName}\`. \`${slotName}\` is a reserved slot name. Please update the name of this slot.`
  },
  NoAdapterInstalled: {
    title: "Cannot use Server-side Rendering without an adapter.",
    code: 3017,
    message: `Cannot use \`output: 'server'\` without an adapter. Please install and configure the appropriate server adapter for your final deployment.`,
    hint: "See https://docs.astro.build/en/guides/server-side-rendering/ for more information."
  },
  NoMatchingImport: {
    title: "No import found for component.",
    code: 3018,
    message: (componentName) => `Could not render \`${componentName}\`. No matching import has been found for \`${componentName}\`.`,
    hint: "Please make sure the component is properly imported."
  },
  InvalidPrerenderExport: {
    title: "Invalid prerender export.",
    code: 3019,
    message: (prefix, suffix) => {
      let msg = `A \`prerender\` export has been detected, but its value cannot be statically analyzed.`;
      if (prefix !== "const")
        msg += `
Expected \`const\` declaration but got \`${prefix}\`.`;
      if (suffix !== "true")
        msg += `
Expected \`true\` value but got \`${suffix}\`.`;
      return msg;
    },
    hint: "Mutable values declared at runtime are not supported. Please make sure to use exactly `export const prerender = true`."
  },
  UnknownViteError: {
    title: "Unknown Vite Error.",
    code: 4e3
  },
  FailedToLoadModuleSSR: {
    title: "Could not import file.",
    code: 4001,
    message: (importName) => `Could not import \`${importName}\`.`,
    hint: "This is often caused by a typo in the import path. Please make sure the file exists."
  },
  InvalidGlob: {
    title: "Invalid glob pattern.",
    code: 4002,
    message: (globPattern) => `Invalid glob pattern: \`${globPattern}\`. Glob patterns must start with './', '../' or '/'.`,
    hint: "See https://docs.astro.build/en/guides/imports/#glob-patterns for more information on supported glob patterns."
  },
  UnknownCSSError: {
    title: "Unknown CSS Error.",
    code: 5e3
  },
  CSSSyntaxError: {
    title: "CSS Syntax Error.",
    code: 5001
  },
  UnknownMarkdownError: {
    title: "Unknown Markdown Error.",
    code: 6e3
  },
  MarkdownFrontmatterParseError: {
    title: "Failed to parse Markdown frontmatter.",
    code: 6001
  },
  MarkdownContentSchemaValidationError: {
    title: "Content collection frontmatter invalid.",
    code: 6002,
    message: (collection, entryId, error) => {
      return [
        `${String(collection)} \u2192 ${String(entryId)} frontmatter does not match collection schema.`,
        ...error.errors.map((zodError) => zodError.message)
      ].join("\n");
    },
    hint: "See https://docs.astro.build/en/guides/content-collections/ for more information on content schemas."
  },
  UnknownConfigError: {
    title: "Unknown configuration error.",
    code: 7e3
  },
  ConfigNotFound: {
    title: "Specified configuration file not found.",
    code: 7001,
    message: (configFile) => `Unable to resolve \`--config "${configFile}"\`. Does the file exist?`
  },
  ConfigLegacyKey: {
    title: "Legacy configuration detected.",
    code: 7002,
    message: (legacyConfigKey) => `Legacy configuration detected: \`${legacyConfigKey}\`.`,
    hint: "Please update your configuration to the new format.\nSee https://astro.build/config for more information."
  },
  UnknownCLIError: {
    title: "Unknown CLI Error.",
    code: 8e3
  },
  GenerateContentTypesError: {
    title: "Failed to generate content types.",
    code: 8001,
    message: "`astro sync` command failed to generate content collection types.",
    hint: "Check your `src/content/config.*` file for typos."
  },
  UnknownError: {
    title: "Unknown Error.",
    code: 99999
  }
});

function normalizeLF(code) {
  return code.replace(/\r\n|\r(?!\n)|\n/g, "\n");
}
function getErrorDataByCode(code) {
  const entry = Object.entries(AstroErrorData).find((data) => data[1].code === code);
  if (entry) {
    return {
      name: entry[0],
      data: entry[1]
    };
  }
}

function codeFrame(src, loc) {
  if (!loc || loc.line === void 0 || loc.column === void 0) {
    return "";
  }
  const lines = normalizeLF(src).split("\n").map((ln) => ln.replace(/\t/g, "  "));
  const visibleLines = [];
  for (let n = -2; n <= 2; n++) {
    if (lines[loc.line + n])
      visibleLines.push(loc.line + n);
  }
  let gutterWidth = 0;
  for (const lineNo of visibleLines) {
    let w = `> ${lineNo}`;
    if (w.length > gutterWidth)
      gutterWidth = w.length;
  }
  let output = "";
  for (const lineNo of visibleLines) {
    const isFocusedLine = lineNo === loc.line - 1;
    output += isFocusedLine ? "> " : "  ";
    output += `${lineNo + 1} | ${lines[lineNo]}
`;
    if (isFocusedLine)
      output += `${Array.from({ length: gutterWidth }).join(" ")}  | ${Array.from({
        length: loc.column
      }).join(" ")}^
`;
  }
  return output;
}

class AstroError extends Error {
  constructor(props, ...params) {
    var _a;
    super(...params);
    this.type = "AstroError";
    const { code, name, title, message, stack, location, hint, frame } = props;
    this.errorCode = code;
    if (name && name !== "Error") {
      this.name = name;
    } else {
      this.name = ((_a = getErrorDataByCode(this.errorCode)) == null ? void 0 : _a.name) ?? "UnknownError";
    }
    this.title = title;
    if (message)
      this.message = message;
    this.stack = stack ? stack : this.stack;
    this.loc = location;
    this.hint = hint;
    this.frame = frame;
  }
  setErrorCode(errorCode) {
    this.errorCode = errorCode;
  }
  setLocation(location) {
    this.loc = location;
  }
  setName(name) {
    this.name = name;
  }
  setMessage(message) {
    this.message = message;
  }
  setHint(hint) {
    this.hint = hint;
  }
  setFrame(source, location) {
    this.frame = codeFrame(source, location);
  }
  static is(err) {
    return err.type === "AstroError";
  }
}

const PROP_TYPE = {
  Value: 0,
  JSON: 1,
  RegExp: 2,
  Date: 3,
  Map: 4,
  Set: 5,
  BigInt: 6,
  URL: 7,
  Uint8Array: 8,
  Uint16Array: 9,
  Uint32Array: 10
};
function serializeArray(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = value.map((v) => {
    return convertToSerializedForm(v, metadata, parents);
  });
  parents.delete(value);
  return serialized;
}
function serializeObject(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  if (parents.has(value)) {
    throw new Error(`Cyclic reference detected while serializing props for <${metadata.displayName} client:${metadata.hydrate}>!

Cyclic references cannot be safely serialized for client-side usage. Please remove the cyclic reference.`);
  }
  parents.add(value);
  const serialized = Object.fromEntries(
    Object.entries(value).map(([k, v]) => {
      return [k, convertToSerializedForm(v, metadata, parents)];
    })
  );
  parents.delete(value);
  return serialized;
}
function convertToSerializedForm(value, metadata = {}, parents = /* @__PURE__ */ new WeakSet()) {
  const tag = Object.prototype.toString.call(value);
  switch (tag) {
    case "[object Date]": {
      return [PROP_TYPE.Date, value.toISOString()];
    }
    case "[object RegExp]": {
      return [PROP_TYPE.RegExp, value.source];
    }
    case "[object Map]": {
      return [
        PROP_TYPE.Map,
        JSON.stringify(serializeArray(Array.from(value), metadata, parents))
      ];
    }
    case "[object Set]": {
      return [
        PROP_TYPE.Set,
        JSON.stringify(serializeArray(Array.from(value), metadata, parents))
      ];
    }
    case "[object BigInt]": {
      return [PROP_TYPE.BigInt, value.toString()];
    }
    case "[object URL]": {
      return [PROP_TYPE.URL, value.toString()];
    }
    case "[object Array]": {
      return [PROP_TYPE.JSON, JSON.stringify(serializeArray(value, metadata, parents))];
    }
    case "[object Uint8Array]": {
      return [PROP_TYPE.Uint8Array, JSON.stringify(Array.from(value))];
    }
    case "[object Uint16Array]": {
      return [PROP_TYPE.Uint16Array, JSON.stringify(Array.from(value))];
    }
    case "[object Uint32Array]": {
      return [PROP_TYPE.Uint32Array, JSON.stringify(Array.from(value))];
    }
    default: {
      if (value !== null && typeof value === "object") {
        return [PROP_TYPE.Value, serializeObject(value, metadata, parents)];
      } else {
        return [PROP_TYPE.Value, value];
      }
    }
  }
}
function serializeProps(props, metadata) {
  const serialized = JSON.stringify(serializeObject(props, metadata));
  return serialized;
}

const HydrationDirectivesRaw = ["load", "idle", "media", "visible", "only"];
const HydrationDirectives = new Set(HydrationDirectivesRaw);
const HydrationDirectiveProps = new Set(HydrationDirectivesRaw.map((n) => `client:${n}`));
function extractDirectives(displayName, inputProps) {
  let extracted = {
    isPage: false,
    hydration: null,
    props: {}
  };
  for (const [key, value] of Object.entries(inputProps)) {
    if (key.startsWith("server:")) {
      if (key === "server:root") {
        extracted.isPage = true;
      }
    }
    if (key.startsWith("client:")) {
      if (!extracted.hydration) {
        extracted.hydration = {
          directive: "",
          value: "",
          componentUrl: "",
          componentExport: { value: "" }
        };
      }
      switch (key) {
        case "client:component-path": {
          extracted.hydration.componentUrl = value;
          break;
        }
        case "client:component-export": {
          extracted.hydration.componentExport.value = value;
          break;
        }
        case "client:component-hydration": {
          break;
        }
        case "client:display-name": {
          break;
        }
        default: {
          extracted.hydration.directive = key.split(":")[1];
          extracted.hydration.value = value;
          if (!HydrationDirectives.has(extracted.hydration.directive)) {
            throw new Error(
              `Error: invalid hydration directive "${key}". Supported hydration methods: ${Array.from(
                HydrationDirectiveProps
              ).join(", ")}`
            );
          }
          if (extracted.hydration.directive === "media" && typeof extracted.hydration.value !== "string") {
            throw new AstroError(AstroErrorData.MissingMediaQueryDirective);
          }
          break;
        }
      }
    } else if (key === "class:list") {
      if (value) {
        extracted.props[key.slice(0, -5)] = serializeListValue(value);
      }
    } else {
      extracted.props[key] = value;
    }
  }
  for (const sym of Object.getOwnPropertySymbols(inputProps)) {
    extracted.props[sym] = inputProps[sym];
  }
  return extracted;
}
async function generateHydrateScript(scriptOptions, metadata) {
  const { renderer, result, astroId, props, attrs } = scriptOptions;
  const { hydrate, componentUrl, componentExport } = metadata;
  if (!componentExport.value) {
    throw new Error(
      `Unable to resolve a valid export for "${metadata.displayName}"! Please open an issue at https://astro.build/issues!`
    );
  }
  const island = {
    children: "",
    props: {
      uid: astroId
    }
  };
  if (attrs) {
    for (const [key, value] of Object.entries(attrs)) {
      island.props[key] = escapeHTML(value);
    }
  }
  island.props["component-url"] = await result.resolve(decodeURI(componentUrl));
  if (renderer.clientEntrypoint) {
    island.props["component-export"] = componentExport.value;
    island.props["renderer-url"] = await result.resolve(decodeURI(renderer.clientEntrypoint));
    island.props["props"] = escapeHTML(serializeProps(props, metadata));
  }
  island.props["ssr"] = "";
  island.props["client"] = hydrate;
  let beforeHydrationUrl = await result.resolve("astro:scripts/before-hydration.js");
  if (beforeHydrationUrl.length) {
    island.props["before-hydration-url"] = beforeHydrationUrl;
  }
  island.props["opts"] = escapeHTML(
    JSON.stringify({
      name: metadata.displayName,
      value: metadata.hydrateArgs || ""
    })
  );
  return island;
}

var _a;
const astroComponentInstanceSym = Symbol.for("astro.componentInstance");
class AstroComponentInstance {
  constructor(result, props, slots, factory) {
    this[_a] = true;
    this.result = result;
    this.props = props;
    this.factory = factory;
    this.slotValues = {};
    for (const name in slots) {
      this.slotValues[name] = slots[name]();
    }
  }
  async init() {
    this.returnValue = this.factory(this.result, this.props, this.slotValues);
    return this.returnValue;
  }
  async *render() {
    if (this.returnValue === void 0) {
      await this.init();
    }
    let value = this.returnValue;
    if (isPromise(value)) {
      value = await value;
    }
    if (isHeadAndContent(value)) {
      yield* value.content;
    } else {
      yield* renderChild(value);
    }
  }
}
_a = astroComponentInstanceSym;
function validateComponentProps(props, displayName) {
  if (props != null) {
    for (const prop of Object.keys(props)) {
      if (HydrationDirectiveProps.has(prop)) {
        console.warn(
          `You are attempting to render <${displayName} ${prop} />, but ${displayName} is an Astro component. Astro components do not render in the client and should not have a hydration directive. Please use a framework component for client rendering.`
        );
      }
    }
  }
}
function createAstroComponentInstance(result, displayName, factory, props, slots = {}) {
  validateComponentProps(props, displayName);
  const instance = new AstroComponentInstance(result, props, slots, factory);
  if (isAPropagatingComponent(result, factory) && !result.propagators.has(factory)) {
    result.propagators.set(factory, instance);
  }
  return instance;
}
function isAstroComponentInstance(obj) {
  return typeof obj === "object" && !!obj[astroComponentInstanceSym];
}

async function* renderChild(child) {
  child = await child;
  if (child instanceof SlotString) {
    if (child.instructions) {
      yield* child.instructions;
    }
    yield child;
  } else if (isHTMLString(child)) {
    yield child;
  } else if (Array.isArray(child)) {
    for (const value of child) {
      yield markHTMLString(await renderChild(value));
    }
  } else if (typeof child === "function") {
    yield* renderChild(child());
  } else if (typeof child === "string") {
    yield markHTMLString(escapeHTML(child));
  } else if (!child && child !== 0) ; else if (isRenderTemplateResult(child)) {
    yield* renderAstroTemplateResult(child);
  } else if (isAstroComponentInstance(child)) {
    yield* child.render();
  } else if (ArrayBuffer.isView(child)) {
    yield child;
  } else if (typeof child === "object" && (Symbol.asyncIterator in child || Symbol.iterator in child)) {
    yield* child;
  } else {
    yield child;
  }
}

const slotString = Symbol.for("astro:slot-string");
class SlotString extends HTMLString {
  constructor(content, instructions) {
    super(content);
    this.instructions = instructions;
    this[slotString] = true;
  }
}
function isSlotString(str) {
  return !!str[slotString];
}
async function renderSlot(_result, slotted, fallback) {
  if (slotted) {
    let iterator = renderChild(slotted);
    let content = "";
    let instructions = null;
    for await (const chunk of iterator) {
      if (chunk.type === "directive") {
        if (instructions === null) {
          instructions = [];
        }
        instructions.push(chunk);
      } else {
        content += chunk;
      }
    }
    return markHTMLString(new SlotString(content, instructions));
  }
  return fallback;
}
async function renderSlots(result, slots = {}) {
  let slotInstructions = null;
  let children = {};
  if (slots) {
    await Promise.all(
      Object.entries(slots).map(
        ([key, value]) => renderSlot(result, value).then((output) => {
          if (output.instructions) {
            if (slotInstructions === null) {
              slotInstructions = [];
            }
            slotInstructions.push(...output.instructions);
          }
          children[key] = output;
        })
      )
    );
  }
  return { slotInstructions, children };
}

const Fragment = Symbol.for("astro:fragment");
const Renderer = Symbol.for("astro:renderer");
const encoder = new TextEncoder();
const decoder = new TextDecoder();
function stringifyChunk(result, chunk) {
  switch (chunk.type) {
    case "directive": {
      const { hydration } = chunk;
      let needsHydrationScript = hydration && determineIfNeedsHydrationScript(result);
      let needsDirectiveScript = hydration && determinesIfNeedsDirectiveScript(result, hydration.directive);
      let prescriptType = needsHydrationScript ? "both" : needsDirectiveScript ? "directive" : null;
      if (prescriptType) {
        let prescripts = getPrescripts(prescriptType, hydration.directive);
        return markHTMLString(prescripts);
      } else {
        return "";
      }
    }
    default: {
      if (isSlotString(chunk)) {
        let out = "";
        const c = chunk;
        if (c.instructions) {
          for (const instr of c.instructions) {
            out += stringifyChunk(result, instr);
          }
        }
        out += chunk.toString();
        return out;
      }
      return chunk.toString();
    }
  }
}
class HTMLParts {
  constructor() {
    this.parts = "";
  }
  append(part, result) {
    if (ArrayBuffer.isView(part)) {
      this.parts += decoder.decode(part);
    } else {
      this.parts += stringifyChunk(result, part);
    }
  }
  toString() {
    return this.parts;
  }
  toArrayBuffer() {
    return encoder.encode(this.parts);
  }
}
function chunkToByteArray(result, chunk) {
  if (chunk instanceof Uint8Array) {
    return chunk;
  }
  return encoder.encode(stringifyChunk(result, chunk));
}

const ClientOnlyPlaceholder = "astro-client-only";
class Skip {
  constructor(vnode) {
    this.vnode = vnode;
    this.count = 0;
  }
  increment() {
    this.count++;
  }
  haveNoTried() {
    return this.count === 0;
  }
  isCompleted() {
    return this.count > 2;
  }
}
Skip.symbol = Symbol("astro:jsx:skip");
let originalConsoleError;
let consoleFilterRefs = 0;
async function renderJSX(result, vnode) {
  switch (true) {
    case vnode instanceof HTMLString:
      if (vnode.toString().trim() === "") {
        return "";
      }
      return vnode;
    case typeof vnode === "string":
      return markHTMLString(escapeHTML(vnode));
    case typeof vnode === "function":
      return vnode;
    case (!vnode && vnode !== 0):
      return "";
    case Array.isArray(vnode):
      return markHTMLString(
        (await Promise.all(vnode.map((v) => renderJSX(result, v)))).join("")
      );
  }
  let skip;
  if (vnode.props) {
    if (vnode.props[Skip.symbol]) {
      skip = vnode.props[Skip.symbol];
    } else {
      skip = new Skip(vnode);
    }
  } else {
    skip = new Skip(vnode);
  }
  return renderJSXVNode(result, vnode, skip);
}
async function renderJSXVNode(result, vnode, skip) {
  if (isVNode(vnode)) {
    switch (true) {
      case !vnode.type: {
        throw new Error(`Unable to render ${result._metadata.pathname} because it contains an undefined Component!
Did you forget to import the component or is it possible there is a typo?`);
      }
      case vnode.type === Symbol.for("astro:fragment"):
        return renderJSX(result, vnode.props.children);
      case vnode.type.isAstroComponentFactory: {
        let props = {};
        let slots = {};
        for (const [key, value] of Object.entries(vnode.props ?? {})) {
          if (key === "children" || value && typeof value === "object" && value["$$slot"]) {
            slots[key === "children" ? "default" : key] = () => renderJSX(result, value);
          } else {
            props[key] = value;
          }
        }
        return markHTMLString(await renderToString(result, vnode.type, props, slots));
      }
      case (!vnode.type && vnode.type !== 0):
        return "";
      case (typeof vnode.type === "string" && vnode.type !== ClientOnlyPlaceholder):
        return markHTMLString(await renderElement$1(result, vnode.type, vnode.props ?? {}));
    }
    if (vnode.type) {
      let extractSlots2 = function(child) {
        if (Array.isArray(child)) {
          return child.map((c) => extractSlots2(c));
        }
        if (!isVNode(child)) {
          _slots.default.push(child);
          return;
        }
        if ("slot" in child.props) {
          _slots[child.props.slot] = [..._slots[child.props.slot] ?? [], child];
          delete child.props.slot;
          return;
        }
        _slots.default.push(child);
      };
      if (typeof vnode.type === "function" && vnode.type["astro:renderer"]) {
        skip.increment();
      }
      if (typeof vnode.type === "function" && vnode.props["server:root"]) {
        const output2 = await vnode.type(vnode.props ?? {});
        return await renderJSX(result, output2);
      }
      if (typeof vnode.type === "function") {
        if (skip.haveNoTried() || skip.isCompleted()) {
          useConsoleFilter();
          try {
            const output2 = await vnode.type(vnode.props ?? {});
            let renderResult;
            if (output2 && output2[AstroJSX]) {
              renderResult = await renderJSXVNode(result, output2, skip);
              return renderResult;
            } else if (!output2) {
              renderResult = await renderJSXVNode(result, output2, skip);
              return renderResult;
            }
          } catch (e) {
            if (skip.isCompleted()) {
              throw e;
            }
            skip.increment();
          } finally {
            finishUsingConsoleFilter();
          }
        } else {
          skip.increment();
        }
      }
      const { children = null, ...props } = vnode.props ?? {};
      const _slots = {
        default: []
      };
      extractSlots2(children);
      for (const [key, value] of Object.entries(props)) {
        if (value["$$slot"]) {
          _slots[key] = value;
          delete props[key];
        }
      }
      const slotPromises = [];
      const slots = {};
      for (const [key, value] of Object.entries(_slots)) {
        slotPromises.push(
          renderJSX(result, value).then((output2) => {
            if (output2.toString().trim().length === 0)
              return;
            slots[key] = () => output2;
          })
        );
      }
      await Promise.all(slotPromises);
      props[Skip.symbol] = skip;
      let output;
      if (vnode.type === ClientOnlyPlaceholder && vnode.props["client:only"]) {
        output = await renderComponentToIterable(
          result,
          vnode.props["client:display-name"] ?? "",
          null,
          props,
          slots
        );
      } else {
        output = await renderComponentToIterable(
          result,
          typeof vnode.type === "function" ? vnode.type.name : vnode.type,
          vnode.type,
          props,
          slots
        );
      }
      if (typeof output !== "string" && Symbol.asyncIterator in output) {
        let parts = new HTMLParts();
        for await (const chunk of output) {
          parts.append(chunk, result);
        }
        return markHTMLString(parts.toString());
      } else {
        return markHTMLString(output);
      }
    }
  }
  return markHTMLString(`${vnode}`);
}
async function renderElement$1(result, tag, { children, ...props }) {
  return markHTMLString(
    `<${tag}${spreadAttributes(props)}${markHTMLString(
      (children == null || children == "") && voidElementNames.test(tag) ? `/>` : `>${children == null ? "" : await renderJSX(result, children)}</${tag}>`
    )}`
  );
}
function useConsoleFilter() {
  consoleFilterRefs++;
  if (!originalConsoleError) {
    originalConsoleError = console.error;
    try {
      console.error = filteredConsoleError;
    } catch (error) {
    }
  }
}
function finishUsingConsoleFilter() {
  consoleFilterRefs--;
}
function filteredConsoleError(msg, ...rest) {
  if (consoleFilterRefs > 0 && typeof msg === "string") {
    const isKnownReactHookError = msg.includes("Warning: Invalid hook call.") && msg.includes("https://reactjs.org/link/invalid-hook-call");
    if (isKnownReactHookError)
      return;
  }
  originalConsoleError(msg, ...rest);
}

/**
 * shortdash - https://github.com/bibig/node-shorthash
 *
 * @license
 *
 * (The MIT License)
 *
 * Copyright (c) 2013 Bibig <bibig@me.com>
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
const dictionary = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY";
const binary = dictionary.length;
function bitwise(str) {
  let hash = 0;
  if (str.length === 0)
    return hash;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    hash = (hash << 5) - hash + ch;
    hash = hash & hash;
  }
  return hash;
}
function shorthash(text) {
  let num;
  let result = "";
  let integer = bitwise(text);
  const sign = integer < 0 ? "Z" : "";
  integer = Math.abs(integer);
  while (integer >= binary) {
    num = integer % binary;
    integer = Math.floor(integer / binary);
    result = dictionary[num] + result;
  }
  if (integer > 0) {
    result = dictionary[integer] + result;
  }
  return sign + result;
}

const voidElementNames = /^(area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/i;
const htmlBooleanAttributes = /^(allowfullscreen|async|autofocus|autoplay|controls|default|defer|disabled|disablepictureinpicture|disableremoteplayback|formnovalidate|hidden|loop|nomodule|novalidate|open|playsinline|readonly|required|reversed|scoped|seamless|itemscope)$/i;
const htmlEnumAttributes = /^(contenteditable|draggable|spellcheck|value)$/i;
const svgEnumAttributes = /^(autoReverse|externalResourcesRequired|focusable|preserveAlpha)$/i;
const STATIC_DIRECTIVES = /* @__PURE__ */ new Set(["set:html", "set:text"]);
const toIdent = (k) => k.trim().replace(/(?:(?!^)\b\w|\s+|[^\w]+)/g, (match, index) => {
  if (/[^\w]|\s/.test(match))
    return "";
  return index === 0 ? match : match.toUpperCase();
});
const toAttributeString = (value, shouldEscape = true) => shouldEscape ? String(value).replace(/&/g, "&#38;").replace(/"/g, "&#34;") : value;
const kebab = (k) => k.toLowerCase() === k ? k : k.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
const toStyleString = (obj) => Object.entries(obj).map(([k, v]) => `${kebab(k)}:${v}`).join(";");
function defineScriptVars(vars) {
  let output = "";
  for (const [key, value] of Object.entries(vars)) {
    output += `const ${toIdent(key)} = ${JSON.stringify(value)};
`;
  }
  return markHTMLString(output);
}
function formatList(values) {
  if (values.length === 1) {
    return values[0];
  }
  return `${values.slice(0, -1).join(", ")} or ${values[values.length - 1]}`;
}
function addAttribute(value, key, shouldEscape = true) {
  if (value == null) {
    return "";
  }
  if (value === false) {
    if (htmlEnumAttributes.test(key) || svgEnumAttributes.test(key)) {
      return markHTMLString(` ${key}="false"`);
    }
    return "";
  }
  if (STATIC_DIRECTIVES.has(key)) {
    console.warn(`[astro] The "${key}" directive cannot be applied dynamically at runtime. It will not be rendered as an attribute.

Make sure to use the static attribute syntax (\`${key}={value}\`) instead of the dynamic spread syntax (\`{...{ "${key}": value }}\`).`);
    return "";
  }
  if (key === "class:list") {
    const listValue = toAttributeString(serializeListValue(value), shouldEscape);
    if (listValue === "") {
      return "";
    }
    return markHTMLString(` ${key.slice(0, -5)}="${listValue}"`);
  }
  if (key === "style" && !(value instanceof HTMLString) && typeof value === "object") {
    return markHTMLString(` ${key}="${toAttributeString(toStyleString(value), shouldEscape)}"`);
  }
  if (key === "className") {
    return markHTMLString(` class="${toAttributeString(value, shouldEscape)}"`);
  }
  if (value === true && (key.startsWith("data-") || htmlBooleanAttributes.test(key))) {
    return markHTMLString(` ${key}`);
  } else {
    return markHTMLString(` ${key}="${toAttributeString(value, shouldEscape)}"`);
  }
}
function internalSpreadAttributes(values, shouldEscape = true) {
  let output = "";
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, shouldEscape);
  }
  return markHTMLString(output);
}
function renderElement(name, { props: _props, children = "" }, shouldEscape = true) {
  const { lang: _, "data-astro-id": astroId, "define:vars": defineVars, ...props } = _props;
  if (defineVars) {
    if (name === "style") {
      delete props["is:global"];
      delete props["is:scoped"];
    }
    if (name === "script") {
      delete props.hoist;
      children = defineScriptVars(defineVars) + "\n" + children;
    }
  }
  if ((children == null || children == "") && voidElementNames.test(name)) {
    return `<${name}${internalSpreadAttributes(props, shouldEscape)} />`;
  }
  return `<${name}${internalSpreadAttributes(props, shouldEscape)}>${children}</${name}>`;
}

function componentIsHTMLElement(Component) {
  return typeof HTMLElement !== "undefined" && HTMLElement.isPrototypeOf(Component);
}
async function renderHTMLElement(result, constructor, props, slots) {
  const name = getHTMLElementName(constructor);
  let attrHTML = "";
  for (const attr in props) {
    attrHTML += ` ${attr}="${toAttributeString(await props[attr])}"`;
  }
  return markHTMLString(
    `<${name}${attrHTML}>${await renderSlot(result, slots == null ? void 0 : slots.default)}</${name}>`
  );
}
function getHTMLElementName(constructor) {
  const definedName = customElements.getName(constructor);
  if (definedName)
    return definedName;
  const assignedName = constructor.name.replace(/^HTML|Element$/g, "").replace(/[A-Z]/g, "-$&").toLowerCase().replace(/^-/, "html-");
  return assignedName;
}

const rendererAliases = /* @__PURE__ */ new Map([["solid", "solid-js"]]);
function guessRenderers(componentUrl) {
  const extname = componentUrl == null ? void 0 : componentUrl.split(".").pop();
  switch (extname) {
    case "svelte":
      return ["@astrojs/svelte"];
    case "vue":
      return ["@astrojs/vue"];
    case "jsx":
    case "tsx":
      return ["@astrojs/react", "@astrojs/preact", "@astrojs/solid", "@astrojs/vue (jsx)"];
    default:
      return [
        "@astrojs/react",
        "@astrojs/preact",
        "@astrojs/solid",
        "@astrojs/vue",
        "@astrojs/svelte"
      ];
  }
}
function isFragmentComponent(Component) {
  return Component === Fragment;
}
function isHTMLComponent(Component) {
  return Component && typeof Component === "object" && Component["astro:html"];
}
async function renderFrameworkComponent(result, displayName, Component, _props, slots = {}) {
  var _a, _b;
  if (!Component && !_props["client:only"]) {
    throw new Error(
      `Unable to render ${displayName} because it is ${Component}!
Did you forget to import the component or is it possible there is a typo?`
    );
  }
  const { renderers } = result._metadata;
  const metadata = { displayName };
  const { hydration, isPage, props } = extractDirectives(displayName, _props);
  let html = "";
  let attrs = void 0;
  if (hydration) {
    metadata.hydrate = hydration.directive;
    metadata.hydrateArgs = hydration.value;
    metadata.componentExport = hydration.componentExport;
    metadata.componentUrl = hydration.componentUrl;
  }
  const probableRendererNames = guessRenderers(metadata.componentUrl);
  const validRenderers = renderers.filter((r) => r.name !== "astro:jsx");
  const { children, slotInstructions } = await renderSlots(result, slots);
  let renderer;
  if (metadata.hydrate !== "only") {
    let isTagged = false;
    try {
      isTagged = Component && Component[Renderer];
    } catch {
    }
    if (isTagged) {
      const rendererName = Component[Renderer];
      renderer = renderers.find(({ name }) => name === rendererName);
    }
    if (!renderer) {
      let error;
      for (const r of renderers) {
        try {
          if (await r.ssr.check.call({ result }, Component, props, children)) {
            renderer = r;
            break;
          }
        } catch (e) {
          error ?? (error = e);
        }
      }
      if (!renderer && error) {
        throw error;
      }
    }
    if (!renderer && typeof HTMLElement === "function" && componentIsHTMLElement(Component)) {
      const output = renderHTMLElement(result, Component, _props, slots);
      return output;
    }
  } else {
    if (metadata.hydrateArgs) {
      const passedName = metadata.hydrateArgs;
      const rendererName = rendererAliases.has(passedName) ? rendererAliases.get(passedName) : passedName;
      renderer = renderers.find(
        ({ name }) => name === `@astrojs/${rendererName}` || name === rendererName
      );
    }
    if (!renderer && validRenderers.length === 1) {
      renderer = validRenderers[0];
    }
    if (!renderer) {
      const extname = (_a = metadata.componentUrl) == null ? void 0 : _a.split(".").pop();
      renderer = renderers.filter(
        ({ name }) => name === `@astrojs/${extname}` || name === extname
      )[0];
    }
  }
  if (!renderer) {
    if (metadata.hydrate === "only") {
      throw new AstroError({
        ...AstroErrorData.NoClientOnlyHint,
        message: AstroErrorData.NoClientOnlyHint.message(metadata.displayName),
        hint: AstroErrorData.NoClientOnlyHint.hint(
          probableRendererNames.map((r) => r.replace("@astrojs/", "")).join("|")
        )
      });
    } else if (typeof Component !== "string") {
      const matchingRenderers = validRenderers.filter(
        (r) => probableRendererNames.includes(r.name)
      );
      const plural = validRenderers.length > 1;
      if (matchingRenderers.length === 0) {
        throw new AstroError({
          ...AstroErrorData.NoMatchingRenderer,
          message: AstroErrorData.NoMatchingRenderer.message(
            metadata.displayName,
            (_b = metadata == null ? void 0 : metadata.componentUrl) == null ? void 0 : _b.split(".").pop(),
            plural,
            validRenderers.length
          ),
          hint: AstroErrorData.NoMatchingRenderer.hint(
            formatList(probableRendererNames.map((r) => "`" + r + "`"))
          )
        });
      } else if (matchingRenderers.length === 1) {
        renderer = matchingRenderers[0];
        ({ html, attrs } = await renderer.ssr.renderToStaticMarkup.call(
          { result },
          Component,
          props,
          children,
          metadata
        ));
      } else {
        throw new Error(`Unable to render ${metadata.displayName}!

This component likely uses ${formatList(probableRendererNames)},
but Astro encountered an error during server-side rendering.

Please ensure that ${metadata.displayName}:
1. Does not unconditionally access browser-specific globals like \`window\` or \`document\`.
   If this is unavoidable, use the \`client:only\` hydration directive.
2. Does not conditionally return \`null\` or \`undefined\` when rendered on the server.

If you're still stuck, please open an issue on GitHub or join us at https://astro.build/chat.`);
      }
    }
  } else {
    if (metadata.hydrate === "only") {
      html = await renderSlot(result, slots == null ? void 0 : slots.fallback);
    } else {
      ({ html, attrs } = await renderer.ssr.renderToStaticMarkup.call(
        { result },
        Component,
        props,
        children,
        metadata
      ));
    }
  }
  if (renderer && !renderer.clientEntrypoint && renderer.name !== "@astrojs/lit" && metadata.hydrate) {
    throw new AstroError({
      ...AstroErrorData.NoClientEntrypoint,
      message: AstroErrorData.NoClientEntrypoint.message(
        displayName,
        metadata.hydrate,
        renderer.name
      )
    });
  }
  if (!html && typeof Component === "string") {
    const Tag = sanitizeElementName(Component);
    const childSlots = Object.values(children).join("");
    const iterable = renderAstroTemplateResult(
      await renderTemplate`<${Tag}${internalSpreadAttributes(props)}${markHTMLString(
        childSlots === "" && voidElementNames.test(Tag) ? `/>` : `>${childSlots}</${Tag}>`
      )}`
    );
    html = "";
    for await (const chunk of iterable) {
      html += chunk;
    }
  }
  if (!hydration) {
    return async function* () {
      if (slotInstructions) {
        yield* slotInstructions;
      }
      if (isPage || (renderer == null ? void 0 : renderer.name) === "astro:jsx") {
        yield html;
      } else {
        yield markHTMLString(html.replace(/\<\/?astro-slot\>/g, ""));
      }
    }();
  }
  const astroId = shorthash(
    `<!--${metadata.componentExport.value}:${metadata.componentUrl}-->
${html}
${serializeProps(
      props,
      metadata
    )}`
  );
  const island = await generateHydrateScript(
    { renderer, result, astroId, props, attrs },
    metadata
  );
  let unrenderedSlots = [];
  if (html) {
    if (Object.keys(children).length > 0) {
      for (const key of Object.keys(children)) {
        if (!html.includes(key === "default" ? `<astro-slot>` : `<astro-slot name="${key}">`)) {
          unrenderedSlots.push(key);
        }
      }
    }
  } else {
    unrenderedSlots = Object.keys(children);
  }
  const template = unrenderedSlots.length > 0 ? unrenderedSlots.map(
    (key) => `<template data-astro-template${key !== "default" ? `="${key}"` : ""}>${children[key]}</template>`
  ).join("") : "";
  island.children = `${html ?? ""}${template}`;
  if (island.children) {
    island.props["await-children"] = "";
  }
  async function* renderAll() {
    if (slotInstructions) {
      yield* slotInstructions;
    }
    yield { type: "directive", hydration, result };
    yield markHTMLString(renderElement("astro-island", island, false));
  }
  return renderAll();
}
function sanitizeElementName(tag) {
  const unsafe = /[&<>'"\s]+/g;
  if (!unsafe.test(tag))
    return tag;
  return tag.trim().split(unsafe)[0].trim();
}
async function renderFragmentComponent(result, slots = {}) {
  const children = await renderSlot(result, slots == null ? void 0 : slots.default);
  if (children == null) {
    return children;
  }
  return markHTMLString(children);
}
async function renderHTMLComponent(result, Component, _props, slots = {}) {
  const { slotInstructions, children } = await renderSlots(result, slots);
  const html = Component.render({ slots: children });
  const hydrationHtml = slotInstructions ? slotInstructions.map((instr) => stringifyChunk(result, instr)).join("") : "";
  return markHTMLString(hydrationHtml + html);
}
function renderComponent(result, displayName, Component, props, slots = {}) {
  if (isPromise(Component)) {
    return Promise.resolve(Component).then((Unwrapped) => {
      return renderComponent(result, displayName, Unwrapped, props, slots);
    });
  }
  if (isFragmentComponent(Component)) {
    return renderFragmentComponent(result, slots);
  }
  if (isHTMLComponent(Component)) {
    return renderHTMLComponent(result, Component, props, slots);
  }
  if (isAstroComponentFactory(Component)) {
    return createAstroComponentInstance(result, displayName, Component, props, slots);
  }
  return renderFrameworkComponent(result, displayName, Component, props, slots);
}
function renderComponentToIterable(result, displayName, Component, props, slots = {}) {
  const renderResult = renderComponent(result, displayName, Component, props, slots);
  if (isAstroComponentInstance(renderResult)) {
    return renderResult.render();
  }
  return renderResult;
}

const uniqueElements = (item, index, all) => {
  const props = JSON.stringify(item.props);
  const children = item.children;
  return index === all.findIndex((i) => JSON.stringify(i.props) === props && i.children == children);
};
async function* renderExtraHead(result, base) {
  yield base;
  for (const part of result.extraHead) {
    yield* renderChild(part);
  }
}
function renderAllHeadContent(result) {
  const styles = Array.from(result.styles).filter(uniqueElements).map((style) => renderElement("style", style));
  result.styles.clear();
  const scripts = Array.from(result.scripts).filter(uniqueElements).map((script, i) => {
    return renderElement("script", script, false);
  });
  const links = Array.from(result.links).filter(uniqueElements).map((link) => renderElement("link", link, false));
  const baseHeadContent = markHTMLString(links.join("\n") + styles.join("\n") + scripts.join("\n"));
  if (result.extraHead.length > 0) {
    return renderExtraHead(result, baseHeadContent);
  } else {
    return baseHeadContent;
  }
}
function createRenderHead(result) {
  result._metadata.hasRenderedHead = true;
  return renderAllHeadContent.bind(null, result);
}
const renderHead = createRenderHead;
async function* maybeRenderHead(result) {
  if (result._metadata.hasRenderedHead) {
    return;
  }
  yield createRenderHead(result)();
}

var __accessCheck$2 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$2 = (obj, member, getter) => {
  __accessCheck$2(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$2 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$2 = (obj, member, value, setter) => {
  __accessCheck$2(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
const isNodeJS = typeof process === "object" && Object.prototype.toString.call(process) === "[object process]";
let StreamingCompatibleResponse;
function createResponseClass() {
  var _isStream, _body, _a;
  StreamingCompatibleResponse = (_a = class extends Response {
    constructor(body, init) {
      let isStream = body instanceof ReadableStream;
      super(isStream ? null : body, init);
      __privateAdd$2(this, _isStream, void 0);
      __privateAdd$2(this, _body, void 0);
      __privateSet$2(this, _isStream, isStream);
      __privateSet$2(this, _body, body);
    }
    get body() {
      return __privateGet$2(this, _body);
    }
    async text() {
      if (__privateGet$2(this, _isStream) && isNodeJS) {
        let decoder = new TextDecoder();
        let body = __privateGet$2(this, _body);
        let out = "";
        for await (let chunk of body) {
          out += decoder.decode(chunk);
        }
        return out;
      }
      return super.text();
    }
    async arrayBuffer() {
      if (__privateGet$2(this, _isStream) && isNodeJS) {
        let body = __privateGet$2(this, _body);
        let chunks = [];
        let len = 0;
        for await (let chunk of body) {
          chunks.push(chunk);
          len += chunk.length;
        }
        let ab = new Uint8Array(len);
        let offset = 0;
        for (const chunk of chunks) {
          ab.set(chunk, offset);
          offset += chunk.length;
        }
        return ab;
      }
      return super.arrayBuffer();
    }
  }, _isStream = new WeakMap(), _body = new WeakMap(), _a);
  return StreamingCompatibleResponse;
}
const createResponse = isNodeJS ? (body, init) => {
  if (typeof body === "string" || ArrayBuffer.isView(body)) {
    return new Response(body, init);
  }
  if (typeof StreamingCompatibleResponse === "undefined") {
    return new (createResponseClass())(body, init);
  }
  return new StreamingCompatibleResponse(body, init);
} : (body, init) => new Response(body, init);

const needsHeadRenderingSymbol = Symbol.for("astro.needsHeadRendering");
function nonAstroPageNeedsHeadInjection(pageComponent) {
  return needsHeadRenderingSymbol in pageComponent && !!pageComponent[needsHeadRenderingSymbol];
}
async function iterableToHTMLBytes(result, iterable, onDocTypeInjection) {
  const parts = new HTMLParts();
  let i = 0;
  for await (const chunk of iterable) {
    if (isHTMLString(chunk)) {
      if (i === 0) {
        i++;
        if (!/<!doctype html/i.test(String(chunk))) {
          parts.append("<!DOCTYPE html>\n", result);
          if (onDocTypeInjection) {
            await onDocTypeInjection(parts);
          }
        }
      }
    }
    parts.append(chunk, result);
  }
  return parts.toArrayBuffer();
}
async function bufferHeadContent(result) {
  const iterator = result.propagators.values();
  while (true) {
    const { value, done } = iterator.next();
    if (done) {
      break;
    }
    const returnValue = await value.init();
    if (isHeadAndContent(returnValue)) {
      result.extraHead.push(returnValue.head);
    }
  }
}
async function renderPage$1(result, componentFactory, props, children, streaming, route) {
  if (!isAstroComponentFactory(componentFactory)) {
    const pageProps = { ...props ?? {}, "server:root": true };
    let output;
    try {
      const renderResult = await renderComponent(
        result,
        componentFactory.name,
        componentFactory,
        pageProps,
        null
      );
      if (isAstroComponentInstance(renderResult)) {
        output = renderResult.render();
      } else {
        output = renderResult;
      }
    } catch (e) {
      if (AstroError.is(e) && !e.loc) {
        e.setLocation({
          file: route == null ? void 0 : route.component
        });
      }
      throw e;
    }
    const bytes = await iterableToHTMLBytes(result, output, async (parts) => {
      if (nonAstroPageNeedsHeadInjection(componentFactory)) {
        for await (let chunk of maybeRenderHead(result)) {
          parts.append(chunk, result);
        }
      }
    });
    return new Response(bytes, {
      headers: new Headers([
        ["Content-Type", "text/html; charset=utf-8"],
        ["Content-Length", bytes.byteLength.toString()]
      ])
    });
  }
  const factoryReturnValue = await componentFactory(result, props, children);
  const factoryIsHeadAndContent = isHeadAndContent(factoryReturnValue);
  if (isRenderTemplateResult(factoryReturnValue) || factoryIsHeadAndContent) {
    await bufferHeadContent(result);
    const templateResult = factoryIsHeadAndContent ? factoryReturnValue.content : factoryReturnValue;
    let iterable = renderAstroTemplateResult(templateResult);
    let init = result.response;
    let headers = new Headers(init.headers);
    let body;
    if (streaming) {
      body = new ReadableStream({
        start(controller) {
          async function read() {
            let i = 0;
            try {
              for await (const chunk of iterable) {
                if (isHTMLString(chunk)) {
                  if (i === 0) {
                    if (!/<!doctype html/i.test(String(chunk))) {
                      controller.enqueue(encoder.encode("<!DOCTYPE html>\n"));
                    }
                  }
                }
                const bytes = chunkToByteArray(result, chunk);
                controller.enqueue(bytes);
                i++;
              }
              controller.close();
            } catch (e) {
              if (AstroError.is(e) && !e.loc) {
                e.setLocation({
                  file: route == null ? void 0 : route.component
                });
              }
              controller.error(e);
            }
          }
          read();
        }
      });
    } else {
      body = await iterableToHTMLBytes(result, iterable);
      headers.set("Content-Length", body.byteLength.toString());
    }
    let response = createResponse(body, { ...init, headers });
    return response;
  }
  if (!(factoryReturnValue instanceof Response)) {
    throw new AstroError({
      ...AstroErrorData.OnlyResponseCanBeReturned,
      message: AstroErrorData.OnlyResponseCanBeReturned.message(
        route == null ? void 0 : route.route,
        typeof factoryReturnValue
      ),
      location: {
        file: route == null ? void 0 : route.component
      }
    });
  }
  return factoryReturnValue;
}

function spreadAttributes(values, _name, { class: scopedClassName } = {}) {
  let output = "";
  if (scopedClassName) {
    if (typeof values.class !== "undefined") {
      values.class += ` ${scopedClassName}`;
    } else if (typeof values["class:list"] !== "undefined") {
      values["class:list"] = [values["class:list"], scopedClassName];
    } else {
      values.class = scopedClassName;
    }
  }
  for (const [key, value] of Object.entries(values)) {
    output += addAttribute(value, key, true);
  }
  return markHTMLString(output);
}

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit"
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, type, message) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    type,
    level,
    message
  };
  if (levels[logLevel] > levels[level]) {
    return;
  }
  dest.write(event);
}
function warn(opts, type, message) {
  return log(opts, "warn", type, message);
}
function error(opts, type, message) {
  return log(opts, "error", type, message);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
if (typeof process !== "undefined") {
  if (process.argv.includes("--verbose")) ; else if (process.argv.includes("--silent")) ; else ;
}

const VALID_PARAM_TYPES = ["string", "number", "undefined"];
function validateGetStaticPathsParameter([key, value], route) {
  if (!VALID_PARAM_TYPES.includes(typeof value)) {
    throw new AstroError({
      ...AstroErrorData.GetStaticPathsInvalidRouteParam,
      message: AstroErrorData.GetStaticPathsInvalidRouteParam.message(key, value, typeof value),
      location: {
        file: route
      }
    });
  }
}
function validateDynamicRouteModule(mod, {
  ssr,
  logging,
  route
}) {
  if (ssr && mod.getStaticPaths) {
    warn(logging, "getStaticPaths", 'getStaticPaths() is ignored when "output: server" is set.');
  }
  if (!ssr && !mod.getStaticPaths) {
    throw new AstroError({
      ...AstroErrorData.GetStaticPathsRequired,
      location: { file: route.component }
    });
  }
}
function validateGetStaticPathsResult(result, logging, route) {
  if (!Array.isArray(result)) {
    throw new AstroError({
      ...AstroErrorData.InvalidGetStaticPathsReturn,
      message: AstroErrorData.InvalidGetStaticPathsReturn.message(typeof result),
      location: {
        file: route.component
      }
    });
  }
  result.forEach((pathObject) => {
    if (pathObject.params === void 0 || pathObject.params === null || pathObject.params && Object.keys(pathObject.params).length === 0) {
      throw new AstroError({
        ...AstroErrorData.GetStaticPathsExpectedParams,
        location: {
          file: route.component
        }
      });
    }
    if (typeof pathObject.params !== "object") {
      throw new AstroError({
        ...AstroErrorData.InvalidGetStaticPathParam,
        message: AstroErrorData.InvalidGetStaticPathParam.message(typeof pathObject.params),
        location: {
          file: route.component
        }
      });
    }
    for (const [key, val] of Object.entries(pathObject.params)) {
      if (!(typeof val === "undefined" || typeof val === "string" || typeof val === "number")) {
        warn(
          logging,
          "getStaticPaths",
          `invalid path param: ${key}. A string, number or undefined value was expected, but got \`${JSON.stringify(
            val
          )}\`.`
        );
      }
      if (typeof val === "string" && val === "") {
        warn(
          logging,
          "getStaticPaths",
          `invalid path param: ${key}. \`undefined\` expected for an optional param, but got empty string.`
        );
      }
    }
  });
}

function getParams(array) {
  const fn = (match) => {
    const params = {};
    array.forEach((key, i) => {
      if (key.startsWith("...")) {
        params[key.slice(3)] = match[i + 1] ? decodeURIComponent(match[i + 1]) : void 0;
      } else {
        params[key] = decodeURIComponent(match[i + 1]);
      }
    });
    return params;
  };
  return fn;
}
function stringifyParams(params, routeComponent) {
  const validatedParams = Object.entries(params).reduce((acc, next) => {
    validateGetStaticPathsParameter(next, routeComponent);
    const [key, value] = next;
    acc[key] = value == null ? void 0 : value.toString();
    return acc;
  }, {});
  return JSON.stringify(validatedParams, Object.keys(params).sort());
}

const SCRIPT_EXTENSIONS = /* @__PURE__ */ new Set([".js", ".ts"]);
const scriptRe = new RegExp(
  `\\.(${Array.from(SCRIPT_EXTENSIONS).map((s) => s.slice(1)).join("|")})($|\\?)`
);
const isScriptRequest = (request) => scriptRe.test(request);

const STYLE_EXTENSIONS = /* @__PURE__ */ new Set([
  ".css",
  ".pcss",
  ".postcss",
  ".scss",
  ".sass",
  ".styl",
  ".stylus",
  ".less"
]);
const cssRe = new RegExp(
  `\\.(${Array.from(STYLE_EXTENSIONS).map((s) => s.slice(1)).join("|")})($|\\?)`
);
const isCSSRequest = (request) => cssRe.test(request);

var __accessCheck$1 = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet$1 = (obj, member, getter) => {
  __accessCheck$1(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd$1 = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet$1 = (obj, member, value, setter) => {
  __accessCheck$1(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var _result, _slots, _loggingOpts;
const clientAddressSymbol$2 = Symbol.for("astro.clientAddress");
function onlyAvailableInSSR(name) {
  return function _onlyAvailableInSSR() {
    switch (name) {
      case "Astro.redirect":
        throw new AstroError(AstroErrorData.StaticRedirectNotAvailable);
    }
  };
}
function getFunctionExpression(slot) {
  var _a;
  if (!slot)
    return;
  if (((_a = slot.expressions) == null ? void 0 : _a.length) !== 1)
    return;
  return slot.expressions[0];
}
class Slots {
  constructor(result, slots, logging) {
    __privateAdd$1(this, _result, void 0);
    __privateAdd$1(this, _slots, void 0);
    __privateAdd$1(this, _loggingOpts, void 0);
    __privateSet$1(this, _result, result);
    __privateSet$1(this, _slots, slots);
    __privateSet$1(this, _loggingOpts, logging);
    if (slots) {
      for (const key of Object.keys(slots)) {
        if (this[key] !== void 0) {
          throw new AstroError({
            ...AstroErrorData.ReservedSlotName,
            message: AstroErrorData.ReservedSlotName.message(key)
          });
        }
        Object.defineProperty(this, key, {
          get() {
            return true;
          },
          enumerable: true
        });
      }
    }
  }
  has(name) {
    if (!__privateGet$1(this, _slots))
      return false;
    return Boolean(__privateGet$1(this, _slots)[name]);
  }
  async render(name, args = []) {
    if (!__privateGet$1(this, _slots) || !this.has(name))
      return;
    if (!Array.isArray(args)) {
      warn(
        __privateGet$1(this, _loggingOpts),
        "Astro.slots.render",
        `Expected second parameter to be an array, received a ${typeof args}. If you're trying to pass an array as a single argument and getting unexpected results, make sure you're passing your array as a item of an array. Ex: Astro.slots.render('default', [["Hello", "World"]])`
      );
    } else if (args.length > 0) {
      const slotValue = __privateGet$1(this, _slots)[name];
      const component = typeof slotValue === "function" ? await slotValue() : await slotValue;
      const expression = getFunctionExpression(component);
      if (expression) {
        const slot = expression(...args);
        return await renderSlot(__privateGet$1(this, _result), slot).then(
          (res) => res != null ? String(res) : res
        );
      }
      if (typeof component === "function") {
        return await renderJSX(__privateGet$1(this, _result), component(...args)).then(
          (res) => res != null ? String(res) : res
        );
      }
    }
    const content = await renderSlot(__privateGet$1(this, _result), __privateGet$1(this, _slots)[name]);
    const outHTML = stringifyChunk(__privateGet$1(this, _result), content);
    return outHTML;
  }
}
_result = new WeakMap();
_slots = new WeakMap();
_loggingOpts = new WeakMap();
let renderMarkdown = null;
function createResult(args) {
  const { markdown, params, pathname, renderers, request, resolve } = args;
  const url = new URL(request.url);
  const headers = new Headers();
  headers.set("Content-Type", "text/html");
  const response = {
    status: args.status,
    statusText: "OK",
    headers
  };
  Object.defineProperty(response, "headers", {
    value: response.headers,
    enumerable: true,
    writable: false
  });
  let cookies = void 0;
  const result = {
    styles: args.styles ?? /* @__PURE__ */ new Set(),
    scripts: args.scripts ?? /* @__PURE__ */ new Set(),
    links: args.links ?? /* @__PURE__ */ new Set(),
    propagation: args.propagation ?? /* @__PURE__ */ new Map(),
    propagators: /* @__PURE__ */ new Map(),
    extraHead: [],
    cookies,
    createAstro(astroGlobal, props, slots) {
      const astroSlots = new Slots(result, slots, args.logging);
      const Astro = {
        __proto__: astroGlobal,
        get clientAddress() {
          if (!(clientAddressSymbol$2 in request)) {
            if (args.adapterName) {
              throw new AstroError({
                ...AstroErrorData.ClientAddressNotAvailable,
                message: AstroErrorData.ClientAddressNotAvailable.message(args.adapterName)
              });
            } else {
              throw new AstroError(AstroErrorData.StaticClientAddressNotAvailable);
            }
          }
          return Reflect.get(request, clientAddressSymbol$2);
        },
        get cookies() {
          if (cookies) {
            return cookies;
          }
          cookies = new AstroCookies(request);
          result.cookies = cookies;
          return cookies;
        },
        params,
        props,
        request,
        url,
        redirect: args.ssr ? (path, status) => {
          return new Response(null, {
            status: status || 302,
            headers: {
              Location: path
            }
          });
        } : onlyAvailableInSSR("Astro.redirect"),
        resolve(path) {
          let extra = `This can be replaced with a dynamic import like so: await import("${path}")`;
          if (isCSSRequest(path)) {
            extra = `It looks like you are resolving styles. If you are adding a link tag, replace with this:
---
import "${path}";
---
`;
          } else if (isScriptRequest(path)) {
            extra = `It looks like you are resolving scripts. If you are adding a script tag, replace with this:

<script type="module" src={(await import("${path}?url")).default}><\/script>

or consider make it a module like so:

<script>
	import MyModule from "${path}";
<\/script>
`;
          }
          warn(
            args.logging,
            `deprecation`,
            `${bold(
              "Astro.resolve()"
            )} is deprecated. We see that you are trying to resolve ${path}.
${extra}`
          );
          return "";
        },
        response,
        slots: astroSlots
      };
      Object.defineProperty(Astro, "canonicalURL", {
        get: function() {
          warn(
            args.logging,
            "deprecation",
            `${bold("Astro.canonicalURL")} is deprecated! Use \`Astro.url\` instead.
Example:

---
const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---
`
          );
          return new URL(this.request.url.pathname, this.site);
        }
      });
      Object.defineProperty(Astro, "__renderMarkdown", {
        enumerable: false,
        writable: false,
        value: async function(content, opts) {
          if (typeof Deno !== "undefined") {
            throw new Error("Markdown is not supported in Deno SSR");
          }
          if (!renderMarkdown) {
            let astroRemark = "@astrojs/";
            astroRemark += "markdown-remark";
            renderMarkdown = (await import(astroRemark)).renderMarkdown;
          }
          const { code } = await renderMarkdown(content, { ...markdown, ...opts ?? {} });
          return code;
        }
      });
      return Astro;
    },
    resolve,
    _metadata: {
      renderers,
      pathname,
      hasHydrationScript: false,
      hasRenderedHead: false,
      hasDirectives: /* @__PURE__ */ new Set()
    },
    response
  };
  return result;
}

function generatePaginateFunction(routeMatch) {
  return function paginateUtility(data, args = {}) {
    let { pageSize: _pageSize, params: _params, props: _props } = args;
    const pageSize = _pageSize || 10;
    const paramName = "page";
    const additionalParams = _params || {};
    const additionalProps = _props || {};
    let includesFirstPageNumber;
    if (routeMatch.params.includes(`...${paramName}`)) {
      includesFirstPageNumber = false;
    } else if (routeMatch.params.includes(`${paramName}`)) {
      includesFirstPageNumber = true;
    } else {
      throw new Error(
        `[paginate()] page number param \`${paramName}\` not found in your filepath.
Rename your file to \`[...page].astro\` or customize the param name via the \`paginate([], {param: '...'}\` option.`
      );
    }
    const lastPage = Math.max(1, Math.ceil(data.length / pageSize));
    const result = [...Array(lastPage).keys()].map((num) => {
      const pageNum = num + 1;
      const start = pageSize === Infinity ? 0 : (pageNum - 1) * pageSize;
      const end = Math.min(start + pageSize, data.length);
      const params = {
        ...additionalParams,
        [paramName]: includesFirstPageNumber || pageNum > 1 ? String(pageNum) : void 0
      };
      return {
        params,
        props: {
          ...additionalProps,
          page: {
            data: data.slice(start, end),
            start,
            end: end - 1,
            size: pageSize,
            total: data.length,
            currentPage: pageNum,
            lastPage,
            url: {
              current: routeMatch.generate({ ...params }),
              next: pageNum === lastPage ? void 0 : routeMatch.generate({ ...params, page: String(pageNum + 1) }),
              prev: pageNum === 1 ? void 0 : routeMatch.generate({
                ...params,
                page: !includesFirstPageNumber && pageNum - 1 === 1 ? void 0 : String(pageNum - 1)
              })
            }
          }
        }
      };
    });
    return result;
  };
}

async function callGetStaticPaths({
  isValidate,
  logging,
  mod,
  route,
  ssr
}) {
  validateDynamicRouteModule(mod, { ssr, logging, route });
  if (ssr) {
    return { staticPaths: Object.assign([], { keyed: /* @__PURE__ */ new Map() }) };
  }
  if (!mod.getStaticPaths) {
    throw new Error("Unexpected Error.");
  }
  let staticPaths = [];
  staticPaths = await mod.getStaticPaths({
    paginate: generatePaginateFunction(route),
    rss() {
      throw new AstroError(AstroErrorData.GetStaticPathsRemovedRSSHelper);
    }
  });
  if (Array.isArray(staticPaths)) {
    staticPaths = staticPaths.flat();
  }
  if (isValidate) {
    validateGetStaticPathsResult(staticPaths, logging, route);
  }
  const keyedStaticPaths = staticPaths;
  keyedStaticPaths.keyed = /* @__PURE__ */ new Map();
  for (const sp of keyedStaticPaths) {
    const paramsKey = stringifyParams(sp.params, route.component);
    keyedStaticPaths.keyed.set(paramsKey, sp);
  }
  return {
    staticPaths: keyedStaticPaths
  };
}
class RouteCache {
  constructor(logging, mode = "production") {
    this.cache = {};
    this.logging = logging;
    this.mode = mode;
  }
  clearAll() {
    this.cache = {};
  }
  set(route, entry) {
    if (this.mode === "production" && this.cache[route.component]) {
      warn(
        this.logging,
        "routeCache",
        `Internal Warning: route cache overwritten. (${route.component})`
      );
    }
    this.cache[route.component] = entry;
  }
  get(route) {
    return this.cache[route.component];
  }
}
function findPathItemByKey(staticPaths, params, route) {
  const paramsKey = stringifyParams(params, route.component);
  const matchedStaticPath = staticPaths.keyed.get(paramsKey);
  if (matchedStaticPath) {
    return matchedStaticPath;
  }
  debug("findPathItemByKey", `Unexpected cache miss looking for ${paramsKey}`);
}

var GetParamsAndPropsError = /* @__PURE__ */ ((GetParamsAndPropsError2) => {
  GetParamsAndPropsError2[GetParamsAndPropsError2["NoMatchingStaticPath"] = 0] = "NoMatchingStaticPath";
  return GetParamsAndPropsError2;
})(GetParamsAndPropsError || {});
async function getParamsAndProps(opts) {
  const { logging, mod, route, routeCache, pathname, ssr } = opts;
  let params = {};
  let pageProps;
  if (route && !route.pathname) {
    if (route.params.length) {
      const paramsMatch = route.pattern.exec(pathname);
      if (paramsMatch) {
        params = getParams(route.params)(paramsMatch);
      }
    }
    let routeCacheEntry = routeCache.get(route);
    if (!routeCacheEntry) {
      routeCacheEntry = await callGetStaticPaths({ mod, route, isValidate: true, logging, ssr });
      routeCache.set(route, routeCacheEntry);
    }
    const matchedStaticPath = findPathItemByKey(routeCacheEntry.staticPaths, params, route);
    if (!matchedStaticPath && !ssr) {
      return 0 /* NoMatchingStaticPath */;
    }
    pageProps = (matchedStaticPath == null ? void 0 : matchedStaticPath.props) ? { ...matchedStaticPath.props } : {};
  } else {
    pageProps = {};
  }
  return [params, pageProps];
}
async function renderPage(mod, ctx, env) {
  var _a, _b;
  const paramsAndPropsRes = await getParamsAndProps({
    logging: env.logging,
    mod,
    route: ctx.route,
    routeCache: env.routeCache,
    pathname: ctx.pathname,
    ssr: env.ssr
  });
  if (paramsAndPropsRes === 0 /* NoMatchingStaticPath */) {
    throw new AstroError({
      ...AstroErrorData.NoMatchingStaticPathFound,
      message: AstroErrorData.NoMatchingStaticPathFound.message(ctx.pathname),
      hint: ((_a = ctx.route) == null ? void 0 : _a.component) ? AstroErrorData.NoMatchingStaticPathFound.hint([(_b = ctx.route) == null ? void 0 : _b.component]) : ""
    });
  }
  const [params, pageProps] = paramsAndPropsRes;
  const Component = mod.default;
  if (!Component)
    throw new Error(`Expected an exported Astro component but received typeof ${typeof Component}`);
  const result = createResult({
    adapterName: env.adapterName,
    links: ctx.links,
    styles: ctx.styles,
    logging: env.logging,
    markdown: env.markdown,
    mode: env.mode,
    origin: ctx.origin,
    params,
    props: pageProps,
    pathname: ctx.pathname,
    propagation: ctx.propagation,
    resolve: env.resolve,
    renderers: env.renderers,
    request: ctx.request,
    site: env.site,
    scripts: ctx.scripts,
    ssr: env.ssr,
    status: ctx.status ?? 200
  });
  if (typeof mod.components === "object") {
    Object.assign(pageProps, { components: mod.components });
  }
  if (typeof mod.default === "function" && mod.default.name.startsWith("MDX")) {
    Object.assign(pageProps, {
      components: Object.assign((pageProps == null ? void 0 : pageProps.components) ?? {}, { Fragment })
    });
  }
  const response = await renderPage$1(
    result,
    Component,
    pageProps,
    null,
    env.streaming,
    ctx.route
  );
  if (result.cookies) {
    attachToResponse(response, result.cookies);
  }
  return response;
}

const clientAddressSymbol$1 = Symbol.for("astro.clientAddress");
function createAPIContext({
  request,
  params,
  site,
  props,
  adapterName
}) {
  return {
    cookies: new AstroCookies(request),
    request,
    params,
    site: site ? new URL(site) : void 0,
    generator: `Astro v${ASTRO_VERSION}`,
    props,
    redirect(path, status) {
      return new Response(null, {
        status: status || 302,
        headers: {
          Location: path
        }
      });
    },
    url: new URL(request.url),
    get clientAddress() {
      if (!(clientAddressSymbol$1 in request)) {
        if (adapterName) {
          throw new AstroError({
            ...AstroErrorData.ClientAddressNotAvailable,
            message: AstroErrorData.ClientAddressNotAvailable.message(adapterName)
          });
        } else {
          throw new AstroError(AstroErrorData.StaticClientAddressNotAvailable);
        }
      }
      return Reflect.get(request, clientAddressSymbol$1);
    }
  };
}
async function call(mod, env, ctx) {
  var _a, _b;
  const paramsAndPropsResp = await getParamsAndProps({
    mod,
    route: ctx.route,
    routeCache: env.routeCache,
    pathname: ctx.pathname,
    logging: env.logging,
    ssr: env.ssr
  });
  if (paramsAndPropsResp === GetParamsAndPropsError.NoMatchingStaticPath) {
    throw new AstroError({
      ...AstroErrorData.NoMatchingStaticPathFound,
      message: AstroErrorData.NoMatchingStaticPathFound.message(ctx.pathname),
      hint: ((_a = ctx.route) == null ? void 0 : _a.component) ? AstroErrorData.NoMatchingStaticPathFound.hint([(_b = ctx.route) == null ? void 0 : _b.component]) : ""
    });
  }
  const [params, props] = paramsAndPropsResp;
  const context = createAPIContext({
    request: ctx.request,
    params,
    props,
    site: env.site,
    adapterName: env.adapterName
  });
  const response = await renderEndpoint(mod, context, env.ssr);
  if (response instanceof Response) {
    attachToResponse(response, context.cookies);
    return {
      type: "response",
      response
    };
  }
  return {
    type: "simple",
    body: response.body,
    encoding: response.encoding,
    cookies: context.cookies
  };
}

let lastMessage;
let lastMessageCount = 1;
const consoleLogDestination = {
  write(event) {
    let dest = console.error;
    if (levels[event.level] < levels["error"]) {
      dest = console.log;
    }
    function getPrefix() {
      let prefix = "";
      let type = event.type;
      if (type) {
        prefix += dim(dateTimeFormat.format(new Date()) + " ");
        if (event.level === "info") {
          type = bold(cyan(`[${type}]`));
        } else if (event.level === "warn") {
          type = bold(yellow(`[${type}]`));
        } else if (event.level === "error") {
          type = bold(red(`[${type}]`));
        }
        prefix += `${type} `;
      }
      return reset(prefix);
    }
    let message = event.message;
    if (message === lastMessage) {
      lastMessageCount++;
      message = `${message} ${yellow(`(x${lastMessageCount})`)}`;
    } else {
      lastMessage = message;
      lastMessageCount = 1;
    }
    const outMessage = getPrefix() + message;
    dest(outMessage);
    return true;
  }
};

function appendForwardSlash(path) {
  return path.endsWith("/") ? path : path + "/";
}
function prependForwardSlash(path) {
  return path[0] === "/" ? path : "/" + path;
}
function removeTrailingForwardSlash(path) {
  return path.endsWith("/") ? path.slice(0, path.length - 1) : path;
}
function trimSlashes(path) {
  return path.replace(/^\/|\/$/g, "");
}
function isString(path) {
  return typeof path === "string" || path instanceof String;
}
function joinPaths(...paths) {
  return paths.filter(isString).map(trimSlashes).join("/");
}

function createRenderContext(options) {
  const request = options.request;
  const url = new URL(request.url);
  const origin = options.origin ?? url.origin;
  const pathname = options.pathname ?? url.pathname;
  return {
    ...options,
    origin,
    pathname,
    url
  };
}

function createEnvironment(options) {
  return options;
}

function getRootPath(base) {
  return appendForwardSlash(new URL(base || "/", "http://localhost/").pathname);
}
function joinToRoot(href, base) {
  return npath.posix.join(getRootPath(base), href);
}
function createLinkStylesheetElement(href, base) {
  return {
    props: {
      rel: "stylesheet",
      href: joinToRoot(href, base)
    },
    children: ""
  };
}
function createLinkStylesheetElementSet(hrefs, base) {
  return new Set(hrefs.map((href) => createLinkStylesheetElement(href, base)));
}
function createModuleScriptElement(script, base) {
  if (script.type === "external") {
    return createModuleScriptElementWithSrc(script.value, base);
  } else {
    return {
      props: {
        type: "module"
      },
      children: script.value
    };
  }
}
function createModuleScriptElementWithSrc(src, site) {
  return {
    props: {
      type: "module",
      src: joinToRoot(src, site)
    },
    children: ""
  };
}

function matchRoute(pathname, manifest) {
  return manifest.routes.find((route) => route.pattern.test(pathname));
}
function matchAssets(route, assets) {
  for (const asset of assets) {
    if (!asset.endsWith(".html"))
      continue;
    if (route.pattern.test(asset)) {
      return asset;
    }
    if (route.pattern.test(asset.replace(/index\.html$/, ""))) {
      return asset;
    }
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  return {
    ...serializedManifest,
    assets,
    routes
  };
}

var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _env, _manifest$1, _manifestData, _routeDataToRouteInfo, _encoder, _logging, _base, _baseWithoutTrailingSlash, _renderPage, renderPage_fn, _callEndpoint, callEndpoint_fn;
class App {
  constructor(manifest, streaming = true) {
    __privateAdd(this, _renderPage);
    __privateAdd(this, _callEndpoint);
    __privateAdd(this, _env, void 0);
    __privateAdd(this, _manifest$1, void 0);
    __privateAdd(this, _manifestData, void 0);
    __privateAdd(this, _routeDataToRouteInfo, void 0);
    __privateAdd(this, _encoder, new TextEncoder());
    __privateAdd(this, _logging, {
      dest: consoleLogDestination,
      level: "info"
    });
    __privateAdd(this, _base, void 0);
    __privateAdd(this, _baseWithoutTrailingSlash, void 0);
    __privateSet(this, _manifest$1, manifest);
    __privateSet(this, _manifestData, {
      routes: manifest.routes.map((route) => route.routeData)
    });
    __privateSet(this, _routeDataToRouteInfo, new Map(manifest.routes.map((route) => [route.routeData, route])));
    __privateSet(this, _env, createEnvironment({
      adapterName: manifest.adapterName,
      logging: __privateGet(this, _logging),
      markdown: manifest.markdown,
      mode: "production",
      renderers: manifest.renderers,
      async resolve(specifier) {
        if (!(specifier in manifest.entryModules)) {
          throw new Error(`Unable to resolve [${specifier}]`);
        }
        const bundlePath = manifest.entryModules[specifier];
        switch (true) {
          case bundlePath.startsWith("data:"):
          case bundlePath.length === 0: {
            return bundlePath;
          }
          default: {
            return prependForwardSlash(joinPaths(manifest.base, bundlePath));
          }
        }
      },
      routeCache: new RouteCache(__privateGet(this, _logging)),
      site: __privateGet(this, _manifest$1).site,
      ssr: true,
      streaming
    }));
    __privateSet(this, _base, __privateGet(this, _manifest$1).base || "/");
    __privateSet(this, _baseWithoutTrailingSlash, removeTrailingForwardSlash(__privateGet(this, _base)));
  }
  removeBase(pathname) {
    if (pathname.startsWith(__privateGet(this, _base))) {
      return pathname.slice(__privateGet(this, _baseWithoutTrailingSlash).length + 1);
    }
    return pathname;
  }
  match(request, { matchNotFound = false } = {}) {
    const url = new URL(request.url);
    if (__privateGet(this, _manifest$1).assets.has(url.pathname)) {
      return void 0;
    }
    let pathname = "/" + this.removeBase(url.pathname);
    let routeData = matchRoute(pathname, __privateGet(this, _manifestData));
    if (routeData) {
      const asset = matchAssets(routeData, __privateGet(this, _manifest$1).assets);
      if (asset)
        return void 0;
      return routeData;
    } else if (matchNotFound) {
      return matchRoute("/404", __privateGet(this, _manifestData));
    } else {
      return void 0;
    }
  }
  async render(request, routeData) {
    let defaultStatus = 200;
    if (!routeData) {
      routeData = this.match(request);
      if (!routeData) {
        defaultStatus = 404;
        routeData = this.match(request, { matchNotFound: true });
      }
      if (!routeData) {
        return new Response(null, {
          status: 404,
          statusText: "Not found"
        });
      }
    }
    if (routeData.route === "/404") {
      defaultStatus = 404;
    }
    let mod = __privateGet(this, _manifest$1).pageMap.get(routeData.component);
    if (routeData.type === "page") {
      let response = await __privateMethod(this, _renderPage, renderPage_fn).call(this, request, routeData, mod, defaultStatus);
      if (response.status === 500) {
        const fiveHundredRouteData = matchRoute("/500", __privateGet(this, _manifestData));
        if (fiveHundredRouteData) {
          mod = __privateGet(this, _manifest$1).pageMap.get(fiveHundredRouteData.component);
          try {
            let fiveHundredResponse = await __privateMethod(this, _renderPage, renderPage_fn).call(this, request, fiveHundredRouteData, mod, 500);
            return fiveHundredResponse;
          } catch {
          }
        }
      }
      return response;
    } else if (routeData.type === "endpoint") {
      return __privateMethod(this, _callEndpoint, callEndpoint_fn).call(this, request, routeData, mod, defaultStatus);
    } else {
      throw new Error(`Unsupported route type [${routeData.type}].`);
    }
  }
  setCookieHeaders(response) {
    return getSetCookiesFromResponse(response);
  }
}
_env = new WeakMap();
_manifest$1 = new WeakMap();
_manifestData = new WeakMap();
_routeDataToRouteInfo = new WeakMap();
_encoder = new WeakMap();
_logging = new WeakMap();
_base = new WeakMap();
_baseWithoutTrailingSlash = new WeakMap();
_renderPage = new WeakSet();
renderPage_fn = async function(request, routeData, mod, status = 200) {
  const url = new URL(request.url);
  const pathname = "/" + this.removeBase(url.pathname);
  const info = __privateGet(this, _routeDataToRouteInfo).get(routeData);
  const links = createLinkStylesheetElementSet(info.links);
  let scripts = /* @__PURE__ */ new Set();
  for (const script of info.scripts) {
    if ("stage" in script) {
      if (script.stage === "head-inline") {
        scripts.add({
          props: {},
          children: script.children
        });
      }
    } else {
      scripts.add(createModuleScriptElement(script));
    }
  }
  try {
    const ctx = createRenderContext({
      request,
      origin: url.origin,
      pathname,
      scripts,
      links,
      route: routeData,
      status
    });
    const response = await renderPage(mod, ctx, __privateGet(this, _env));
    return response;
  } catch (err) {
    error(__privateGet(this, _logging), "ssr", err.stack || err.message || String(err));
    return new Response(null, {
      status: 500,
      statusText: "Internal server error"
    });
  }
};
_callEndpoint = new WeakSet();
callEndpoint_fn = async function(request, routeData, mod, status = 200) {
  const url = new URL(request.url);
  const pathname = "/" + this.removeBase(url.pathname);
  const handler = mod;
  const ctx = createRenderContext({
    request,
    origin: url.origin,
    pathname,
    route: routeData,
    status
  });
  const result = await call(handler, __privateGet(this, _env), ctx);
  if (result.type === "response") {
    if (result.response.headers.get("X-Astro-Response") === "Not-Found") {
      const fourOhFourRequest = new Request(new URL("/404", request.url));
      const fourOhFourRouteData = this.match(fourOhFourRequest);
      if (fourOhFourRouteData) {
        return this.render(fourOhFourRequest, fourOhFourRouteData);
      }
    }
    return result.response;
  } else {
    const body = result.body;
    const headers = new Headers();
    const mimeType = mime.getType(url.pathname);
    if (mimeType) {
      headers.set("Content-Type", `${mimeType};charset=utf-8`);
    } else {
      headers.set("Content-Type", "text/plain;charset=utf-8");
    }
    const bytes = __privateGet(this, _encoder).encode(body);
    headers.set("Content-Length", bytes.byteLength.toString());
    const response = new Response(bytes, {
      status: 200,
      headers
    });
    attachToResponse(response, result.cookies);
    return response;
  }
};

polyfill(globalThis, {
  exclude: "window document"
});
function parseContentType(header) {
  return (header == null ? void 0 : header.split(";")[0]) ?? "";
}
const clientAddressSymbol = Symbol.for("astro.clientAddress");
const createExports = (manifest, args) => {
  const app = new App(manifest);
  const builders = args.builders ?? false;
  const binaryMediaTypes = args.binaryMediaTypes ?? [];
  const knownBinaryMediaTypes = /* @__PURE__ */ new Set([
    "audio/3gpp",
    "audio/3gpp2",
    "audio/aac",
    "audio/midi",
    "audio/mpeg",
    "audio/ogg",
    "audio/opus",
    "audio/wav",
    "audio/webm",
    "audio/x-midi",
    "image/avif",
    "image/bmp",
    "image/gif",
    "image/vnd.microsoft.icon",
    "image/heif",
    "image/jpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    "video/3gpp",
    "video/3gpp2",
    "video/mp2t",
    "video/mp4",
    "video/mpeg",
    "video/ogg",
    "video/x-msvideo",
    "video/webm",
    ...binaryMediaTypes
  ]);
  const myHandler = async (event) => {
    const { httpMethod, headers, rawUrl, body: requestBody, isBase64Encoded } = event;
    const init = {
      method: httpMethod,
      headers: new Headers(headers)
    };
    if (httpMethod !== "GET" && httpMethod !== "HEAD") {
      const encoding = isBase64Encoded ? "base64" : "utf-8";
      init.body = typeof requestBody === "string" ? Buffer.from(requestBody, encoding) : requestBody;
    }
    const request = new Request(rawUrl, init);
    let routeData = app.match(request, { matchNotFound: true });
    if (!routeData) {
      return {
        statusCode: 404,
        body: "Not found"
      };
    }
    const ip = headers["x-nf-client-connection-ip"];
    Reflect.set(request, clientAddressSymbol, ip);
    const response = await app.render(request, routeData);
    const responseHeaders = Object.fromEntries(response.headers.entries());
    const responseContentType = parseContentType(responseHeaders["content-type"]);
    const responseIsBase64Encoded = knownBinaryMediaTypes.has(responseContentType);
    let responseBody;
    if (responseIsBase64Encoded) {
      const ab = await response.arrayBuffer();
      responseBody = Buffer.from(ab).toString("base64");
    } else {
      responseBody = await response.text();
    }
    const fnResponse = {
      statusCode: response.status,
      headers: responseHeaders,
      body: responseBody,
      isBase64Encoded: responseIsBase64Encoded
    };
    const cookies = response.headers.get("set-cookie");
    if (cookies) {
      fnResponse.multiValueHeaders = {
        "set-cookie": Array.isArray(cookies) ? cookies : splitCookiesString(cookies)
      };
    }
    if (app.setCookieHeaders) {
      const setCookieHeaders = Array.from(app.setCookieHeaders(response));
      fnResponse.multiValueHeaders = fnResponse.multiValueHeaders || {};
      if (!fnResponse.multiValueHeaders["set-cookie"]) {
        fnResponse.multiValueHeaders["set-cookie"] = [];
      }
      fnResponse.multiValueHeaders["set-cookie"].push(...setCookieHeaders);
    }
    return fnResponse;
  };
  const handler = builders ? builder(myHandler) : myHandler;
  return { handler };
};
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString;
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  let cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  function skipWhitespace() {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  }
  function notSpecialChar() {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  }
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.substring(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}

const adapter = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  createExports
}, Symbol.toStringTag, { value: 'Module' }));

const slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
async function check(Component, props, { default: children = null, ...slotted } = {}) {
  if (typeof Component !== "function")
    return false;
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  try {
    const result = await Component({ ...props, ...slots, children });
    return result[AstroJSX];
  } catch (e) {
  }
  return false;
}
async function renderToStaticMarkup(Component, props = {}, { default: children = null, ...slotted } = {}) {
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  const { result } = this;
  const html = await renderJSX(result, createVNode(Component, { ...props, ...slots, children }));
  return { html };
}
var server_default = {
  check,
  renderToStaticMarkup
};

const $$Astro$h = createAstro("/Users/slurve/Dropbox/htdocs/tomrose-astro/src/components/SiteNav.astro", "", "file:///Users/slurve/Dropbox/htdocs/tomrose-astro/");
const $$SiteNav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$SiteNav;
  Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<header class="astro-M3UDV5FW">
  <a href="/" class="logo astro-M3UDV5FW">
    <svg viewBox="0 0 68 27" class="astro-M3UDV5FW">
      <title>&lt;tomrose&gt;</title>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" class="astro-M3UDV5FW">
        <g class="logo-fill astro-M3UDV5FW" transform="translate(-2.000000, -4.000000)" fillRule="nonzero">
          <path d="M19.152,27.606 L2.166,19.17 L2.166,15.142 L19.152,6.706 L19.152,11.646 L7.828,17.118 L19.152,22.628 L19.152,27.606 Z M34.808,29.886 C33.896,30.152 33.022,30.266 31.502,30.266 C27.512,30.266 24.738,28.822 24.738,24.072 L24.738,16.054 L22.268,16.054 L22.268,11.38 L24.738,11.38 L24.738,5.832 L30.438,4.92 L30.438,11.38 L33.972,11.38 L34.694,16.054 L30.438,16.054 L30.438,23.16 C30.438,24.642 31.198,25.364 32.718,25.364 C33.212,25.364 33.706,25.288 34.124,25.174 L34.808,29.886 Z M49.514,16.852 C46.74,17.042 44.65,18.144 43.244,19.664 L43.244,30 L37.506,30 L37.506,11.38 L42.522,11.38 L43.13,15.066 C44.27,12.938 45.828,11.19 48.564,11 L49.514,16.852 Z M69.426,19.17 L52.44,27.606 L52.44,22.628 L63.764,17.194 L52.44,11.684 L52.44,6.706 L69.426,15.142 L69.426,19.17 Z" class="astro-M3UDV5FW"></path>
        </g>
      </g>
    </svg>
  </a>
  <nav class="astro-M3UDV5FW">
    <a class="nav-projects astro-M3UDV5FW" href="/projects">Projects</a>
    <a class="nav-about astro-M3UDV5FW" href="/about">About</a>
    <a class="nav-contact astro-M3UDV5FW" href="/contact">Contact</a>
  </nav>
</header>



`;
}, "/Users/slurve/Dropbox/htdocs/tomrose-astro/src/components/SiteNav.astro");

const $$Astro$g = createAstro("/Users/slurve/Dropbox/htdocs/tomrose-astro/src/components/Social.astro", "", "file:///Users/slurve/Dropbox/htdocs/tomrose-astro/");
const $$Social = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Social;
  return renderTemplate`${maybeRenderHead($$result)}<div class="social astro-OVGAXUP2">
  <a target="_blank" rel="me noreferrer" class="mastodon astro-OVGAXUP2" href="https://jawns.club/@slurve">
    <svg xmlns="http://www.w3.org/2000/svg" width="61.076954mm" height="65.47831mm" viewBox="0 0 216.4144 232.00976" class="astro-OVGAXUP2">
      <title>Mastodon icon</title>
      <path class="md-fill astro-OVGAXUP2" d="M211.80734 139.0875c-3.18125 16.36625-28.4925 34.2775-57.5625 37.74875-15.15875 1.80875-30.08375 3.47125-45.99875 2.74125-26.0275-1.1925-46.565-6.2125-46.565-6.2125 0 2.53375.15625 4.94625.46875 7.2025 3.38375 25.68625 25.47 27.225 46.39125 27.9425 21.11625.7225 39.91875-5.20625 39.91875-5.20625l.8675 19.09s-14.77 7.93125-41.08125 9.39c-14.50875.7975-32.52375-.365-53.50625-5.91875C9.23234 213.82 1.40609 165.31125.20859 116.09125c-.365-14.61375-.14-28.39375-.14-39.91875 0-50.33 32.97625-65.0825 32.97625-65.0825C49.67234 3.45375 78.20359.2425 107.86484 0h.72875c29.66125.2425 58.21125 3.45375 74.8375 11.09 0 0 32.975 14.7525 32.975 65.0825 0 0 .41375 37.13375-4.59875 62.915"></path>
      <path class="md-mark astro-OVGAXUP2" d="M177.50984 80.077v60.94125h-24.14375v-59.15c0-12.46875-5.24625-18.7975-15.74-18.7975-11.6025 0-17.4175 7.5075-17.4175 22.3525v32.37625H96.20734V85.42325c0-14.845-5.81625-22.3525-17.41875-22.3525-10.49375 0-15.74 6.32875-15.74 18.7975v59.15H38.90484V80.077c0-12.455 3.17125-22.3525 9.54125-29.675 6.56875-7.3225 15.17125-11.07625 25.85-11.07625 12.355 0 21.71125 4.74875 27.8975 14.2475l6.01375 10.08125 6.015-10.08125c6.185-9.49875 15.54125-14.2475 27.8975-14.2475 10.6775 0 19.28 3.75375 25.85 11.07625 6.36875 7.3225 9.54 17.22 9.54 29.675"></path>
    </svg>
    <span class="astro-OVGAXUP2">Mastodon</span>
  </a>
  <a target="_blank" rel="noopener noreferrer" class="github astro-OVGAXUP2" href="https://www.github.com/slurve/">
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="astro-OVGAXUP2">
      <title>GitHub icon</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" class="astro-OVGAXUP2"></path>
    </svg>
    <span class="astro-OVGAXUP2">Github</span>
  </a>
  <a target="_blank" rel="noopener noreferrer" class="linkedin astro-OVGAXUP2" href="https://www.linkedin.com/in/slurve/">
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="astro-OVGAXUP2">
      <title>LinkedIn icon</title>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" class="astro-OVGAXUP2"></path>
    </svg>
    <span class="astro-OVGAXUP2">LinkedIn</span>
  </a>
</div>



`;
}, "/Users/slurve/Dropbox/htdocs/tomrose-astro/src/components/Social.astro");

const $$Astro$f = createAstro("/Users/slurve/Dropbox/htdocs/tomrose-astro/src/components/SiteFooter.astro", "", "file:///Users/slurve/Dropbox/htdocs/tomrose-astro/");
const $$SiteFooter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$SiteFooter;
  return renderTemplate`${maybeRenderHead($$result)}<footer class="astro-KXV5JF6J">
  ${renderComponent($$result, "Social", $$Social, { "class": "astro-KXV5JF6J" })}
</footer>

`;
}, "/Users/slurve/Dropbox/htdocs/tomrose-astro/src/components/SiteFooter.astro");

const $$Astro$e = createAstro("/Users/slurve/Dropbox/htdocs/tomrose-astro/src/components/Connect.astro", "", "file:///Users/slurve/Dropbox/htdocs/tomrose-astro/");
const $$Connect = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Connect;
  return renderTemplate`${maybeRenderHead($$result)}<div class="connect astro-X4OYS6DE">
  <h2 class="astro-X4OYS6DE">Let's connect</h2>
  <p class="astro-X4OYS6DE">
    If filling out contact forms isn't your thing, please feel free to send me
    an email at <strong class="astro-X4OYS6DE"><a href="mailto:tom@slurve.com" class="astro-X4OYS6DE">tom@slurve.com</a></strong>. You can also find me on the web:
  </p>
  ${renderComponent($$result, "Social", $$Social, { "class": "astro-X4OYS6DE" })}
</div>

`;
}, "/Users/slurve/Dropbox/htdocs/tomrose-astro/src/components/Connect.astro");

const $$Astro$d = createAstro("/Users/slurve/Dropbox/htdocs/tomrose-astro/src/components/Image.astro", "", "file:///Users/slurve/Dropbox/htdocs/tomrose-astro/");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Image;
  return renderTemplate`${maybeRenderHead($$result)}<div class="image astro-TBHSOALV"></div>
`;
}, "/Users/slurve/Dropbox/htdocs/tomrose-astro/src/components/Image.astro");

async function navQuery() {
  const siteNavQueryRes = await fetch("https://slurved.wpengine.com/graphql", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `{
              menus(where: {location: PRIMARY}) {
                nodes {
                  name
                  menuItems {
                      nodes {
                          uri
                          url
                          order
                          label
                      }
                  }
                }
              }
              generalSettings {
                  title
                  url
                  description
              }
          }
          `,
    }),
  });
  const { data } = await siteNavQueryRes.json();
  return data;
}

async function projectsQuery() {
  const response = await fetch("https://slurved.wpengine.com/graphql", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `{
              projects {
                nodes {
                  title
                  slug
                  link
                  featuredImage {
                    node {
                      mediaItemUrl
                      mimeType
                      srcSet
                      altText
                    }
                  }
                  projectCustom {
                    projectUrl
                    projectSummary
                  }

                }
              }
            }
          `,
    }),
  });
  const { data } = await response.json();
  return data;
}

async function homePagePostsQuery() {
  const response = await fetch("https://slurved.wpengine.com/graphql", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `{
              posts {
                nodes {
                  date
                  uri
                  title
                  commentCount
                  excerpt
                  categories {
                    nodes {
                      name
                      uri
                    }
                  }
                  featuredImage {
                    node {
                      srcSet
                      sourceUrl
                      altText
                      mediaDetails {
                        height
                        width
                      }
                    }
                  }
                }
              }
            }
          `,
    }),
  });
  const { data } = await response.json();
  return data;
}

async function getNodeByURI(uri) {
  const response = await fetch("https://slurved.wpengine.com/graphql", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query GetNodeByURI($uri: String!) {
              nodeByUri(uri: $uri) {
                __typename
                isContentNode
                isTermNode
                ... on Post {
                  id
                  title
                  date
                  uri
                  excerpt
                  content
                  categories {
                    nodes {
                      name
                      uri
                    }
                  }
                  featuredImage {
                    node {
                      srcSet
                      sourceUrl
                      altText
                      mediaDetails {
                        height
                        width
                      }
                    }
                  }
                }
                ... on Page {
                  id
                  title
                  uri
                  date
                  content
                  p_layout {
                    pageLayout
                    sideComponents
                  }
                }
                ... on Category {
                  id
                  name
                  posts {
                    nodes {
                      date
                      title
                      excerpt
                      uri
                      categories {
                        nodes {
                          name
                          uri
                        }
                      }
                      featuredImage {
                        node {
                          srcSet
                          sourceUrl
                          altText
                          mediaDetails {
                            height
                            width
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          `,
      variables: {
        uri: uri,
      },
    }),
  });
  const { data } = await response.json();
  return data;
}

async function getAllUris() {
  const response = await fetch("https://slurved.wpengine.com/graphql", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query GetAllUris {
          terms {
            nodes {
              uri
            }
          }
          posts(first: 100) {
            nodes {
              uri
            }
          }
          pages(first: 100) {
            nodes {
              uri
            }
          }
        }
        `,
    }),
  });
  const { data } = await response.json();
  const uris = Object.values(data)
    .reduce(function (acc, currentValue) {
      return acc.concat(currentValue.nodes);
    }, [])
    .filter((node) => node.uri !== null)
    .map((node) => {
      let trimmedURI = node.uri.substring(1);
      trimmedURI = trimmedURI.substring(0, trimmedURI.length - 1);
      return {
        params: {
          uri: trimmedURI,
        },
      };
    });

  return uris;
}

async function homePageQuery() {
  const response = await fetch("https://slurved.wpengine.com/graphql", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `{
              pageBy(uri: "home") {
                home {
                  availability
                  homeLead
                  homeTagline
                }
              }
            }
          `,
    }),
  });
  const { data } = await response.json();
  return data;
}

const $$Astro$c = createAstro("/Users/slurve/Dropbox/htdocs/tomrose-astro/src/components/Availability.astro", "", "file:///Users/slurve/Dropbox/htdocs/tomrose-astro/");
const $$Availability = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Availability;
  const data = await homePageQuery();
  const availability = data.pageBy.home.availability;
  return renderTemplate`${maybeRenderHead($$result)}<h2>Availability</h2>
<div class="availability">${unescapeHTML(availability)}</div>

`;
}, "/Users/slurve/Dropbox/htdocs/tomrose-astro/src/components/Availability.astro");

const $$Astro$b = createAstro("/Users/slurve/Dropbox/htdocs/tomrose-astro/src/components/Aside.astro", "", "file:///Users/slurve/Dropbox/htdocs/tomrose-astro/");
const $$Aside = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Aside;
  const { content } = Astro2.props;
  return renderTemplate`${content == "image" && renderTemplate`${renderComponent($$result, "Image", $$Image, {})}`}
${content == "availability" && renderTemplate`${renderComponent($$result, "Availability", $$Availability, {})}`}
${content == "connect" && renderTemplate`${renderComponent($$result, "Connect", $$Connect, {})}`}
`;
}, "/Users/slurve/Dropbox/htdocs/tomrose-astro/src/components/Aside.astro");

const $$Astro$a = createAstro("/Users/slurve/Dropbox/htdocs/tomrose-astro/src/layouts/MainLayout.astro", "", "file:///Users/slurve/Dropbox/htdocs/tomrose-astro/");
const $$MainLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { menus, generalSettings } = await navQuery();
  const primaryMenu = menus.nodes[0];
  const { title, description, slug, layout, side_components } = Astro2.props;
  return renderTemplate`<html lang="en" class="astro-FVT2K5T2">
  <head>
    <meta charset="utf-8">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <meta name="viewport" content="width=device-width">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <title>${`${title} | ${generalSettings.title}`}</title>
    <meta name="description"${addAttribute(description, "content")}>
  ${renderHead($$result)}</head>
  <body${addAttribute(slug + " astro-FVT2K5T2", "class")}>
    <div class="wrap astro-FVT2K5T2">
      ${renderComponent($$result, "SiteNav", $$SiteNav, { "menu": primaryMenu, "generalSettings": generalSettings, "class": "astro-FVT2K5T2" })}
      <main${addAttribute((layout ? layout : "wide") + " astro-FVT2K5T2", "class")}>
        ${renderSlot($$result, $$slots["default"])}
        ${layout == "split" && renderTemplate`<aside class="astro-FVT2K5T2">
              ${side_components.map((content) => {
    return renderTemplate`${renderComponent($$result, "Aside", $$Aside, { "content": content, "class": "astro-FVT2K5T2" })}`;
  })}
            </aside>`}
      </main>
      ${renderComponent($$result, "SiteFooter", $$SiteFooter, { "class": "astro-FVT2K5T2" })}
    </div>
  
</body></html>`;
}, "/Users/slurve/Dropbox/htdocs/tomrose-astro/src/layouts/MainLayout.astro");

const $$Astro$9 = createAstro("/Users/slurve/Dropbox/htdocs/tomrose-astro/src/components/Lead.astro", "", "file:///Users/slurve/Dropbox/htdocs/tomrose-astro/");
const $$Lead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Lead;
  return renderTemplate`${maybeRenderHead($$result)}<h1 class="astro-WWM3USYV">Hey. I'm Tom Rose, a WordPress developer based in Philadelphia.</h1>
<p class="astro-WWM3USYV">
  I've delivered successful projects for small businesses, non-profits,
  startups, and global brands for over 15 years.
  <a href="/contact" class="astro-WWM3USYV">Let's work together!</a>
</p>

`;
}, "/Users/slurve/Dropbox/htdocs/tomrose-astro/src/components/Lead.astro");

const $$Astro$8 = createAstro("/Users/slurve/Dropbox/htdocs/tomrose-astro/src/pages/index.astro", "", "file:///Users/slurve/Dropbox/htdocs/tomrose-astro/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Home", "slug": "home" }, { "default": () => renderTemplate`${renderComponent($$result, "Lead", $$Lead, {})}` })}`;
}, "/Users/slurve/Dropbox/htdocs/tomrose-astro/src/pages/index.astro");

const $$file$3 = "/Users/slurve/Dropbox/htdocs/tomrose-astro/src/pages/index.astro";
const $$url$3 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file$3,
  url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$7 = createAstro("/Users/slurve/Dropbox/htdocs/tomrose-astro/src/components/ProjectCard.astro", "", "file:///Users/slurve/Dropbox/htdocs/tomrose-astro/");
const $$ProjectCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { project } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="project astro-KPLOY5Y5">
  <div class="project-screen astro-KPLOY5Y5">
    <a rel="noopener noreferrer" target="_blank"${addAttribute(project.projectCustom.projectUrl, "href")} class="astro-KPLOY5Y5">
      <picture class="astro-KPLOY5Y5">
        <source${addAttribute(project?.featuredImage?.node?.srcSet, "srcset")}${addAttribute(project?.featuredImage?.node?.mimeType, "type")} class="astro-KPLOY5Y5">
        <img${addAttribute(project?.featuredImage?.node?.srcSet, "src")}${addAttribute(project.title, "alt")} class="astro-KPLOY5Y5">
      </picture>
    </a>
  </div>
  <div class="project-details astro-KPLOY5Y5">
    <div class="astro-KPLOY5Y5">
      <h2 class="astro-KPLOY5Y5">${project.title}</h2>
      <h3 class="astro-KPLOY5Y5">
        <a rel="noopener noreferrer" target="_blank"${addAttribute(project.projectCustom.projectUrl, "href")} class="astro-KPLOY5Y5">
          ${project.projectCustom.projectUrl}
        </a>
      </h3>
      <span class="astro-KPLOY5Y5">${unescapeHTML(project.projectCustom.projectSummary)}</span>
    </div>
  </div>
</div>

`;
}, "/Users/slurve/Dropbox/htdocs/tomrose-astro/src/components/ProjectCard.astro");

const $$Astro$6 = createAstro("/Users/slurve/Dropbox/htdocs/tomrose-astro/src/components/Brands.astro", "", "file:///Users/slurve/Dropbox/htdocs/tomrose-astro/");
const $$Brands = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Brands;
  return renderTemplate`${maybeRenderHead($$result)}<div class="brands astro-XKISS4ET">
  <span class="astro-XKISS4ET">
    <svg viewBox="0 0 138 51" className="logo-ted" class="astro-XKISS4ET">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" class="astro-XKISS4ET">
        <g fillRule="nonzero" fill="#888" class="astro-XKISS4ET">
          <path d="M115.49,0 C132.12,0.09765 138,12.397 138,24.972 C138,40.281 129.89,49.993 112.49,50 L90,50 L90,0 L115.49,0 Z M111.65,37.205 C121.23,37.205 122.63,29.446 122.63,24.759 C122.63,21.62 121.64,12.886 110.53,12.886 L105.64,12.886 L105.64,37.205 L111.65,37.205 L111.65,37.205 Z" class="astro-XKISS4ET"></path>
          <polygon points="44.996 0 88 0 88 12.936 62.008 12.936 62.008 17.994 88 17.994 88 31.976 62.008 31.976 62.008 36.975 88 36.975 88 50 44.996 50" class="astro-XKISS4ET"></polygon>
          <polygon points="13.08 12.92 0 12.92 0 0 43 0 43 12.92 30.009 12.92 30.009 50.026 13.08 50.026 13.08 12.92" class="astro-XKISS4ET"></polygon>
        </g>
      </g>
    </svg>
  </span>

  <span class="astro-XKISS4ET">
    <svg viewBox="0 0 1001 354" className="logo-comcast" class="astro-XKISS4ET">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" class="astro-XKISS4ET">
        <g fillRule="nonzero" class="astro-XKISS4ET">
          <path d="M500.044,17.759 C503.732,11.737 509.851,5.436 516.44,2.771 C527.781,-2.389 542.982,-0.17 552.235,7.995 C561.189,16.107 565.731,27.225 563.588,39.655 C565.784,39.25 568.001,37.844 570.326,37.044 C584.225,33.121 598.925,37.375 607.837,49.292 C614.531,57.799 616.28,71.016 612.262,81.293 C610.268,86.462 606.867,91.11 602.445,95.076 L602.891,95.524 C615.822,96.152 628.53,106.194 632.452,118.506 C636.705,130.925 632.964,144.196 623.882,153.279 C616.462,160.613 606.921,163.151 596.315,162.937 L403.765,162.937 C387.955,163.278 375.739,156.274 369.162,142.215 C364.002,130.147 366.55,114.712 376.186,105.513 C382.262,99.159 389.874,96.557 398.082,95.247 C388.787,86.623 384.309,74.823 386.921,62.169 C388.787,51.915 397.528,41.532 407.569,37.95 C416.416,34.432 428.399,35.05 436.501,39.825 L436.789,39.473 C434.348,25.519 440.531,12.93 452.106,5.212 C462.426,-1.769 478.927,-1.589 489.032,5.832 C493.574,8.613 497.315,13.389 500.044,17.759" fill="#FFFFFF" class="astro-XKISS4ET"></path>
          <path d="M554.558,22.972 C558.695,31.319 556.265,42.256 551.947,49.75 L518.539,124.913 L518.25,125.265 L506.174,49.015 C505.205,41.693 513.028,38.569 517.633,35.051 C517.399,33.975 516.215,34.028 515.47,33.527 L504.182,33.409 L503.839,33.068 C503.903,23.602 508.999,14.861 517.633,10.267 C526.653,5.055 539.358,6.472 547.182,13.156 C550.359,15.99 553.035,19.283 554.558,22.972" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M493.008,20.36 C495.738,25.413 497.316,31.149 496.356,37.501 L482.733,124.806 C482.807,124.912 482.68,125.03 482.572,125.082 L479.044,118.058 L444.9,41.808 C441.723,31.99 444.666,21.725 451.818,14.688 C459.024,7.376 470.878,5.393 480.302,9.359 C485.291,11.513 490.056,15.479 493.008,20.36" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M603.978,57.115 C608.572,64.949 607.539,76.804 602.431,84.074 C599.267,89.18 594.042,91.728 589.618,95.075 L518.87,143.64 L518.708,143.64 L519.498,141.317 L557,56.668 C562.618,46.69 573.342,41.637 584.684,43.161 C592.455,44.58 600.226,49.632 603.978,57.115" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M443.259,56.668 L482.285,143.631 L481.657,143.631 L402.977,89.404 C394.97,82.657 391.688,72.551 394.406,62.339 C396.442,54.685 402.795,47.533 410.353,44.696 C422.728,40.166 436.67,44.984 443.259,56.668" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M624.509,118.505 C628.431,126.788 626.886,138.13 621.279,145.175 C615.716,151.924 608.274,155.612 599.543,155.377 L515.65,155.431 L585.929,106.535 C592.796,102.111 603.232,101.31 610.726,104.892 C616.513,107.163 621.961,112.834 624.509,118.505" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M376.08,118.505 C372.169,126.788 373.703,138.13 379.321,145.175 C384.885,151.924 392.304,155.612 401.046,155.377 L484.939,155.431 L414.659,106.535 C407.794,102.111 397.359,101.31 389.875,104.892 C384.085,107.163 378.639,112.834 376.08,118.505" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M225.435,205.65 C184.672,205.65 151.542,238.802 151.542,279.566 C151.542,320.319 184.672,353.491 225.435,353.491 C266.199,353.491 299.351,320.319 299.351,279.566 C299.351,238.803 266.199,205.65 225.435,205.65 M225.435,338.93 C192.699,338.93 166.06,312.293 166.06,279.567 C166.06,246.85 192.699,220.212 225.435,220.212 C258.172,220.212 284.811,246.851 284.811,279.567 C284.811,312.293 258.172,338.93 225.435,338.93" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M862.724,280.504 C858.759,278.424 834.636,266.006 831.171,264.205 C818.518,257.734 814.03,252.02 814.03,242.341 C814.03,228.889 825.075,220.201 842.203,220.201 C852.257,220.201 861.977,224.625 867.681,227.833 C868.716,228.398 869.942,228.718 871.22,228.718 C875.207,228.718 878.48,225.446 878.48,221.459 C878.48,218.773 877.007,216.416 874.845,215.158 C867.661,211.149 855.411,205.66 842.203,205.66 C817.036,205.66 799.479,220.732 799.479,242.341 C799.479,261.732 812.228,270.878 824.701,277.253 C828.196,279.033 852.597,291.611 856.253,293.54 C865.89,298.582 871.22,306.151 871.22,314.861 C871.22,326.533 861.329,338.941 843.026,338.941 C825.223,338.941 811.398,327.002 807.582,323.324 L806.44,322.236 L795.685,332.043 L796.942,333.301 C801.717,338.036 819.179,353.491 843.026,353.491 C869.761,353.491 885.74,333.845 885.74,314.861 C885.74,300.684 877.361,288.156 862.724,280.504" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M73.895,220.211 C89.767,220.211 104.68,226.395 115.873,237.576 C118.538,240.23 123.548,240.23 126.17,237.576 C127.556,236.222 128.291,234.4 128.291,232.449 C128.291,230.519 127.556,228.675 126.17,227.321 L125.275,226.404 C111.438,213.015 93.178,205.65 73.895,205.65 C33.152,205.65 0,238.813 0,279.555 C0,320.32 33.152,353.492 73.895,353.492 C95.405,353.492 114.785,344.263 128.291,329.55 L118.004,319.253 C107.131,331.32 91.397,338.931 73.894,338.931 C41.168,338.931 14.529,312.283 14.529,279.556 C14.53,246.861 41.169,220.211 73.895,220.211" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M574.941,220.211 C590.793,220.211 605.726,226.395 616.918,237.576 C619.572,240.23 624.584,240.23 627.206,237.576 C628.592,236.222 629.359,234.4 629.359,232.449 C629.359,230.519 628.591,228.675 627.206,227.321 L626.321,226.404 C612.453,213.015 594.214,205.65 574.941,205.65 C534.189,205.65 501.025,238.812 501.025,279.554 C501.025,320.319 534.189,353.491 574.941,353.491 C596.441,353.491 615.821,344.262 629.348,329.549 L619.05,319.252 C608.177,331.319 592.421,338.93 574.941,338.93 C542.204,338.93 515.554,312.282 515.554,279.555 C515.554,246.861 542.204,220.211 574.941,220.211" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M449.741,205.65 C447.012,205.65 444.858,207.409 443.685,209.679 C442.491,211.949 400.193,316.576 400.183,316.576 C400.183,316.576 357.885,211.948 356.701,209.679 C355.518,207.408 353.366,205.65 350.637,205.65 C347.449,205.65 345.051,207.995 344.209,210.949 C343.367,213.922 319.5,345.602 319.5,345.602 C319.414,346.03 319.372,346.478 319.372,346.935 C319.372,350.558 322.325,353.491 325.928,353.491 C329.126,353.491 331.791,351.211 332.366,348.194 L353.035,235.53 C353.035,235.53 392.914,334.048 394.076,336.392 C395.249,338.727 397.423,340.55 400.195,340.55 C402.966,340.55 405.131,338.727 406.292,336.392 C407.465,334.047 447.343,235.53 447.343,235.53 L468.822,352.681 L482.17,352.681 C482.17,352.681 457.023,213.921 456.181,210.949 C455.326,207.995 452.927,205.65 449.741,205.65" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M712.527,205.66 C709.766,205.65 707.625,207.451 706.42,209.796 C705.225,212.131 651.682,344.378 651.682,344.378 C651.362,345.155 651.18,346.02 651.18,346.936 C651.18,350.559 654.112,353.502 657.736,353.502 C660.497,353.502 662.864,351.775 663.835,349.334 L684.62,298.2 L740.445,298.2 L762.619,352.681 L776.785,352.681 C776.785,352.681 719.798,212.13 718.626,209.795 C717.462,207.451 715.298,205.65 712.527,205.66 L712.527,205.66 Z M690.546,283.647 L712.526,229.601 L734.528,283.647 L690.546,283.647 Z" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M992.966,206.438 L910.673,206.438 C906.664,206.438 903.413,209.701 903.413,213.719 C903.413,217.716 906.664,220.978 910.673,220.978 L945.167,220.978 L945.167,352.67 L958.493,352.67 L958.493,220.979 L992.966,220.979 C996.975,220.979 1000.258,217.717 1000.258,213.72 C1000.258,209.701 996.975,206.438 992.966,206.438" fill="#888" class="astro-XKISS4ET"></path>
        </g>
      </g>
    </svg>
  </span>

  <span class="astro-XKISS4ET">
    <svg viewBox="0 0 432 107" className="logo-wharton" class="astro-XKISS4ET">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" class="astro-XKISS4ET">
        <g fillRule="nonzero" class="astro-XKISS4ET">
          <path d="M263.5,63 L263.5,49.2 C259,51.1 247.5,53.9 247.5,59.9 C247.5,63.9 250.5,67.2 254.6,67.2 C258.5,67.2 260.7,65.2 263.5,63 L263.5,63 Z M263.7,46.8 L263.7,36.2 C263.7,32.3 261.2,31.3 257.5,31.3 C253.9,31.3 248.8,33.7 248.8,35.8 C248.8,36.4 249,37.1 249,38.1 C249,41.8 248.1,44.3 243.8,44.3 C242,44.3 240.8,42.6 240.8,41 C240.8,38.9 242.3,36.8 244.4,35.1 C248.9,31.4 256,28.4 261.9,28.4 C268,28.4 271.2,32 271.2,37.8 L271.2,63.7 C271.2,65.3 271.2,68.3 273.5,68.3 C275.1,68.3 276,66.3 276.3,65 L277.9,65 C277.4,69.6 275.4,72.4 270.7,72.4 C267,72.4 263.9,69.1 263.8,65.7 C259.1,69.1 256,72.4 249.8,72.4 C245.2,72.4 241,68.8 241,64.2 C240.9,53.5 255.6,50.2 263.7,46.8 L263.7,46.8 Z" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M349.9,50.4 C349.9,57.9 352.7,70.2 362.4,70.2 C371.8,70.2 375.1,60.4 375.1,52.8 C375.1,44.6 373.9,30.5 362.5,30.5 C352.7,30.4 349.9,43.1 349.9,50.4 L349.9,50.4 Z M341.4,50 C341.4,38.3 349.8,28.3 362.1,28.3 C375.1,28.3 383.4,38.1 383.4,50.4 C383.4,63 375.3,72.3 362.2,72.3 C349,72.2 341.4,62.3 341.4,50 L341.4,50 Z" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M100.3,6.5 L100.3,4.3 L122.9,4.3 L122.9,6.5 C118.7,6.6 117.1,6.6 117.1,9.1 C117.1,9.2 117.2,9.9 117.6,10.8 L131.2,57 L150.3,2 L151.9,2 L168.6,56.3 C168.6,56.3 181.8,16.6 181.8,11 C181.8,6.6 179,6.9 175.4,6.5 L175.4,4.3 L189.2,4.3 C195.3,4.3 201.5,2.2 205,0.1 L205,35.2 C209.3,31.4 212.9,28.3 219.1,28.3 C223.7,28.3 227.9,30.3 230.2,34.2 C232.3,37.6 232.7,40.8 232.7,44.6 L232.7,64 C232.7,69 234,69 238.4,69.3 L238.4,71.1 L219.5,71.1 L219.5,69.3 C223.6,69 224.9,69 224.9,64 L224.9,44.5 C224.9,41.4 224.9,40 223.5,37.1 C221.9,34.3 219.1,31.6 215.5,32.2 C210,33.1 207.9,35.6 205.1,38.3 L205.1,64 C205.1,69 206.4,69 210.6,69.3 L210.6,71.1 L191.5,71.1 L191.5,69.3 C196,69 197.3,69 197.3,64 L197.3,7 C197.4,6.9 195.8,7 193.7,7 C186.1,7.5 185.9,13.3 183.5,20.2 L166.4,72.3 L164.6,72.3 L147.7,20.1 L128.2,72.3 L126.5,72.3 L108.5,15 C107.4,12 106.9,9.5 105.3,7.8 C104.3,7 104.2,6.4 100.3,6.5 L100.3,6.5 Z" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M403.5,71.2 L403.5,69.4 C399.2,69.1 397.9,69.1 397.9,64.1 L397.9,41.2 C397.9,36.7 403.9,32.7 408.1,32.7 C414.5,32.7 418,36.8 418,42.9 L418,64 C418,69 416.7,69 412.2,69.3 L412.2,71.1 L431.8,71.1 L431.8,69.3 C428.4,69 425.7,69 425.7,64 L425.7,41.1 C425.7,33.8 418.4,28.3 411.2,28.3 C404.9,28.3 401.8,31.2 397.7,35.3 L397.7,28.3 C393.4,29.8 388.9,32.1 384.3,32.7 L384.3,34.2 C388.4,34.6 389.9,36 389.9,39.6 L389.9,64 C389.9,69 388.6,69 384.1,69.3 L384.1,71.1 L403.5,71.1 L403.5,71.2 L403.5,71.2 Z" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M299.8,71.2 L299.8,69.4 C294.7,69.1 293.5,69.1 293.5,64.1 L293.5,38.4 C293.5,36.8 296.1,34.4 298.9,34.4 C301.5,34.4 301.9,37.4 305.2,37.4 C309.2,37.4 310.1,35.3 310.1,32.4 C310.1,29.4 306.9,27.7 303.2,27.7 C298.9,27.7 295.6,31.4 293.3,34.7 L293.3,28 C288.8,30.1 283.9,32 279.5,32.7 L279.5,34.2 C283.9,34.7 285.7,35.7 285.7,39.5 L285.7,64 C285.7,69 284.4,69 280.1,69.3 L280.1,71.1 L299.8,71.1 L299.8,71.2 L299.8,71.2 Z" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M341.2,30.7 L342.6,25.4 L325.5,25.4 L325.5,16.8 L324.5,16.8 C320.5,21.5 316.7,25.6 312.1,29.6 L312.1,30.7 L317.5,30.7 L317.5,59.9 C317.5,66.8 320.6,72.6 328.1,72.6 C334.5,72.6 339.4,67.9 342.1,64.8 L340.9,63.2 C338.6,65.8 335.5,67.3 332.7,67.3 C327,67.3 325.5,64.2 325.5,58.9 L325.5,30.8 L341.2,30.7 L341.2,30.7 Z" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M104.6,93.6 C104.6,96.9 105.5,99.4 109,99.4 C112.2,99.4 113.9,97.2 113.9,93.4 L113.9,86.8 C113.9,86.3 113.8,85.9 113.8,85.5 C113.7,84.7 112.9,84.3 111.8,84.2 L111.8,83.6 L117.4,83.6 L117.4,84.2 C116.3,84.3 115.5,84.6 115.4,85.5 C115.4,85.9 115.3,86.3 115.3,86.8 L115.3,93.5 C115.3,98.6 112.1,100.5 109,100.5 C104,100.5 102.4,97.9 102.4,93.7 L102.4,86.6 C102.4,84.4 102.5,84.5 100.4,84.3 L100.4,83.7 L106.8,83.7 L106.8,84.3 C104.7,84.6 104.8,84.4 104.8,86.6 L104.8,93.6 L104.6,93.6 L104.6,93.6 Z" stroke="#004784" strokeWidth="0.2258" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M130.8,100.3 C127.9,96.9 124.9,93.3 121.9,89.8 L121.9,97.9 C121.9,98.3 122,98.6 122,98.9 C122.1,99.6 122.7,99.8 123.9,99.9 L123.9,100.4 L119.4,100.4 L119.4,99.9 C120.3,99.8 120.9,99.6 121,98.9 C121,98.6 121.1,98.3 121.1,97.9 L121.1,89.3 C120.6,88.6 120,88.1 119,88.1 L119,87.6 L122.3,87.6 C125,90.9 127.8,94.3 130.6,97.6 L130.6,97.6 L130.6,90.1 C130.6,89.7 130.5,89.4 130.5,89.1 C130.4,88.4 129.8,88.2 128.6,88.1 L128.6,87.6 L133.1,87.6 L133.1,88.1 C132.2,88.2 131.6,88.4 131.5,89.1 C131.5,89.4 131.4,89.7 131.4,90.1 L131.4,100.4 L130.8,100.4 L130.8,100.3 Z" stroke="#004784" strokeWidth="0.2258" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M139.8,98 C139.8,99.7 139.7,99.6 141.4,99.8 L141.4,100.3 L136.5,100.3 L136.5,99.8 C138.1,99.6 138.1,99.7 138.1,98 L138.1,89.8 C138.1,88.1 138.2,88.2 136.5,88 L136.5,87.5 L141.4,87.5 L141.4,88 C139.8,88.2 139.8,88.1 139.8,89.8 L139.8,98 L139.8,98 Z" stroke="#004784" strokeWidth="0.2258" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M149.3,88 C148.3,88 147.6,88.3 148.2,90 C148.9,92.2 150,95.3 150.9,98.1 C152.1,95.3 153.2,92.5 154.3,89.7 C154.8,88.5 154.3,88 153,88 L153,87.5 L156.9,87.5 L156.9,88 C156.4,88 155.8,88.2 155.4,89.1 C153.9,92.8 152.3,96.6 150.8,100.3 L149.9,100.3 C148.8,97.1 147.5,93.6 146.4,90.5 C145.7,88.5 145.2,88 144.3,88 L144.3,87.5 L149.3,87.5 L149.3,88 L149.3,88 Z" stroke="#004784" strokeWidth="0.2258" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M159.8,99.8 C161.4,99.6 161.4,99.7 161.4,98 L161.4,89.8 C161.4,88.1 161.5,88.2 159.8,88 L159.8,87.5 L168,87.5 L168,90.4 L167.5,90.4 C167.3,89 166.9,88 165.6,88 L163.1,88 L163.1,93.2 L164.6,93.2 C165.8,93.2 166.2,92.7 166.3,91.6 L166.8,91.6 L166.8,95.5 L166.3,95.5 C166.3,94.4 165.8,93.8 164.6,93.8 L163.1,93.8 L163.1,97.9 C163.1,99.5 163.8,99.6 165.5,99.6 C168.2,99.6 168,98.8 168.9,96.9 L169.4,96.9 L168.9,100.2 L159.9,100.2 L159.8,99.8 L159.8,99.8 Z" stroke="#004784" strokeWidth="0.2258" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M172.5,87.5 L177.8,87.5 C179.6,87.5 181.5,88.5 181.5,90.6 C181.5,92.5 180.4,93.8 178.9,94.3 L180.7,97 C181.6,98.3 182.6,99.6 183.3,100 L183.3,100.2 L181.4,100.2 C180.3,100.2 179.7,98.2 177.5,94.5 L175.8,94.5 L175.8,97.9 C175.8,99.6 175.7,99.5 177.4,99.7 L177.4,100.2 L172.5,100.2 L172.5,99.7 C174.1,99.5 174.1,99.6 174.1,97.9 L174.1,89.7 C174.1,88 174.2,88.1 172.5,87.9 L172.5,87.5 L172.5,87.5 Z M175.8,94 L177.3,94 C178.9,94 179.6,92.8 179.6,90.7 C179.6,88.7 178.5,88 177.2,88 L175.8,88 L175.8,94 L175.8,94 Z" stroke="#004784" strokeWidth="0.2258" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M192.5,90.2 C192.4,88.9 191.7,87.9 190.2,87.9 C189.1,87.9 188.2,88.4 188.2,89.8 C188.2,91.1 189.5,91.8 191.3,93.2 C193.2,94.6 193.9,95.6 193.9,97.1 C193.9,99.3 191.7,100.5 189.5,100.5 C188.3,100.5 187.3,100.3 186.4,99.9 C186.3,99.9 186.3,99.8 186.3,99.6 L186.3,97 L186.8,97 C187,99 188.3,99.8 189.7,99.8 C191,99.8 192,98.8 192,97.5 C192,96.3 191.4,95.3 188.6,93.5 C187.6,92.8 186.4,92.1 186.4,90.1 C186.4,88.5 188.2,87.2 190.3,87.2 C191.1,87.2 192.1,87.3 192.9,87.5 C193,87.5 193,87.6 193,87.7 L193,90.1 L192.5,90.1 L192.5,90.2 Z" stroke="#004784" strokeWidth="0.2258" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M201,98 C201,99.7 200.9,99.6 202.6,99.8 L202.6,100.3 L197.7,100.3 L197.7,99.8 C199.3,99.6 199.3,99.7 199.3,98 L199.3,89.8 C199.3,88.1 199.4,88.2 197.7,88 L197.7,87.5 L202.6,87.5 L202.6,88 C201,88.2 201,88.1 201,89.8 L201,98 L201,98 Z" stroke="#004784" strokeWidth="0.2258" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M211.9,98 C211.9,99.7 211.8,99.6 213.5,99.8 L213.5,100.3 L208.6,100.3 L208.6,99.8 C210.2,99.6 210.2,99.7 210.2,98 L210.2,88.1 L208.6,88.1 C207,88.1 206.6,89.1 206,90.3 L205.5,90.3 L206,87.5 L216.1,87.5 L216.6,90.3 L216.1,90.3 C215.5,89.1 215.1,88.1 213.5,88.1 L211.9,88.1 L211.9,98 L211.9,98 Z" stroke="#004784" strokeWidth="0.2258" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M221.9,99.8 C223.6,99.6 223.5,99.7 223.5,98 L223.5,95.2 L220.7,89.6 C220.1,88.4 219.6,88 218.7,88 L218.7,87.5 L223.4,87.5 L223.4,88 C222,88 222.1,88.7 222.6,89.6 L224.8,94.2 L227.3,89.6 C227.9,88.5 227.3,88 226.3,88 L226.3,87.5 L230.1,87.5 L230.1,88 C229.6,88 229.1,88.2 228.6,89.1 L225.5,94.6 C225.3,95 225.3,95.5 225.3,95.9 L225.3,97.9 C225.3,99.6 225.2,99.5 226.9,99.7 L226.9,100.2 L222,100.2 L222,99.8 L221.9,99.8 Z" stroke="#004784" strokeWidth="0.2258" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M239.3,95.9 C239.3,92.8 242,88.2 245.9,88.2 C249,88.2 249.7,90.3 249.7,92.5 C249.7,95.1 247.6,100.6 243.1,100.6 C240.1,100.5 239.3,98.1 239.3,95.9 L239.3,95.9 Z M247.6,91.3 C247.6,88.8 246.1,88.7 245.7,88.7 C243.1,88.7 241.5,93.3 241.5,96.4 C241.5,97.6 241.7,99.9 243.5,99.9 C246.1,99.8 247.6,95.4 247.6,91.3 L247.6,91.3 Z" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M260.8,88.9 L260.2,89.4 L257.1,89.4 C255.9,95 254.1,102.5 252.7,106.1 L251.6,106.1 L255,89.4 L252.8,89.4 L253,88.4 L255.2,88.4 C256.4,83.4 260.6,82.8 261.6,82.8 C262.1,82.8 263.3,82.9 263.6,83.2 L263.3,84.8 L262.7,85.1 C262.4,84.5 261.6,83.7 260.6,83.7 C259.2,83.7 258.1,84.7 257.5,87.2 L257.2,88.3 L260.7,88.3 L260.8,88.9 L260.8,88.9 Z" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M275,97.3 C275,99.5 274.9,99.4 277,99.6 L277,100.2 L270.6,100.2 L270.6,99.6 C272.7,99.3 272.6,99.5 272.6,97.3 L272.6,86.6 C272.6,84.4 272.7,84.5 270.6,84.3 L270.6,83.7 L276.8,83.7 C280.7,83.7 282.7,85.3 282.7,88.1 C282.7,91.5 279.6,93.4 276,93.1 L276,92.6 C279,92.6 280.3,90.9 280.3,88.3 C280.3,85.7 279,84.4 276.4,84.4 L275,84.4 L275,97.3 L275,97.3 Z" stroke="#004784" strokeWidth="0.2258" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M286,99.8 C287.6,99.6 287.6,99.7 287.6,98 L287.6,89.8 C287.6,88.1 287.7,88.2 286,88 L286,87.5 L294.2,87.5 L294.2,90.4 L293.7,90.4 C293.5,89 293.2,88 291.8,88 L289.3,88 L289.3,93.2 L290.8,93.2 C291.9,93.2 292.4,92.7 292.5,91.6 L293,91.6 L293,95.5 L292.5,95.5 C292.5,94.4 292,93.8 290.8,93.8 L289.3,93.8 L289.3,97.9 C289.3,99.5 290,99.6 291.7,99.6 C294.3,99.6 294.2,98.8 295.1,96.9 L295.6,96.9 L295,100.2 L286,100.2 L286,99.8 L286,99.8 Z" stroke="#004784" strokeWidth="0.2258" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M309.7,100.3 C306.8,96.9 303.8,93.3 300.8,89.8 L300.8,97.9 C300.8,98.3 300.9,98.6 300.9,98.9 C301,99.6 301.6,99.8 302.8,99.9 L302.8,100.4 L298.3,100.4 L298.3,99.9 C299.2,99.8 299.8,99.6 299.9,98.9 C299.9,98.6 300,98.3 300,97.9 L300,89.3 C299.5,88.6 298.9,88.1 297.9,88.1 L297.9,87.6 L301.2,87.6 C303.9,90.9 306.8,94.3 309.5,97.6 L309.5,97.6 L309.5,90.1 C309.5,89.7 309.4,89.4 309.4,89.1 C309.3,88.4 308.7,88.2 307.5,88.1 L307.5,87.6 L312,87.6 L312,88.1 C311.1,88.2 310.5,88.4 310.4,89.1 C310.4,89.4 310.3,89.7 310.3,90.1 L310.3,100.4 L309.7,100.4 L309.7,100.3 Z" stroke="#004784" strokeWidth="0.2258" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M326.4,100.3 C323.5,96.9 320.5,93.3 317.5,89.8 L317.5,97.9 C317.5,98.3 317.6,98.6 317.6,98.9 C317.7,99.6 318.3,99.8 319.5,99.9 L319.5,100.4 L315,100.4 L315,99.9 C315.9,99.8 316.5,99.6 316.6,98.9 C316.6,98.6 316.7,98.3 316.7,97.9 L316.7,89.3 C316.2,88.6 315.6,88.1 314.6,88.1 L314.6,87.6 L317.9,87.6 C320.6,90.9 323.5,94.3 326.2,97.6 L326.2,97.6 L326.2,90.1 C326.2,89.7 326.1,89.4 326.1,89.1 C326,88.4 325.4,88.2 324.2,88.1 L324.2,87.6 L328.7,87.6 L328.7,88.1 C327.8,88.2 327.2,88.4 327.1,89.1 C327.1,89.4 327,89.7 327,90.1 L327,100.4 L326.4,100.4 L326.4,100.3 Z" stroke="#004784" strokeWidth="0.2258" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M338.3,90.2 C338.2,88.9 337.5,87.9 336,87.9 C334.9,87.9 334,88.4 334,89.8 C334,91.1 335.3,91.8 337.1,93.2 C339,94.6 339.7,95.6 339.7,97.1 C339.7,99.3 337.5,100.5 335.3,100.5 C334.1,100.5 333.1,100.3 332.2,99.9 C332.1,99.9 332.1,99.8 332.1,99.6 L332.1,97 L332.6,97 C332.8,99 334.1,99.8 335.5,99.8 C336.8,99.8 337.9,98.8 337.9,97.5 C337.9,96.3 337.3,95.3 334.5,93.5 C333.5,92.8 332.3,92.1 332.3,90.1 C332.3,88.5 334.1,87.2 336.2,87.2 C337,87.2 338,87.3 338.8,87.5 C338.9,87.5 338.9,87.6 338.9,87.7 L338.9,90.1 L338.3,90.1 L338.3,90.2 Z" stroke="#004784" strokeWidth="0.2258" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M345.6,99.8 C347.2,99.6 347.2,99.7 347.2,98 L347.2,95.2 L344.4,89.6 C343.8,88.4 343.3,88 342.5,88 L342.5,87.5 L347.2,87.5 L347.2,88 C345.8,88 345.9,88.7 346.4,89.6 L348.6,94.2 L351.1,89.6 C351.7,88.5 351.1,88 350.1,88 L350.1,87.5 L353.9,87.5 L353.9,88 C353.4,88 352.9,88.2 352.4,89.1 L349.4,94.6 C349.2,95 349.2,95.5 349.2,95.9 L349.2,97.9 C349.2,99.6 349.1,99.5 350.8,99.7 L350.8,100.2 L345.9,100.2 L345.9,99.8 L345.6,99.8 Z" stroke="#004784" strokeWidth="0.2258" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M356.9,99.8 C358.5,99.6 358.5,99.7 358.5,98 L358.5,89.8 C358.5,88.1 358.6,88.2 356.9,88 L356.9,87.5 L361.8,87.5 L361.8,88 C360.2,88.2 360.2,88.1 360.2,89.8 L360.2,98.3 C360.2,99.6 360.9,99.7 362.5,99.7 C365.1,99.7 365,98.9 365.9,97 L366.4,97 L365.9,100.3 L356.9,100.3 L356.9,99.8 L356.9,99.8 Z" stroke="#004784" strokeWidth="0.2258" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M371.7,88 C370.7,88 370,88.3 370.6,90 C371.3,92.2 372.4,95.3 373.3,98.1 C374.5,95.3 375.6,92.5 376.7,89.7 C377.2,88.5 376.7,88 375.4,88 L375.4,87.5 L379.3,87.5 L379.3,88 C378.8,88 378.2,88.2 377.8,89.1 C376.3,92.8 374.7,96.6 373.2,100.3 L372.3,100.3 C371.2,97.1 369.9,93.6 368.8,90.5 C368.1,88.5 367.6,88 366.7,88 L366.7,87.5 L371.7,87.5 L371.7,88 L371.7,88 Z" stroke="#004784" strokeWidth="0.2258" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M382.8,96 L382,98.4 C381.8,99.1 382.1,99.7 382.9,99.7 L382.9,100.2 L379.6,100.2 L379.6,99.7 C380.1,99.7 380.6,99.4 380.9,98.8 C381.7,97.2 383.8,91.2 385.3,87.2 L386.3,87.2 C387.5,90.9 389.4,96.5 390,98.1 C390.4,99.1 390.7,99.7 391.5,99.7 L391.5,100.2 L387.2,100.2 L387.2,99.7 C388.4,99.7 388.5,99.1 388.2,98.3 L387.4,95.9 L382.8,96 L382.8,96 Z M387.2,95.3 L385.3,89.4 L385.3,89.4 L383.1,95.3 L387.2,95.3 L387.2,95.3 Z" stroke="#004784" strokeWidth="0.2258" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M405.3,100.3 C402.4,96.9 399.4,93.3 396.4,89.8 L396.4,97.9 C396.4,98.3 396.5,98.6 396.5,98.9 C396.6,99.6 397.2,99.8 398.4,99.9 L398.4,100.4 L393.9,100.4 L393.9,99.9 C394.8,99.8 395.4,99.6 395.5,98.9 C395.5,98.6 395.6,98.3 395.6,97.9 L395.6,89.3 C395.1,88.6 394.5,88.1 393.5,88.1 L393.5,87.6 L396.8,87.6 C399.5,90.9 402.3,94.3 405.1,97.6 L405.1,97.6 L405.1,90.1 C405.1,89.7 405,89.4 405,89.1 C404.9,88.4 404.3,88.2 403.1,88.1 L403.1,87.6 L407.6,87.6 L407.6,88.1 C406.7,88.2 406.1,88.4 406,89.1 C406,89.4 405.9,89.7 405.9,90.1 L405.9,100.4 L405.3,100.4 L405.3,100.3 Z" stroke="#004784" strokeWidth="0.2258" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M413.9,98 C413.9,99.7 413.8,99.6 415.5,99.8 L415.5,100.3 L410.6,100.3 L410.6,99.8 C412.2,99.6 412.2,99.7 412.2,98 L412.2,89.8 C412.2,88.1 412.3,88.2 410.6,88 L410.6,87.5 L415.5,87.5 L415.5,88 C413.9,88.2 413.9,88.1 413.9,89.8 L413.9,98 L413.9,98 Z" stroke="#004784" strokeWidth="0.2258" fill="#888" class="astro-XKISS4ET"></path>
          <path d="M421.5,96 L420.7,98.4 C420.5,99.1 420.8,99.7 421.6,99.7 L421.6,100.2 L418.3,100.2 L418.3,99.7 C418.8,99.7 419.3,99.4 419.6,98.8 C420.4,97.2 422.5,91.2 424,87.2 L425,87.2 C426.2,90.9 428.1,96.5 428.7,98.1 C429.1,99.1 429.4,99.7 430.2,99.7 L430.2,100.2 L426,100.2 L426,99.7 C427.2,99.7 427.3,99.1 427,98.3 L426.2,95.9 L421.5,96 L421.5,96 Z M425.9,95.3 L424,89.4 L424,89.4 L421.8,95.3 L425.9,95.3 L425.9,95.3 Z" stroke="#004784" strokeWidth="0.2258" fill="#888" class="astro-XKISS4ET"></path>
          <g id="Group" transform="translate(0.000000, 4.000000)" class="astro-XKISS4ET">
            <path d="M1.1,1.4 L89.9,1.4 L89.9,45.7 C89.9,45.7 91,63.1 77.7,78.3 C61.2,97.1 45.7,101.2 45.7,101.2 C45.7,101.2 32,97.5 15.6,80.9 C-0.2,64.9 1.1,46.3 1.1,46.3 C1.1,46.3 1.1,1.4 1.1,1.4 Z" fill="#FFFFFF" class="astro-XKISS4ET"></path>
            <path d="M2.4,28.9 C2.4,27 2.4,4.4 2.4,2.5 C4.5,2.5 86.8,2.5 88.9,2.5 C88.9,4.4 88.9,28.9 88.9,28.9 L2.4,28.9 Z M42.7,20.8 C43.3,21 45.3,22 46.9,22.9 C48.1,23.5 49.1,24 49.5,24.2 C49.6,24.2 49.8,24.3 50,24.4 C51.3,25.1 54.3,26.7 58.6,25.9 C58.7,25.9 62,25.4 63.8,22.8 C64.9,21.2 65.5,19.1 64.7,16.7 C62.6,10 65.1,7.1 65.1,7.1 C65.1,7.1 62.8,6.2 60.6,7.6 C59.3,8.4 58.7,9.9 58.6,12.2 C57.8,12.4 56.5,12.7 55.8,13.9 C55.1,15 55.2,16.4 55.9,18.1 L56.3,19 L56.9,18.2 C57.4,17.4 59,17 59.7,17.4 C60.5,17.9 60.5,18.8 60.4,19.4 C60.3,19.9 60.2,20.4 59.9,20.7 C59.3,21.2 58.2,21.4 56.9,21.2 C56.2,21.1 55.3,20.8 54.5,20.1 C54.1,19.7 54.1,19.3 53.6,18.9 C53.2,18.6 53.5,17.9 53.6,17.6 C53.8,17 54,16.2 53.6,15.4 C53,14.4 52.4,14.2 51.9,14.1 C51.6,14 51.5,14 51.3,13.8 C51.1,13.6 51.1,13.2 51.2,12.7 C51.3,12 51.4,11.1 50.8,10.4 C49.9,9.4 49.1,9.5 48.4,9.5 C48,9.5 47.6,9.5 47.1,9.3 C46.9,9.2 46.9,9.1 46.8,8.7 C46.6,8.1 46.4,7.1 44.8,6.5 C43.8,6.1 43.1,6.5 42.6,6.7 C42.3,6.9 42,7 41.7,7 C41.5,7 41.5,7 41.2,6.6 C40.8,6.1 40.3,5.4 38.8,5.6 C38,5.7 37.4,6.4 37.1,6.9 C37,7 36.9,7.2 36.8,7.2 C36.7,7.2 36.7,7.2 36.6,7.1 C36,6.7 35,6.1 33.8,6.8 C33.1,7.2 32.4,8.2 32.4,8.2 C32.2,8.6 32,8.8 31.8,8.9 L31.4,8.2 C29.8,9 26.7,16.2 26.7,17.7 C26.7,18.6 27.2,19 27.5,19.2 C27.8,19.4 27.9,19.5 27.9,19.9 C27.9,20.1 27.6,20.4 27.4,20.7 C27.1,21.1 26,22.6 27.3,23.9 L28.1,24.1 C28.4,25.3 29.3,25.7 30.6,25.7 C32.7,25.7 34.7,24.3 36,23.3 L36.2,23.2 C37,22.6 37.9,22.1 38.2,20.8 C38.5,20.6 39.2,20.3 40.4,20.3 C40.7,20.3 41.6,20.5 42.7,20.8 L42.7,20.8 Z" fill="#A80533" class="astro-XKISS4ET"></path>
            <path d="M50,24.5 C49.8,24.4 49.6,24.3 49.5,24.3 C49.1,24.1 48.1,23.6 46.9,23 C45.3,22.2 43.3,21.1 42.7,20.9 C39.8,20 38.3,20.6 37.9,21 C37.7,22.3 36.8,22.8 35.9,23.4 L35.7,23.5 C34.4,24.4 32.4,25.9 30.3,25.9 C29,25.9 28.1,25.5 27.8,24.3 L27,24 C25.7,22.7 26.8,21.2 27.1,20.8 C27.3,20.5 27.6,20.2 27.6,20 C27.6,19.5 27.5,19.5 27.2,19.3 C26.9,19.1 26.4,18.7 26.4,17.8 C26.4,16.3 29.5,9.1 31.1,8.3 L31.5,9 C31.8,8.9 31.9,8.7 32.1,8.3 C32.1,8.3 32.7,7.2 33.5,6.9 C34.7,6.3 35.7,6.9 36.3,7.2 C36.4,7.3 36.4,7.4 36.5,7.3 C36.6,7.2 36.7,7.1 36.8,7 C37.2,6.5 37.7,5.8 38.5,5.7 C40,5.6 40.6,6.3 40.9,6.7 C41.2,7 41.2,7.1 41.4,7.1 C41.8,7.1 42,6.9 42.3,6.8 C42.8,6.5 43.4,6.2 44.5,6.6 C46.2,7.2 46.4,8.1 46.5,8.8 C46.6,9.2 46.6,9.3 46.8,9.4 C47.3,9.6 47.6,9.6 48.1,9.6 C48.8,9.6 49.6,9.5 50.5,10.5 C51.2,11.2 51,12.1 50.9,12.8 C50.8,13.4 50.8,13.7 51,13.9 C51.2,14.1 51.4,14.1 51.6,14.2 C52.1,14.3 52.7,14.5 53.3,15.5 C53.7,16.3 53.5,17.1 53.3,17.7 C53.2,18.1 52.9,18.8 53.3,19 C53.9,19.4 53.8,19.9 54.2,20.2 C55,20.9 56,21.2 56.6,21.3 C57.9,21.5 59,21.3 59.6,20.8 C59.9,20.5 60,20 60.1,19.5 C60.2,19 60.2,18 59.4,17.5 C58.7,17.1 57.2,17.6 56.6,18.3 L56,19.1 L55.6,18.2 C54.9,16.5 54.9,15.1 55.5,14 C56.2,12.8 57.5,12.4 58.3,12.3 C58.3,10 59,8.5 60.3,7.7 C62.5,6.3 64.8,7.2 64.8,7.2 C64.8,7.2 62.3,10 64.4,16.8 C65.1,19.2 64.6,21.3 63.5,22.9 C61.7,25.5 58.4,26 58.3,26 C57.5,26.1 56.8,26.2 56.1,26.2 C53.2,26.2 51,25 50,24.5 M30.6,24.8 C32.4,24.5 33.9,23.4 35.1,22.5 L35.3,22.4 C35.8,22 36.4,21.7 36.7,21.2 C36.8,21 36.8,20.6 36.7,20.6 C36.5,20.5 36.3,20.4 35.9,20.4 C35.7,20.4 35.3,20.2 35.3,19.8 C35.2,19.4 35.7,19.1 36,18.9 C37.2,18.4 38,17.9 38.2,17.7 L38.2,17.7 L38.2,17.7 L38.2,17.6 C38.2,17.6 38.2,17.6 38.2,17.7 C37.7,17.2 37.3,16.7 37.1,16.3 C36.9,16.1 36.8,15.9 36.7,15.7 C36.2,15.2 35.7,14.9 34.9,14.9 C34.4,14.9 33.8,15.7 33.2,15.9 C32.4,16.2 32.2,15.4 32.4,14.9 C32.6,14.4 33.1,14.4 33.1,13.8 C33.1,12.8 32.6,11.7 32,10.7 C31.8,10.1 31.2,10.1 31.2,10.1 C30.1,10.6 27.6,16.2 27.6,17.6 C27.6,18 27.7,18 27.9,18.2 C28.2,18.4 28.7,18.8 28.7,19.8 C28.7,20.4 28.3,20.9 27.9,21.3 C27.7,21.5 27.4,21.8 27.4,22 C27.4,22.6 27.4,23 28.8,23 C29.6,23 30.3,22.8 30.8,22.6 C31.6,22.2 32.5,21.4 32.8,20.8 C33.2,20.3 33.9,20.7 33.8,21.2 C33.4,22.2 32,22.8 31.2,23.4 C30.2,24.1 28.9,23.9 28.9,23.9 C28.7,24.3 29.6,25 30.6,24.8" fill="#888" class="astro-XKISS4ET"></path>
            <path d="M52.3,18.1 C51,16.5 49.8,14.8 49.3,14.1 C49.1,13.9 49.1,13.8 49,13.7 L48.9,13.5 C48.1,12.5 45.8,9.5 39.9,9.1 C39.3,9.1 34.7,9.2 33.1,10.7 C33,10.6 33,10.5 32.9,10.3 L32.6,9.5 C32.9,9.2 33,8.9 33.2,8.7 C33.4,8.3 33.6,7.9 34.1,7.7 C34.8,7.4 35.2,7.6 35.8,8 C36,8.1 36.2,8.2 36.3,8.3 C36.9,8.5 37.3,8 37.7,7.5 C38,7.1 38.3,6.7 38.7,6.7 C39.6,6.6 39.9,6.9 40.2,7.3 C40.5,7.6 40.9,8.1 41.7,8.1 C42.3,8.1 42.7,7.8 43,7.7 C43.4,7.5 43.7,7.3 44.3,7.5 C45.4,7.9 45.5,8.3 45.6,8.9 C45.7,9.3 45.8,9.9 46.5,10.2 C47.2,10.6 47.9,10.6 48.4,10.5 C49,10.5 49.4,10.4 49.9,11 C50.2,11.3 50.2,11.8 50.1,12.4 C50,13 49.9,13.8 50.5,14.5 C50.9,14.9 51.3,15 51.6,15.1 C52,15.2 52.3,15.3 52.6,15.9 C52.8,16.3 52.7,16.7 52.5,17.2 C52.4,17.5 52.3,17.8 52.3,18.1 L52.3,18.1 Z" fill="#FFFFFF" class="astro-XKISS4ET"></path>
            <path d="M37.5,15.2 C37.8,14.9 38.2,14.7 38.7,14.5 C38.9,14.4 39.2,14.5 39.5,14.7 C39.9,15 40.2,15.4 40.3,15.9 L40.5,16.8 L41.2,16.3 C41.4,16.1 42.2,15.7 42.7,15.9 C43.1,16 43.4,16.5 43.6,17.2 L43.8,18 L44.5,17.5 C44.9,17.2 45.3,17 45.5,17.1 C45.8,17.2 46,17.7 46.2,18.1 C46.3,18.3 46.4,18.5 46.5,18.6 C46.8,19.2 47.4,19.2 47.8,19.2 C48.2,19.2 48.4,19.2 48.5,19.9 C48.6,20.3 49.8,20.4 49.6,19.7 C49.2,18.2 48.3,18.1 47.8,18.1 C47.5,18.1 47.5,18.1 47.4,18 C47.3,17.9 47.3,17.7 47.2,17.6 C46.9,17 46.5,16.2 45.7,16 C45.3,15.9 44.9,16 44.4,16.2 C44.1,15.5 43.6,15 43.1,14.8 C42.4,14.6 41.7,14.8 41.2,15 C41,14.5 40.6,14 40.1,13.7 C39.5,13.4 38.9,13.2 38.4,13.4 C37.7,13.6 37.2,13.9 36.8,14.3 C36.4,13.9 34.2,13.9 34.2,13.9 C34.2,13.1 34,12.4 33.7,11.7 C33.8,10.9 38.1,10.1 40,10.2 C45.4,10.5 47.4,13.1 48.2,14.1 L48.3,14.3 C48.3,14.3 48.4,14.5 48.5,14.6 C49.1,15.5 50.5,17.5 52.1,19.2 C52.5,19.7 53.4,20.6 53.8,20.9 C54.8,21.7 55.8,22.1 56.8,22.2 C58.5,22.5 59.9,22.2 60.8,21.4 C61.4,20.9 61.5,20.1 61.6,19.3 C61.7,18.2 61.6,16.4 59.8,16.2 C58.7,16.1 57.6,16.4 56.9,17.1 C56.6,16.1 56.7,15.1 57,14.4 C57.6,13.3 59,13.1 59.4,13.1 L59.9,13 L59.9,12.5 C59.9,10.6 60.3,9.2 61.2,8.5 C61.9,8 62.8,7.6 63.6,7.6 C63.2,9.1 62.3,11.8 63.8,16.7 C64.4,18.8 64,20.6 63.1,21.9 C61.6,24.1 58.6,24.6 58.6,24.6 L58.7,24.6 L58.6,24.6 L58.5,24.6 C54.6,25.3 51.9,23.9 50.6,23.2 C50.4,23.1 50.2,23 50,22.9 C49.6,22.7 48.6,22.2 47.5,21.6 C45.3,20.5 43.8,19.6 43.1,19.4 C40,18.4 38.3,19 37.5,19.5 L37.1,19.4 C38.8,18.7 39.2,18.2 39.3,17.5 C39.4,17.2 39.3,16.8 39,16.6 C38.6,16.2 38.2,15.7 37.9,15.3 C37.8,15.5 37.6,15.3 37.5,15.2" fill="#FFFFFF" class="astro-XKISS4ET"></path>
            <path d="M29,24 C29,24 30.3,24.2 31.3,23.5 C32.1,22.9 33.5,22.3 33.9,21.3 C34,20.8 33.3,20.4 32.9,20.9 C32.6,21.5 31.7,22.3 30.9,22.7 C30.4,22.9 29.7,23.1 28.9,23.1 C27.5,23.1 27.5,22.7 27.5,22.1 C27.5,21.9 27.8,21.7 28,21.4 C28.4,21 28.8,20.5 28.8,19.9 C28.8,18.9 28.3,18.5 28,18.3 C27.7,18.1 27.7,18.1 27.7,17.7 C27.7,16.3 30.2,10.7 31.3,10.2 C31.3,10.2 31.9,10.3 32.1,10.8 C32.6,11.8 33.2,12.8 33.2,13.9 C33.2,14.5 32.7,14.5 32.5,15 C32.3,15.4 32.5,16.2 33.3,16 C33.9,15.8 34.5,15 35,15 C35.8,15 36.3,15.2 36.8,15.8 C36.9,15.9 37.1,16.1 37.2,16.4 C37.5,16.8 37.9,17.3 38.3,17.8 C38.1,18 37.3,18.6 36.1,19 C35.8,19.2 35.3,19.4 35.4,19.9 C35.4,20.2 35.8,20.4 36,20.5 C36.3,20.5 36.6,20.6 36.8,20.7 C36.9,20.7 36.9,21.2 36.8,21.3 C36.5,21.8 36,22.2 35.4,22.5 L35.2,22.6 C34,23.5 32.5,24.6 30.7,24.9 C30.6,24.9 30.5,24.9 30.4,24.9 C29.5,24.8 28.8,24.3 29,24" fill="#FFFFFF" class="astro-XKISS4ET"></path>
            <path d="M30.7,19.7 C30.6,19.6 30.6,19.1 30.7,18.9 C30.8,18.4 31.1,18 31.4,17.8 C31.4,17.8 32.6,17 32.8,17.1 C32.9,17.1 32.5,17.9 32.5,18 C32.6,18.7 32.3,19.1 32.3,19.1 C32.3,19.1 32,19.8 31.6,20 C31.5,20 31.4,20.1 31.3,20.1 C31,20.1 30.8,20 30.7,19.7" fill="#004784" class="astro-XKISS4ET"></path>
            <path d="M0,0.1 L0,45.7 C0,82.9 40.5,101.8 45.6,101.9 C50.8,101.7 91.3,82.9 91.3,45.7 L91.3,0.1 L0,0.1 Z M16.6,65.2 C16.6,60.6 20.5,56.9 25.4,56.9 C30.2,56.9 34.2,60.6 34.2,65.2 C34.2,69.8 30.3,73.5 25.4,73.5 C20.5,73.5 16.6,69.8 16.6,65.2 Z M21.4,85 L45.7,59.9 L70,85 C59.5,94.6 48.1,99.6 45.7,99.7 C43.2,99.6 31.8,94.6 21.4,85 Z M36.6,47.5 C36.6,42.8 40.6,39 45.5,39 C50.4,39 54.5,42.8 54.5,47.5 C54.5,52.2 50.5,56 45.5,56 C40.6,55.9 36.6,52.1 36.6,47.5 Z M65.7,73.5 C60.9,73.5 56.9,69.8 56.9,65.2 C56.9,60.6 60.8,56.9 65.7,56.9 C70.6,56.9 74.5,60.6 74.5,65.2 C74.5,69.8 70.5,73.5 65.7,73.5 Z M88.9,45.8 C88.9,53.8 86.9,60.9 83.7,67.2 L45.7,31 L7.6,67.2 C4.4,60.9 2.4,53.8 2.4,45.8 L2.4,31 L88.9,31 L88.9,45.8 Z M88.9,28.9 L2.4,28.9 L2.4,2.5 L88.9,2.5 L88.9,28.9 Z" fill="#888" class="astro-XKISS4ET"></path>
            <g transform="translate(4.000000, 6.000000)" class="astro-XKISS4ET">
              <path d="M10.6,1.7 C11.5,1.7 12.1,0.9 13.4,0.9 C15.1,0.9 15.7,1.9 17.4,2.3 L19.7,2.3 C19.7,2.3 19.7,3.2 19.7,3.8 C19.7,4.4 20.9,4.3 20.9,5.6 C20.9,7 19.8,6.9 19.8,7.4 L19.8,11 C19.8,11.5 21,11.5 21,12.7 C21,13.7 19.8,13.8 19.8,14.5 L19.8,16.5 L1.7,16.5 L1.7,14.5 C1.7,13.8 0.5,13.7 0.5,12.7 C0.5,11.5 1.7,11.4 1.7,11 L1.7,7.4 C1.7,6.8 0.6,6.9 0.6,5.6 C0.6,4.3 1.8,4.4 1.8,3.8 C1.8,3.2 1.8,2.6 1.8,2.3 L1.8,2.3 L4.1,2.3 C5.8,1.9 6.4,0.9 8.2,0.9 C9.2,0.9 9.7,1.7 10.6,1.7 L10.6,1.7 Z" fill="#FFFFFF" class="astro-XKISS4ET"></path>
              <path d="M10,0.8 L11.2,0.8 C12.2,0.2 13.2,0 14.1,0.1 C15,0.2 16.1,1.2 17.3,1.4 C17.6,1.4 18.4,1.4 18.4,1.4 L18.4,13.9 L11.9,13.9 C11.9,14.7 10.9,14.8 10.7,14.8 C10.5,14.8 9.5,14.7 9.5,13.9 L3,13.9 L3,1.4 C3,1.4 3.8,1.4 4.1,1.4 C5.3,1.2 6.4,0.2 7.3,0.1 C8.1,0 9,0.2 10,0.8 L10,0.8 Z" fill="#888" class="astro-XKISS4ET"></path>
              <path d="M4,12.8 L4,2.3 C5.2,2.1 6.3,1.1 7.2,1 C8.1,0.9 9.1,1.1 10.1,1.7 L10.1,11.8 C9.3,11.8 8.1,12.4 7.5,12.7 C6.8,12.9 4,12.8 4,12.8 L4,12.8 Z" fill="#FFFFFF" class="astro-XKISS4ET"></path>
              <path d="M17.2,12.8 C17.2,12.8 14.4,12.9 13.8,12.6 C13.2,12.3 11.9,11.7 11.2,11.7 L11.2,1.6 C12.2,1 13.2,0.8 14.1,0.9 C15,1 16.1,2 17.3,2.2 L17.3,12.8 L17.2,12.8 L17.2,12.8 Z" fill="#FFFFFF" class="astro-XKISS4ET"></path>
            </g>
            <g transform="translate(66.000000, 6.000000)" class="astro-XKISS4ET">
              <path d="M10.3,1.7 C11.2,1.7 11.8,0.9 13.1,0.9 C14.8,0.9 15.4,1.9 17.2,2.3 L19.5,2.3 C19.5,2.3 19.5,3.2 19.5,3.8 C19.5,4.4 20.7,4.3 20.7,5.6 C20.7,7 19.6,6.9 19.6,7.4 L19.6,11 C19.6,11.5 20.8,11.5 20.8,12.7 C20.8,13.7 19.6,13.8 19.6,14.5 L19.6,16.5 L1.5,16.5 L1.5,14.5 C1.5,13.8 0.3,13.7 0.3,12.7 C0.3,11.5 1.5,11.4 1.5,11 L1.5,7.4 C1.5,6.8 0.4,6.9 0.4,5.6 C0.4,4.3 1.6,4.4 1.6,3.8 C1.6,3.2 1.6,2.6 1.6,2.3 L1.6,2.3 L3.9,2.3 C5.6,1.9 6.2,0.9 7.9,0.9 C8.9,0.9 9.5,1.7 10.3,1.7 L10.3,1.7 Z" fill="#FFFFFF" class="astro-XKISS4ET"></path>
              <path d="M9.8,0.8 L11,0.8 C12,0.2 13,0 13.9,0.1 C14.8,0.2 15.9,1.2 17.1,1.4 C17.4,1.4 18.2,1.4 18.2,1.4 L18.2,13.9 L11.7,13.9 C11.7,14.7 10.7,14.8 10.5,14.8 C10.3,14.8 9.3,14.7 9.3,13.9 L2.8,13.9 L2.8,1.4 C2.8,1.4 3.6,1.4 3.9,1.4 C5.1,1.2 6.2,0.2 7.1,0.1 C7.8,0 8.8,0.2 9.8,0.8 L9.8,0.8 Z" fill="#888" class="astro-XKISS4ET"></path>
              <path d="M3.7,12.8 L3.7,2.3 C4.9,2.1 6,1.1 6.9,1 C7.8,0.9 8.8,1.1 9.8,1.7 L9.8,11.8 C9,11.8 7.8,12.4 7.2,12.7 C6.5,12.9 3.7,12.8 3.7,12.8 L3.7,12.8 Z" fill="#FFFFFF" class="astro-XKISS4ET"></path>
              <path d="M16.9,12.8 C16.9,12.8 14.1,12.9 13.5,12.6 C12.9,12.3 11.6,11.7 10.9,11.7 L10.9,1.6 C11.9,1 12.9,0.8 13.8,0.9 C14.7,1 15.8,2 17,2.2 L16.9,12.8 L16.9,12.8 Z" fill="#FFFFFF" class="astro-XKISS4ET"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </span>

  <span class="astro-XKISS4ET">
    <svg viewBox="0 0 118 20" className="logo-helix" class="astro-XKISS4ET">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" class="astro-XKISS4ET">
        <path d="M12.9034526,10.6531736 C12.9034526,14.2160661 10.0216468,17.1044132 6.46663913,17.1044132 C2.91171391,17.1044132 0.0299081761,14.2160661 0.0299081761,10.6531736 C0.0299081761,7.09028099 2.91171391,4.20193388 6.46663913,4.20193388 C10.0216468,4.20193388 12.9034526,7.09028099 12.9034526,10.6531736 L12.9034526,10.6531736 Z" fill="#888" class="astro-XKISS4ET"></path>
        <polygon fill="#888" points="54.5102938 14.117843 48.5227215 17.5824711 42.5351491 14.117843 42.5351491 7.18850413 48.5227215 3.72387603 54.5102938 7.18850413" class="astro-XKISS4ET"></polygon>
        <polygon fill="#888" points="20.0526941 4.65219835 23.5095746 10.6531901 26.9665375 16.6541818 20.0526941 16.6541818 13.1388506 16.6541818 16.5958136 10.6531901" class="astro-XKISS4ET"></polygon>
        <polygon fill="#888" points="33.46527 17.5825124 26.5514266 10.6531736 33.46527 3.72383471 40.3791135 10.6531736" class="astro-XKISS4ET"></polygon>
        <path d="M72.9354867,19.8926198 L72.9354867,11.2899752 L61.8019269,11.2899752 L61.8019269,19.8926198 L59.572131,19.8926198 L59.572131,0.341628099 L61.8019269,0.341628099 L61.8019269,9.16733058 L72.9354867,9.16733058 L72.9354867,0.341628099 L75.1646229,0.341628099 L75.1646229,19.8926198 L72.9354867,19.8926198 Z M94.1767813,19.8926446 L96.3223857,19.8926446 L96.3223857,0.341652893 L94.1767813,0.341652893 L94.1767813,19.8926446 Z M102.693454,1.53833058 C102.693454,2.40378512 102.080695,3.04626446 101.272506,3.04626446 C100.464318,3.04626446 99.8509816,2.40378512 99.8509816,1.53833058 C99.8509816,0.671719008 100.464318,0.0292396694 101.272506,0.0292396694 C102.080695,0.0292396694 102.693454,0.671719008 102.693454,1.53833058 Z M100.199399,19.892562 L102.345003,19.892562 L102.345003,5.1738843 L100.199399,5.1738843 L100.199399,19.892562 Z M115.211192,5.17390909 L117.607557,5.17390909 L112.703012,12.324157 L117.970133,19.8925868 L115.433669,19.8925868 L111.253781,13.8875455 L106.933876,19.8925868 L104.481603,19.8925868 L109.832256,12.324157 L104.844179,5.17390909 L107.352359,5.17390909 L111.253781,10.7596116 L115.211192,5.17390909 Z M80.0255303,13.3871488 C80.0983423,14.1405372 80.2818154,14.8106198 80.5751249,15.3979752 C80.8681047,15.9859091 81.2437092,16.4818595 81.7020208,16.8856612 C82.1598377,17.289876 82.7043199,17.597562 83.272633,17.8082231 C83.8402864,18.0197934 84.4673108,18.125 85.0903772,18.125 C86.0797301,18.125 86.9896742,17.9417769 87.6952829,17.5741736 C88.4006442,17.2071488 89.0464695,16.7202893 89.6330886,16.1142562 L90.9524457,17.2988843 C90.2378489,18.1072314 89.4223213,18.7545041 88.5061927,19.2407851 C87.5897343,19.727314 86.3910984,19.9707025 85.0352941,19.9707025 C84.0640823,19.9707025 83.116619,19.7916116 82.2555736,19.433595 C81.3939509,19.0756612 80.6115722,18.5707025 79.9703646,17.9183884 C79.3289097,17.2670661 78.82038,16.4818595 78.4451878,15.5633471 C78.069336,14.6451653 77.881575,13.635 77.881575,12.5332645 C77.881575,11.5049174 78.0509474,10.536157 78.3900222,9.62706612 C78.7288496,8.71797521 79.2009321,7.92863636 79.8056099,7.25797521 C80.4103702,6.58789256 81.1604247,6.05987603 81.9943409,5.67409091 C82.8279272,5.28838843 83.7710201,5.0957438 84.7606204,5.0957438 C85.8050565,5.0957438 86.7709083,5.29334711 87.595424,5.68780992 C88.4200222,6.08293388 89.1473178,6.6203719 89.7156309,7.29946281 C90.2832843,7.9788843 90.7139719,8.77780992 91.0072815,9.69599174 C91.3003437,10.6145041 91.4469572,11.5966529 91.4469572,12.6434298 L91.4469572,12.9602066 C91.4469572,13.0797107 91.4376393,13.2217769 91.4195806,13.3871488 L80.0255303,13.3871488 Z M89.3033318,11.6516116 C89.2482486,11.0130992 89.1108706,10.4055785 88.8910327,9.83070248 C88.6711948,9.25566116 88.373185,8.74863636 87.997663,8.31028926 C87.6218112,7.87227273 87.1324122,7.52533058 86.5921354,7.2696281 C86.0515289,7.01392562 85.401828,6.88623967 84.7055372,6.88623967 C84.1007769,6.88623967 83.501459,7.00491736 82.9702528,7.24219008 C82.438387,7.47979339 81.9399999,7.81293388 81.5370187,8.24194215 C81.1337902,8.67119835 80.7993332,9.17764463 80.5339775,9.76210744 C80.2680446,10.3468182 80.0983423,10.9762397 80.0255303,11.6516116 L89.3033318,11.6516116 Z" fill="#888" class="astro-XKISS4ET"></path>
      </g>
    </svg>
  </span>

  <span class="astro-XKISS4ET">
    <svg viewBox="0 0 276.808 60.363" className="logo-mlb" class="astro-XKISS4ET">
      <path d="M8.728 57.456C3.91 57.456 0 53.554 0 48.734V8.732C0 3.912 3.91 0 8.728 0L265.43.017c4.827 0 8.736 3.91 8.736 8.73v40c0 4.82-3.91 8.722-8.735 8.722L8.73 57.455z" fill="#FFF" class="astro-XKISS4ET"></path>
      <path d="M269.548 4.635c-1.098-1.104-2.562-1.706-4.117-1.706h-31.107l14.39 24.006 1.32.157.764 1.102v1.04l.934.16.823 1.154v.986l.928.163.933 1.04v2.238s2.034 1.87 3.84 2.576c1.265.494 1.43 2.525 2.143 3.618.987 1.538 2.303 2.19 2.025 3.067-.652 2.357-3.063 6.306-5.306 6.524 0 0-5.59.004-8.883.004l.003 3.8h17.198c3.213 0 5.823-2.617 5.823-5.823v-40c0-1.554-.61-3.017-1.705-4.11z" fill="#888" class="astro-XKISS4ET"></path>
      <path d="M225.8 2.93L8.727 2.91c-1.548 0-3.017.603-4.112 1.705-1.1 1.102-1.703 2.56-1.703 4.118v40.002c0 1.544.604 3.012 1.703 4.11 1.095 1.1 2.563 1.7 4.112 1.7l197.477.027c-.915-1.525-1.93-3.254-2.252-3.775h-4.328c-.002-10.743 3.665-16.713 7.993-17.868.606-.113.328-3.073-.443-3.946 0 0-2.08.055-2.517-.057-.55-.16-.163-.705-.163-.705l2.023-4.39-.27-1.204h-7.51l6.19-4.33c.32-11.395 11.996-12.28 19.064-7.574 4.167 2.792 4.497 8.275 4.176 12.116l-1.102.05s-.708 4.168 1.157 4.168l8.215-.01c3.34-.105 6.578 2.14 6.578 2.14l.822-2.852-18.04-23.406z" fill="#888" class="astro-XKISS4ET"></path>
      <path d="M105.516 37.82c1.123 0 2.074.4 2.87 1.172.793.78 1.19 1.73 1.19 2.847 0 1.11-.397 2.065-1.19 2.848-.796.794-1.748 1.19-2.87 1.19-1.12 0-2.072-.395-2.866-1.19-.794-.784-1.187-1.737-1.187-2.85 0-1.118.392-2.065 1.187-2.846.795-.772 1.746-1.172 2.866-1.172zM132.582 28.045l-5.67 1.17c-.194-1.257-.632-2.207-1.315-2.842-.67-.637-1.553-.958-2.64-.958-1.438 0-2.59.56-3.45 1.67-.86 1.116-1.29 2.975-1.29 5.59 0 2.895.437 4.948 1.314 6.145.867 1.193 2.04 1.794 3.51 1.794 1.1 0 2-.354 2.704-1.062.697-.716 1.19-1.938 1.48-3.67l5.668 1.11c-.587 2.927-1.714 5.14-3.383 6.64-1.668 1.497-3.905 2.245-6.71 2.245-3.186 0-5.724-1.125-7.62-3.385-1.89-2.252-2.84-5.373-2.84-9.364 0-4.036.952-7.175 2.848-9.42 1.9-2.25 4.468-3.372 7.703-3.372 2.647 0 4.755.632 6.32 1.9 1.567 1.273 2.69 3.21 3.372 5.81zM142.594 27.526c1.03-1.288 2.3-1.936 3.803-1.936 1.512 0 2.77.648 3.794 1.936 1.022 1.296 1.53 3.135 1.53 5.536 0 2.453-.508 4.328-1.53 5.618-1.022 1.294-2.28 1.934-3.793 1.934-1.502 0-2.773-.64-3.803-1.934-1.025-1.29-1.536-3.15-1.536-5.58 0-2.422.51-4.278 1.536-5.574zm-6 12.376c.937 1.955 2.32 3.445 4.13 4.453 1.813 1.015 3.716 1.52 5.714 1.52 3.226 0 5.902-1.21 8.03-3.65 2.124-2.427 3.183-5.49 3.183-9.19 0-3.666-1.052-6.702-3.153-9.1-2.106-2.402-4.805-3.6-8.1-3.6-2.135 0-4.062.53-5.795 1.586-1.73 1.058-3.07 2.594-4.006 4.6-.94 2.015-1.417 4.09-1.417 6.243-.002 2.798.474 5.186 1.415 7.14zM159.94 21.386h5.303v3.34c1.905-2.58 4.17-3.87 6.794-3.87 1.398 0 2.612.327 3.633.97 1.025.65 1.87 1.628 2.525 2.933.96-1.306 1.994-2.285 3.1-2.933 1.11-.644 2.29-.97 3.552-.97 1.593 0 2.953.37 4.068 1.095 1.1.73 1.928 1.803 2.474 3.214.397 1.046.594 2.733.594 5.065v15.646h-5.775v-13.97c0-2.423-.19-3.988-.595-4.696-.53-.922-1.354-1.383-2.46-1.383-.804 0-1.56.275-2.272.833-.716.55-1.224 1.364-1.534 2.424-.32 1.068-.473 2.748-.473 5.052v11.74H173.1V32.484c0-2.382-.098-3.92-.303-4.606-.212-.695-.528-1.203-.956-1.544-.433-.337-1.01-.506-1.747-.506-.896 0-1.69.265-2.394.805-.715.534-1.22 1.312-1.528 2.324-.31 1.015-.456 2.697-.456 5.04v11.88h-5.78v-24.49h.003zM84.488 18.11c1.496 0 3.513.314 4.242.93.737.624 1.108 1.465 1.108 2.524 0 1.135-.394 2.03-1.165 2.688-.77.66-2.854.99-4.442.99h-3.228V18.11h3.486zm2.305 27.767c2.746 0 4.9-.39 6.453-1.17 1.562-.775 2.83-1.95 3.818-3.52.983-1.564 1.48-3.302 1.48-5.206 0-1.986-.473-3.7-1.425-5.16-.95-1.45-2.448-2.662-4.497-3.633 1.22-.92 2.106-1.906 2.648-2.955.543-1.053.817-2.224.817-3.51 0-1.977-.604-3.694-1.805-5.157-1.204-1.457-2.824-2.45-4.864-2.99-1.428-.393-6.402-.603-9.504-.603h-5.35v33.905h12.23zm-2.637-14.85c2.57 0 5.31.427 6.413 1.278 1.11.847 1.66 2 1.66 3.462 0 1.292-.47 2.275-1.413 2.957-.942.676-3.67 1.013-6.38 1.013h-3.435v-8.71h3.154zM13.484 45.877V12.092h10.224l6.11 23.037L35.82 12.09h10.272v33.785h-6.31l-.028-26.592-6.682 26.592H26.5l-6.677-26.592-.026 26.592h-6.313M49.685 11.972h6.432v27.765H70.98v6.14H49.686V11.972M275.846 58.08c0-.527-.307-.612-.764-.612h-.96v1.983h.413v-.787h.343l.458.788h.453l-.477-.787c.35-.035.533-.228.533-.582zm-.756.226h-.555v-.485h.458c.2 0 .447 0 .447.22 0 .215-.128.266-.35.266z" fill="#FFF" class="astro-XKISS4ET"></path>
      <path d="M274.916 56.562c-1.06 0-1.892.847-1.892 1.91 0 1.043.833 1.89 1.892 1.89 1.057 0 1.892-.846 1.892-1.89 0-1.062-.835-1.91-1.892-1.91zm0 3.39c-.816 0-1.475-.636-1.475-1.48 0-.857.66-1.494 1.476-1.494.807 0 1.476.637 1.476 1.493 0 .846-.67 1.482-1.476 1.482z" fill="#FFF" class="astro-XKISS4ET"></path>
    </svg>
  </span>

  <span class="astro-XKISS4ET">
    <svg viewBox="0 0 199.3 42.5" className="logo-technically" class="astro-XKISS4ET">
      <polygon fill="#fff" points="191,25.2 195.9,25.2 193.5,14.4" class="astro-XKISS4ET"></polygon>
      <path fill="#fff" d="M172.9,14.2h-3v16.2h3c2.1,0,3.2-1.3,3.2-4.1v-7.9C176.2,15.5,175.1,14.2,172.9,14.2z" class="astro-XKISS4ET"></path>
      <polygon fill="#fff" points="98.3,25 100.8,25 99.6,16.8" class="astro-XKISS4ET"></polygon>
      <polygon fill="#888" points="144.7,25.1 139.6,12 139.6,12 139.6,12 134.8,12 132.8,21.2 130.7,12 125.9,12 130.6,26.7
    130.6,32.4 134.9,32.4 134.9,26.8 137.5,18.8 137.5,32.4 139.6,32.4 139.6,17.8 144.2,28.7 145.3,28.7 149.8,17.8 149.8,32.4
    152,32.4 152,12 149.8,12" class="astro-XKISS4ET"></polygon>
      <polygon fill="#888" points="158,22.8 163.3,22.8 163.3,20.9 158,20.9 158,14.2 164.7,14.2 164.7,12 155.6,12
    155.6,32.4 165,32.4 165,30.3 158,30.3" class="astro-XKISS4ET"></polygon>
      <path fill="#888" d="M172.9,12h-5.4v20.4h5.4c3.6,0,5.6-2.3,5.6-6.2v-8C178.5,14.3,176.5,12,172.9,12z M176.2,26.2
    c0,2.8-1.1,4.1-3.2,4.1h-3V14.2h3c2.2,0,3.2,1.3,3.2,4.2V26.2z" class="astro-XKISS4ET"></path>
      <rect x="182" y="12" fill="#888" width="2.4" height="20.4" class="astro-XKISS4ET"></rect>
      <path fill="#888" d="M194.8,12h-2.8l-5.2,20.4h2.4l1.2-5.3h5.8l1.2,5.3h2.4L194.8,12z M191,25.2l2.5-10.8l2.5,10.8H191z" class="astro-XKISS4ET"></path>
      <polygon fill="#888" points="10.7,16.1 14,16.1 14,32.4 18.4,32.4 18.4,16.1 21.7,16.1 21.7,12 10.7,12" class="astro-XKISS4ET"></polygon>
      <polygon fill="#888" points="27.6,23.7 31.4,23.7 31.4,20.2 27.6,20.2 27.6,16 32.8,16 32.8,12 23.2,12 23.2,32.4
    32.9,32.4 32.9,28.5 27.6,28.5" class="astro-XKISS4ET"></polygon>
      <path fill="#888" d="M40.1,29c-1.1,0-1.5-0.8-1.5-2.2v-8.7c0-1.7,0.4-2.5,1.5-2.5c0.9,0,1.4,0.6,1.6,2.2l3.3-1.1
    c-0.4-3-2.4-5-5.3-5c-3.3,0-5.5,2.4-5.5,6.4v8.7c0,3.6,2.1,5.9,5.5,5.9c3.1,0,4.8-1.6,5.3-5l-3.4-1C41.5,28.4,41,29,40.1,29z" class="astro-XKISS4ET"></path>
      <polygon fill="#888" points="53.9,19.9 51,19.9 51,12 46.6,12 46.6,32.4 51,32.4 51,24 53.9,24 53.9,32.4 58.3,32.4
    58.3,12 53.9,12" class="astro-XKISS4ET"></polygon>
      <polygon fill="#888" points="68.6,21.8 63.9,12 60.7,12 60.7,32.4 64.5,32.4 64.5,22.1 69.5,32.4 72.4,32.4 72.4,12
    68.6,12" class="astro-XKISS4ET"></polygon>
      <rect x="75" y="12" fill="#888" width="4.4" height="20.4" class="astro-XKISS4ET"></rect>
      <path fill="#888" d="M87.4,29c-1.1,0-1.5-0.8-1.5-2.2v-8.7c0-1.7,0.4-2.5,1.5-2.5c0.9,0,1.4,0.6,1.6,2.2l3.3-1.1
    c-0.4-3-2.4-5-5.3-5c-3.3,0-5.5,2.4-5.5,6.4v8.7c0,3.6,2.1,5.9,5.5,5.9c3.1,0,4.8-1.6,5.3-5l-3.4-1C88.8,28.4,88.3,29,87.4,29z" class="astro-XKISS4ET"></path>
      <path fill="#888" d="M97,12l-4.3,20.4h4.4l0.6-4.1h3.6l0.7,4.1h4.5L102.2,12H97z M98.3,25l1.3-8.1l1.3,8.1H98.3z" class="astro-XKISS4ET"></path>
      <polygon fill="#888" points="112.1,12 107.8,12 107.8,32.4 117.1,32.4 117.1,28.4 112.1,28.4" class="astro-XKISS4ET"></polygon>
      <polygon fill="#888" points="122.9,12 118.6,12 118.6,32.4 127.9,32.4 127.9,28.4 122.9,28.4" class="astro-XKISS4ET"></polygon>
      <polygon fill="#888" points="8.1,25.2 11.8,23.2 11.8,18.2 8.1,20.3" class="astro-XKISS4ET"></polygon>
      <polygon fill="#888" points="4.8,28.3 4.8,33.5 11.8,29.6 11.8,24.5" class="astro-XKISS4ET"></polygon>
      <polygon fill="#888" points="0.1,37.4 0,42.6 11.7,36.1 11.7,31.1" class="astro-XKISS4ET"></polygon>
      <rect x="12.6" fill="#888" width="1.8" height="10" class="astro-XKISS4ET"></rect>
    </svg>
  </span>

  <span class="astro-XKISS4ET">
    <svg viewBox="0 0 143 71" className="logo-samsung" class="astro-XKISS4ET">
      <path fill="#888" d="M159.371,91.242v10.629h10.793V135h10.988V101.871H192V91.242H159.371Zm-84.357,0v23.237L60.2,91.242H49V135H59.987V110.9L75.293,135H86V91.242H75.014ZM88.488,135h27.425V124.37H99.474v-6.046h16.439V107.7H99.474V101.87h16.439V91.242H88.488V135Zm54.455-43.757h14.484l-7.366,11.59Zm0,43.757h14.484l-7.366-11.591ZM54.433,69.907a2.529,2.529,0,0,1-.021-1.072,1.685,1.685,0,0,1,1.871-1.373,1.744,1.744,0,0,1,1.9,1.851v1.262h5.1V69.143c0-4.436-4.01-5.143-6.9-5.143-3.632,0-6.6,1.2-7.142,4.533a7.031,7.031,0,0,0,.04,2.749c0.886,4.169,8.151,5.375,9.208,8.012a2.617,2.617,0,0,1,.039,1.506,1.768,1.768,0,0,1-2,1.378,1.82,1.82,0,0,1-2.041-1.857L54.485,78.36H49v1.559c0,4.558,3.589,5.931,7.431,5.931,3.694,0,6.727-1.256,7.221-4.669a10.062,10.062,0,0,0-.022-3.338c-0.862-4.28-8.616-5.547-9.2-7.935m66.485,0.051A2.708,2.708,0,0,1,120.9,68.9a1.674,1.674,0,0,1,1.852-1.365,1.724,1.724,0,0,1,1.873,1.837v1.247h5.04V69.2c0-4.394-3.949-5.085-6.809-5.085-3.6,0-6.541,1.185-7.079,4.49a6.794,6.794,0,0,0,.049,2.718c0.876,4.122,8.07,5.319,9.115,7.926a2.752,2.752,0,0,1,.038,1.495,1.734,1.734,0,0,1-1.97,1.361,1.807,1.807,0,0,1-2.038-1.829l0-1.957h-5.425v1.556c0,4.506,3.539,5.867,7.352,5.867,3.651,0,6.666-1.244,7.151-4.618a9.951,9.951,0,0,0-.036-3.306c-0.846-4.228-8.514-5.5-9.094-7.859m46.42,11.11-4.813-16.418h-7.588V84.83h5.019l-0.291-16.944,5.17,16.944h7.276V64.651h-5.052ZM70.886,64.651L67.1,85.043h5.523l2.853-18.879L78.26,85.043h5.484L79.973,64.651H70.886Zm30.878,0-2.579,15.94-2.577-15.94H88.267L87.826,85.043h5.11l0.138-18.879,3.515,18.879h5.184l3.519-18.879,0.138,18.879h5.123L110.1,64.651h-8.331Zm47.505,0H144.1V79.736a3.492,3.492,0,0,1-.046.775,2.033,2.033,0,0,1-3.914,0,3.361,3.361,0,0,1-.052-0.775V64.651h-5.168V79.269c-0.006.377,0.023,1.147,0.046,1.347,0.357,3.81,3.366,5.047,7.124,5.047s6.773-1.237,7.136-5.047a10.584,10.584,0,0,0,.044-1.347V64.651Zm35.5,8.946V76.57h2.095v2.951a3.71,3.71,0,0,1-.054.775,2.21,2.21,0,0,1-4.177,0,4.991,4.991,0,0,1-.053-0.775V70.2a4.167,4.167,0,0,1,.092-0.963,2.144,2.144,0,0,1,4.075,0,5.254,5.254,0,0,1,.063.787v1.131h5.149V70.487a12.239,12.239,0,0,0-.039-1.35c-0.388-3.825-3.547-5.036-7.17-5.036s-6.726,1.222-7.176,5.036c-0.04.35-.1,0.977-0.1,1.35V79.06a11.665,11.665,0,0,0,.081,1.345c0.337,3.721,3.569,5.04,7.183,5.04,3.638,0,6.847-1.319,7.19-5.04,0.06-.682.066-0.971,0.075-1.345V73.6h-7.231Z" transform="translate(-49 -64)" class="astro-XKISS4ET"></path>
      <path fill="#888" d="M144.292,113.194h0l0.024-.039L130.522,91.308H118.157l13.294,21.845-0.024.039L118.157,135h12.424Z" transform="translate(-49 -64)" class="astro-XKISS4ET"></path>
    </svg>
  </span>
</div>

`;
}, "/Users/slurve/Dropbox/htdocs/tomrose-astro/src/components/Brands.astro");

const $$Astro$5 = createAstro("/Users/slurve/Dropbox/htdocs/tomrose-astro/src/pages/projects.astro", "", "file:///Users/slurve/Dropbox/htdocs/tomrose-astro/");
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Projects;
  const data = await projectsQuery();
  const projects = data.projects.nodes;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Projects", "slug": "projects" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<h1>Projects</h1>${renderComponent($$result, "Brands", $$Brands, {})}${projects.map((project) => {
    return renderTemplate`${renderComponent($$result, "ProjectCard", $$ProjectCard, { "project": project })}`;
  })}` })}`;
}, "/Users/slurve/Dropbox/htdocs/tomrose-astro/src/pages/projects.astro");

const $$file$2 = "/Users/slurve/Dropbox/htdocs/tomrose-astro/src/pages/projects.astro";
const $$url$2 = "/projects";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro("/Users/slurve/Dropbox/htdocs/tomrose-astro/src/components/PostCard.astro", "", "file:///Users/slurve/Dropbox/htdocs/tomrose-astro/");
const $$PostCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<article class="astro-T4TIXT7E">
  <a class="post-link astro-T4TIXT7E"${addAttribute(post.uri, "href")}${addAttribute(post.title, "aria-label")}>
    <h3 class="astro-T4TIXT7E">${post.title}</h3>
    <section class="astro-T4TIXT7E">
      <img${addAttribute(post?.featuredImage?.node?.mediaItemUrl, "src")} alt="" class="astro-T4TIXT7E">
      <div class="astro-T4TIXT7E">
        <p class="astro-T4TIXT7E">${unescapeHTML(post.excerpt)}</p>
        ${post.categories.nodes.map((category) => {
    return renderTemplate`<a class="term-link astro-T4TIXT7E"${addAttribute(category.uri, "href")}>
                ${category.name}
              </a>`;
  })}
        <span class="astro-T4TIXT7E"><time${addAttribute(post.date, "datetime")} class="astro-T4TIXT7E">${new Date(post.date).toLocaleDateString()}</time></span>
      </div>
    </section>
  </a>
</article>

`;
}, "/Users/slurve/Dropbox/htdocs/tomrose-astro/src/components/PostCard.astro");

const $$Astro$3 = createAstro("/Users/slurve/Dropbox/htdocs/tomrose-astro/src/pages/blog.astro", "", "file:///Users/slurve/Dropbox/htdocs/tomrose-astro/");
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Blog;
  const data = await homePagePostsQuery();
  const posts = data.posts.nodes;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Blog" }, { "default": () => renderTemplate`${maybeRenderHead($$result)}<main>
    <h2>Recent Posts</h2>
    ${posts.map((post) => {
    return renderTemplate`${renderComponent($$result, "PostCard", $$PostCard, { "post": post })}`;
  })}
  </main>` })}`;
}, "/Users/slurve/Dropbox/htdocs/tomrose-astro/src/pages/blog.astro");

const $$file$1 = "/Users/slurve/Dropbox/htdocs/tomrose-astro/src/pages/blog.astro";
const $$url$1 = "/blog";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("/Users/slurve/Dropbox/htdocs/tomrose-astro/src/components/Form.astro", "", "file:///Users/slurve/Dropbox/htdocs/tomrose-astro/");
const $$Form = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Form;
  return renderTemplate`${maybeRenderHead($$result)}<form class="contact-form astro-4K2P6FKS" name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
  <p class="error-message astro-4K2P6FKS">Uh oh. Please fill in the fields below.</p>
  <fieldset class="astro-4K2P6FKS">
    <legend class="astro-4K2P6FKS">Contact form fields</legend>
    <p hidden class="astro-4K2P6FKS">
      <label class="astro-4K2P6FKS">
        Don't fill this out: <input name="b" class="astro-4K2P6FKS">
      </label>
    </p>
    <p class="astro-4K2P6FKS">
      <label for="name" class="astro-4K2P6FKS">Name</label>
      <input type="text" name="name" id="name" class="astro-4K2P6FKS">
    </p>
    <p class="astro-4K2P6FKS">
      <label for="email" class="astro-4K2P6FKS">Email</label>
      <input type="email" name="email" id="email" class="astro-4K2P6FKS">
    </p>
    <p class="astro-4K2P6FKS">
      <label for="phone" class="astro-4K2P6FKS">Phone</label>
      <input type="tel" name="phone" id="phone" class="astro-4K2P6FKS">
    </p>
    <p class="astro-4K2P6FKS">
      <label for="website" class="astro-4K2P6FKS">Website</label>
      <input type="tel" name="website" id="website" class="astro-4K2P6FKS">
    </p>
    <p class="astro-4K2P6FKS">
      <label for="description" class="astro-4K2P6FKS">Brief description of project</label>
      <textarea name="description" id="description" class="astro-4K2P6FKS"></textarea>
    </p>
    <input type="hidden" name="form-name" value="contact" class="astro-4K2P6FKS">
    <input type="submit" value="Submit" class="button button-submit astro-4K2P6FKS">
  </fieldset>
</form>

`;
}, "/Users/slurve/Dropbox/htdocs/tomrose-astro/src/components/Form.astro");

const $$Astro$1 = createAstro("/Users/slurve/Dropbox/htdocs/tomrose-astro/src/components/templates/Single.astro", "", "file:///Users/slurve/Dropbox/htdocs/tomrose-astro/");
const $$Single = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Single;
  const { node } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<div class="single">
  <h1>${node.title}</h1>

  ${node.categories ? node.categories.nodes.map((category) => renderTemplate`<a class="term-link"${addAttribute(category.uri, "href")}>
            ${category.name}
          </a>`) : null}

  ${node.__typename === "Post" ? renderTemplate`<p class="post-details">
        Posted on${" "}
        <time${addAttribute(node.date, "datetime")}>
          ${new Date(node.date).toLocaleDateString()}
        </time>
      </p>` : null}

  <article>${unescapeHTML(node.content)}</article>
  ${node.title == "Contact" && renderTemplate`${renderComponent($$result, "Form", $$Form, {})}`}
</div>
`;
}, "/Users/slurve/Dropbox/htdocs/tomrose-astro/src/components/templates/Single.astro");

const $$Astro = createAstro("/Users/slurve/Dropbox/htdocs/tomrose-astro/src/pages/[...uri].astro", "", "file:///Users/slurve/Dropbox/htdocs/tomrose-astro/");
async function getStaticPaths() {
  return await getAllUris();
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const slug = `${Astro2.params.uri}`;
  const uri = `/${Astro2.params.uri}/`;
  const data = await getNodeByURI(uri);
  const node = data.nodeByUri;
  function resolveContentTemplate(node2) {
    let template;
    switch (node2.__typename) {
      case "Post":
        template = $$Single;
        break;
      case "Page":
        template = $$Single;
        break;
      default:
        template = $$Single;
    }
    return template;
  }
  const Template = resolveContentTemplate(node);
  const layout = node?.p_layout?.pageLayout;
  const side_components = node?.p_layout?.sideComponents;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": node.title || node.name, "description": node.excerpt, "slug": slug, "layout": layout, "side_components": side_components }, { "default": () => renderTemplate`${renderComponent($$result, "Template", Template, { "node": node })}` })}`;
}, "/Users/slurve/Dropbox/htdocs/tomrose-astro/src/pages/[...uri].astro");

const $$file = "/Users/slurve/Dropbox/htdocs/tomrose-astro/src/pages/[...uri].astro";
const $$url = "/[...uri]";

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  getStaticPaths,
  default: $$,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const pageMap = new Map([["src/pages/index.astro", _page0],["src/pages/projects.astro", _page1],["src/pages/blog.astro", _page2],["src/pages/[...uri].astro", _page3],]);
const renderers = [Object.assign({"name":"astro:jsx","serverEntrypoint":"astro/jsx/server.js","jsxImportSource":"astro"}, { ssr: server_default }),];

const _manifest = Object.assign(deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":["assets/_...uri_.786085f2.css","assets/index.32f64db1.css"],"scripts":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["assets/projects.52bf1023.css","assets/_...uri_.786085f2.css"],"scripts":[],"routeData":{"route":"/projects","type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["assets/blog.2ab485fb.css","assets/_...uri_.786085f2.css"],"scripts":[],"routeData":{"route":"/blog","type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog.astro","pathname":"/blog","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":["assets/_...uri_.786085f2.css","assets/_...uri_.0258a9c6.css"],"scripts":[],"routeData":{"route":"/[...uri]","type":"page","pattern":"^(?:\\/(.*?))?\\/?$","segments":[[{"content":"...uri","dynamic":true,"spread":true}]],"params":["...uri"],"component":"src/pages/[...uri].astro","_meta":{"trailingSlash":"ignore"}}}],"base":"/","markdown":{"drafts":false,"syntaxHighlight":"shiki","shikiConfig":{"langs":[],"theme":"github-dark","wrap":false},"remarkPlugins":[],"rehypePlugins":[],"remarkRehype":{},"extendDefaultPlugins":false,"isAstroFlavoredMd":false,"isExperimentalContentCollections":false,"contentDir":"file:///Users/slurve/Dropbox/htdocs/tomrose-astro/src/content/"},"pageMap":null,"renderers":[],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","astro:scripts/before-hydration.js":""},"assets":["/assets/_...uri_.0258a9c6.css","/assets/blog.2ab485fb.css","/assets/index.32f64db1.css","/assets/projects.52bf1023.css","/assets/_...uri_.786085f2.css","/favicon.svg"]}), {
	pageMap: pageMap,
	renderers: renderers
});
const _args = {};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap, renderers };
