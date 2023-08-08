# SPOTIFY CLONE

### CREATE BY

**ALDIYES PAKALIS BIRTA**

some library i use to create spotify clone:

```shell
npm install react-icons
npm install tailwind-merge
```

### CREATE AND SETUP DATABASE

**_Use `supabase`_**

- install supabase

```shell
npm i supabase@">=1.8.1" --save-dev
```

- login into supabase
  this will be need Acess Token [GET TOKEN](https://supabase.com/dashboard/account/tokens)

```shell
npx supabase login
```

- Generate types for your project to produce the `types/supabase.ts` file:

```shell
npx supabase gen types typescript --project-id "$PROJECT_REF" --schema public > types/supabase.ts
```

$PROJECT_REF should be replace with [REFRENCE ID](https://supabase.com/dashboard/project/vcjcsnogkhbompimqcuw/settings/general)
