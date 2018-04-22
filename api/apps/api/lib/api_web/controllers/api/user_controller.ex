defmodule APIWeb.UserController do
  use APIWeb, :controller

  def create(conn, params) do
    case User.create_account(params) do
      {:ok, account} ->

        conn
        |> put_status(:created)
        |> render(APIWeb.SessionView,
          "show.json",
          account: account,
          token: "123")

      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(APIWeb.ChangesetView,
          "error.json",
          changeset: changeset)
    end
  end
end