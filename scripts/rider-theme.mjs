// Same TextMate palette as Wyrd.Web: Rider Islands Dark.
export default {
    name: 'wyrd-rider',
    type: 'dark',
    colors: { 'editor.background': '#191A1C', 'editor.foreground': '#BDBDBD' },
    tokenColors: [
        {
            scope: ['comment'],
            settings: { foreground: '#85C46C', fontStyle: 'italic' },
        },
        { scope: ['keyword', 'storage'], settings: { foreground: '#6C95EB' } },
        { scope: ['string'], settings: { foreground: '#C9A26D' } },
        { scope: ['constant.numeric'], settings: { foreground: '#ED94C0' } },
        {
            scope: [
                'entity.name.type',
                'entity.name.namespace',
                'support.type',
                'support.class',
                'storage.type.generic',
            ],
            settings: { foreground: '#C191FF' },
        },
        {
            scope: ['entity.name.function', 'support.function'],
            settings: { foreground: '#39CC9B' },
        },
        {
            scope: [
                'variable.other.property',
                'variable.other.object.property',
                'variable.other.constant',
                'constant.other',
            ],
            settings: { foreground: '#66C3CC' },
        },
        {
            scope: ['variable.parameter', 'variable.other.readwrite'],
            settings: { foreground: '#BDBDBD' },
        },
        {
            scope: ['keyword.operator', 'punctuation'],
            settings: { foreground: '#BDBDBD' },
        },
        {
            scope: ['entity.other.attribute-name', 'variable.other.member'],
            settings: { foreground: '#66C3CC' },
        },
        {
            scope: ['entity.name.command', 'support.function.builtin'],
            settings: { foreground: '#39CC9B' },
        },
        {
            scope: ['string.unquoted.argument'],
            settings: { foreground: '#C9A26D' },
        },
    ],
};
