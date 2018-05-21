defmodule APIWeb.Listing.PropertyView do
  use APIWeb, :view

  alias APIWeb.Listing.{PropertyView, AddressView}
  alias APIWeb.User.AccountView

  def render("index.json", %{properties: properties, pages: pages}) do
    %{
      properties: render_many(
        properties,
        PropertyView,
        "show.json"
      ),
      totalPages: pages
    }
  end

  def render("show.json", %{property: property}) do
    %{
      id: property.id,
      capacity: property.capacity,
      name: property.name,
      price: property.price,
      type: property.type,
      address: render_one(
        property.address,
        AddressView,
        "show.json"
      ),
      account: render_one(
        property.account,
        AccountView,
        "show.json"
      ),
      inserted_at: property.inserted_at,
      updated_at: property.updated_at
    }
  end
end