defmodule APIWeb.UserController do
  use APIWeb, :controller

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
