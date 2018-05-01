defmodule API.Session do
  alias User.Account

  @config Application.get_env(:api, __MODULE__)

  @invalid_account_message "invalid account"

  def sign(%Account{id: nil}) do
    {:error, @invalid_account_message}
  end

  def sign(%Account{id: id}) do
    data = %{id: id}

    token = Phoenix.Token.sign(secret(), salt(), data)

    {:ok, token}
  end

  def verify(_, max_age \\ @config[:max_age])
  def verify(token, max_age) do
    Phoenix.Token.verify(secret(), salt(), token, max_age: max_age)
  end

  defp secret, do: @config[:secret]
  defp salt, do: @config[:salt]
end
