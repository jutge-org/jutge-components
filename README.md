# Jutge components

A place to store shared components for Jutge projects.

# Installation

TODO.

It is assumed that all `shadcn` components are installed and configured. See https://ui.shadcn.com/docs/installation/next.

# Dialogs

## InputDialog

The `InputDialog` component is a dialog that allows the user to input some text. It is quite similar to the `prompt` dialog, but it is more flexible and allows for more customization. It returns the read string if accepted, or `null` if closed. See `InputDialogDemo` for an example of how to use it.

Dependencies: `shadcn` components and `lucice-react` package.

## ConfirmDialog

The `ConfirmDialog` component is a dialog that allows the user to accept or cancel some text. It is quite similar to the `confirm` dialog, but it is more flexible and allows for more customization (as labels and icons for the buttons). It returns `true` if accepted, or `false` if cancelled ot closed. See `ConfirmDialogDemo` for an example of how to use it.

Dependencies: `shadcn` components and `lucice-react` package.

## OkDialog

The `OkDialog` component is a dialog that shows some text and an "OK" button. It is quite similar to the `alert` dialog, but it is more flexible and allows for more customization. It does not return anything. See `OkDialogDemo` for an example of how to use it.

Dependencies: `shadcn` components and `lucice-react` package.

## EmailsDialog

The `EmailsDialog` component is a dialog that allows the user to input some emails. It returns a list of valid emails and a list of invalid emails if accepted, or `null` if closed. See `EmailsDialogDemo` for an example of how to use it.

Dependencies: `shadcn` components and `lucice-react` package.

# Formatters

## JTable

The `JTable` component is a table that displays a read-only list of items with descriptions. It is quite similar to the `<dl>` HTML tag. Under a mobile device, it shows the descriptions in a single column. Under a desktop device, it shows the descriptions in two columns. No interactivity is expected. The items to display are given as a list of `JTableItem` objects, which have a `label` and a `value`. The `value` can be a string, a number, a component or `null`.

Dependencies: `shadcn` components.

# User Interface

## DateTime

`DateTime` is a component that allows the user to select a date and time. It is
based on https://github.com/hsuanyi-chou/shadcn-ui-expansions/blob/main/components/ui/datetime-picker.tsx

Dependencies: `shadcn` components and `date-fns` package.

Warning: There are some warnings in this code when doing the build.

## MultiSelect

The `MultiSelect` component is a component that allows the user to select multiple items from a list. It is based on https://github.com/sersavan/shadcn-multi-select-component

Dependencies: `shadcn` components and `lucide-react` and `class-variance-authority` packages.

# Misc

## DevIcon

The `DevIcon` component provides an icon that shows the logo of a programming language in the Jutge. It uses https://devicon.dev/.

Dependencies: `devicon`, `lucice-react` and `svgr` packages.

Configuration: See https://react-svgr.com/docs/next/ to configure `svgr`.

## Prose

The `Prose` component is a wrapper around the `@tailwindcss/typography` package. It provides a way to display text in a consistent way across the Jutge and cancel the removal of styles from `tailwind`.

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
