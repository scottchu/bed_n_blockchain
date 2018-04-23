defmodule API.Session do
  alias APIWeb.Endpoint

  import Phoenix.Token, only: [sign: 4, verify: 4]

  @config Application.get_env(:api, __MODULE__)

  def encode(account) do
    data = %{id: account.id}

    sign(Endpoint, salt(), data, max_age: max_age())
  end

  def decode(token) do
    verify(Endpoint, salt(), token, max_age: max_age())
  end

  defp salt, do: @config[:salt]
  defp max_age, do: @config[:max_age]
end
