# reactDjangoRestYoutube

## Visão geral

Projeto full-stack com backend Django REST Framework (`back/`) e frontend React + Vite (`front/`). Autenticação via JWT (`djangorestframework_simplejwt`).

- **Backend**: `back/config` (settings/urls/wsgi/asgi) + app `back/coreTube` (models, serializers, views, urls). SQLite (`back/db.sqlite3`). Ambientes virtuais `back/env` e `back/venv` presentes (duplicados).
- **Frontend**: `front/src`, Vite + React 19, roteamento com `react-router-dom`, formulários com `formik`/`yup`, `axios` instalado mas o app usa `fetch` nativo em `sendDjangoRequest.jsx`.
- **Deploy**: acessado em `http://192.168.15.250` (front) chamando a API em `http://192.168.15.250:8080` (back).

## Fluxo de login (estado atual)

1. [JanelaLogin.jsx](front/src/Components/JanelaLogin/JanelaLogin.jsx) renderiza inputs de e-mail/senha e botão "Acessar".
2. `btnLogin` monta um payload e chama `sendRequestDjango(urlDjangoLogin, payload)` ([sendDjangoRequest.jsx](front/src/Components/DjangoResquests/sendDjangoRequest.jsx)).
3. `urlDjangoLogin` = `${VITE_API_URL}/api/token/`, apontando para a view `TokenObtainPairView` do simplejwt ([back/coreTube/urls.py](back/coreTube/urls.py)).

## Problemas conhecidos

### 1. CORS bloqueando o login (ativo, não corrigido)

Erro observado no browser:
```
Access to fetch at 'http://192.168.15.250:8080/api/token/' from origin 'http://192.168.15.250'
has been blocked by CORS policy: Response to preflight request doesn't pass
access control check: No 'Access-Control-Allow-Origin' header is present
```

**Causa raiz**: `django-cors-headers` está no [requirements.txt](back/requirements.txt) e totalmente configurado em [back/config/settings.py](back/config/settings.py) (`CORS_ALLOWED_ORIGINS`, `CORS_ALLOW_ALL_ORIGINS = True`, `CORS_ALLOW_CREDENTIALS`, `CORS_ALLOW_HEADERS`, `CORS_ALLOW_METHODS`), **mas o app nunca foi ligado**:

- `'corsheaders'` ausente em `INSTALLED_APPS`.
- `'corsheaders.middleware.CorsMiddleware'` ausente em `MIDDLEWARE` (precisaria estar antes do `CommonMiddleware`).

Resultado: nenhuma das variáveis `CORS_*` tem efeito hoje; o Django nunca envia `Access-Control-Allow-Origin`, o preflight falha e o `fetch` do frontend estoura em `TypeError: Failed to fetch`.

### 2. Login não envia credenciais

Em [JanelaLogin.jsx:11-15](front/src/Components/JanelaLogin/JanelaLogin.jsx#L11-L15), `btnLogin` monta o payload com `dadosProcesso: null` — os valores dos inputs de e-mail/senha nunca são lidos (sem `useState`/`ref`/`onChange`). Mesmo resolvendo o CORS, a requisição de login não carregaria as credenciais do usuário.

### 3. Rota de refresh de token com typo

Em [back/coreTube/urls.py](back/coreTube/urls.py), a rota está registrada como `apt/token/refresh` (deveria ser `api/token/refresh`).

### 4. Configurações de settings.py inconsistentes/sensíveis a ambiente

- `CSRF_COOKIE_DOMAIN = '192.168.15.250'` fixo — quebra se o host mudar (ex: `localhost`).
- `SECRET_KEY` commitada em texto plano (`django-insecure-...`), `DEBUG = True` — ok para dev, mas atentar antes de produção.
- `CORS_ALLOW_ALL_ORIGINS = True` junto com uma lista extensa de `CORS_ALLOWED_ORIGINS` — a lista fica redundante enquanto `ALLOW_ALL` estiver `True`.

## Notas de ambiente

- Backend tem dois virtualenvs (`back/env` e `back/venv`) — confirmar qual está em uso antes de instalar dependências.
- Frontend usa variável de ambiente `VITE_API_URL` (ver `front/.env.development`, `front/env.development.ex`) para montar as URLs da API.
