import tw from 'twin.macro';
import { createGlobalStyle } from 'styled-components/macro';

export default createGlobalStyle`
    body {
        ${tw`font-sans bg-neutral-800 text-white`};
        letter-spacing: 0.015em;
    }

    h1, h2, h3, h4, h5, h6 {
        ${tw`font-medium tracking-normal font-header`};
    }

    p {
        ${tw`text-white leading-snug font-sans`};
    }

    form {
        ${tw`m-0`};
    }

    textarea, select, input, button, button:focus, button:focus-visible {
        ${tw`outline-none`};
    }

    input[type=number]::-webkit-outer-spin-button,
    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none !important;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield !important;
    }

    /* Scroll Bar Style */
    ::-webkit-scrollbar {
        background: none;
        width: 16px;
        height: 16px;
    }

    ::-webkit-scrollbar-thumb {
        border: solid 0 rgb(0 0 0 / 0%);
        border-right-width: 4px;
        border-left-width: 4px;
        -webkit-border-radius: 9px 4px;
        -webkit-box-shadow: inset 0 0 0 1px rgb(114, 137, 218), inset 0 0 0 4px rgb(114, 137, 218);
    }

    ::-webkit-scrollbar-track-piece {
        margin: 4px 0;
    }

    ::-webkit-scrollbar-thumb:horizontal {
        border-right-width: 0;
        border-left-width: 0;
        border-top-width: 4px;
        border-bottom-width: 4px;
        -webkit-border-radius: 4px 9px;
    }

    ::-webkit-scrollbar-thumb:hover {
        -webkit-box-shadow:
        inset 0 0 0 1px rgb(171, 184, 232),
        inset 0 0 0 4px rgb(171, 184, 232);
    }

    ::-webkit-scrollbar-corner {
        background: transparent;
    }
    @media only screen and (max-width: 768px) {
      .NavText,
      .CreditText,
      .fileButtonModal {
        display: none;
      }
      .ServerContentBlock,
      .OverviewContainer,
      .ApiContainer,
      .ConsoleContainer,
      .EditContainer,
      .editModal {
        padding-left: 3.5rem;
      }
    }

    .xterm,
    .xterm-screen,
    .xterm .xterm-viewport::-webkit-scrollbar,
    .xterm-viewport {
      ${tw`bg-neutral-900`};
    }

    input:focus,
    select:focus,
    textarea:focus,
    button:focus {
        box-shadow: none !important;
        -moz-box-shadow: none !important;
        -webkit-box-shadow: none !important;
    }

    *,
    p,
    a,
    html,
    body,
    code {
        font-weight: 600;
      font-family: 'Poppinns', '-apple-system', 'BlinkMacSystemFont', '"Helvetica Neue"', '"Roboto"', 'system-ui', 'sans-serif';
}

    .RowSpinner {
      justify-content: center !important;
    }

    @media only screen and (max-width: 640px) {
      .detailsTwo {
        display: none !important;
      }

      .detailsOne {
        max-width: 100% !important;
      }

      .KillButton {
        display: none !important;
      }

      .PowerControlButtons {
        transform: scale(.8);
        margin-right: 0 !important;
        padding-right: 0 !important;
        padding-left: 0 !important;
      }
    }

    .cm-s-ayu-mirage .CodeMirror-linenumber {
      color: white !important;
    }

    .CodeMirror-gutters,
    .CodeMirror-lines,
    .CodeMirror-overlayscroll-vertical,
    .CodeMirror-foldgutter,
    .CodeMirror-gutter,
    .CodeMirror-scroll,
    .xterm-viewport {
      background: #202226 !important;
    }

    [type='checkbox']:checked {
      background: #7289DA !important;
    }
`;
