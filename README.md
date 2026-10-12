<p align="center">
  <img src="apps/frontend/public/losapplius.svg" width="96" alt="LosApplius logo" />
</p>

<h1 align="center">LosApplius</h1>

<p align="center">Schedule, publish and analyse social media posts across all your channels from one place.</p>

---

## About

LosApplius is a rebranded fork of [Postiz](https://github.com/gitroomhq/postiz-app),
an open-source social media scheduling tool. It keeps Postiz's features:

- A calendar for planning and scheduling posts across many social networks
- AI-assisted post and media generation
- Team and organisation workspaces with roles
- Analytics, webhooks, a public API and an MCP server
- A browser extension for posting from other websites

## Getting started

The stack is a pnpm monorepo with a NestJS backend, a Next.js frontend, background
workers, PostgreSQL and Redis.

```bash
cp .env.example .env   # then fill in the required settings
pnpm install
pnpm run dev
```

See `.env.example` for every setting. The `LosApplius Settings` section lists the
options added by this fork.

## License

LosApplius is licensed under the [GNU Affero General Public License v3.0](LICENSE),
the same licence as Postiz. Postiz is copyright its original authors; their notices
are kept in `LICENSE`.

If you run a modified version of LosApplius as a network service, the AGPL requires
you to offer its complete source code to the people who use it.
