export type Note = {
  id: string
  title: string
  description: string
  category: string
  tags: string[]
  date: string
  readTime: string
  content: string
}

export const categories = [
  { name: 'JavaScript', description: 'Language fundamentals and practical patterns.' },
  { name: 'React', description: 'Components, state, and building user interfaces.' },
  { name: 'TypeScript', description: 'Types that make JavaScript easier to maintain.' },
  { name: 'HTML & CSS', description: 'Structure, layout, and visual presentation.' },
  { name: 'SQL', description: 'Queries, relational data, and database concepts.' },
  { name: 'Tools', description: 'Git, terminal, and everyday developer tools.' },
]

export const notes: Note[] = [
  {
    id: 'react-state',
    title: 'Understanding React State',
    description: 'A practical introduction to state and how it updates the UI.',
    category: 'React',
    tags: ['React', 'State', 'useState'],
    date: '2026-11-06',
    readTime: '5 min read',
    content: `## What is state?

State is data that a component remembers between renders. When state changes, React renders the component again so the interface can reflect the latest value.

## A simple example

\`\`\`tsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  )
}
\`\`\`

## When should I use it?

Use state when a value changes over time and that change should be reflected in the UI. Examples include a search query, an open menu, or a counter.

## What I learned

- State belongs to a component.
- Updating state asks React to render again.
- The setter function should be used instead of changing the value directly.

## Related ideas

- Component
- Props
- Event handling`,
  },
  {
    id: 'javascript-variables',
    title: 'JavaScript Variables: let, const, and var',
    description: 'How to declare variables and choose the right declaration.',
    category: 'JavaScript',
    tags: ['JavaScript', 'Variables', 'Fundamentals'],
    date: '2026-11-05',
    readTime: '4 min read',
    content: `## Overview

JavaScript provides \`const\`, \`let\`, and \`var\` for declaring variables. In modern JavaScript, prefer \`const\` by default and use \`let\` when reassignment is needed.

## Examples

\`\`\`js
const language = 'JavaScript'
let studyDays = 1

studyDays = 2
console.log(language, studyDays)
\`\`\`

## Key differences

| Keyword | Reassignment | Scope |
| --- | --- | --- |
| const | Not allowed | Block |
| let | Allowed | Block |
| var | Allowed | Function |

## What I learned

Choose the narrowest declaration that expresses your intention. Avoid \`var\` in modern code unless you are working with legacy code.`,
  },
  {
    id: 'sql-joins',
    title: 'SQL JOIN Basics',
    description: 'Combine rows from related tables with common JOIN types.',
    category: 'SQL',
    tags: ['SQL', 'JOIN', 'Database'],
    date: '2026-11-04',
    readTime: '6 min read',
    content: `## Why use JOIN?

A relational database often stores related information in separate tables. JOIN lets a query combine those rows using a related column.

## INNER JOIN

Returns rows where the join condition matches in both tables.

\`\`\`sql
SELECT
  customers.name,
  orders.order_date
FROM customers
INNER JOIN orders
  ON customers.id = orders.customer_id;
\`\`\`

## LEFT JOIN

Returns every row from the left table and matching rows from the right table. If there is no match, right-side columns are \`NULL\`.

## What I learned

- INNER JOIN keeps matching rows only.
- LEFT JOIN keeps all rows from the left table.
- The ON clause describes how rows are related.`,
  },
  {
    id: 'typescript-types',
    title: 'TypeScript: Basic Types',
    description: 'A quick reference to common types used in TypeScript.',
    category: 'TypeScript',
    tags: ['TypeScript', 'Types', 'Fundamentals'],
    date: '2026-11-03',
    readTime: '4 min read',
    content: `## Basic types

TypeScript can describe the kinds of values a variable can hold.

\`\`\`ts
const userName: string = 'Alex'
const age: number = 28
const isLearning: boolean = true

const topics: string[] = ['React', 'SQL', 'CSS']
\`\`\`

## Object types

\`\`\`ts
type User = {
  id: number
  name: string
  isActive: boolean
}

const user: User = {
  id: 1,
  name: 'Alex',
  isActive: true,
}
\`\`\`

## What I learned

Types help catch mismatches before the code runs and make data structures easier to understand.`,
  },
  {
    id: 'css-flexbox',
    title: 'CSS Flexbox Essentials',
    description: 'Align and distribute items along a one-dimensional layout.',
    category: 'HTML & CSS',
    tags: ['CSS', 'Flexbox', 'Layout'],
    date: '2026-11-02',
    readTime: '5 min read',
    content: `## What is Flexbox?

Flexbox is a CSS layout model for arranging items in one direction: a row or a column.

## Common properties

\`\`\`css
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
\`\`\`

- \`display: flex\` creates a flex formatting context.
- \`justify-content\` controls distribution along the main axis.
- \`align-items\` aligns items along the cross axis.
- \`gap\` adds space between items.

## What I learned

First identify the main axis. Then choose whether the layout needs distribution, alignment, or both.`,
  },
  {
    id: 'git-commits',
    title: 'Writing Useful Git Commits',
    description: 'Small habits for commit messages that explain intent.',
    category: 'Tools',
    tags: ['Git', 'Workflow', 'Best Practices'],
    date: '2026-11-01',
    readTime: '3 min read',
    content: `## Why commit messages matter

A commit message is a short explanation of why a change was made. Clear messages make project history easier to scan.

## A simple format

\`\`\`text
feat: add note search
fix: correct mobile sidebar spacing
docs: update deployment instructions
\`\`\`

## Good habits

- Keep each commit focused on one logical change.
- Start with a short action-oriented summary.
- Explain context in the body when the title is not enough.

## What I learned

A useful commit should help someone understand the intention without opening every changed file.`,
  },
]