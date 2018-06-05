defmodule APIWeb.User.AccountController do
  use APIWeb, :controller

  plug API.Plug.Authorization when action in [:show]

  def show(conn, _params) do
    account = conn.assigns().current_account

    conn
    |> put_status(:ok)
    |> render("show.json", account: account)
  end

  def create(conn, params) do
    with {:ok, account} <- User.create_account(params),
         {:ok, token} <- API.Session.sign(account) do
      conn
      |> put_status(:created)
      |> render(APIWeb.SessionView,
          "show.json",
          account: account,
          token: token)
    else
      {:error, changeset = %Ecto.Changeset{}} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(APIWeb.ChangesetView, "error.json", changeset: changeset)
    end
  end
end
