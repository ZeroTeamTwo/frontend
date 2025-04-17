This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## 폴더구조

FSD를 간소화 시킨 폴더 구조 사용

- **규칙**
  1.  pages, features, shared 세 가지 레이어를 사용
  2.  next.js 특성상 pages는 app으로 대체
  3.  하위 레이어에서 상위 레이어를 import 금지
  4.  동일 레이어끼리는 import 가능

## 기본 세팅

- prettier

  ```json
  {
  	"printWidth": 150,
  	"tabWidth": 2,
  	"singleQuote": true,
  	"trailingComma": "all",
  	"bracketSpacing": true,
  	"semi": true,
  	"useTabs": true,
  	"arrowParens": "always"
  }
  ```
