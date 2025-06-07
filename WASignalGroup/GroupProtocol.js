/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";
var $protobuf = require("protobufjs/minimal");
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
$root.groupproto = (function() {
/**
* Namespace groupproto.
* @exports groupproto
* @namespace
*/
var groupproto = {};
groupproto.SenderKeyMessage = (function() {
/**
* Properties of a SenderKeyMessage.
* @memberof groupproto
* @interface ISenderKeyMessage
* @property {number|null} [id] SenderKeyMessage id
* @property {number|null} [iteration] SenderKeyMessage iteration
* @property {Uint8Array|null} [ciphertext] SenderKeyMessage ciphertext
*/
/**
* Constructs a new SenderKeyMessage.
* @memberof groupproto
* @classdesc Represents a SenderKeyMessage.
* @implements ISenderKeyMessage
* @constructor
* @param {groupproto.ISenderKeyMessage=} [properties] Properties to set
*/
function SenderKeyMessage(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* SenderKeyMessage id.
* @member {number|null|undefined} id
* @memberof groupproto.SenderKeyMessage
* @instance
*/
SenderKeyMessage.prototype.id = null;
/**
* SenderKeyMessage iteration.
* @member {number|number|null|undefined} iteration
* @memberof groupproto.SenderKeyMessage
* @instance
*/
SenderKeyMessage.prototype.iteration = null;
/**
* SenderKeyMessage ciphertext.
* @member {Uint8Array|null|undefined} ciphertext
* @memberof groupproto.SenderKeyMessage
* @instance
*/
SenderKeyMessage.prototype.ciphertext = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* SenderKeyMessage _id.
* @member {"id"|undefined} _id
* @memberof SenderKeyMessage
* @instance
*/
Object.defineProperty(SenderKeyMessage.prototype, "_id", {
get: $util.oneOfGetter($oneOfFields = ["id"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SenderKeyMessage _iteration.
* @member {"iteration"|undefined} _iteration
* @memberof SenderKeyMessage
* @instance
*/
Object.defineProperty(SenderKeyMessage.prototype, "_iteration", {
get: $util.oneOfGetter($oneOfFields = ["iteration"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SenderKeyMessage _ciphertext.
* @member {"ciphertext"|undefined} _ciphertext
* @memberof SenderKeyMessage
* @instance
*/
Object.defineProperty(SenderKeyMessage.prototype, "_ciphertext", {
get: $util.oneOfGetter($oneOfFields = ["ciphertext"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new SenderKeyMessage instance using the specified properties.
* @function create
* @memberof groupproto.SenderKeyMessage
* @static
* @param {groupproto.ISenderKeyMessage=} [properties] Properties to set
* @returns {groupproto.SenderKeyMessage} SenderKeyMessage instance
*/
SenderKeyMessage.create = function create(properties) {
return new SenderKeyMessage(properties);
};
/**
* Encodes the specified SenderKeyMessage message. Does not implicitly {@link groupproto.SenderKeyMessage.verify|verify} messages.
* @function encode
* @memberof groupproto.SenderKeyMessage
* @static
* @param {groupproto.ISenderKeyMessage} message SenderKeyMessage message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
SenderKeyMessage.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.id != null && Object.hasOwnProperty.call(message, "id"))
writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
if (message.iteration != null && Object.hasOwnProperty.call(message, "iteration"))
writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.iteration);
if (message.ciphertext != null && Object.hasOwnProperty.call(message, "ciphertext"))
writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.ciphertext);
return writer;
};
/**
* Encodes the specified SenderKeyMessage message, length delimited. Does not implicitly {@link groupproto.SenderKeyMessage.verify|verify} messages.
* @function encodeDelimited
* @memberof groupproto.SenderKeyMessage
* @static
* @param {groupproto.ISenderKeyMessage} message SenderKeyMessage message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
SenderKeyMessage.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a SenderKeyMessage message from the specified reader or buffer.
* @function decode
* @memberof groupproto.SenderKeyMessage
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {groupproto.SenderKeyMessage} SenderKeyMessage
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
SenderKeyMessage.decode = function decode(reader, length) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.groupproto.SenderKeyMessage();
while (reader.pos < end) {
var tag = reader.uint32();
switch (tag >>> 3) {
case 1:
message.id = reader.uint32();
break;
case 2:
message.iteration = reader.uint32();
break;
case 3:
message.ciphertext = reader.bytes();
break;
default:
reader.skipType(tag & 7);
break;
}
}
return message;
};
/**
* Decodes a SenderKeyMessage message from the specified reader or buffer, length delimited.
* @function decodeDelimited
* @memberof groupproto.SenderKeyMessage
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @returns {groupproto.SenderKeyMessage} SenderKeyMessage
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
SenderKeyMessage.decodeDelimited = function decodeDelimited(reader) {
if (!(reader instanceof $Reader))
reader = new $Reader(reader);
return this.decode(reader, reader.uint32());
};
/**
* Verifies a SenderKeyMessage message.
* @function verify
* @memberof groupproto.SenderKeyMessage
* @static
* @param {Object.<string,*>} message Plain object to verify
* @returns {string|null} `null` if valid, otherwise the reason why it is not
*/
SenderKeyMessage.verify = function verify(message) {
if (typeof message !== "object" || message === null)
return "object expected";
var properties = {};
if (message.id != null && message.hasOwnProperty("id")) {
properties._id = 1;
if (!$util.isInteger(message.id))
return "id: integer expected";
}
if (message.iteration != null && message.hasOwnProperty("iteration")) {
properties._iteration = 1;
if (!$util.isInteger(message.iteration))
return "iteration: integer expected";
}
if (message.ciphertext != null && message.hasOwnProperty("ciphertext")) {
properties._ciphertext = 1;
if (!(message.ciphertext && typeof message.ciphertext.length === "number" || $util.isString(message.ciphertext)))
return "ciphertext: buffer expected";
}
return null;
};
/**
* Creates a SenderKeyMessage message from a plain object. Also converts values to their respective internal types.
* @function fromObject
* @memberof groupproto.SenderKeyMessage
* @static
* @param {Object.<string,*>} object Plain object
* @returns {groupproto.SenderKeyMessage} SenderKeyMessage
*/
SenderKeyMessage.fromObject = function fromObject(object) {
if (object instanceof $root.groupproto.SenderKeyMessage)
return object;
var message = new $root.groupproto.SenderKeyMessage();
if (object.id != null)
message.id = object.id >>> 0;
if (object.iteration != null)
message.iteration = object.iteration >>> 0;
if (object.ciphertext != null)
if (typeof object.ciphertext === "string")
$util.base64.decode(object.ciphertext, message.ciphertext = $util.newBuffer($util.base64.length(object.ciphertext)), 0);
else if (object.ciphertext.length)
message.ciphertext = object.ciphertext;
return message;
};
/**
* Creates a plain object from a SenderKeyMessage message. Also converts values to other types if specified.
* @function toObject
* @memberof groupproto.SenderKeyMessage
* @static
* @param {groupproto.SenderKeyMessage} message SenderKeyMessage
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
SenderKeyMessage.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (message.id != null && message.hasOwnProperty("id")) {
object.id = message.id;
if (options.oneofs)
object._id = "id";
}
if (message.iteration != null && message.hasOwnProperty("iteration")) {
object.iteration = message.iteration;
if (options.oneofs)
object._iteration = "iteration";
}
if (message.ciphertext != null && message.hasOwnProperty("ciphertext")) {
object.ciphertext = options.bytes === String ? $util.base64.encode(message.ciphertext, 0, message.ciphertext.length) : options.bytes === Array ? Array.prototype.slice.call(message.ciphertext) : message.ciphertext;
if (options.oneofs)
object._ciphertext = "ciphertext";
}
return object;
};
/**
* Converts this SenderKeyMessage to JSON.
* @function toJSON
* @memberof groupproto.SenderKeyMessage
* @instance
* @returns {Object.<string,*>} JSON object
*/
SenderKeyMessage.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
return SenderKeyMessage;
})();
groupproto.SenderKeyDistributionMessage = (function() {
/**
* Properties of a SenderKeyDistributionMessage.
* @memberof groupproto
* @interface ISenderKeyDistributionMessage
* @property {number|null} [id] SenderKeyDistributionMessage id
* @property {number|null} [iteration] SenderKeyDistributionMessage iteration
* @property {Uint8Array|null} [chainKey] SenderKeyDistributionMessage chainKey
* @property {Uint8Array|null} [signingKey] SenderKeyDistributionMessage signingKey
*/
/**
* Constructs a new SenderKeyDistributionMessage.
* @memberof groupproto
* @classdesc Represents a SenderKeyDistributionMessage.
* @implements ISenderKeyDistributionMessage
* @constructor
* @param {groupproto.ISenderKeyDistributionMessage=} [properties] Properties to set
*/
function SenderKeyDistributionMessage(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* SenderKeyDistributionMessage id.
* @member {number|null|undefined} id
* @memberof groupproto.SenderKeyDistributionMessage
* @instance
*/
SenderKeyDistributionMessage.prototype.id = null;
/**
* SenderKeyDistributionMessage iteration.
* @member {number|null|undefined} iteration
* @memberof groupproto.SenderKeyDistributionMessage
* @instance
*/
SenderKeyDistributionMessage.prototype.iteration = null;
/**
* SenderKeyDistributionMessage chainKey.
* @member {Uint8Array|null|undefined} chainKey
* @memberof groupproto.SenderKeyDistributionMessage
* @instance
*/
SenderKeyDistributionMessage.prototype.chainKey = null;
/**
  * @memberof groupproto.SenderChainKey
* @instance
* @returns {Object.<string,*>} JSON object
*/
SenderChainKey.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
return SenderChainKey;
})();
groupproto.SenderMessageKey = (function() {
/**
* Properties of a SenderMessageKey.
* @memberof groupproto
* @interface ISenderMessageKey
* @property {number|null} [iteration] SenderMessageKey iteration
* @property {Uint8Array|null} [seed] SenderMessageKey seed
*/
/**
* Constructs a new SenderMessageKey.
* @memberof groupproto
* @classdesc Represents a SenderMessageKey.
* @implements ISenderMessageKey
* @constructor
* @param {groupproto.ISenderMessageKey=} [properties] Properties to set
*/
function SenderMessageKey(properties) {
if (properties)
for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
if (properties[keys[i]] != null)
this[keys[i]] = properties[keys[i]];
}
/**
* SenderMessageKey iteration.
* @member {number|null|undefined} iteration
* @memberof groupproto.SenderMessageKey
* @instance
*/
SenderMessageKey.prototype.iteration = null;
/**
* SenderMessageKey seed.
* @member {Uint8Array|null|undefined} seed
* @memberof groupproto.SenderMessageKey
* @instance
*/
SenderMessageKey.prototype.seed = null;
// OneOf field names bound to virtual getters and setters
var $oneOfFields;
/**
* SenderMessageKey _iteration.
* @member {"iteration"|undefined} _iteration
* @memberof SenderMessageKey
* @instance
*/
Object.defineProperty(SenderMessageKey.prototype, "_iteration", {
get: $util.oneOfGetter($oneOfFields = ["iteration"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* SenderMessageKey _seed.
* @member {"seed"|undefined} _seed
* @memberof SenderMessageKey
* @instance
*/
Object.defineProperty(SenderMessageKey.prototype, "_seed", {
get: $util.oneOfGetter($oneOfFields = ["seed"]),
set: $util.oneOfSetter($oneOfFields)
});
/**
* Creates a new SenderMessageKey instance using the specified properties.
* @function create
* @memberof groupproto.SenderMessageKey
* @static
* @param {groupproto.ISenderMessageKey=} [properties] Properties to set
* @returns {groupproto.SenderMessageKey} SenderMessageKey instance
*/
SenderMessageKey.create = function create(properties) {
return new SenderMessageKey(properties);
};
/**
* Encodes the specified SenderMessageKey message. Does not implicitly {@link groupproto.SenderMessageKey.verify|verify} messages.
* @function encode
* @memberof groupproto.SenderMessageKey
* @static
* @param {groupproto.ISenderMessageKey} message SenderMessageKey message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
SenderMessageKey.encode = function encode(message, writer) {
if (!writer)
writer = $Writer.create();
if (message.iteration != null && Object.hasOwnProperty.call(message, "iteration"))
writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.iteration);
if (message.seed != null && Object.hasOwnProperty.call(message, "seed"))
writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.seed);
return writer;
};
/**
* Encodes the specified SenderMessageKey message, length delimited. Does not implicitly {@link groupproto.SenderMessageKey.verify|verify} messages.
* @function encodeDelimited
* @memberof groupproto.SenderMessageKey
* @static
* @param {groupproto.ISenderMessageKey} message SenderMessageKey message or plain object to encode
* @param {$protobuf.Writer} [writer] Writer to encode to
* @returns {$protobuf.Writer} Writer
*/
SenderMessageKey.encodeDelimited = function encodeDelimited(message, writer) {
return this.encode(message, writer).ldelim();
};
/**
* Decodes a SenderMessageKey message from the specified reader or buffer.
* @function decode
* @memberof groupproto.SenderMessageKey
* @static
* @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
* @param {number} [length] Message length if known beforehand
* @returns {groupproto.SenderMessageKey} SenderMessageKey
* @throws {Error} If the payload is not a reader or valid buffer
* @throws {$protobuf.util.ProtocolError} If required fields are missing
*/
SenderMessageKey.decode = function decode(reader, length) {
if (!(reader instanceof $Reader))
reader = $Reader.create(reader);
var end = length === undefined ? reader.len : reader.pos + length, message = new $root.groupproto.SenderMessageKey();
while (reader.pos < end) {
var tag = reader.uint32();
switch (tag >>> 3) {
case 1:
message.iteration = reader.uint32();
break;
case 2:
message.seed = reader.bytes();
break;
default:
reader.skipType(tag & 7);
break;
}
}
return message;
  if (typeof object.senderKeyStates[i] !== "object")
throw TypeError(".groupproto.SenderKeyRecordStructure.senderKeyStates: object expected");
message.senderKeyStates[i] = $root.groupproto.SenderKeyStateStructure.fromObject(object.senderKeyStates[i]);
}
}
return message;
};
/**
* Creates a plain object from a SenderKeyRecordStructure message. Also converts values to other types if specified.
* @function toObject
* @memberof groupproto.SenderKeyRecordStructure
* @static
* @param {groupproto.SenderKeyRecordStructure} message SenderKeyRecordStructure
* @param {$protobuf.IConversionOptions} [options] Conversion options
* @returns {Object.<string,*>} Plain object
*/
SenderKeyRecordStructure.toObject = function toObject(message, options) {
if (!options)
options = {};
var object = {};
if (options.arrays || options.defaults)
object.senderKeyStates = [];
if (message.senderKeyStates && message.senderKeyStates.length) {
object.senderKeyStates = [];
for (var j = 0; j < message.senderKeyStates.length; ++j)
object.senderKeyStates[j] = $root.groupproto.SenderKeyStateStructure.toObject(message.senderKeyStates[j], options);
}
return object;
};
/**
* Converts this SenderKeyRecordStructure to JSON.
* @function toJSON
* @memberof groupproto.SenderKeyRecordStructure
* @instance
* @returns {Object.<string,*>} JSON object
*/
SenderKeyRecordStructure.prototype.toJSON = function toJSON() {
return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
};
return SenderKeyRecordStructure;
})();
return groupproto;
})();
module.exports = $root;
