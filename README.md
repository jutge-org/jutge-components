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
