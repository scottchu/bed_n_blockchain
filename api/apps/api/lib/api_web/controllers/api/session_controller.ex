defmodule APIWeb.SessionController do
  use APIWeb, :controller

  def create(conn, params) do
    with {:ok, account} <- User.authenticate(params),
         {:ok, token} <- API.Session.sign(account) do
        conn
        |> put_status(:created)
        |> render("show.json", account: account, token: token)
    else
      {:error, reason} ->
        conn
        |> put_status(:unauthorized)
        |> render("errors.json", errors: [reason])
    end
  end
end
