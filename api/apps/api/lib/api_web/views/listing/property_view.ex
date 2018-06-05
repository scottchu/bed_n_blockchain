defmodule APIWeb.Listing.PropertyView do
  use APIWeb, :view

  alias APIWeb.Listing.{PropertyView, AddressView}
  alias APIWeb.User.AccountView

  def render(
    "index.json",
    %{
      properties: properties,
      current_page: current_page,
      total_pages: total_pages
    }) do
    %{
      properties: render_many(
        properties,
        PropertyView,
        "property.json"
      ),
      currentPage: current_page,
      totalPages: total_pages
    }
  end

  def render("show.json", %{property: property}) do
    %{
      property: render("property.json", %{property: property})
    }
  end

  def render("property.json", %{property: property}) do
    %{
      id: property.id,
      capacity: property.capacity,
      name: property.name,
      price: property.price,
      type: property.type,
      address: render_one(
        property.address,
        AddressView,
        "address.json"
      ),
      account: render_one(
        property.account,
        AccountView,
        "account.json"
      ),
      inserted_at: property.inserted_at,
      updated_at: property.updated_at
    }
  end
end