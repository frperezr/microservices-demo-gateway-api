# Gateway Api

## Routes

## Login

```
/api/v1/auth/login
```

Body

```
{
  email: string,
  password: string
}

```

Response

```
{
  token: string,
    error: object {
    code: int,
    message: string
  }
}
```

## Signup

```
/api/v1/auth/signup
```

Body

```
{
data: object {
email: string,
name: string,
last_name: string,
passoword: string
}
}
```

Response

```
{
  token: string,
    error: object {
    code: int,
    message: string
  }
}
```

## GraphQL

```
/graphql
```
