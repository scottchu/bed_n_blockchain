use Mix.Config

# Configure your database
config :db, DB.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "bed_n_blockchain_dev",
  hostname: "localhost",
  pool_size: 10
