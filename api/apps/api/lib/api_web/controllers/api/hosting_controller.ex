defmodule APIWeb.HostingController do
  use APIWeb, :controller

  plug API.Plug.Authorization

  def index(conn, params) do
    {:ok, account} = Map.fetch(conn.assigns, :current_account)

    params = Map.merge(params, %{account_id: account.id})

    {:ok, result} = Listing.search(params)

    conn
    |> put_status(:ok)
    |> render(APIWeb.Listing.PropertyView,
      "index.json",
      result)
  end
end