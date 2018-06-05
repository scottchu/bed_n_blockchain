defmodule APIWeb.ListingController do
  use APIWeb, :controller

  def index(conn, params) do
    {:ok, result} = Listing.search(params)

    conn
    |> put_status(:ok)
    |> render(APIWeb.Listing.PropertyView,
      "index.json",
      result)
  end
end