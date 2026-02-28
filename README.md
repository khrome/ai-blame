AI Blame
========

Scoping what code is generative matters: For risk exposure, for managing impact and for triaging regressions.

Usage
-----

```bash
ai-blame -c ai-blame-config.json ~/path/to/directory/to/scan/
```

```json
{
    "contributors": [
        "foo@bar.com"
    ]
}
```