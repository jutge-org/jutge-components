# Jutge components

A place to store shared components for Jutge projects.

# Installation

TODO.

# Dialogs

## InputDialog

The `InputDialog` component is a dialog that allows the user to input some text. It is quite similar to the `Prompt` dialog, but it is more flexible and allows for more customization. Ir returns the read string if accepted, or `null` if closed. See `InputDialogDemo` for an example of how to use it.

Dependencies: `shadcn` components and `lucice-react` package.

## EmailsDialog

The `EmailsDialog` component is a dialog that allows the user to input some emails. It returns a list of valid emails and a list of invalid emails if accepted, or `null` if closed. See `EmailsDialogDemo` for an example of how to use it.

Dependencies: `shadcn` components and `lucice-react` package.

# Misc

## DevIcon

The `DevIcon` component provides an icon that shows the logo of a programming language in the Jutge. It uses https://devicon.dev/.

Dependencies: `devicon`, `lucice-react` and `svgr` packages.

Configuration: See https://react-svgr.com/docs/next/ to configure `svgr`.

## Code

The `Code` component is a simple wrapper around the `highlight.js` library. It provides a way to display code snippets in a consistent way across the Jutge.

Dependencies: `highlight.js` and `react-highlight` packages.

## Markdown

The `Markdown` component is a component that displays a string formatted in Markdown. It uses GitHub's flavoured Markdown and provides sanitazes the input.

Dependencies: `marked`, `dompurify` and `@tailwindcss/typography` packages.

Configuration: `@tailwindcss/typography` requires some configuration.

# Spinners

## SimpleSpinner

The `SimpleSpinner` component is a simple and small rotating spinner that can be used to indicate loading state inline. It uses the `lucide-react` package for the spinner icon. It is shown after some delay so that most times it is not ever seen.

Dependencies: `lucice-react`.
