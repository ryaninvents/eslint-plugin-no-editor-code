const RuleTester = require('eslint').RuleTester;
const dedent = require('dedent');
const rule = require('../no-region');

const ERROR_SHAPE = {message: 'Do not use vscode fold regions'};

const ruleTester = new RuleTester();
ruleTester.run('no-editor-code/no-region', rule, {
    valid: [{
        code: dedent`
            // AWS account ID
            var accountId = "foo";
            // Region where resources will be located
            var region = "us-east-1";
        `,
    }],
    invalid: [{
        code: '// #region',
        errors: [ERROR_SHAPE],
    }, {
        code: '// #region foo',
        errors: [ERROR_SHAPE],
    }, {
        code: '// #regionend',
        errors: [ERROR_SHAPE],
    }, {
        code: dedent`
            // #region config
            var accountId = "foo";
            var region = "us-east-1";
            // #endregion
        `,
        errors: [ERROR_SHAPE, ERROR_SHAPE],
    }],
});