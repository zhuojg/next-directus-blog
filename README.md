# Super Imagination | 特有想象力

## Setup

### Development  

Start `Directus` service with `docker-compose`.

```bash
docker-compose -f docker-compose.dev.yaml up
```

Start `Next.js` with command line.

```bash
cd frontend
yarn install
SERVICE_URL=localhost:8055 yarn dev
```

### Deployment  

Use `docker-compose.yaml` to build deployment images and start services with one command.  

```bash
docker-compose up -d
```

## Tech  

### Directus [ Headless CMS | 内容管理系统 ]

### NextJS [ SSR | 服务端渲染 ]

