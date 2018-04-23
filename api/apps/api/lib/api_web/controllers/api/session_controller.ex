defmodule APIWeb.SessionController do
  use APIWeb, :controller

  def create(conn, params) do
    case User.authenticate(params) do
      {:ok, account} ->
        token = API.Session.encode(account)

        conn
        |> put_status(:created)
        |> render("show.json", account: account, token: token)
      {:error, reason} ->
        conn
        |> put_status(:unauthorized)
        |> render("errors.json", errors: [reason])
    end
  end
end
