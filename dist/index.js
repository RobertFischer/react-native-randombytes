import "./ensureBuffer";
import sjcl from "sjcl";
function cbWarnError(err, _ = null) {
    if (err) {
        console.warn("Error in react-native-randombytes", err);
    }
}
function generateEntropy() {
    if (sjcl.random.isReady()) {
        return;
    }
    else {
        setTimeout(() => {
            try {
                const now = Date.now();
                sjcl.random.addEntropy(now, 2, "random-bytes-pure.generateEntropy");
                generateEntropy();
            }
            catch (e) {
                cbWarnError(e);
            }
        }, 1);
    }
}
export function randomBytes(length, cb = cbWarnError) {
    try {
        const wordCount = Math.ceil(length * 0.25);
        const randomBytes = sjcl.random.randomWords(wordCount);
        const hexString = sjcl.codec.hex
            .fromBits(randomBytes)
            .substr(0, length * 2);
        const toReturn = Buffer.from(hexString, "hex");
        cb(null, toReturn);
        return toReturn;
    }
    catch (e) {
        cb(e);
        throw e;
    }
}
export default randomBytes;
try {
    sjcl.random.addEventListener("progress", generateEntropy);
    generateEntropy();
}
catch (e) {
    cbWarnError(e);
    throw e;
}
//# sourceMappingURL=index.js.map