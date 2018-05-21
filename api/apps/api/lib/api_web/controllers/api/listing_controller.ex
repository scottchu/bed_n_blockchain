defmodule APIWeb.ListingController do
  use APIWeb, :controller

  def index(conn, params) do
    {:ok, result} = Listing.search(params)
    %{properties: properties, pages: pages} = result

    conn
    |> put_status(:ok)
    |> render(APIWeb.Listing.PropertyView,
      "index.json",
      properties: properties,
      pages: pages)
  end
end