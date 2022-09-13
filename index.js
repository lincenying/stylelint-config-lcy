'use strict'

module.exports = {
    plugins: ['stylelint-order'],
    extends: ['stylelint-config-standard-scss'],
    rules: {
        'alpha-value-notation': null,
        'color-function-notation': 'legacy',
        indentation: 4,
        'no-descending-specificity': null,
        'unit-case': null,
        'scss/dollar-variable-pattern': null,
        'selector-type-no-unknown': null,
        'selector-class-pattern': null,
        'unit-no-unknown': [true, { ignoreUnits: ['rpx', 'upx'] }],
        'order/properties-order': [
            'position',
            'top',
            'right',
            'bottom',
            'left',
            'z-index',
            'display',
            'justify-items',
            'justify-content',
            'align-items',
            'align-content',
            'flex',
            'flex-flow',
            'flex-direction',
            'float',
            'width',
            'height',
            'max-width',
            'max-height',
            'min-width',
            'min-height',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'margin-collapse',
            'margin-top-collapse',
            'margin-right-collapse',
            'margin-bottom-collapse',
            'margin-left-collapse',
            'overflow',
            'overflow-x',
            'overflow-y',
            'clip',
            'clear',
            'font',
            'font-family',
            'font-size',
            'font-smoothing',
            'osx-font-smoothing',
            'font-style',
            'font-weight',
            'line-height',
            'letter-spacing',
            'word-spacing',
            'color',
            'text-align',
            'text-decoration',
            'text-indent',
            'text-overflow',
            'text-rendering',
            'text-size-adjust',
            'text-shadow',
            'text-transform',
            'word-break',
            'word-wrap',
            'white-space',
            'vertical-align',
            'list-style',
            'list-style-type',
            'list-style-position',
            'list-style-image',
            'pointer-events',
            'cursor',
            'background',
            'background-color',
            'border',
            'border-radius',
            'content',
            'outline',
            'outline-offset',
            'opacity',
            'filter',
            'visibility',
            'size',
            'transform'
        ]
    }
}
