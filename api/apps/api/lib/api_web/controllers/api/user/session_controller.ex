defmodule APIWeb.User.SessionController do
  use APIWeb, :controller

  def create(conn, params) do
    conn
    |> put_status(:created)
    |> render(APIWeb.User.SessionView, "show.json")
  end
end