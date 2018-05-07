extends:
eslint-config-airbnb

parser:
    babel-eslint

settings:
    ecmascript: 6

ecmaFeatures:
    jsx: true
modules: true
destructuring: true
classes: true
forOf: true
blockBindings: true
arrowFunctions: true

env:
    browser: true

rules:
    arrow-body-style: 0
arrow-parens: 0
class-methods-use-this: 0
func-names: 0
indent: [2, 2]
new-cap: 0
no-plusplus: 0
no-return-assign: 0
quote-props: 0
template-curly-spacing: [2, "always"]
comma-dangle: ["error", {
    "arrays": "always-multiline",
    "objects": "always-multiline",
    "imports": "always-multiline",
    "exports": "always-multiline",
    "functions": "never"
}]
jsx-quotes: [2, "prefer-single"]
object-curly-spacing: ["error", "never"]
react/forbid-prop-types: 0
react/jsx-curly-spacing: ["error", "never"]
react/jsx-first-prop-new-line: ["error", "never"]
react/jsx-filename-extension: 0
react/jsx-boolean-value: 0
react/jsx-no-bind: 0
react/jsx-closing-bracket-location: [1, 'after-props']
react/prefer-stateless-function: 0
import/extensions: 0
import/no-extraneous-dependencies: 0
import/no-unresolved: 0
import/prefer-default-export: 0
react/no-unknown-property: [2, {"ignore": ["class", "for"]}]
