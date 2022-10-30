defmodule PhoenixTypescript.Repo do
  use Ecto.Repo,
    otp_app: :phoenix_typescript,
    adapter: Ecto.Adapters.Postgres
end
