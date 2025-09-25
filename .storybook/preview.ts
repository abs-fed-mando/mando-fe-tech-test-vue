import 'virtual:svg-icons-register'
import '../src/styles/main.scss'
import {Preview} from "@storybook/vue3";


const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
