use Mix.Config

# Configure your database
config :db, DB.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "bed_n_blockchain_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox
