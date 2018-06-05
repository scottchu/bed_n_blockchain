defmodule APIWeb.Listing.AddressView do
  use APIWeb, :view

  alias APIWeb.Listing.{PropertyView, AddressView}

  def render("address.json", %{address: address}) do
    %{
      street1: address.street1,
      street2: address.street2,
      city: address.city,
      state: address.state,
      country: address.country,
      postal_code: address.postal_code,
      coordinate: address.coordinate
    }
  end
end