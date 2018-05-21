defmodule Listing.AddressTest do
  use DB.DataCase

  alias Listing.Address
  alias Postgrex.Point

  @valid_attrs %{
    street1: "1st Street",
    city: "City",
    state: "State",
    country: "Country",
    postal_code: "PostalCode",
    coordinate: %Point{x: 1, y: 1}
  }

  test "changeset with valid attributes" do
    changeset = Address.changeset(%Address{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with empty attributes" do
    changeset = Address.changeset(%Address{}, %{})
    refute changeset.valid?

    assert [
      street1: {"can't be blank", [validation: :required]},
      city: {"can't be blank", [validation: :required]},
      state: {"can't be blank", [validation: :required]},
      country: {"can't be blank", [validation: :required]},
      postal_code: {"can't be blank", [validation: :required]},
      coordinate: {"can't be blank", [validation: :required]}
    ] == changeset.errors
  end
end