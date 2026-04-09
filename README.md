# roppongivc.com

六本木ベンチャーキャピタルの公式Webサイト。

## Stack

- [Hugo](https://gohugo.io/) (Static Site Generator)
- GitHub Pages (Hosting)
- GitHub Actions (CI/CD)

## Development

```bash
hugo server --buildDrafts --buildFuture --port 1314
```

## Deployment

`main` ブランチへのマージで自動デプロイ（GitHub Actions）。

`main` への直接pushは禁止。`dev` → `main` のPR経由でのみマージ可能。
