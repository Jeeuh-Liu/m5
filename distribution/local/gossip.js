/* eslint-disable */

/*
ATTENTION: This is an obfuscated file. You do not need to understand it.
Do NOT edit this file directly. Use it as a black box.

If you notice any issues with using this file, please contact the TAs.
*/
function _0xf005() {
    const _0x53193e = [
        'distribution',
        'gwGXo',
        '6FfTitg',
        '217uEQJtR',
        'nodeConfig',
        'gossip',
        'send',
        'includes',
        'node',
        '1801780ZZMqIf',
        '371222gWASYh',
        '787088YMiTwC',
        'port',
        'has',
        '1916541TdUqiy',
        'zknmG',
        '2196900LYpJHt',
        'push',
        '1582hGlPDw',
        'mid',
        'recv',
        '1029NNLmmA',
        'remote',
        'MCPka',
        'length',
        '82784SPWvWI',
        'messages'
    ];
    _0xf005 = function () {
        return _0x53193e;
    };
    return _0xf005();
}
const _0x5408a8 = _0x11a6;
(function (_0x285d79, _0x17d4ec) {
    const _0x58b1c6 = _0x11a6, _0x53de44 = _0x285d79();
    while (!![]) {
        try {
            const _0x5b77ea = -parseInt(_0x58b1c6(0x14e)) / 0x1 + -parseInt(_0x58b1c6(0x156)) / 0x2 * (parseInt(_0x58b1c6(0x159)) / 0x3) + parseInt(_0x58b1c6(0x14f)) / 0x4 + parseInt(_0x58b1c6(0x14d)) / 0x5 * (parseInt(_0x58b1c6(0x146)) / 0x6) + parseInt(_0x58b1c6(0x147)) / 0x7 * (parseInt(_0x58b1c6(0x142)) / 0x8) + parseInt(_0x58b1c6(0x152)) / 0x9 + -parseInt(_0x58b1c6(0x154)) / 0xa;
            if (_0x5b77ea === _0x17d4ec)
                break;
            else
                _0x53de44['push'](_0x53de44['shift']());
        } catch (_0x35eee1) {
            _0x53de44['push'](_0x53de44['shift']());
        }
    }
}(_0xf005, 0x37d20));
function _0x11a6(_0x411dca, _0x4b8275) {
    const _0xf00502 = _0xf005();
    return _0x11a6 = function (_0x11a65b, _0xa90e35) {
        _0x11a65b = _0x11a65b - 0x140;
        let _0x2b6261 = _0xf00502[_0x11a65b];
        return _0x2b6261;
    }, _0x11a6(_0x411dca, _0x4b8275);
}
const gossip = {}, messageStore = {
        'messages': [],
        'push': function (_0x2538ec) {
            const _0x2aba26 = _0x11a6, _0x4845fa = {
                    'MCPka': function (_0x1c1949, _0x5dc003) {
                        return _0x1c1949 > _0x5dc003;
                    }
                };
            N = 0xa, messageStore[_0x2aba26(0x143)][_0x2aba26(0x155)](_0x2538ec), _0x4845fa[_0x2aba26(0x140)](messageStore[_0x2aba26(0x143)][_0x2aba26(0x141)], N) && messageStore[_0x2aba26(0x143)]['shift']();
        },
        'has': function (_0x5b2860) {
            const _0xda1a07 = _0x11a6;
            return messageStore[_0xda1a07(0x143)][_0xda1a07(0x14b)](_0x5b2860);
        }
    };
gossip[_0x5408a8(0x158)] = function (_0x4e255b, _0x2764d5) {
    const _0x112afa = _0x5408a8, _0x1dc6a7 = {
            'zknmG': function (_0x23a3df, _0x4650e0, _0x5bea22) {
                return _0x23a3df(_0x4650e0, _0x5bea22);
            },
            'qdiuk': function (_0x259371, _0x3d0cf5) {
                return _0x259371(_0x3d0cf5);
            },
            'gwGXo': 'Message\x20already\x20received'
        };
    _0x2764d5 = _0x2764d5 || function () {
    };
    let _0x5ba9b6 = _0x4e255b['message'], _0xc96bf9 = _0x4e255b[_0x112afa(0x15a)], _0x44d572 = _0x4e255b[_0x112afa(0x157)], _0x487f62 = _0x4e255b['gid'];
    if (messageStore[_0x112afa(0x151)](_0x44d572)) {
        _0x1dc6a7['qdiuk'](_0x2764d5, new Error(_0x1dc6a7[_0x112afa(0x145)]));
        return;
    }
    global[_0x112afa(0x144)][_0x487f62][_0x112afa(0x149)][_0x112afa(0x14a)](_0x4e255b, _0xc96bf9), messageStore[_0x112afa(0x155)](_0x44d572), _0xc96bf9[_0x112afa(0x14c)] = {
        'ip': global[_0x112afa(0x148)]['ip'],
        'port': global['nodeConfig'][_0x112afa(0x150)]
    }, global[_0x112afa(0x144)]['local']['comm']['send'](_0x5ba9b6, _0xc96bf9, (_0x25c79a, _0x3e97dd) => {
        const _0x52bc9f = _0x112afa;
        _0x1dc6a7[_0x52bc9f(0x153)](_0x2764d5, _0x25c79a, _0x3e97dd);
    });
}, module['exports'] = gossip;/* eslint-enable */