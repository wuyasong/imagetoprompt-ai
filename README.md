# Image To Prompt AI

Image To Prompt AI is an open source project that allows users to upload images and generate text prompts based on the images, The project generates text prompt by replicate API, featuring easy one-click website deployment.

visit it ☞: [imagetoprompt.club](https://imagetoprompt.club)



## Credit to

- NextJS 14 App Router
- Next-Auth for user auth
- cloudflare r2 for image storage
- Prisma ORM + postgres for data processing
- TailwindCSS for page building
- Replicate API for generator prompt

## Quick Started

Deploy on Vercel (Don't forget to setup env)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/wuyasong/imagetoprompt-ai.git&project-name=imagetoprompt-ai&repository-name=imagetoprompt-ai)

#### 1. Clone project

```
git clone https://github.com/wuyasong/imagetoprompt-ai.git
```

#### 2. Install dependencies

```
cd imagetoprompt-ai
pnpm i
```

#### 3. Init database

create your database use [local postgres](https://wiki.postgresql.org/wiki/Homebrew) or [supabase](https://supabase.com/)

create tables and migrate:

```
npx prisma generate
prisma migrate dev
```

#### 4. copy .env.example and rename it to .env

```
GOOGLE_ID=
GOOGLE_SECRET=
NODE_ENV=development

GITHUB_ID=
GITHUB_SECRET=

EMAIL_SERVER=
EMAIL_FROM=

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=

REPLICATE_API_URL=https://api.replicate.com/v1/predictions
REPLICATE_API_TOKEN=
REPLICATE_API_VERSION=


R2_ACCOUNT_ID=
R2_BUCKET=
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_DOMAIN_URL=


POSTGRES_DATABASE="postgres"
POSTGRES_HOST="localhost"
POSTGRES_PASSWORD="xxxxx"
POSTGRES_PRISMA_URL="postgres://postgres:xxxxx@localhost:5432/localdb"
POSTGRES_URL="postgres://postgres:xxxxx@localhost:5432/localdb"
POSTGRES_URL_NON_POOLING="postgres://postgres:xxxxx@localhost:5432/localdb"
POSTGRES_URL_NO_SSL="postgres://postgres:xxxxx@localhost:5432/localdb"
POSTGRES_USER="postgres"
```


#### 5. Run it

```
pnpm dev
```

#### 6. open http://localhost:3000 for preview

![imagetoprompt.club](https://pub-f5fc00c4ca7b445d95004c53d4b77e82.r2.dev/imagetoprompt%2FWX20240524-183623.png "Image To Prompt AI")



## Link Me

Twitter: [https://x.com/wuyasong](https://x.com/wuyasong)

if this project is helpful to you, buy me a coffee.

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/wuyasong)