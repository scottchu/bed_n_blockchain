defmodule API.Plug.Authorization do
  import Plug.Conn

  import API.Session, only: [verify: 1]
  import Phoenix.Controller, only: [render: 3]

  def init(options) do
    options
  end

  def call(conn, _opts) do
    case authorize(conn) do
      {:ok, account} -> assign(conn, :current_account, account)
      _ -> auth_error!(conn)
    end
  end

  defp authorize(conn) do
    with headers = get_req_header(conn, "authorization"),
         {:ok, token} <- parse_token(headers),
         {:ok, %{id: id}} <- verify(token),
         do: User.find_account(id)
  end

  defp parse_token([token]), do: parse_token(token)

  defp parse_token("Bearer " <> token), do: parse_token(token)

  defp parse_token("" <> token) do
    {:ok, String.replace(token, "\"", "")}
  end

  defp parse_token(_), do: :error

  defp auth_error!(conn) do
    conn
    |> put_status(:unauthorized)
    |> render(APIWeb.ErrorView, "401.json")
    |> halt()
  end
end
