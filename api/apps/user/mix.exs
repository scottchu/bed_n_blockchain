defmodule User.MixProject do
  use Mix.Project

  def project do
    [
      app: :user,
      version: "0.1.0",
      build_path: "../../_build",
      config_path: "../../config/config.exs",
      deps_path: "../../deps",
      lockfile: "../../mix.lock",
      elixir: "~> 1.6",
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      extra_applications: [:logger]
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:db, in_umbrella: true},
      {:comeonin, "~> 4.0"},
      {:argon2_elixir, "~> 1.2"}
    ]
  end
end
