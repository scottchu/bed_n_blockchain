defmodule API.Plug.Authorization do
  import Plug.Conn

  import API.Session, only: [verify: 1]

  def init(options) do
    options
  end

  def call(conn, _opts) do
    case authenticate(conn) do
      {:ok, account} -> assign(conn, :current_account, account)
      _ -> auth_error!(conn)
    end
  end

  defp authenticate(conn) do
    with header = get_req_header(conn, "authorization"),
         {:ok, token} <- parse_token(header),
         {:ok, %{id: id}} <- verify(token),
         do: User.find_account(id)
  end

  defp parse_token(["bearer " <> token]) do
    {:ok, String.replace(token, "\"", "")}
  end

  defp parse_token(_) do
    :error
  end

  defp auth_error!(conn) do
    conn
    |> put_status(:unauthorized)
    |> halt()
  end
end
