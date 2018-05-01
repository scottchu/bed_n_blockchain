use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :api, APIWeb.Endpoint,
  http: [port: 4001],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

config :api, API.Session,
  secret: "zkZ9WWmhS3SpOWsjZofzPTJzuef0raJCAwpsYq/XEVpPmeiTfjQqwozEvD03PVkU",
  salt: "salt",
  max_age: 10
