import { css } from "@emotion/react";
import { theme } from "@chakra-ui/react";

const prismStyles = css`
  // Code
  :root {
    --prism-scheme: dark;

    /* Colors */
    --prism-foreground: #6e6e6e;
    --prism-background: #f4f4f4;

    /* Tokens */
    --prism-comment: #a8a8a8;
    --prism-string: #555555;
    --prism-literal: #333333;
    --prism-keyword: #000000;
    --prism-function: #4f4f4f;
    --prism-deleted: #333333;
    --prism-class: #333333;
    --prism-builtin: #757575;
    --prism-property: #333333;
    --prism-namespace: #4f4f4f;
    --prism-punctuation: #ababab;
    --prism-decorator: var(--prism-class);
    --prism-operator: #79c0ff;
    --prism-number: var(--prism-literal);
    --prism-boolean: var(--prism-literal);
    --prism-variable: var(--prism-literal);
    --prism-constant: var(--prism-literal);
    --prism-symbol: var(--prism-literal);
    --prism-interpolation: var(--prism-literal);
    --prism-selector: var(--prism-keyword);
    --prism-keyword-control: var(--prism-keyword);
    --prism-regex: var(--prism-string);
    --prism-json-property: var(--prism-property);
    --prism-inline-background: var(--prism-background);

    /* Token Styles */
    --prism-comment-style: italic;
    --prism-url-decoration: underline;

    /* Extension */
    --prism-line-number: #a5a5a5;
    --prism-line-number-gutter: #333333;
    --prism-line-highlight-background: #eeeeee;
    --prism-selection-background: #aaaaaa;
    --prism-marker-color: var(--prism-foreground);
    --prism-marker-opacity: 0.4;
    --prism-marker-font-size: 0.8em;

    /* Font */
    --prism-font-size: ${theme.fontSizes.sm};
    --prism-line-height: ${theme.lineHeights.normal};
    --prism-font-family: ${theme.fonts.mono};
    --prism-inline-font-size: var(--prism-font-size);
    --prism-block-font-size: var(--prism-font-size);

    /* Sizing */
    --prism-tab-size: 2;

    --prism-block-padding-x: 1em;
    --prism-block-padding-y: 1em;
    --prism-block-margin-x: 0;
    --prism-block-margin-y: 0.5em;
    --prism-block-radius: 0.3em;
    --prism-inline-padding-x: 0.3em;
    --prism-inline-padding-y: 0.1em;
    --prism-inline-radius: 0.3em;

    /* Overrides */
    --prism-scheme: dark;
    --prism-foreground: #ffa657;
    --prism-background: #1a202c;
    --prism-comment: #7285b7;
    --prism-string: #a5d6ff;
    --prism-literal: #429988;
    --prism-keyword: #ff7b72;
    --prism-function: #79c0ff;
    --prism-function-variable: #d2a8ff;
    --prism-deleted: #a14f55;
    --prism-class: #7ee787;
    --prism-builtin: #c9d1d9;
    --prism-property: #79c0ff;
    --prism-parameter: #c9d1d9;
    --prism-namespace: #db889a;
    --prism-punctuation: #c9d1d9;
    --prism-decorator: #bd8f8f;
    --prism-number: #6394bf;
    --prism-boolean: #1c6b48;
    --prism-variable: #c2b36e;
    --prism-regex: #ab5e3f;
    --prism-json-property: #6b8b9e;
    --prism-line-number: #888888;
    --prism-line-number-gutter: #eeeeee;
    --prism-line-highlight-background: #444444;
    --prism-selection-background: #444444;
  }

  div[class*="language-"],
  pre[class*="language-"],
  code[class*="language-"] {
    font-size: var(--prism-font-size);
    font-family: var(--prism-font-family);
    direction: ltr;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    line-height: var(--prism-line-height);
    -moz-tab-size: var(--prism-tab-size);
    -o-tab-size: var(--prism-tab-size);
    tab-size: var(--prism-tab-size);
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    color: var(--prism-foreground) !important;
  }

  /* Code blocks */
  div[class*="language-"],
  pre[class*="language-"] {
    font-size: var(--prism-block-font-size);
    padding: var(--prism-block-padding-y) var(--prism-block-padding-x);
    margin: var(--prism-block-margin-y) var(--prism-block-margin-x);
    border-radius: var(--prism-block-radius);
    overflow: auto;
    background: var(--prism-background);
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    font-size: var(--prism-inline-font-size);
    padding: var(--prism-inline-padding-y) var(--prism-inline-padding-x);
    border-radius: var(--prism-inline-radius);
    background: var(--prism-inline-background);
  }

  /* Selection */
  pre[class*="language-"]::selection,
  pre[class*="language-"] ::selection,
  code[class*="language-"]::selection,
  code[class*="language-"] ::selection,
  pre[class*="language-"]::-moz-selection,
  pre[class*="language-"] ::-moz-selection,
  code[class*="language-"]::-moz-selection,
  code[class*="language-"] ::-moz-selection {
    background: var(--prism-selection-background);
  }

  /* Tokens */
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: var(--prism-comment);
    font-style: var(--prism-comment-style);
  }

  .token.function.function-variable {
    color: var(--prism-function-variable);
  }

  .token.function.function-variable > .token.maybe-class-name {
    color: var(--prism-function);
  }

  .token.parameter {
    color: var(--prism-parameter);
  }

  .token.namespace {
    color: var(--prism-namespace);
  }

  .token.interpolation {
    color: var(--prism-interpolation);
  }

  .token.string {
    color: var(--prism-string);
  }

  .token.punctuation {
    color: var(--prism-punctuation);
  }

  .token.operator {
    color: var(--prism-operator);
  }

  .token.keyword.module,
  .token.keyword.control-flow {
    color: var(--prism-keyword-control);
  }

  .token.url,
  .token.symbol,
  .token.inserted {
    color: var(--prism-symbol);
  }

  .token.constant {
    color: var(--prism-constant);
  }

  .token.string.url {
    text-decoration: var(--prism-url-decoration);
  }

  .token.boolean,
  .language-json .token.boolean {
    color: var(--prism-boolean);
  }

  .token.number,
  .language-json .token.number {
    color: var(--prism-number);
  }

  .token.variable {
    color: var(--prism-variable);
  }

  .token.keyword {
    color: var(--prism-keyword);
  }

  .token.atrule,
  .token.attr-value,
  .token.selector {
    color: var(--prism-selector);
  }

  .token.function {
    color: var(--prism-function);
  }

  .token.deleted {
    color: var(--prism-deleted);
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.class-name {
    color: var(--prism-class);
  }

  .token.tag,
  .token.builtin {
    color: var(--prism-builtin);
  }

  .token.attr-name,
  .token.property,
  .token.entity {
    color: var(--prism-property);
  }

  .language-json .token.property {
    color: var(--prism-json-property);
  }

  .token.regex {
    color: var(--prism-regex);
  }

  .token.decorator,
  .token.annotation {
    color: var(--prism-decorator);
  }

  /* overrides color-values for the Line Numbers plugin
   * http://prismjs.com/plugins/line-numbers/
   */
  .line-numbers .line-numbers-rows {
    border-right-color: var(--prism-line-number);
  }

  .line-numbers-rows > span:before {
    color: var(--prism-line-number-gutter);
  }

  /* overrides color-values for the Line Highlight plugin
    * http://prismjs.com/plugins/line-highlight/
    */
  .line-highlight {
    background: var(--prism-line-highlight-background);
  }

  pre {
    overflow-x: auto;
  }

  /**
   * Inspired by gatsby remark prism - https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/
   * 1. Make the element just wide enough to fit its content.
   * 2. Always fill the visible space in .code-highlight.
   */
  .code-highlight {
    float: left; /* 1 */
    min-width: 100%; /* 2 */
  }

  .code-line {
    line-height: 2em;
    display: block;
    padding-left: 16px;
    padding-right: 16px;
    margin-left: -16px;
    margin-right: -16px;
    border-left-width: 4px;
    border-left-color: rgba(31, 41, 55, 0); /* Set code block color */
  }

  .code-line.inserted {
    background-color: rgba(16, 185, 129, 0.2); /* Set inserted line (+) color */
  }

  .code-line.deleted {
    background-color: rgba(239, 68, 68, 0.2); /* Set deleted line (-) color */
  }

  .highlight-line {
    margin-left: -16px;
    margin-right: -16px;
    background-color: rgba(55, 65, 81, 0.5); /* Set highlight bg color */
    border-left-width: 4px;
    border-left-color: rgb(155 163 175); /* Set highlight accent border color */
  }

  .line-number::before {
    display: inline-block;
    width: 1rem;
    text-align: right;
    margin-right: 16px;
    margin-left: -8px;
    color: rgb(156, 163, 175); /* Line number color */
    content: attr(line);
  }

  pre[class*="language-"] {
    font-size: ${theme.fontSizes["md"]};
    margin: ${theme.space[6]} 0;
    overflow: auto;
    min-width: 100%;
    border-radius: ${theme.radii.sm};
    border-width: 1px;
    border-color: ${theme.colors.gray[700]};
  }

  :not(pre) > code {
    border-radius: ${theme.radii.sm};
  }

  :not(pre) > code {
    padding: 0.1em;
    border-radius: 0.3em;
    white-space: normal;
    font-size: ${theme.fontSizes["sm"]};
  }

  :not(pre) > code:before,
  :not(pre) > code:after {
    content: "\`";
  }

  .rehype-code-title {
    margin: ${theme.space[6]} 0 0;
    padding: ${theme.space[2]} ${theme.space[4]};
    font-family: ${theme.fonts.mono};
    background: ${theme.colors.gray[200]};
    color: ${theme.colors.gray[800]};
    border-top-left-radius: ${theme.radii.sm};
    border-top-right-radius: ${theme.radii.sm};
    font-size: 0.8rem;
    font-weight: 600;
    width: 100%;

    + pre[class*="language-"] {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      margin-top: 0;
    }
  }

  code,
  pre[class*="language-"] {
    color: ${theme.colors.gray[50]};
  }

  .rehype-code-title {
    background: ${theme.colors.gray[700]};
    color: ${theme.colors.gray[100]};
  }

  :not(pre) > code {
    color: ${theme.colors.purple[300]};
  }
`;

export default prismStyles;