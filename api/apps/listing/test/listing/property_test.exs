defmodule Listing.PropertyTest do
  use DB.DataCase

  alias Listing.Property

  @valid_attrs %{
    capacity: 2,
    name: "1 Bedroom Condo",
    price: 120,
    type: "condo"
  }

  test "changeset with valid attributes" do
    changeset = Property.changeset(%Property{}, @valid_attrs)

    assert changeset.valid?
  end

  test "changeset with missing required attributes" do
    params = %{}
    changeset = Property.changeset(%Property{}, params)

    assert changeset.errors == [
      capacity: {"can't be blank", [validation: :required]},
      name: {"can't be blank", [validation: :required]},
      price: {"can't be blank", [validation: :required]},
      type: {"can't be blank", [validation: :required]}
    ]
  end

  test "changeset with invalid type" do
    params = Map.put(@valid_attrs, :type, "random")
    changeset = Property.changeset(%Property{}, params)

    assert changeset.errors == [
      type: {"is invalid", [validation: :inclusion]}
    ]
  end

  test "changeset with invalid capacity" do
    params = Map.put(@valid_attrs, :capacity, -1)
    changeset = Property.changeset(%Property{}, params)

    assert changeset.errors == [
      capacity: {"must be greater than %{number}", [validation: :number, number: 0]}
    ]
  end

  test "changeset with invalid price" do
    params = Map.put(@valid_attrs, :price, -0.1)
    changeset = Property.changeset(%Property{}, params)

    assert changeset.errors == [
      price: {"must be greater than %{number}", [validation: :number, number: Decimal.new(0)]}
    ]
  end
end