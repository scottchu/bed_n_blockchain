defmodule APIWeb.ListingController do
  use APIWeb, :controller

  def index(conn, params) do
    properties = Listing.search(params)

    conn
    |> put_status(:ok)
    |> render(APIWeb.Listing.PropertyView,
      "index.json",
      properties: properties)
  end
end