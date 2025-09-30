# Frontend Page Design – Technical Test
## Overview

This test is designed to evaluate your ability to implement a frontend page design based on provided specifications. You’ll be assessed on your attention to detail, code structure, and how closely your implementation matches the design.

### The task

Inside the `designs` folder, there is a full-page design split across 5 different breakpoints. The design is made up of 8 different components. Details on what is required for each component can be found in the `specifications` folder.
![Landing Page.png](designs/Landing%20Page.png)


#### Deliverables:
- Required:
  - `Header` and `Page Title` components.
  - Must compile
- Stretch:
  - Any other component (Feel free to pick whichever)

#### Breakpoints
- XS: 320px
- SM: 600px
- MD: 1024px
- LG: 1336px
- XL: 1600px

### The Tech Stack

- Vue 3
- TypeScript
- Vite
- SASS
- Storybook
- Eslint
- Prettier
- Font Awesome (Please use for icons)

### The Rules

- 2 hours to complete as much of the test as possible. We do not expect you to implement the entire page template. We're purely looking for your strengths and how the components are implemented.
- No use of AI. We're testing your knowledge of implementation. We will be quizzing you on your choices.
- Have fun and try not to stress! :)

### What We Expect

- A responsive implementation of the design.
- Clean, well-structured, and maintainable code.
- Semantic HTML and accessible markup where appropriate.
- Styling with CSS/SCSS. No CSS-in-JS approach
  - Naming conventions must follow [BEM](https://getbem.com/) and [ITCSS](https://developer.helpscout.com/seed/glossary/itcss/) naming conventions
- No reliance on CSS frameworks (e.g., Bootstrap, Tailwind).

### Requirements

- The page should look as close to the design as possible. 
- It must work across the latest versions of major browsers.
- Mobile and desktop layouts should be handled.
- Include at least minimal accessibility considerations (alt text, proper landmarks).
- It must align to the specification of each component - Specifications can be found inside the `specifications` folder.

### Deliverables
- A link to a repository (GitHub, GitLab, Bitbucket etc.) or zipped project folder
  - Please email [abhijeet.chadha@mandogroup.com]() with a link to the GitHub repository on completion and ensure the repo is public/accessible to us.

## How to Run

1. Fork and install the repository.
2. Switch to Node `22.11.0`
3. Install dependencies
``` bash
npm install
```

Run the StoryBook instance:
```bash
npm run storybook
```

Open http://localhost:6006 in your browser.

## Story help
To create a Storybook story for this project, please observe the following example below:
```typescript
import type { Meta, StoryObj } from '@storybook/vue3'

import Button from './button.vue'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'radio', options: ['primary', 'secondary', 'ghost', 'outline'] },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    label: { control: 'text' },
    iconPrefix: { control: 'text' },
    iconSuffix: { control: 'text' }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    variant: 'primary',
    label: 'Button',
    size: 'large'
  }
}
```

## Component Specification
Below is a breakdown of what is required for each component

### Header
[Specification](specifications/header-specification.md)
### Breadcrumb
[Specification](specifications/breadcrumb-specification.md)
### Page Title
[Specification](specifications/page-title-specification.md)
### Rich Text Block
[Specification](specifications/rich-text-block-specification.md)
### Gallery
[Specification](specifications/gallery-specification.md)
### Featured Content
[Specification](specifications/related-content-specification.md)
### Related Content
[Specification](specifications/related-content-specification.md)
### Footer
[Specification](specifications/footer-specification.md)