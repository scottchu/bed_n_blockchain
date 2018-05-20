defmodule APIWeb.Listing.PropertyView do
  use APIWeb, :view

  alias APIWeb.Listing.{PropertyView, AddressView}

  def render("index.json", %{properties: properties}) do
    %{
      properties: render_many(
        properties,
        PropertyView,
        "show.json"
      )
    }
  end

  def render("show.json", %{property: property}) do
    %{
      capacity: property.capacity,
      name: property.name,
      price: property.price,
      type: property.type
      address: render_one(
        property.address,
        AddressView,
        "show.json"
      ),
      account: render_one(
        property.account,
        User.AccountView,
        "show.json"
      )
    }
  end
end